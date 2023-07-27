import { Injectable } from '@angular/core';
import { Question } from '@shared/models/question';
import { QuestionQueryParamsM } from '@shared/models/question-query-params-m';
import { QuizAnswer } from '@shared/models/quiz-answer';
import { Observable, combineLatest, iif, map, mergeMap, of, tap, throwError } from 'rxjs';
import { QuestionHttpService } from './question-http.service';
import { QuestionStoreService } from './question-store.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private readonly questionHttpService: QuestionHttpService, private readonly questionStoreService: QuestionStoreService) {}

  get questions$(): Observable<Question[]> {
    return this.questionStoreService.getData$();
  }

  get questions(): Question[] {
    return this.questionStoreService.data;
  }

  /**
   * Save data to store
   * @param questions questions to save
   */
  private storeQuestions(questions: Question[]): void {
    this.questionStoreService.setData(questions);
  }

  /**
   * Fetch random question and store it
   * @param params Question api query params
   */
  loadRandomQuestions(params: QuestionQueryParamsM): Observable<Omit<Question, 'correct_answer' | 'incorrect_answers'>[]> {
    return this.questionHttpService.fetchQuestions(params).pipe(tap(this.storeQuestions.bind(this)));
  }

  /**
   * Get answers of a question
   * @param question question searched
   */
  getAnswersOfQuestion$(
    question: Question['question']
  ): Observable<Pick<Question, 'question' | 'correct_answer' | 'incorrect_answers'> | undefined> {
    return this.questions$.pipe(
      map(questions => questions.filter(q => q.question === question)),
      mergeMap(questions =>
        iif(
          () => questions.length === 1,
          of(questions.at(0)),
          throwError(() => new Error('There is more than one result'))
        )
      ),
      map(questions => ({
        question: questions!.question,
        correct_answer: questions!.correct_answer,
        incorrect_answers: questions!.incorrect_answers
      }))
    );
  }

  /**
   * Get correct answer of a question
   * @param question question searched
   */
  getCorrectAnswerOfQuestion$(question: Question['question']): Observable<Question['correct_answer'] | undefined> {
    return this.getAnswersOfQuestion$(question).pipe(map(questions => questions?.correct_answer));
  }

  /**
   * Get score of correct answers
   * @param quizAnswers list of quiz answers
   */
  getScoreOfCorrectAnswers$(quizAnswers: QuizAnswer[]): Observable<number> {
    const quizAnswers$: Observable<boolean>[] = quizAnswers.map(quizAnswer =>
      of(quizAnswer).pipe(
        mergeMap(quizAnswers => combineLatest([this.getCorrectAnswerOfQuestion$(quizAnswers.question), of(quizAnswers.selectedAnswer)])),
        map(([correctAnswerOfQuestion, selectAnswer]) => {
          return correctAnswerOfQuestion === selectAnswer;
        })
      )
    );
    return combineLatest(quizAnswers$).pipe(map(([...correctAnswers]: boolean[]) => correctAnswers.filter(ca => ca).length));
  }
}

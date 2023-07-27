import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '@question/services/question/question.service';
import { QuizAnswersStoreService } from '@quiz/services/quiz-answers/quiz-answers-store.service';
import { Question } from '@shared/models/question';
import { QuestionQueryParamsM } from '@shared/models/question-query-params-m';
import { QuizAnswer } from '@shared/models/quiz-answer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-quiz',
  templateUrl: './page-quiz.component.html',
  styleUrls: ['./page-quiz.component.scss']
})
export class PageQuizComponent implements OnInit {
  questions$!: Observable<Question[]>;

  constructor(
    private readonly router: Router,
    private readonly questionService: QuestionService,
    private readonly quizAnswersStoreService: QuizAnswersStoreService
  ) {}

  ngOnInit(): void {
    this.questions$ = this.questionService.questions$;
  }

  /**
   * Action on create quiz
   * @param params question query params
   */
  onCreateQuiz(params: QuestionQueryParamsM) {
    this.questionService.loadRandomQuestions(params).subscribe();
  }

  /**
   * Action on validate quiz form
   * @param answers quiz answers
   */
  onValidateQuestions(answers: QuizAnswer[]) {
    this.quizAnswersStoreService.setData(answers);
    this.router.navigate(['/quiz/result']);
  }
}

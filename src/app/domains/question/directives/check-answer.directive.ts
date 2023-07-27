import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { QuestionService } from '@question/services/question/question.service';
import { QuizAnswersStoreService } from '@quiz/services/quiz-answers/quiz-answers-store.service';
import { Question } from '@shared/models/question';
import { QuizAnswer } from '@shared/models/quiz-answer';
import { take } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[appCheckAnswer]'
})
export class CheckAnswerDirective implements OnChanges {
  @Input() appCheckAnswer!: string;
  @Input() question!: string;
  @HostBinding('class') nomClass: string = 'btn-outline-primary';

  constructor(private readonly questionService: QuestionService, private readonly quizAnswersStoreService: QuizAnswersStoreService) {}

  ngOnChanges(): void {
    this.questionService
      .getAnswersOfQuestion$(this.question)
      .pipe(take(1))
      .subscribe(question => {
        this.nomClass = this.setButtonClass(
          this.appCheckAnswer,
          this.quizAnswersStoreService.getAnswerByQuestion(question!.question),
          question!.correct_answer,
          question!.incorrect_answers
        );
      });
  }

  /**
   * Check if current answer is correct
   * @param currentAnswer current answer
   * @param correctAnswer correct answer
   */
  private isCorrectAnswer(currentAnswer: string, correctAnswer: Question['correct_answer']): boolean {
    return currentAnswer === correctAnswer;
  }

  /**
   * Check if current answer is incorrect
   * @param currentAnswer current answer
   * @param selectedAnswer selected answer
   * @param incorrectAnswers incorrect answers
   */
  private isIncorrectAnswer(
    currentAnswer: string,
    selectedAnswer: QuizAnswer | undefined,
    incorrectAnswers: Question['incorrect_answers']
  ): boolean {
    return currentAnswer === selectedAnswer?.selectedAnswer && incorrectAnswers?.includes(selectedAnswer.selectedAnswer);
  }

  /**
   * Set class to button if answer is incorrect or correct or default
   * @param currentAnswer current answer
   * @param selectedAnswer selected answer
   * @param correctAnswer correct answer
   * @param incorrectAnswers incorrect answers
   */
  private setButtonClass(
    currentAnswer: string,
    selectedAnswer: QuizAnswer | undefined,
    correctAnswer: Question['correct_answer'],
    incorrectAnswers: Question['incorrect_answers']
  ): string {
    if (this.isIncorrectAnswer(currentAnswer, selectedAnswer, incorrectAnswers)) {
      return 'btn-danger';
    } else if (this.isCorrectAnswer(currentAnswer, correctAnswer)) {
      return 'btn-success';
    }
    return 'btn-outline-primary';
  }
}

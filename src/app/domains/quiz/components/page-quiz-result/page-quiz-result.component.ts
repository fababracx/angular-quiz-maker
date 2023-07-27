import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '@question/services/question/question.service';
import { Question } from '@shared/models/question';
import { QuizAnswer } from '@shared/models/quiz-answer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-quiz-result',
  templateUrl: './page-quiz-result.component.html',
  styleUrls: ['./page-quiz-result.component.scss']
})
export class PageQuizResultComponent implements OnInit {
  questions$!: Observable<Question[]>;
  answers: QuizAnswer[] = [];
  score$!: Observable<number>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.answers = this.activatedRoute.snapshot.data['answers'] || [];
    this.questions$ = this.questionService.questions$;
    this.score$ = this.questionService.getScoreOfCorrectAnswers$(this.answers);
  }

  /**
   * Action on click on new quiz
   * @param _event click event
   */
  onClickToAction(_event: UIEvent): void {
    this.router.navigate(['/quiz']);
  }
}

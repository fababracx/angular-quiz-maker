import { Injectable } from '@angular/core';
import { QuizAnswer } from '@shared/models/quiz-answer';
import { ListStoreService } from '@shared/services/list-store-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizAnswersStoreService implements ListStoreService<QuizAnswer> {
  constructor() {}

  private answers$ = new BehaviorSubject<QuizAnswer[]>([]);

  getData$(): Observable<QuizAnswer[]> {
    return this.answers$.asObservable();
  }

  get data(): QuizAnswer[] {
    return this.answers$.value;
  }

  hasData(): boolean {
    return this.data.length > 0;
  }

  setData(answers: QuizAnswer[]): void {
    this.answers$.next(answers);
  }

  addData(answer: QuizAnswer): void {
    this.answers$.next([...this.answers$.value, answer]);
  }

  removeData(answer: QuizAnswer): void {
    this.answers$.next([...this.answers$.value.filter(q => q.selectedAnswer === answer.selectedAnswer)]);
  }

  reset(): void {
    this.answers$.next([]);
  }

  /**
   * Find answer by question
   * @param question Search question
   */
  getAnswerByQuestion(question: string): QuizAnswer | undefined {
    return this.data.find(answers => {
      return answers.question === question;
    });
  }
}

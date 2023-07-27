import { Injectable } from '@angular/core';
import { Question } from '@shared/models/question';
import { ListStoreService } from '@shared/services/list-store-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionStoreService implements ListStoreService<Question> {
  constructor() {}

  private questions$ = new BehaviorSubject<Question[]>([]);

  getData$(): Observable<Question[]> {
    return this.questions$.asObservable();
  }

  get data(): Question[] {
    return this.questions$.value;
  }

  hasData(): boolean {
    return this.data.length > 0;
  }

  setData(questions: Question[]): void {
    this.questions$.next(questions);
  }

  addData(question: Question): void {
    this.questions$.next([...this.questions$.value, question]);
  }

  removeData(question: Question): void {
    this.questions$.next([...this.questions$.value.filter(q => q.question === question.question)]);
  }

  reset(): void {
    this.questions$.next([]);
  }
}

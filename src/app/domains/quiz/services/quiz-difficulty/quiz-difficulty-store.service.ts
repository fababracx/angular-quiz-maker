import { Injectable } from '@angular/core';
import { StoreService } from '@shared/services/store-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizDifficultyStoreService implements StoreService<string> {
  constructor() {}

  private difficulty$ = new BehaviorSubject<string>('');

  getData$(): Observable<string> {
    return this.difficulty$.asObservable();
  }

  get data(): string {
    return this.difficulty$.value;
  }

  hasData(): boolean {
    return this.data.length > 0;
  }

  setData(difficulty: string): void {
    this.difficulty$.next(difficulty);
  }

  reset(): void {
    this.difficulty$.next('');
  }
}

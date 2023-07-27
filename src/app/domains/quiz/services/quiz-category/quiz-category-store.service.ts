import { Injectable } from '@angular/core';
import { StoreService } from '@shared/services/store-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizCategoryStoreService implements StoreService<string> {
  constructor() {}

  private category$ = new BehaviorSubject<string>('');

  getData$(): Observable<string> {
    return this.category$.asObservable();
  }

  get data(): string {
    return this.category$.value;
  }

  hasData(): boolean {
    return this.data.length > 0;
  }

  setData(category: string): void {
    this.category$.next(category);
  }

  reset(): void {
    this.category$.next('');
  }
}

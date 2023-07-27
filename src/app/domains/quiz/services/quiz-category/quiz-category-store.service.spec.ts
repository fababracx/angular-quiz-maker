import { TestBed } from '@angular/core/testing';

import { QuizCategoryStoreService } from './quiz-category-store.service';

describe('QuizCategoryStoreService', () => {
  let service: QuizCategoryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizCategoryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

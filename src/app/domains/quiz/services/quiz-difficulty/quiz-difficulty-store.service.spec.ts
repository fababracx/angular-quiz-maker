import { TestBed } from '@angular/core/testing';

import { QuizDifficultyStoreService } from './quiz-difficulty-store.service';

describe('QuizDifficultyStoreService', () => {
  let service: QuizDifficultyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizDifficultyStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

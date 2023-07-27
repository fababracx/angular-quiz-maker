import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuizCategoryService } from './quiz-category.service';

describe('QuizCategoryService', () => {
  let service: QuizCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(QuizCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

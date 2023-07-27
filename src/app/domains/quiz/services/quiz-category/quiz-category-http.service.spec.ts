import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuizCategoryHttpService } from './quiz-category-http.service';

describe('QuizCategoryHttpService', () => {
  let service: QuizCategoryHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(QuizCategoryHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

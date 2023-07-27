import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { QuizAnswer } from '@shared/models/quiz-answer';
import { quizAnswersResolver } from './quiz-answers.resolver';

describe('quizAnswersResolver', () => {
  const executeResolver: ResolveFn<QuizAnswer[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => quizAnswersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });

  xit('should redirect to create page', () => {});

  xit('should load answers', () => {});
});

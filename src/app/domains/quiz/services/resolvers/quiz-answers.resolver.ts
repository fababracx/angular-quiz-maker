import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { QuizAnswer } from '@shared/models/quiz-answer';
import { take } from 'rxjs';
import { QuizAnswersStoreService } from '../quiz-answers/quiz-answers-store.service';

export const quizAnswersResolver: ResolveFn<QuizAnswer[]> = (_route, _state) => {
  const quizAnswersStoreService = inject(QuizAnswersStoreService);
  if (quizAnswersStoreService.hasData()) {
    return quizAnswersStoreService.getData$().pipe(take(1));
  }
  inject(Router).navigate(['/quiz']);
  return [];
};

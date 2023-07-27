import { TestBed } from '@angular/core/testing';

import { QuizAnswer } from '@shared/models/quiz-answer';
import { QuizAnswersStoreService } from './quiz-answers-store.service';

describe('QuizAnswersStoreService', () => {
  let service: QuizAnswersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAnswersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAnswerByQuestion', () => {
    let spyData: jasmine.Spy;

    beforeEach(() => {
      spyData = spyOnProperty(service, 'data');
    });

    it('should return undefined', () => {
      spyData.and.returnValue([]);
      expect(service.getAnswerByQuestion('test')).toEqual(undefined);
      spyData.and.returnValue([{ question: 'quest', selectedAnswer: 'select' }]);
      expect(service.getAnswerByQuestion('test')).toEqual(undefined);
    });

    it('should return quiz answer', () => {
      spyData.and.returnValue([{ question: 'quest', selectedAnswer: 'select' }]);
      expect(service.getAnswerByQuestion('quest')).toEqual({ question: 'quest', selectedAnswer: 'select' } as QuizAnswer);
    });
  });
});

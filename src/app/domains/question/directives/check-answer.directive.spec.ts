import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { QuestionService } from '@question/services/question/question.service';
import { QuizAnswersStoreService } from '@quiz/services/quiz-answers/quiz-answers-store.service';
import { CheckAnswerDirective } from './check-answer.directive';

describe('CheckAnswerDirective', () => {
  let directive: CheckAnswerDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [
        // { provide: QuestionService, useClass: QuestionService },
        // { provide: QuizAnswersStoreService, useClass: QuizAnswersStoreService }
      ]
    });
  });

  beforeEach(() => {
    const questionService: QuestionService = TestBed.inject(QuestionService);
    const quizAnswersStoreService: QuizAnswersStoreService = TestBed.inject(QuizAnswersStoreService);
    directive = new CheckAnswerDirective(questionService, quizAnswersStoreService);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('isCorrectAnswer', () => {
    it('should return false', () => {
      expect(directive['isCorrectAnswer']('test', 'tata')).toBeFalse();
      expect(directive['isCorrectAnswer']('', 'test')).toBeFalse();
      expect(directive['isCorrectAnswer']('test', '')).toBeFalse();
    });

    it('should return true', () => {
      expect(directive['isCorrectAnswer']('', '')).toBeTrue();
      expect(directive['isCorrectAnswer']('test', 'test')).toBeTrue();
    });
  });

  describe('isIncorrectAnswer', () => {
    it('should return false', () => {
      expect(directive['isIncorrectAnswer']('', undefined, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', undefined, ['tata'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', undefined, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', undefined, ['tata'])).toBeFalse();

      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: '' }, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: '' }, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: '' }, ['tata'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: '' }, ['titi'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: 'tata' }, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: 'tata' }, [''])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: 'tata' }, ['toto'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: 'tata' }, ['tata'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: '' }, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: '' }, [''])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: '' }, ['tata'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: '' }, ['titi'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: 'tata' }, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: 'tata' }, [''])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: 'tata' }, ['toto'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: 'tata' }, ['tata'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: '' }, ['toto'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: '' }, [])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: 'test' }, ['toto'])).toBeFalse();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: 'test' }, [])).toBeFalse();
    });

    it('should return true', () => {
      expect(directive['isIncorrectAnswer']('', { question: 'quest', selectedAnswer: '' }, [''])).toBeTrue();
      expect(directive['isIncorrectAnswer']('test', { question: 'quest', selectedAnswer: 'test' }, ['test'])).toBeTrue();
    });
  });

  describe('setButtonClass', () => {
    it('should set btn-danger class', () => {
      expect(directive['setButtonClass']('', { question: 'quest', selectedAnswer: '' }, '', [''])).toEqual('btn-danger');
      expect(directive['setButtonClass']('test', { question: 'quest', selectedAnswer: 'test' }, 'test', ['test'])).toEqual('btn-danger');
    });

    it('should set btn-success class', () => {
      expect(directive['setButtonClass']('test', { question: 'quest', selectedAnswer: 'test' }, 'test', [''])).toEqual('btn-success');
      expect(directive['setButtonClass']('test', { question: 'quest', selectedAnswer: 'test' }, 'test', ['tata'])).toEqual('btn-success');
    });
    it('should default class', () => {
      expect(directive['setButtonClass']('test', { question: 'quest', selectedAnswer: 'toto' }, 'tata', ['titi'])).toEqual(
        'btn-outline-primary'
      );
    });
  });
});

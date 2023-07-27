import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CheckAnswerDirective } from '@question/directives/check-answer.directive';
import { AnswerResultComponent } from './answer-result.component';

describe('AnswerResultComponent', () => {
  let component: AnswerResultComponent;
  let fixture: ComponentFixture<AnswerResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerResultComponent],
      imports: [CheckAnswerDirective, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(AnswerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

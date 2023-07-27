import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListAnswerComponent } from './form-list-answer.component';

describe('FormListAnswerComponent', () => {
  let component: FormListAnswerComponent;
  let fixture: ComponentFixture<FormListAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListAnswerComponent]
    });
    fixture = TestBed.createComponent(FormListAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

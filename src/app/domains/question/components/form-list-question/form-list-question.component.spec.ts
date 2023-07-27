import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListQuestionComponent } from './form-list-question.component';

describe('FormListQuestionComponent', () => {
  let component: FormListQuestionComponent;
  let fixture: ComponentFixture<FormListQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListQuestionComponent]
    });
    fixture = TestBed.createComponent(FormListQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

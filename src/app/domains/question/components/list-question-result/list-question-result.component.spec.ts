import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionResultComponent } from './list-question-result.component';

describe('ListQuestionResultComponent', () => {
  let component: ListQuestionResultComponent;
  let fixture: ComponentFixture<ListQuestionResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListQuestionResultComponent]
    });
    fixture = TestBed.createComponent(ListQuestionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RowQuestionComponent } from './row-question.component';

describe('RowQuestionComponent', () => {
  let component: RowQuestionComponent;
  let fixture: ComponentFixture<RowQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowQuestionComponent]
    });
    fixture = TestBed.createComponent(RowQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

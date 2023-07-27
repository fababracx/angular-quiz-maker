import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '@app/templates/select/select.component';
import { CategoriesToOptionsPipe } from '@shared/pipes/categories-to-options.pipe';
import { DifficultiesToOptionsPipe } from '@shared/pipes/difficulties-to-options.pipe';
import { FormQuizSelectorComponent } from './form-quiz-selector.component';

describe('FormQuizSelectorComponent', () => {
  let component: FormQuizSelectorComponent;
  let fixture: ComponentFixture<FormQuizSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormQuizSelectorComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, SelectComponent, CategoriesToOptionsPipe, DifficultiesToOptionsPipe]
    });
    fixture = TestBed.createComponent(FormQuizSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

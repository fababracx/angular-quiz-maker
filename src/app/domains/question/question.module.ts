import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerResultComponent } from './components/answer-result/answer-result.component';
import { FormListAnswerComponent } from './components/form-list-answer/form-list-answer.component';
import { FormListQuestionComponent } from './components/form-list-question/form-list-question.component';
import { ListQuestionResultComponent } from './components/list-question-result/list-question-result.component';
import { RowQuestionComponent } from './components/row-question/row-question.component';
import { CheckAnswerDirective } from './directives/check-answer.directive';

@NgModule({
  declarations: [
    FormListQuestionComponent,
    RowQuestionComponent,
    ListQuestionResultComponent,
    AnswerResultComponent,
    FormListAnswerComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CheckAnswerDirective],
  exports: [FormListQuestionComponent, ListQuestionResultComponent]
})
export class QuestionModule {}

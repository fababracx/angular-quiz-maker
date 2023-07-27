import { Component, Input } from '@angular/core';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-row-question',
  templateUrl: './row-question.component.html',
  styleUrls: ['./row-question.component.scss']
})
export class RowQuestionComponent {
  @Input({ required: true }) question!: Question['question'];
}

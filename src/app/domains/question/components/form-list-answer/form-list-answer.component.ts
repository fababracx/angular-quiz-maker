import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-list-answer',
  templateUrl: './form-list-answer.component.html',
  styleUrls: ['./form-list-answer.component.scss']
})
export class FormListAnswerComponent {
  @Input({ required: true }) answersFormControl!: FormGroup;
  @Input({ required: true }) parentId!: number;
  @Input({ required: true }) answers!: string[];
}

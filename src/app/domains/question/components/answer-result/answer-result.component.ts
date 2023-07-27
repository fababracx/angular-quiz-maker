import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer-result',
  templateUrl: './answer-result.component.html',
  styleUrls: ['./answer-result.component.scss']
})
export class AnswerResultComponent {
  @Input({ required: true }) question!: string;
  @Input({ required: true }) answer!: string;
}

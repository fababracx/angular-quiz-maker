import { Component, Input } from '@angular/core';
import { Question } from '@shared/models/question';
import { trackByFnObjectString, trackByFnString } from '@shared/utils/object.helper';

@Component({
  selector: 'app-list-question-result',
  templateUrl: './list-question-result.component.html',
  styleUrls: ['./list-question-result.component.scss']
})
export class ListQuestionResultComponent {
  @Input({ required: true }) questions: Question[] | null = [];

  trackByFnQuestions = trackByFnObjectString<Question>('question');
  trackByFnAnswer = trackByFnString;
}

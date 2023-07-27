import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.component.html',
  styleUrls: ['./final-score.component.scss']
})
export class FinalScoreComponent {
  @Input({ required: true }) score: number = 0;
  @Input() nbQuestions = environment.config.defaultAmount;
}

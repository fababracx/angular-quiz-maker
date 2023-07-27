import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBgDirective } from '@quiz/directives/score-bg.directive';
import { FinalScoreComponent } from './final-score.component';

describe('FinalScoreComponent', () => {
  let component: FinalScoreComponent;
  let fixture: ComponentFixture<FinalScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalScoreComponent],
      imports: [ScoreBgDirective]
    });
    fixture = TestBed.createComponent(FinalScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

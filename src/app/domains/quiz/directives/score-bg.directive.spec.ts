import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreBgDirective } from './score-bg.directive';

@Component({
  standalone: true,
  imports: [ScoreBgDirective],
  template: `
    <p [appScoreBg]="score" class="text-center p-2 w-50 rounded">{{ score }}</p>
  `
})
export class ScoreBgDirectiveComponent {
  score = 0;
}

describe('ScoreBgDirective', () => {
  let directive: ScoreBgDirective;
  let fixture: ComponentFixture<ScoreBgDirectiveComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule]
    }).createComponent(ScoreBgDirectiveComponent);
    fixture.detectChanges();
  });

  beforeEach(() => {
    directive = new ScoreBgDirective();
  });

  it('should create an instance', () => {
    const directive = new ScoreBgDirective();
    expect(directive).toBeTruthy();
  });

  describe('should have no class', () => {
    it('if score is -1', () => {
      fixture.componentInstance.score = -1;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).not.toContain('text-bg-danger');
      expect(p.className).not.toContain('text-bg-warning');
      expect(p.className).not.toContain('text-bg-success');
    });
    it('if score is 6', () => {
      fixture.componentInstance.score = 6;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).not.toContain('text-bg-danger');
      expect(p.className).not.toContain('text-bg-warning');
      expect(p.className).not.toContain('text-bg-success');
    });
  });

  describe('should have class text-bg-danger', () => {
    it('if score is 0', () => {
      fixture.componentInstance.score = 0;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).toContain('text-bg-danger');
    });
    it('if score is 1', () => {
      fixture.componentInstance.score = 1;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).toContain('text-bg-danger');
    });
  });

  describe('should have class text-bg-warning', () => {
    it('if score is 2', () => {
      fixture.componentInstance.score = 2;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).toContain('text-bg-warning');
    });
    it('if score is 3', () => {
      fixture.componentInstance.score = 3;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).toContain('text-bg-warning');
    });
  });

  describe('should have class text-bg-success', () => {
    it('if score is 4', () => {
      fixture.componentInstance.score = 4;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).toContain('text-bg-success');
    });
    it('if score is 5', () => {
      fixture.componentInstance.score = 5;
      fixture.detectChanges();
      const p: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(p.className).toContain('text-bg-success');
    });
  });
});

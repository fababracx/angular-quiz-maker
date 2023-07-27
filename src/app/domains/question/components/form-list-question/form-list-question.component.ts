import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '@shared/models/question';
import { QuizAnswer } from '@shared/models/quiz-answer';
import { trackByFnObjectString } from '@shared/utils/object.helper';

@Component({
  selector: 'app-form-list-question',
  templateUrl: './form-list-question.component.html',
  styleUrls: ['./form-list-question.component.scss']
})
export class FormListQuestionComponent implements OnInit, OnChanges {
  @Input({ required: true }) questions: Question[] | null = [];
  @Output() validateQuestions: EventEmitter<QuizAnswer[]> = new EventEmitter<QuizAnswer[]>();

  form!: FormGroup;
  trackByFnQuestions = trackByFnObjectString<Question>('question');

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions'] && !changes['questions'].isFirstChange()) {
      this.constructQustionForm();
    }
  }

  get questionsForm(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  get questionsFormControls(): AbstractControl<FormGroup>[] {
    return this.questionsForm.controls as AbstractControl<FormGroup>[];
  }

  getQuestionAnswerForm(i: number): FormGroup {
    return this.questionsForm.at(i) as FormGroup;
  }

  /**
   * Initialise form
   */
  private initForm(): void {
    this.form = this.fb.nonNullable.group({ questions: this.fb.array<FormGroup>([]) });
  }

  /**
   * Add question fields
   */
  private constructQustionForm(): void {
    this.questions?.forEach((q, _index) => {
      this.questionsForm?.push(
        this.fb.group({
          question: [q.question, Validators.required],
          selectedAnswer: ['', Validators.required]
        }) as FormGroup
      );
    });
  }

  /**
   * On form validate
   */
  onSubmit() {
    if (this.form.valid) {
      this.validateQuestions.emit(
        this.questionsForm.value.map(({ question, selectedAnswer }: QuizAnswer) => ({
          question,
          selectedAnswer
        }))
      );
    } else {
      console.error('Validate form is invalid');
    }
  }
}

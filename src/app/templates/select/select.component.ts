import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Option } from '@shared/models/option';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true }]
})
export class SelectComponent implements ControlValueAccessor {
  @Input({ required: true }) selectId!: string;
  @Input({ required: true }) options!: Option[];
  @Input() selectLabel!: string;

  currentValue!: string;
  disabled: boolean = false;

  public onChange = (_: Event) => {};
  public onTouched = () => {};

  writeValue(value: string): void {
    this.currentValue = value;
  }

  registerOnChange(fn: (_: Event) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onValueChanged(value: Event) {
    this.onChange(value);
    this.onTouched();
  }
}

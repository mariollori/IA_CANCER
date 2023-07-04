import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent {
  @Output() valorEncontrado = new EventEmitter<any>();

  optionValor: number = 0;

  @Input() placeholder!: string;
  @Input() borderColor!: string;
  @Input() icon!: string;
  @Input() iconColor!: string;

  isPlaceholderActive: boolean = false;
  inputId!: string;

  ngOnInit() {
    this.inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  }

  movePlaceholder() {
    this.isPlaceholderActive = true;
  }

  checkInput() {
    const inputElement = document.getElementById(
      this.inputId
    ) as HTMLInputElement;
    if (inputElement && !inputElement.value) {
      this.isPlaceholderActive = false;
    }
  }

  activateInput() {
    const inputElement = document.getElementById(this.inputId);
    if (inputElement) {
      inputElement.focus();
    }
  }

}

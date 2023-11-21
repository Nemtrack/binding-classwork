import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Output() emitElement: EventEmitter<{ contains: string; element: string }> =
    new EventEmitter<{ contains: string; element: string }>();
  input: string = '';

  onAddFirst() {
    if (this.input == '') return;
    this.emitElement.next({ contains: this.input, element: 'first' });
    this.input = '';
  }
  onAddSecond() {
    if (this.input == '') return;
    this.emitElement.next({ contains: this.input, element: 'second' });
    this.input = '';
  }
}

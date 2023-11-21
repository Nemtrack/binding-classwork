import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html'
})
export class SelectComponent {

  @Output() emitEvent: EventEmitter<string> = new EventEmitter<string>();
  input: string = '';

  onAddFirst(){
    if(this.input == '') return;
    this.emitEvent.next(this.input);
  }
  onAddSecond(){
    if(this.input == '') return;
    this.emitEvent.next(this.input);
  }
}

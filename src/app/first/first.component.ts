import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  template: '<p>{{ first }}</p> ',
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class FirstComponent {
  @Input() first = '';
}

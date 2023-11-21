import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  template: '<p>{{ second }}</p>',
  styles: [
    `
      p {
        color: blue;
        font-style: italic;
      }
    `,
  ],
})
export class SecondComponent {
  @Input() second = '';
}

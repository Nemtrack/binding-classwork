import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    RouterOutlet,
    FirstComponent,
    SecondComponent,
    FormsModule,
    SecondComponent,
    SelectComponent,
  ],
})
export class AppComponent {
  firsts: string[] = [];
  seconds: string[] = [];
  input: string = '';

  onAddFirst() {
    this.firsts.push(this.input);
    this.input = '';
  }

  onAddSecond() {
    this.seconds.push(this.input);
    this.input = '';
  }

  onEventCatched(event: any) {
    console.log(event);
  }
}

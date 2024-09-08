import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework';
  message = "String interpolation is useful";
  counter = 0;

  constructor() {
    var id = setInterval(() => {
      this.counter++;
    }, 1000)

    setTimeout(() => {
      clearInterval(id);
    }, 20000)
  }
}
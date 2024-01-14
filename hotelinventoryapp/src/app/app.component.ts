import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template</h1>
  // <p>Angular is Awesome</p>`,
  
  styleUrl: './app.component.css',
  // styles:[`h1 {color:red}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}

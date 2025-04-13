import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="container">
      <h1>Welcome to {{ title }}!</h1>
      <p>This is a basic Angular application. Start building your components here.</p>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    h1 {
      color: #1976d2;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'Angular App';
}
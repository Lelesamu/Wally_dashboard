import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { LoginComponent } from './component/login-component/login-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('Frontend');
}

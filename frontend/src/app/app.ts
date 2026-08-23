import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { LoginComponent } from './component/login-component/login-component';
import { RegisterDialogComponent } from './component/dialog/register-dialog-component/register-dialog-component';
import { ToastModule } from "primeng/toast";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('Frontend');
}

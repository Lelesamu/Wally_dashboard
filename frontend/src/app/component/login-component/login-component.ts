import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule, InputTextModule],
  standalone: true,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  public constructor() {}
  
  login(): void {
    console.log(this.username);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  login(): void {
    console.log(this.username);
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        // Salva il token
        this.authService.saveToken(response.access_token);
        // Vai alla dashboard
        //this.router.navigate(['/dashboard']);
        console.log('Login successful, token saved:', response.access_token, response);
      },
      error: (err) => {
        //this.isLoading = false;
        //this.errorMessage = err.error?.message || 'Credenziali non valide';
        console.error('Login failed:', err);
      },
      complete: () => {
        //this.isLoading = false;
      }
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterDialogComponent } from '../dialog/register-dialog-component/register-dialog-component';


@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule, InputTextModule],
  standalone: true,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
  providers: [DialogService]
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public ref: DynamicDialogRef | null = null;


  public constructor(
    private authService: AuthService,
    private router: Router,
    private dialogService: DialogService
  ) {}
  
  login(): void {
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


  register() {
    this.ref = this.dialogService.open(RegisterDialogComponent, {
      header: 'Register',
      closable: true,
    });
  }
}

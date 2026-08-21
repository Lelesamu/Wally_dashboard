import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterDialogComponent } from '../dialog/register-dialog-component/register-dialog-component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule, InputTextModule, ToastModule],
  standalone: true,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
  providers: [DialogService, MessageService]
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public pwdError: boolean = false;
  public userError: boolean = false;

  public ref: DynamicDialogRef | null = null;
  public messageService: MessageService = inject(MessageService);

  public constructor(
    private authService: AuthService,
    private router: Router,
    private dialogService: DialogService
  ) {}
  
  login(): void {
    if (this.password.length < 8) {
      this.pwdError = true; 
    } else {
      this.pwdError = false; 
    }

    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        // Salva il token
        this.authService.saveToken(response.access_token);
        // Vai alla dashboard
        //this.router.navigate(['/dashboard']);
        this.messageService.add({severity:'success', summary: 'Login Successful', detail: 'You have been logged in successfully.'});
      },
      error: (err) => {
        this.messageService.add({severity:'error', summary: 'Login Failed', detail: err.error?.message || 'Invalid credentials.'});
        console.log(err);
        
        if (this.username.length <= 0) {
          this.userError = true; 
        } else {
          this.userError = false; 
        }
      },
    });
  }


  register() {
    this.ref = this.dialogService.open(RegisterDialogComponent, {
      header: 'Register',
      closable: true,
    });
  }
}

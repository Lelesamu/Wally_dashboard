import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../services/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-register-dialog-component',
  imports: [FormsModule, CommonModule, DialogModule, AvatarModule, ButtonModule, ToastModule],
  templateUrl: './register-dialog-component.html',
  styleUrl: './register-dialog-component.scss',
})
export class RegisterDialogComponent {
  
  public username: string = '';
  public password: string = '';
  public pwdError: boolean = false;
  public userError: boolean = false;

  public messageService: MessageService = inject(MessageService);

  public constructor(private authService: AuthService) {}

  register() {
    if (this.password.length < 8) {
      this.pwdError = true; 
    } else {
      this.pwdError = false; 
    }
    
    this.authService.register({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        this.messageService.add({severity:'success', summary: 'Register Successful', detail: 'You have been logged in successfully.'});
      },
      error: (err) => {
        err.error?.message.forEach((error: string) => {
          this.messageService.add({severity:'error', summary: 'Register Failed', detail: error});
        });
  
        if (this.username.length <= 0) {
          this.userError = true; 
        } else {
          this.userError = false; 
        }
      },
    });
  }
  
}

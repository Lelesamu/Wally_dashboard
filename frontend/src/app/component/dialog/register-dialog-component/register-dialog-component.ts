import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register-dialog-component',
  imports: [FormsModule, CommonModule, DialogModule, AvatarModule, ButtonModule],
  templateUrl: './register-dialog-component.html',
  styleUrl: './register-dialog-component.scss',
})
export class RegisterDialogComponent {
  
  public username: string = '';
  public password: string = '';
  public email: string = '';

  register() {
    console.log('Register button clicked');
    // Implement registration logic here  
  }
  
}

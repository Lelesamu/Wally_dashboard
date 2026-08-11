import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-register-dialog-component',
  imports: [FormsModule, CommonModule, DialogModule, AvatarModule, ButtonModule],
  templateUrl: './register-dialog-component.html',
  styleUrl: './register-dialog-component.scss',
})
export class RegisterDialogComponent {
visible: any;
name: any;
username: any;
email: any;
}

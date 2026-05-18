import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Button } from 'primeng/button';
import {  Divider } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login-component',
  imports: [Button, Divider],
  standalone: true,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {}

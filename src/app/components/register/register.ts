import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterLink], // enables *ngIf, *ngFor, etc.
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  email: string = '';
  password1: string = '';
  password2: string = '';
  successfulReg: boolean = false;

  registerForm(email: string, pass1: string, pass2: string): boolean {
    this.email = email;
    this.password1 = pass1;
    this.password2 = pass2;

    this.successfulReg = pass1 === pass2;
    return this.successfulReg;
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';
  submitted = false;
  successfulLog = false;

  constructor(private router: Router, private authService: AuthService) {}

  loginForm(emailForm: string, passwordForm: string): boolean {
    this.email = emailForm;
    this.password = passwordForm;
    this.submitted = true;

    const data = JSON.parse(localStorage.getItem('myData') || '[]');
    const userFound = data.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    this.successfulLog = !!userFound;
    this.authService.setLoginStatus(this.successfulLog); // Inform layout

    if (this.successfulLog) {
      this.router.navigate(['/add-customer']);
    }

    return this.successfulLog;
  }
}

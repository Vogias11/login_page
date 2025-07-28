import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';
  submitted = false;
  successfulLog = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  loginForm(emailForm: string, passwordForm: string): void {
    this.email = emailForm;
    this.password = passwordForm;
    this.submitted = true;

   this.authService.login(this.email, this.password)
    .then(() => {
      this.successfulLog =true;
      this.errorMessage = '';
      this.router.navigate(['./']);
    })
    .catch((error) => {
      this.successfulLog = false;
      this.errorMessage = error.Message;
      console.error('Login failed',error);
    });
  }
}

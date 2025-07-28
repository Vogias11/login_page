import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';  // Your service wrapping Firebase Auth

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  email: string = '';
  password1: string = '';
  password2: string = '';
  successfulReg: boolean = false;
  errorMessage: string = '';

  private authService = inject(AuthService);

  async registerForm(email: string, pass1: string, pass2: string) {
    this.email = email;
    this.password1 = pass1;
    this.password2 = pass2;

    this.successfulReg = pass1 === pass2;

    if (!this.successfulReg) {
      this.errorMessage = "Passwords don't match!";
      return;
    }

    try {
      await this.authService.register(this.email, this.password1);
      this.successfulReg = true;
      this.errorMessage = '';
      console.log('User registered successfully');
    } catch (error: any) {
      this.successfulReg = false;
      this.errorMessage = error.message || 'Registration failed';
      console.error('Registration error:', error);
    }
  }
}

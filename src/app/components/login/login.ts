import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule],
 templateUrl: './login.html', 
  styleUrl: './login.scss'
})
export class Login {

   email: string ="";
   password: string ="";
   successfulLog: boolean = false;
   submited: boolean = false;

  loginForm(emailForm: string, passwordForm: string): boolean {
    
    this.email = emailForm;
    this.password = passwordForm;
    this.submited = true;
    
    const data = JSON.parse(localStorage.getItem('myData') || '[]');
    
    const userFound = data.find((u: any) => u.email === this.email && u.password === this.password);

    this.successfulLog = userFound;
    return this.successfulLog;
  }
}

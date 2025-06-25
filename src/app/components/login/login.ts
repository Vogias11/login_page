import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
 templateUrl: './login.html', 
  styleUrl: './login.scss'
})
export class Login {

   email: string ="";
   password: string ="";

  loginForm(emailForm: string, passwordForm: string) {
   

    this.email = emailForm;
    this.password = passwordForm;
  }
}

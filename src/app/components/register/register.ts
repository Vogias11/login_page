import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonCreator } from '../../services/json-creator';

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

  private jsonCreator = inject(JsonCreator);

registerForm(email: string, pass1: string, pass2: string): boolean {
  this.email = email;
  this.password1 = pass1;
  this.password2 = pass2;

  this.successfulReg = pass1 === pass2;

  //Only create JSON if registration is successful
  if (this.successfulReg) {
    this.jsonCreator.createJson(this.email, this.password1);
  }

  return this.successfulReg;
}

  onSubmitJson() {
    if (this.successfulReg) {
      this.jsonCreator.createJson(this.email, this.password1);
    } else {
      console.warn('Form is invalid — JSON not created');
    }
  }
}

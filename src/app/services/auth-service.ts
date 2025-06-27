// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  setLoginStatus(status: boolean) {
    this.loggedIn.next(status);
  }

  getLoginStatus(): boolean {
    return this.loggedIn.value;
  }
}

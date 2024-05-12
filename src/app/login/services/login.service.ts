import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private visibilitySubject$ = new BehaviorSubject(false);
  private signUpVisibilitySubject$ = new BehaviorSubject(false);
  constructor() {}

  getJwtToken() {
    return localStorage.getItem('token');
  }

  isSignUpVisible() {
    return this.signUpVisibilitySubject$.asObservable();
  }
  isVisible() {
    return this.visibilitySubject$.asObservable();
  }
  setVisibility() {
    return this.visibilitySubject$.next(true);
  }
  setSignUpVisibility() {
    return this.signUpVisibilitySubject$.next(true);
  }
}

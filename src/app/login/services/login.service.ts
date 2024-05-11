import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor() { }

getJwtToken() {
  return localStorage.getItem('token');
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router, private loginService: LoginService) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Movies',
        icon: 'pi pi-star',
      },
      {
        label: 'UpComing',
        icon: 'pi pi-search',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3',
      },
    ];
  }
  login() {
    this.router.navigate(['/login']).then(() => {
      this.loginService.setVisibility();
    });
  }
  signUp() {
    this.router.navigate(['/sign-up']).then(() => {
      this.loginService.setSignUpVisibility();
    });
  }
}

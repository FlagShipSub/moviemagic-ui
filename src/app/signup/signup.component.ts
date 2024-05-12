import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  singUpOptions = {
    male: 'male',
    female: 'female',
    radio: '',
  };
  value = '';
  constructor(private loginService: LoginService, private router: Router) {}
  cities: City[] | undefined;
  states: City[] | undefined;
  countries: City[] | undefined;
  selectedCountry: City | undefined;
  selectedCity: City | undefined;
  selectedState: City | undefined;
  isVisible = false;
  ngOnInit() {
    this.cities = [
      { name: 'Kadapa', code: 'NY' },
      { name: 'Chittor', code: 'RM' },
      { name: 'Tirupati', code: 'LDN' },
      { name: 'Vijayawada', code: 'IST' },
    ];
    this.states = [{ name: 'AndhraPradesh', code: 'AN' }];
    this.countries = [{ name: 'India', code: 'IN' }];
    this.loginService.isSignUpVisible().subscribe((isVisiblie) => {
      this.isVisible = isVisiblie;
    });
  }
  cancel() {
    this.isVisible = false;
    this.router.navigate(['/']);
  }
}

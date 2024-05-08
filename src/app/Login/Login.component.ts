import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  list  = [1,2,3,4];
  x = 0;
  ngOnInit() {
  }
  submit() {
    this.x = this.x+1;
  }
}

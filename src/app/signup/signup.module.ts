import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutes } from './signup.routing';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutes
  ],
  declarations: [
    SignupComponent


  ]
})
export class SignupModule { }

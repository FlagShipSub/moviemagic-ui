import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutes } from './signup.routing';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutes,
    ButtonModule
  ],
  declarations: [
    SignupComponent


  ]
})
export class SignupModule { }

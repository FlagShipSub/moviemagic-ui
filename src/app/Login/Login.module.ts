import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { LoginRoutes } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ]
})
export class LoginModule { }

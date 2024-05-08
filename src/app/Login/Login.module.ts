import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login.component';
import { LoginRoutes } from './login.routing';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { LoginService } from './services/login.service';

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

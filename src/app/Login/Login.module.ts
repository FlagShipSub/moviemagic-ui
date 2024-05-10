import { LoginComponent } from './Login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
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
  ],
  providers: [LoginService]
})
export class LoginModule { }

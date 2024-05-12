import { LoginComponent } from './Login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    FormsModule,
    SplitterModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
  ],
  declarations: [LoginComponent, ForgotPasswordComponent],
  providers: [],
})
export class LoginModule {}

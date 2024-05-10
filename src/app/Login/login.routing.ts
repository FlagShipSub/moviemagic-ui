import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  {  path: "", component: LoginComponent  ,
  children :[
  {path:"user1",component:ForgotPasswordComponent}
  ],
  data:{title: "LoginPage"}
  }
];

export const LoginRoutes = RouterModule.forChild(routes);

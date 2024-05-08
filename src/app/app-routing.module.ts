import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './Error404/Error404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./MainModule/MainModule.module').then((m) => m.MainModuleModule),
    canActivate: [],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Login/Login.module').then((m) => m.LoginModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

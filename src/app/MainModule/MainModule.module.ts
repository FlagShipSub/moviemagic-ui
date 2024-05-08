import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModuleComponent } from './MainModule.component';
import { MainModuleRoutes } from './main-module.routing';

@NgModule({
  imports: [
    CommonModule,
    MainModuleRoutes
  ],
  declarations: [MainModuleComponent]
})
export class MainModuleModule { }

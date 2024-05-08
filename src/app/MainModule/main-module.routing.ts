import { Routes, RouterModule } from '@angular/router';
import { MainModuleComponent } from './MainModule.component';

const routes: Routes = [
  {
    path: "", component: MainModuleComponent
   },
];

export const MainModuleRoutes = RouterModule.forChild(routes);

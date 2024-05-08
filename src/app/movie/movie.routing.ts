import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  {
    path :'', component : MovieComponent
    },
];

export const MovieRoutes = RouterModule.forChild(routes);

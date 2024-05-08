import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutes } from './movie.routing';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutes
  ],
  declarations: [MovieComponent]
})
export class MovieModule { }

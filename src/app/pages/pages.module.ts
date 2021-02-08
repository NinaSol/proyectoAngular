import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    HomeComponent,
    PeliculasComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    PeliculasComponent,
    SeriesComponent
  ]
})
export class PagesModule { }

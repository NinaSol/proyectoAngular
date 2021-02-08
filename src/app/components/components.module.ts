import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    CardsComponent
  ]
})
export class ComponentsModule { }

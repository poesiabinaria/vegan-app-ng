import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { NutrientCardComponent } from './nutrient-card/nutrient-card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionNutritionComponent } from './section-nutrition/section-nutrition.component';
import { UserFoodsComponent } from './user-foods/user-foods.component';
import { NutrientPctgPipe } from './nutrient-pctg.pipe';
import { MainCardComponent } from './main-card/main-card.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NutrientCardComponent,
    SectionNutritionComponent,
    UserFoodsComponent,
    NutrientPctgPipe,
    MainCardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    NgbModule,
    SlickCarouselModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

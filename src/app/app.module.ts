import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FoodSelectionComponent } from './pages/food-selection/food-selection.component';
import { FoodAdjustComponent } from './pages/food-adjust/food-adjust.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserProfileModule } from './pages/user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    NutrientCardComponent,
    SectionNutritionComponent,
    UserFoodsComponent,
    NutrientPctgPipe,
    MainCardComponent,
    HeaderComponent,
    FoodSelectionComponent,
    FoodAdjustComponent,
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
    UserProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

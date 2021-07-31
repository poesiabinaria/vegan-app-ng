import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderComponent } from './core/header/header.component';
import { NutrientCardComponent } from './nutrition/food-calculation/nutrient-card/nutrient-card.component';
import { UserFoodsComponent } from './nutrition/food-calculation/user-foods/user-foods.component';
import { NutrientPctgPipe } from './nutrition/food-calculation/nutrient-card/nutrient-card.pipe';
import { MainCardComponent } from './nutrition/food-calculation/main-card/main-card.component';
import { FoodSelectionComponent } from './nutrition/food-selection/food-selection.component';
import { FoodCalculationComponent } from './nutrition/food-calculation/food-calculation.component';
import { UserProfileModule } from './core/user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    NutrientCardComponent,
    UserFoodsComponent,
    NutrientPctgPipe,
    MainCardComponent,
    HeaderComponent,
    FoodSelectionComponent,
    FoodCalculationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
    SlickCarouselModule,
    UserProfileModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

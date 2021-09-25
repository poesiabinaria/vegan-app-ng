import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './core/sign-up/sign-up.component';
import { FoodCalculationComponent } from './nutrition/food-calculation/food-calculation.component';
import { FoodSelectionComponent } from './nutrition/food-selection/food-selection.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'ajustar-alimentos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: SignUpComponent },
  { path: 'ajustar-alimentos', component: FoodCalculationComponent },
  { path: 'selecionar-alimentos', component: FoodSelectionComponent },
  { path: 'meu-perfil', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

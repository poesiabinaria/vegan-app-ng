import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodCalculationComponent } from './nutrition/food-calculation/food-calculation.component';
import { FoodSelectionComponent } from './nutrition/food-selection/food-selection.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'ajustar-alimentos', pathMatch: 'full' },
  { path: 'ajustar-alimentos', component: FoodCalculationComponent },
  { path: 'selecionar-alimentos', component: FoodSelectionComponent },
  { path: 'meu-perfil', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

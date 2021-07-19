import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionNutritionComponent } from './section-nutrition/section-nutrition.component';
import { FoodSelectionComponent } from './pages/food-selection/food-selection.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'ajustar-alimentos', pathMatch: 'full' },
  { path: 'ajustar-alimentos', component: SectionNutritionComponent },
  { path: 'selecionar-alimentos', component: FoodSelectionComponent },
  { path: 'meu-perfil', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodCalculationComponent } from './nutrition/food-calculation/food-calculation.component';
import { FoodSelectionComponent } from './nutrition/food-selection/food-selection.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './core/account/shared/auth.guard';
import { RegisterComponent } from './core/account/register/register.component';
import { LoginComponent } from './core/account/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  {
    path: 'perfil',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'nutricao',
    children: [
      { path: 'editar-alimentos', component: FoodSelectionComponent },
      { path: 'ajustar-alimentos', component: FoodCalculationComponent },
    ],
    canActivate: [AuthGuard],
  },

  { path: 'registrar', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import { PetManagementAddComponent } from './pet-management-add/pet-management-add.component';
import { PetManagementViewComponent } from './pet-management-view/pet-management-view.component';
import {PetCareComponent} from './pet-care/pet-care.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent},
  { path: 'pet-management', component: PetManagementComponent},
  { path: 'pet-management-add', component: PetManagementAddComponent},
  { path: 'pet-management-view', component: PetManagementViewComponent},
  { path: 'pet-care', component: PetCareComponent},
  { path: '', redirectTo: 'home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

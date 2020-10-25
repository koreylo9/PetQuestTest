import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import { PetManagementAddComponent } from './pet-management-add/pet-management-add.component';
import { PetManagementViewComponent } from './pet-management-view/pet-management-view.component';
<<<<<<< HEAD
import { UserManagementComponent } from './user-management/user-management.component';
=======
import {PetCareComponent} from './pet-care/pet-care.component';
>>>>>>> a37b7c21916e270c3c16a3a9235f6cb269e2725a

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent},
  { path: 'pet-management', component: PetManagementComponent},
  { path: 'pet-management-add', component: PetManagementAddComponent},
  { path: 'pet-management-view', component: PetManagementViewComponent},
<<<<<<< HEAD
  { path: 'user-management', component: UserManagementComponent},
=======
  { path: 'pet-care', component: PetCareComponent},
>>>>>>> a37b7c21916e270c3c16a3a9235f6cb269e2725a
  { path: '', redirectTo: 'home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

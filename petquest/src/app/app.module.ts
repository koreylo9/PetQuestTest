import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import { PetManagementAddComponent } from './pet-management-add/pet-management-add.component';
import { PetManagementViewComponent } from './pet-management-view/pet-management-view.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { UserManagementComponent } from './user-management/user-management.component';
=======
import { PetCareComponent } from './pet-care/pet-care.component';
>>>>>>> a37b7c21916e270c3c16a3a9235f6cb269e2725a

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    PetManagementComponent,
    PetManagementAddComponent,
    PetManagementViewComponent,
<<<<<<< HEAD
    UserManagementComponent
=======
    PetCareComponent
>>>>>>> a37b7c21916e270c3c16a3a9235f6cb269e2725a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

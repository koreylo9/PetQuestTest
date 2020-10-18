import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import { PetManagementAddComponent } from './pet-management-add/pet-management-add.component';
import { PetManagementViewComponent } from './pet-management-view/pet-management-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    PetManagementComponent,
    PetManagementAddComponent,
    PetManagementViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

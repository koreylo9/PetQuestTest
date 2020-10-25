import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import { PetManagementAddComponent } from './pet-management-add/pet-management-add.component';
import { PetManagementViewComponent } from './pet-management-view/pet-management-view.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PetCareComponent } from './pet-care/pet-care.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    PetManagementComponent,
    PetManagementAddComponent,
    PetManagementViewComponent,
    LogInPageComponent,
    SignUpPageComponent,
    UserManagementComponent,
    PetCareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

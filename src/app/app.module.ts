import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MedicalComponent } from './medical/medical.component';
import { ConsentComponent } from './consent/consent.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PersonalComponent } from './personal/personal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,MedicalComponent, ConsentComponent, ConfirmComponent, PersonalComponent,],
  imports: [
    BrowserModule,AppRoutingModule,RouterModule, ReactiveFormsModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

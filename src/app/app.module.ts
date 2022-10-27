import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPatientDetailsComponent } from './add-patient-details/add-patient-details.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { ProcessDataComponent } from './process-data/process-data.component';
import { ConfirmationDailogComponent } from './confirmation-dailog/confirmation-dailog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, PatientdetailsComponent, HomePageComponent, AddPatientDetailsComponent, UpdatePatientComponent, UpdateListComponent, ProcessDataComponent, ConfirmationDailogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

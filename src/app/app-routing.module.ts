import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientDetailsComponent } from './add-patient-details/add-patient-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { ProcessDataComponent } from './process-data/process-data.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  
  { path: 'patient-details', component: PatientdetailsComponent },
  {path: 'update-patient', component:UpdatePatientComponent},
  {
path:'add-patient', component:AddPatientDetailsComponent },
{path:"login",loadChildren:()=>import("./login/login.module").then((m)=>m.LoginModule)},
  {
    path: 'login-home',
    component: HomePageComponent,
  },
  {
    path:'update-list', component:UpdateListComponent
  },
  {
    path:'process-data', component:ProcessDataComponent
  },
  {
    path: "login",loadChildren: "../app/login/login.module#LoginModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

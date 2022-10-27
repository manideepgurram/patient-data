import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  username: any;
  loggedin: any;
  details:any=[]
  ngOnInit(): void {
    this.loggedin = localStorage.getItem('loggedin');
    console.log(this.loggedin);
    this.username = localStorage.getItem('username');
    this.GetPatientDetails()
  }
  
  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
  GetPatientDetails(){
    this.http.get('http://localhost:8089/hospital').subscribe(res=>{
      console.log(res);
      this.details = res;
      
    })
      }
}

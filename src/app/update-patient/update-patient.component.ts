import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private service:PatientService) { }
  username: any;
  loggedin: any;
  details:any=[];
  search_value:any='';
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
      update(){
        this.http.get('http://localhost:8089/hospital/search/'+this.search_value).subscribe(res=>{
          this.details = res;

        })
      // this.router.navigateByUrl('/update')
      console.log(this.search_value);
      this.service.search_value = this.search_value;
      
    }
    Edit(name:any){
      this.service.search_value = name;
      console.log(name);
      
      this.router.navigateByUrl('/update-list')
    }
}

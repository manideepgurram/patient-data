import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-process-data',
  templateUrl: './process-data.component.html',
  styleUrls: ['./process-data.component.scss'],
})
export class ProcessDataComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  username: any;
  loggedin: any;
  details: any = [];
  ngOnInit(): void {
    this.loggedin = localStorage.getItem('loggedin');
    console.log(this.loggedin);
    this.username = localStorage.getItem('username');
    this.GetPatientDetails();
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
  GetPatientDetails() {
    this.http.get('http://localhost:8089/hospital').subscribe((res) => {
      console.log(res);
      this.details = res;
    });
  }
  process(id: number) {
    this.http
      .put('http://localhost:8089/hospital/status/' + id, id)
      .subscribe((response) => {
        //sucess handler
        console.log(response);
        this.details = response;
        alertify.success('Data successfully processed to down stream');
        // this.router.navigateByUrl('/process-data')
        window.location.reload();
      });
  }
}

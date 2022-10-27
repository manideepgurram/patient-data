import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Patient } from './entity/patient';
const API_URL = "http://localhost:8089/hospital/"

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  search_value:any='';
  ID:any;
  // ExcelData : any
  // patient:Patient= new Patient( );
  constructor(public client:HttpClient) { 

  }
  save(ExcelData: any){

    return  this.client.post(API_URL, ExcelData)

   }
   inducted(id: number){
    return this.client.put(API_URL+'inducted/'+id, id)
  }
  }


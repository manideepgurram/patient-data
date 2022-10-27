import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { PatientService } from '../patient.service';
import * as alertify from 'alertifyjs';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-patient-details',
  templateUrl: './add-patient-details.component.html',
  styleUrls: ['./add-patient-details.component.scss'],
})
export class AddPatientDetailsComponent implements OnInit {
  ExcelData: any;
  form: FormGroup = new FormGroup({
    file: new FormControl(''),
  });
  submitted = false;

  constructor(
    public patientservice: PatientService,
    private route: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {}
  ReadExcel(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileSource: file
      });
    }
    let file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var SheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[SheetNames[0]]);
      console.log(this.ExcelData.length);
    };
  }

  save() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const observable = this.patientservice.save(this.ExcelData);
    observable.subscribe((response) => {
      alertify.success('Saved Successfully');
      //sucess handler
      console.log(response);
      for (let i = 0; i < this.ExcelData.length; i++) {
        this.inducted(this.ExcelData[i].id);
      }
     
      this.route.navigateByUrl('/login-home');
    });
  }
  // inducted(id: number) {
  //   this.patientservice.ID = id;
  //   this.http
  //     .put('http://localhost:8089/hospital/inducted/' + id, id)
  //     .subscribe(
  //       (response: any) => {
          //sucess handler
          // console.log(response);
          // this.toast.success({detail:"Success Message", summary:"Patient data sent to downstream Successfully", duration:3000})
       // }
        // (error)=>{   //error handler
        //   this.toast.error({detail:"Error Message", summary:"Something went wrong", duration:3000});
        // }
  //     );
  // }

  inducted(id: number){
    this.patientservice.ID=id;



   const observable = this.patientservice.inducted(this.patientservice.ID);
    console.log(this.patientservice.ID);
    observable.subscribe((response)=>{ //sucess handler
      console.log(response);
    }
    )
  
  }
}

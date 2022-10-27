import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss'],
})
export class UpdateListComponent implements OnInit {
  constructor(
    private router: Router,
    private service: PatientService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      drugid: [{value: '', disabled: true}],
      drugname: [{value: '', disabled: true}],
    });
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  username: any;
  loggedin: any;
  details: any = [];
  search_value: any;
  id: any;
  name: any;
  age: any;
  email: any;
  dob: any;
  address: any;
  phonenumber: any;
  drugid: any;
  drugname: any;
  submitted= false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    phonenumber: new FormControl(''),
    drugid: new FormControl({ value: '', disabled: true }),
    drugname: new FormControl({ value: '', disabled: true }),
  });

  ngOnInit(): void {
    this.loggedin = localStorage.getItem('loggedin');
    console.log(this.loggedin);
    this.username = localStorage.getItem('username');
    this.search_value = this.service.search_value;
    this.Edit();
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
  Edit() {
    this.http
      .get('http://localhost:8089/hospital/search/' + this.search_value)
      .subscribe((res) => {
        this.details = res;
        console.log(this.id, ' id');

        this.id = this.details[0].id;
        this.address = this.details[0].address;
        this.name = this.details[0].name;
        this.email = this.details[0].email;
        this.dob = this.details[0].dob;
        this.age = this.details[0].age;
        this.phonenumber = this.details[0].phonenumber;
        this.drugid = this.details[0].drugid;
        this.drugname = this.details[0].drugname;
      });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  update() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.http
      .put('http://localhost:8089/hospital/' + this.id, this.form.value)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigateByUrl('/update-patient');
          alertify.success('Patient Details Updated');

        },
        (err) => {
          console.log(err);
        }
      );
  }
}

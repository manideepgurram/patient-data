import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  API_Login = 'http://localhost:8089/hospital/login';

  response: any;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  success: any;
  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40),
        ],
      ],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {}
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.login(this.form.value).subscribe(
      (res: any) => {
        alertify.success('Loggedin Successfully');
        this.response = res;
        this.success = true;
        localStorage.setItem('email', this.response.email);
        localStorage.setItem('username', this.response.username);
        localStorage.setItem('loggedin', 'true');
        this.router.navigateByUrl('/login-home');
       
      },
      (err: any) => {
        console.log(err);
        this.success = false;
      }
    );
    return 
  }
  login(data: any) {
    return this.http.post(this.API_Login, data);
  }
}

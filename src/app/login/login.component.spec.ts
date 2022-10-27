import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Testing Login functions', () =>
    expect(component.onSubmit()).toBe());

    it('Expecting  form values', ()=>{
      const formGroup = component.form;
      const formValues = {
        username:'',
        password:''
      }
      expect(formGroup.value).toEqual(formValues)
    })

    
    it('check the user name before entering some values ', ()=>{
      const loginformUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginform').querySelectorAll('input')[0];
      const usernameFormGropuValue = component.form.get('username');
        expect(loginformUserElement.value).toEqual(usernameFormGropuValue?.value);
        expect(usernameFormGropuValue?.errors).not.toBeNull();
        expect(usernameFormGropuValue?.errors?.required).toBeTruthy()
    
    })

    it('check the user name after entering some values ', ()=>{
      const loginformUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginform').querySelectorAll('input')[0];
      loginformUserElement.value= 'manidee';
      loginformUserElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        const usernameFormGropuValue = component.form.get('username');
        expect(loginformUserElement.value).toEqual(usernameFormGropuValue?.value);
        expect(usernameFormGropuValue?.errors).toBeNull()
      })
    })


    it('check the login form if the validations are fullfilled ', ()=>{
      const loginformUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginform').querySelectorAll('input')[0];
      const loginformPasswordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginform').querySelectorAll('input')[1];
      loginformUserElement.value= 'manideep';
      loginformPasswordElement.value = 'manideep';
      loginformUserElement.dispatchEvent(new Event('input'));
      loginformPasswordElement.dispatchEvent(new Event('input'));
      const isloggedinformValid = component.form.valid;
      fixture.whenStable().then(()=>{
        expect(isloggedinformValid).toBeTruthy()
      })
    })
    
});

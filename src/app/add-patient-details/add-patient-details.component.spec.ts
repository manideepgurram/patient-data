import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientDetailsComponent } from './add-patient-details.component';

describe('AddPatientDetailsComponent', () => {
  let component: AddPatientDetailsComponent;
  let fixture: ComponentFixture<AddPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

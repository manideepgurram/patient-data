import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDataComponent } from './process-data.component';

describe('ProcessDataComponent', () => {
  let component: ProcessDataComponent;
  let fixture: ComponentFixture<ProcessDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

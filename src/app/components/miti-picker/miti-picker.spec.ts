import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMitiPicker } from './miti-picker';

describe('NgMitiPicker', () => {
  let component: NgMitiPicker;
  let fixture: ComponentFixture<NgMitiPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgMitiPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(NgMitiPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LbdTableComponent } from './lbd-table.component';

describe('LbdTableComponent', () => {
  let component: LbdTableComponent;
  let fixture: ComponentFixture<LbdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

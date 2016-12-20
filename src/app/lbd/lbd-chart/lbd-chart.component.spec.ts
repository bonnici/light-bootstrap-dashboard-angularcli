/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LbdChartComponent } from './lbd-chart.component';

describe('LbdChartComponent', () => {
  let component: LbdChartComponent;
  let fixture: ComponentFixture<LbdChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbdChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbdChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

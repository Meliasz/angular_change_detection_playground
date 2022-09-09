/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaultGrandchildLevel1Component } from './default-grandchild-level1.component';

describe('DefaultGrandchildLevel1Component', () => {
  let component: DefaultGrandchildLevel1Component;
  let fixture: ComponentFixture<DefaultGrandchildLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultGrandchildLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultGrandchildLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

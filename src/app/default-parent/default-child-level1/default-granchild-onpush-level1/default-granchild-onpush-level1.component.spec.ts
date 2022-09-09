/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaultGranchildOnpushLevel1Component } from './default-granchild-onpush-level1.component';

describe('DefaultGranchildOnpushLevel1Component', () => {
  let component: DefaultGranchildOnpushLevel1Component;
  let fixture: ComponentFixture<DefaultGranchildOnpushLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultGranchildOnpushLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultGranchildOnpushLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

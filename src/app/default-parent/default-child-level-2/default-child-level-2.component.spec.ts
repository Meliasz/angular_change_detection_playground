/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaultChildLevel-2Component } from './default-child-level-2.component';

describe('DefaultChildLevel-2Component', () => {
  let component: DefaultChildLevel-2Component;
  let fixture: ComponentFixture<DefaultChildLevel-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChildLevel-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChildLevel-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

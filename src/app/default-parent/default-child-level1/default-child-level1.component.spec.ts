/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaultChildLevel1Component } from './default-child-level1.component';

describe('DefaultChildLevel1Component', () => {
  let component: DefaultChildLevel1Component;
  let fixture: ComponentFixture<DefaultChildLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChildLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChildLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

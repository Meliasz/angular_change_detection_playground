/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrandchildOfGranchildOnPushComponent } from './grandchild-of-granchild-on-push.component';

describe('GrandchildOfGranchildOnPushComponent', () => {
  let component: GrandchildOfGranchildOnPushComponent;
  let fixture: ComponentFixture<GrandchildOfGranchildOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandchildOfGranchildOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandchildOfGranchildOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

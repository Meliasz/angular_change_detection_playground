import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild, OnInit, AfterViewInit, ApplicationRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DetectionSourceService } from '../detection-source.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-default-parent',
  templateUrl: './default-parent.component.html',
  styleUrls: ['./default-parent.component.css']
})
export class DefaultParentComponent implements AfterContentChecked, AfterViewInit {
  public detectionStamp: Date = new Date(2021,1,12);
  public primitive: string = 'parent';
  public obj: any = {prop1: 'parent', prop2: 2};
   @ViewChild('zone') private zoneBtn!: ElementRef<HTMLButtonElement>;
   @ViewChild('detect') private detectBtn!: ElementRef<HTMLButtonElement>;
   @ViewChild('mark') private markBtn!: ElementRef<HTMLButtonElement>;
   @ViewChild('detach') private detachBtn!: ElementRef<HTMLButtonElement>;
   @ViewChild('retach') private retachBtn!: ElementRef<HTMLButtonElement>;
   @ViewChild('timeout') private timeoutBtn!: ElementRef<HTMLButtonElement>;
   @ViewChild('http') private httpBtn!: ElementRef<HTMLButtonElement>;
   @ViewChild('httpError') private httpErrorBtn!: ElementRef<HTMLButtonElement>;


  constructor(private dss: DetectionSourceService, private httpClient: HttpClient, private cdr: ChangeDetectorRef, private zone: NgZone, private appRef: ApplicationRef) {}

  ngAfterViewInit(): void {
      this.initZoneClicks();
      fromEvent(this.httpBtn.nativeElement, 'click', () => {
        this.httpReq();
      }).subscribe();
      fromEvent(this.httpErrorBtn.nativeElement, 'click', () => {
        this.httpError();
      }).subscribe();
      fromEvent(this.timeoutBtn.nativeElement, 'click', () => {
        this.invokeSetTimeout();
      }).subscribe();
  }

  ngAfterContentChecked() {
    this.detectionStamp = new Date();
  }

  private initZoneClicks() {
    this.zone.runOutsideAngular(() => {
      fromEvent(this.zoneBtn.nativeElement, 'click', () => {
        this.dss.setDetectionSourceInfo('triggered ng zone click in the parent');
        console.log('ng zone click')
       this.appRef.tick();
      // this.cdr.detectChanges();
      }).subscribe();
      fromEvent(this.detachBtn.nativeElement, 'click', () => {
        this.detach();
      }).subscribe();
      fromEvent(this.retachBtn.nativeElement, 'click', () => {
        this.retach();
      }).subscribe();
      fromEvent(this.detectBtn.nativeElement, 'click', () => {
        this.detect();
      }).subscribe();
      fromEvent(this.markBtn.nativeElement, 'click', () => {
        this.mark();
      }).subscribe();
    })
  }

  public updatePrimitive() {
    this.primitive = 'updated in parent';
    this.dss.setDetectionSourceInfo('changing primitive value in the parent')
  }

  public updateObjectValue() {
    this.obj.prop1 = 'parentValueUpdated';
    this.dss.setDetectionSourceInfo('changing object value in the parent')
  }

  public updateObjectReference() {
    this.obj = {prop1: 'parentReferenceUpdated', prop2: 4};
    this.dss.setDetectionSourceInfo('changing object reference in the parent')
  }

  public clickEvent() {
    this.dss.setDetectionSourceInfo('triggered browser event - click - in the parent')
  }

  public invokeSetTimeout() {
    setTimeout(() => {}, 5000);
    this.dss.setDetectionSourceInfo('triggered setTimeout in the parent')
  }

  public httpReq() {
    this.httpClient.get('https://api.agify.io/?name=bella').subscribe();
    this.dss.setDetectionSourceInfo('triggered successful http req in the parent')
  }

  public httpError() {
    this.httpClient.get('https://api.agify.io').subscribe();
    this.dss.setDetectionSourceInfo('triggered unsuccessful http req in the parent')
  }

  public detect() {
    this.cdr.detectChanges();
    this.dss.setDetectionSourceInfo('triggered detect changes in the parent')
  }

  public mark() {
    this.cdr.markForCheck();
    this.dss.setDetectionSourceInfo('triggered mark for check in the parent')
  }

  public detach() {
    this.cdr.detach();
    this.dss.setDetectionSourceInfo('triggered detach in the parent')
  }

  public retach() {
    this.cdr.reattach();
    this.dss.setDetectionSourceInfo('triggered reattach in the parent')
  }

  public checkNoChanges() {
    this.cdr.checkNoChanges();
    this.dss.setDetectionSourceInfo('triggered check no changes in the parent')
  }

  /*Set ngZoneEventCoalescing to false in main.ts to see a difference (change detection would be called two times on click then) */
  public clickParent() {
    console.log('parent')
    this.dss.setDetectionSourceInfo('triggered browser event - click - in the parent')
  }

  public clickChild() {
    console.log('child')
    this.dss.setDetectionSourceInfo('triggered browser event - click - in the parent')
  }
}

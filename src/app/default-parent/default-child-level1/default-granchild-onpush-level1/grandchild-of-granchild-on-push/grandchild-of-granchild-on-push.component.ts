import { HttpClient } from '@angular/common/http';
import { DetectionSourceService } from './../../../../detection-source.service';
import { ChangeDetectionStrategy, Component, Input, AfterContentChecked, ChangeDetectorRef, NgZone, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-grandchild-of-granchild-on-push',
  templateUrl: './grandchild-of-granchild-on-push.component.html',
  styleUrls: ['./grandchild-of-granchild-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GrandchildOfGranchildOnPushComponent implements AfterContentChecked, AfterViewInit {
  public detectionStamp: Date = new Date(2021,1,12);
  @Input() public primitive: string | undefined;
  @Input() public obj: any;
  @ViewChild('detect') private detectBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('mark') private markBtn!: ElementRef<HTMLButtonElement>;

  constructor(private dss: DetectionSourceService, private httpClient: HttpClient, private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.initZoneClicks();
  }

  ngAfterContentChecked() {
    this.detectionStamp = new Date();
  }

   private initZoneClicks() {
    this.zone.runOutsideAngular(() => {
      fromEvent(this.detectBtn.nativeElement, 'click', () => {
      this.detect();
      }).subscribe();
    })
    this.zone.runOutsideAngular(() => {
      fromEvent(this.markBtn.nativeElement, 'click', () => {
      this.mark();
      }).subscribe();
    })
  }

  public clickEvent() {
    this.dss.setDetectionSourceInfo('triggered browser event - click - in the grandgrandchild onpush')
  }

  public invokeSetTimeout() {
    setTimeout(() => {},5000);
    this.dss.setDetectionSourceInfo('triggered setTimeout in the grandgrandchild onpush')
  }

  public httpReq() {
    this.httpClient.get('https://api.agify.io/?name=bella').subscribe();
    this.dss.setDetectionSourceInfo('triggered successful http req in the grandgrandchild onpush')
  }
  
  public updatePrimitive() {
    this.primitive = 'updated in the grandgrandchild onpush';
    this.dss.setDetectionSourceInfo('changing primitive value in the grandgrandchild onpush')
  }

  public updateObjectValue() {
    this.obj.prop1 = 'parentValueUpdated';
    this.dss.setDetectionSourceInfo('changing object value in the grandgrandchild onpush')
  }

  public updateObjectReference() {
    this.obj = {prop1: 'parentReferenceUpdated', prop2: 4};
    this.dss.setDetectionSourceInfo('changing object reference in the grandgrandchild onpush')
  }

  public detect() {
    this.cdr.detectChanges();
    this.dss.setDetectionSourceInfo('triggered detect changes in the grandgrandchild onpush')
  }

  public mark() {
    this.cdr.markForCheck();
    this.dss.setDetectionSourceInfo('triggered mark for check in the grandgrandchild onpush')
  }

  public detach() {
    this.cdr.detach();
    this.dss.setDetectionSourceInfo('triggered detach in the grandgrandchild onpush')
  }

  public retach() {
    this.cdr.reattach();
    this.dss.setDetectionSourceInfo('triggered reattach in the grandgrandchild onpush')
  }

  public checkNoChanges() {
    this.cdr.checkNoChanges();
    this.dss.setDetectionSourceInfo('triggered check no changes in the grandgrandchild onpush')
  }
}

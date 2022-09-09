import { DetectionSourceService } from './../../../detection-source.service';
import { AfterViewChecked, ChangeDetectionStrategy, Component, Input, AfterContentChecked, ChangeDetectorRef, NgZone, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-default-granchild-onpush-level1',
  templateUrl: './default-granchild-onpush-level1.component.html',
  styleUrls: ['./default-granchild-onpush-level1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultGranchildOnpushLevel1Component implements AfterContentChecked {
  public detectionStamp: Date = new Date(2021,1,12);
  @Input() public primitive: string | undefined;
  @Input() public obj: any;
  @ViewChild('detect') private detectBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('mark') private markBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('clickL') private clickLtn!: ElementRef<HTMLButtonElement>;


  constructor(private dss: DetectionSourceService, private httpClient: HttpClient, private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.initZoneClicks();
    this.zone.run(() => {
    fromEvent(this.clickLtn.nativeElement, 'click', () => {
      this.clickEvent()
      }).subscribe();
    })
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
    this.dss.setDetectionSourceInfo('triggered browser event - click - in the grandchild onpush')
  }

  public invokeSetTimeout() {
    setTimeout(() => {}, 5000);
    this.dss.setDetectionSourceInfo('triggered setTimeout in the grandchild onpush')
  }

  public updatePrimitive() {
    this.primitive = 'updated in grandchild onpush';
    this.dss.setDetectionSourceInfo('changing primitive value in the grandchild onpush')
  }

  public updateObjectValue() {
    this.obj.prop1 = 'grandChildOnPushValueUpdated';
    this.dss.setDetectionSourceInfo('changing object value in the grandchild onpush')
  }

  public updateObjectReference() {
    this.obj = {prop1: 'grandChildOnPushReferenceUpdated', prop2: 4};
    this.dss.setDetectionSourceInfo('changing object reference in the grandchild onpush')
  }

  public httpReq() {
    this.httpClient.get('https://api.agify.io/?name=bella').subscribe();
    this.dss.setDetectionSourceInfo('triggered successful http req in the grandchild onpush')
  }

  public detect() {
    this.cdr.detectChanges();
    this.dss.setDetectionSourceInfo('triggered detect changes in the grandchild onpush')
  }

  public mark() {
    this.cdr.markForCheck();
    this.dss.setDetectionSourceInfo('triggered mark for check in the grandchild onpush')
  }

  public detach() {
    this.cdr.detach();
    this.dss.setDetectionSourceInfo('triggered detach in the grandchild onpush')
  }

  public retach() {
    this.cdr.reattach();
    this.dss.setDetectionSourceInfo('triggered reattach in the grandchild onpush')
  }

  public checkNoChanges() {
    this.cdr.checkNoChanges();
    this.dss.setDetectionSourceInfo('triggered check no changes in the grandchild onpush')
  }
}
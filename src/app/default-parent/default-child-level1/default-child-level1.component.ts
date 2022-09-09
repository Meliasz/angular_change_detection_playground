import { AfterViewChecked, Component, Input, OnInit, AfterContentChecked, ChangeDetectorRef, NgZone, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DetectionSourceService } from 'src/app/detection-source.service';

@Component({
  selector: 'app-default-child-level1',
  templateUrl: './default-child-level1.component.html',
  styleUrls: ['./default-child-level1.component.css']
})
export class DefaultChildLevel1Component implements AfterContentChecked{
  public detectionStamp: Date = new Date(2021,1,12);
  @Input() public primitive: string | undefined;
  @Input() public obj: any;
  @ViewChild('detect') private detectBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('mark') private markBtn!: ElementRef<HTMLButtonElement>;

  constructor(private dss: DetectionSourceService, private cdr: ChangeDetectorRef, private zone: NgZone) {}

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

  public updatePrimitive() {
    this.primitive = 'updated in child';
    this.dss.setDetectionSourceInfo('changing primitive value in the child 1')
  }

  public updateObjectValue() {
    this.obj.prop1 = 'childValueUpdated';
    this.dss.setDetectionSourceInfo('changing object value in the child 1')
  }

  public updateObjectReference() {
    this.obj = {prop1: 'childReferenceUpdated', prop2: 4};
    this.dss.setDetectionSourceInfo('changing object reference in the child 1')
  }

  public detect() {
    this.cdr.detectChanges();
    this.dss.setDetectionSourceInfo('triggered detect changes in the child 1')
  }

  public mark() {
    this.cdr.markForCheck();
    this.dss.setDetectionSourceInfo('triggered mark for check in the child 1')
  }

  public detach() {
    this.cdr.detach();
    this.dss.setDetectionSourceInfo('triggered detach in the child 1')
  }

  public retach() {
    this.cdr.reattach();
    this.dss.setDetectionSourceInfo('triggered reattach in the child 1')
  }

  public checkNoChanges() {
    this.cdr.checkNoChanges();
    this.dss.setDetectionSourceInfo('triggered check no changes in the child 1')
  }
}
import { AfterViewChecked, Component, Input, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-default-grandchild-level1',
  templateUrl: './default-grandchild-level1.component.html',
  styleUrls: ['./default-grandchild-level1.component.css']
})
export class DefaultGrandchildLevel1Component implements AfterContentChecked{
  public detectionStamp: Date = new Date(2021,1,12);
  @Input() public primitive: string | undefined;
  @Input() public obj: any;


  ngAfterContentChecked() {
    this.detectionStamp = new Date();
  }
}

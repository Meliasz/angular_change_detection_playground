import { AfterViewChecked, Component, Input, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-default-child-level-2',
  templateUrl: './default-child-level-2.component.html',
  styleUrls: ['./default-child-level-2.component.css']
})
export class DefaultChildLevel2Component implements AfterContentChecked {
  public detectionStamp: Date = new Date(2021,1,12);
  @Input() public primitive: string | undefined;
  @Input() public obj: any;

  ngAfterContentChecked() {
    this.detectionStamp = new Date();
  }


}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetectionSourceService } from './detection-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public detectionInfo$: Observable<string> | undefined;
  constructor(private dss: DetectionSourceService) {
    
  }

  ngOnInit(): void {
      this.detectionInfo$ = this.dss.detectionSourceInfo;
  }
}

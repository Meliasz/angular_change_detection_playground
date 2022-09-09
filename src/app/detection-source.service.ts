import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectionSourceService {
  private detectionSourceInfo$: BehaviorSubject<string> = new BehaviorSubject('Initial');
  get detectionSourceInfo(): Observable<string> {
    return this.detectionSourceInfo$.asObservable();
  }

  public setDetectionSourceInfo(info: string) {
    this.detectionSourceInfo$.next(info);
  }
}

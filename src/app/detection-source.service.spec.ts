/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetectionSourceService } from './detection-source.service';

describe('Service: DetectionSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetectionSourceService]
    });
  });

  it('should ...', inject([DetectionSourceService], (service: DetectionSourceService) => {
    expect(service).toBeTruthy();
  }));
});

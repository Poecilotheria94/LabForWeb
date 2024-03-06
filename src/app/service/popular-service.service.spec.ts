import { TestBed } from '@angular/core/testing';

import { PopularServiceService } from './popular-service.service';

describe('PopularServiceService', () => {
  let service: PopularServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

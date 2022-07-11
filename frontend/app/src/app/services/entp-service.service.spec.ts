import { TestBed } from '@angular/core/testing';

import { EntpServiceService } from './entp-service.service';

describe('EntpServiceService', () => {
  let service: EntpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

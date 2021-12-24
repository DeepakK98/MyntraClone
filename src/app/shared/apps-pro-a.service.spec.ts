import { TestBed } from '@angular/core/testing';

import { AppsProAService } from './apps-pro-a.service';

describe('AppsProAService', () => {
  let service: AppsProAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppsProAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

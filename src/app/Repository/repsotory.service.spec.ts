import { TestBed } from '@angular/core/testing';

import { RepsotoryService } from './repsotory.service';

describe('RepsotoryService', () => {
  let service: RepsotoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepsotoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

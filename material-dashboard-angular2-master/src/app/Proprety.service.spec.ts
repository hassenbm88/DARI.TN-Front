import { TestBed } from '@angular/core/testing';

import { PropretyService } from './Proprety.service';

describe('PropretyService', () => {
  let service: PropretyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropretyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

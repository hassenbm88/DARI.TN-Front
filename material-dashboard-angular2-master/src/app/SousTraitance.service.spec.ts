import { TestBed } from '@angular/core/testing';

import { SousTraitanceService } from './SousTraitance.service';

describe('SousTraitanceService', () => {
  let service: SousTraitanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousTraitanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SeptimaClaseService } from './septima-clase.service';

describe('SeptimaClaseService', () => {
  let service: SeptimaClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeptimaClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SistemaService } from './SistemaService';

describe('SistemaService', () => {
  let service: SistemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

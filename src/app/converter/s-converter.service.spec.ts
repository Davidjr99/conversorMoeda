import { TestBed } from '@angular/core/testing';

import { SConverterService } from './s-converter.service';

describe('SConverterService', () => {
  let service: SConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

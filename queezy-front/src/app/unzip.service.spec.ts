import { TestBed } from '@angular/core/testing';

import { UnzipService } from './unzip.service';

describe('UnzipService', () => {
  let service: UnzipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnzipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

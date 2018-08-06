import { TestBed, inject } from '@angular/core/testing';

import { CompressorService } from './compressor.service';

describe('CompressorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompressorService]
    });
  });

  it('should be created', inject([CompressorService], (service: CompressorService) => {
    expect(service).toBeTruthy();
  }));
});

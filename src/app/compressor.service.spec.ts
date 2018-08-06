import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CompressorService } from './compressor.service';

describe('CompressorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [CompressorService]
    });
  });

  it('should be created', inject([CompressorService], (service: CompressorService) => {
    expect(service).toBeTruthy();
  }));
});

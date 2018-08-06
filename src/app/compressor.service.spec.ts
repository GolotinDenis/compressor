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

  it('compress', inject([CompressorService], (service: CompressorService) => {
    expect(service.compress('aaaabbcddd')).toBe('a4bbcd3');
  }));
  it('compress', inject([CompressorService], (service: CompressorService) => {
    expect(service.compress('aaaaaaabbaacdddca')).toBe('a7bbaacd3ca');
  }));
  it('compress', inject([CompressorService], (service: CompressorService) => {
    expect(service.compress('bbbbaacccacccccbbaaaaaaaacd')).toBe('b4aac3ac5bba8cd');
  }));
  it('decompress', inject([CompressorService], (service: CompressorService) => {
    expect(service.decompress('a4dc16bba8cd')).toBe('aaaadccccccccccccccccbbaaaaaaaacd');
  }));
  it('decompress', inject([CompressorService], (service: CompressorService) => {
    expect(service.decompress('aadadadcaca3dbabbe')).toBe('aadadadcacaaadbabbe');
  }));
  it('decompress', inject([CompressorService], (service: CompressorService) => {
    expect(service.decompress('a4b4c4d4cc')).toBe('aaaabbbbccccddddcc');
  }));
});

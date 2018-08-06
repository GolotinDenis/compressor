import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CompressorComponent } from './compressor.component';

describe('CompressorComponent', () => {
  let component: CompressorComponent;
  let fixture: ComponentFixture<CompressorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [ CompressorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('compression', async(() => {
    fixture.detectChanges();
    component.inputString = 'aaaabbcddd';
    component.compress();
    expect(component.compressed).toBe('a4bbcd3');
  }));

  it('decompression', async(() => {
    fixture.detectChanges();
    component.compressed = 'a4bbcd3';
    component.decompress();
    expect(component.decompressed).toBe('aaaabbcddd');
  }));
});

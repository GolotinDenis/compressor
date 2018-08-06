import { Component } from '@angular/core';

import { CompressorService } from '../compressor.service';

@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.css'],
})
export class CompressorComponent {
  compressed: string;
  decompressed: string;
  oldInputString: string;
  inputString: string;

  constructor(private compressorService: CompressorService) { }

  inputOnKeyDown(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    if (/^[abcdef]*$/g.test(target.value)) {
      this.oldInputString = target.value;
    }
  }

  inputOnChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (!(/^[abcdef]*$/g.test(this.inputString))) {
      target.value = this.oldInputString;
      this.inputString = this.oldInputString;
    }
  }
  compress() {
    this.compressed = this.compressorService.compress(this.inputString);
  }
  decompress() {
    this.decompressed = this.compressorService.decompress(this.compressed);
  }
}

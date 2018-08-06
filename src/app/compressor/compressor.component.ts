import { Component } from '@angular/core';

import { CompressorService } from '../compressor.service';

@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.css'],
})
export class CompressorComponent {
  private oldInputString: string;

  public compressed: string;
  public decompressed: string;
  public inputString: string;

  constructor(private compressorService: CompressorService) { }

  public inputOnKeyDown(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    if (/^[abcdef]*$/g.test(target.value)) {
      this.oldInputString = target.value;
    }
  }

  public inputOnChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (!(/^[abcdef]*$/g.test(this.inputString))) {
      target.value = this.oldInputString;
      this.inputString = this.oldInputString;
    }
  }

  public compress() {
    this.compressed = this.compressorService.compress(this.inputString);
  }

  public decompress() {
    this.decompressed = this.compressorService.decompress(this.compressed);
  }
}

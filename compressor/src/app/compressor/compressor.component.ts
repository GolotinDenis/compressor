import { Component, OnInit } from '@angular/core';
import {CompressorService} from '../compressor.service'
@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.css']
})
export class CompressorComponent {
  compressed:string;
  decompressed: string;
  oldInputString: string;
  inputString: string;

  constructor(private compressorService:CompressorService) { }

  inputOnKeyDown(event) {
    if (/^[abcdef]*$/g.test(event.target.value)) this.oldInputString = event.target.value;
  }

  inputOnChange(event) {
    if (!(/^[abcdef]*$/g.test(this.inputString))) {
      event.target.value = this.oldInputString;
      this.inputString = this.oldInputString;
    }
  }
  compress(){
    this.compressed = this.compressorService.compress(this.inputString);
  }
  decompress(){
    this.decompressed = this.compressorService.decompress(this.compressed)
  }
}

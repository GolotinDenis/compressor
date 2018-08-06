import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompressorService {
  compress(plaint: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
    let result = '';
    alphabet.map((flag) => {
      const reg = RegExp(`${flag}*`, 'ig');
      const newString = plaint.replace(reg, (chortString) => {
        if (chortString.length > 2) {
          return chortString[0] + chortString.length;
        }
        return chortString;
      });
      result = newString;
    });
    return result;
  }

  decompress(compressString: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
    let result = '';
    alphabet.map((flag) => {
      const reg = RegExp(`${flag}[0-9]+`, 'ig');
      const newString = compressString.replace(reg, (chortString: String) => {
        return chortString[0].repeat(Number(chortString.substr(1)));
      });
      result = newString;
    });
    return result;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompressorService {
  compress(plaint: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
    let result = plaint;
    alphabet.map((flag) => {
      const reg = RegExp(`${flag}*`, 'ig');
      result = result.replace(reg, (chortString) => {
        if (chortString.length > 2) {
          return chortString[0] + chortString.length;
        }
        return chortString;
      });
    });
    return result;
  }

  decompress(compressString: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
    let result = compressString;
    alphabet.map((flag) => {
      const reg = RegExp(`${flag}[0-9]+`, 'ig');
      result = result.replace(reg, (chortString: String) => {
        return chortString[0].repeat(Number(chortString.substr(1)));
      });
    });
    return result;
  }
}

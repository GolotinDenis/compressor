import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class CompressorService {

  constructor() { }
  compress(plaint: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
    alphabet.map((flag) => {
      const reg = RegExp(`${flag}*`, 'ig');
      const newString = plaint.replace(reg, function (chortString) {
        if (chortString.length > 2) {
          return chortString[0] + chortString.length;
        }
        return chortString;
      });
      plaint = newString;
    });
    return plaint;
  }

  decompress(compressString) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
    alphabet.map((flag) => {
      let reg = RegExp(flag + '[0-9]+', 'ig')
      let newString = compressString.replace(reg, function (chortString: String) {
        return chortString[0].repeat(Number(chortString.substr(1)))
      })

      compressString = newString
    })
    return compressString
  }
}

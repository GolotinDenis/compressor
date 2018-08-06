import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const header = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompressorService {

  constructor(private http: HttpClient) { }

  login(email, password): Observable<any> {
    return this.http.post(
      'https://angulartestassignment.azurewebsites.net/signin',
      { email, password },
      header
    );
  }

  compress(plaint: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
    alphabet.map((flag) => {
      const reg = RegExp(`${flag}*`, 'ig');
      const newString = plaint.replace(reg, function(chortString) {
        if (chortString.length > 2) {
          return chortString[0] + chortString.length;
        }
        return chortString;
      });
      plaint = newString;
    });
    return plaint;
  }

  decompress(compressString: string): string {
    let plaint = '';
    for (const symbol of compressString) {
      if (Number(symbol)) {
        plaint = plaint + plaint[plaint.length - 1].repeat(Number(symbol) - 1);
      } else {
        plaint = plaint + symbol;
      }
    }
    return plaint;
  }
}

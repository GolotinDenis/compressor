import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
let header = {headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'Access-Control-Allow-Origin': '*'
})}
@Injectable({
  providedIn: 'root'
})
export class CompressorService {

  constructor(private http: HttpClient) { }

  login(email,password):Observable<any> {
    return this.http.post('https://angulartestassignment.azurewebsites.net/signin', {
      "email": email,
      "password": password
    },header)
  }

  compress(plaint:string):string{
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
    alphabet.map((flag)=>{
      let reg = RegExp(flag+'*','ig')
      let newString = plaint.replace(reg,function(chortString){
        
        if(chortString.length>2){
          return chortString[0]+chortString.length
        }
        return chortString
      })

      plaint = newString
    })
    return plaint
  }

  decompress(compressString){
    let plaint = ''
    for(let symbol of compressString){
      if(Number(symbol)) {
        plaint = plaint + plaint[plaint.length-1].repeat(Number(symbol - 1))
      }
      else {
        plaint = plaint + symbol
      }
    }
    return plaint
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

let header = {headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'Access-Control-Allow-Origin': '*'
})}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email,password):Observable<any> {
    return this.http.post('https://angulartestassignment.azurewebsites.net/signin', {
      "email": email,
      "password": password
    },header)
  }
}

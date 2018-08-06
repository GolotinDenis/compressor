import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const header = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public login(email, password): Observable<any> {
    return this.http.post(
      'https://angulartestassignment.azurewebsites.net/signin',
      { email, password },
      header,
    );
  }
}

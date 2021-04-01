import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer '
    });

    return this.http.get(environment.endpoints.baseUrl+ environment.endpoints.authorization+environment.endpoints.apikey);

  }
}

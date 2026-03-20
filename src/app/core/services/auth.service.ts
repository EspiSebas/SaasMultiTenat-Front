import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8080/auth";

  constructor(private http: HttpClient) {}

  login(credentials: any){
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }
  
  register(credentials: any){
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private isAuthenticated=false;

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:9999/api/users/';

  userLogin(emailId:string,password:string):Observable<any>{
        
        const body={emailId,password}
        return this.http.post<any>(this.apiUrl+'login',body);
   }

  logout(): void {
    localStorage.removeItem("userId");
    localStorage.removeItem('auth_token');
    this.isAuthenticated = false;
  }

  
  setAuthToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticatedUser(): boolean {
    const token = this.getAuthToken();
    return !!token;
  }
}

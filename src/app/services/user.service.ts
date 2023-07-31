import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(`${this.baseUrl}/user/getAllUserData`);
  }

  signUpUser(data: any) {
    const userData: any = { // Use the assignment operator '=' here instead of ':'
      userName: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      state: data.state,
      city: data.city
    };
    return this.http.post(`${this.baseUrl}/user/saveUser`, userData);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/forgotPassword?email=${email}`);
  }

  validateOtp(data: any){
    const userData: any = {
      email: data.email,
      otp: data.otp
    }
    return this.http.post(`${this.baseUrl}/user/validateOtp`, userData);
  }

  resetPassword(data: any){
    const userData: any = {
      email: data.email,
      password: data.password
    }
    return this.http.post(`${this.baseUrl}/user/resetPassword`, userData);
  }

}

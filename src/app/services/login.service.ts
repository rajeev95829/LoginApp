import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  //callong the server to genrate the token

  genrateToken(credentials:any){
    //token genrate
    return this.http.post(`${this.url}/api/token`, credentials)
  }


  constructor(private http:HttpClient) { }

  //for login user
  loginUser(token: string){
    localStorage.setItem("token",token)
    return true;
  }

  //To check that user login or not
  isLoggedIn()
  {
    let token = localStorage.getItem("token");
    if(token == undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  //for logout the user
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token");
  }
}

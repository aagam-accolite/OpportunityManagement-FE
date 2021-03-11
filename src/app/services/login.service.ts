import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {

  BASE_URL = "http://localhost:8080/";
  LOGIN = "user/addUser/";
  GET_USER_BY_EMAIL = "/user/getUserByEmail/";

  userEmail?: string;

  
  constructor(private http: HttpClient) { }

  public setUserId(userEmail: string) {
    this.userEmail = userEmail;
    localStorage.setItem('user', this.userEmail);
  }

  public getUserId() {
    return localStorage.getItem('user');
  }

  public loginFromRemote(user: User): Observable<any>{
    console.log(user);
    return this.http.post(this.BASE_URL + this.LOGIN, user);
  }

  public getUserByEmailFromRemote(email: string): Observable<any> {
    return this.http.get(this.BASE_URL + this.GET_USER_BY_EMAIL + email);
  }

  public getAll():Observable<any>{
    return this.http.get(this.BASE_URL+"user/getAll/");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable()
export class UserService {
  readonly rootUrl = 'https://localhost:7065/api/Users';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      username: user.username,
      password: user.password,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }
    return this.http.post(this.rootUrl, body);
  }

}
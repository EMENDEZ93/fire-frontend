import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

    public getUser(): Observable<User[]> {
      return this.http.get<User[]>('https://fire-backend.herokuapp.com/users');
    }
  }

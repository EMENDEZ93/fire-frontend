import { Injectable } from '@angular/core';
import { USERS } from './users.json';
import { User } from './user';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class UserService {

  constructor() {}

    getUser(): Observable<User[]> {
      return of(USERS);
    }
  }

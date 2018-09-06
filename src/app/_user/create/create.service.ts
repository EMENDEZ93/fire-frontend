import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../../user/user';

@Injectable()
export class CreateService {

  constructor(private http: HttpClient) { }

  public validate(user: User): boolean {
    let isValid = true;

    if (!user.nombre){
      isValid = false;
    }
    if (!user.phone){
      isValid = false;
    }

    return isValid;
  }

  public save(user: User): Observable<User> {

   const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

    return this.http.post<User>('https://fire-backend.herokuapp.com/user/save', JSON.stringify(user), httpOptions);
  }
}

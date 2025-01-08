import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id: 1, anme: "John Doe" },
    {id: 2, anme: "maria Doe" }
  ]

  constructor() { }

  getusers(){
    return of(this.users)
  }
}

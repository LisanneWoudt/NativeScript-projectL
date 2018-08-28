import {Injectable} from '@angular/core';
import {User} from '../../dto/user';

@Injectable()
export class DataService {

  user: User;

  constructor() {
  }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }
}

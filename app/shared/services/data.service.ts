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

  getMockUser() {
    this.user = new User();
    this.user.id = 1;
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }
}

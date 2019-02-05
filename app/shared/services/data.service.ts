import { Injectable } from '@angular/core';
import { User } from '../../dto/user';
import { SwapRequest } from '../../dto/swap-request';

@Injectable()
export class DataService {

  user: User;
  swapRequest: SwapRequest;

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

  getMockUserId() {
    return 1;
  }

  setUser(user: User) {
    this.user = user;
  }

  getSwapRequest() {
    return this.swapRequest;
  }

  setSwapRequest(swapRequest: SwapRequest) {
    this.swapRequest = swapRequest;
  }

}

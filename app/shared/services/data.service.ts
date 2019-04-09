import { Injectable } from '@angular/core';
import { User } from '../../dto/user';
import { SwapRequest } from '../../dto/swap-request';
import { Garment } from '../../dto/garment';

@Injectable()
export class DataService {

  user: User;
  swapRequest: SwapRequest;
  garment: Garment = new Garment();

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

  getGarment(){
    return this.garment;
  }

  setGarment(garment: Garment) {
    this.garment = garment;
  }

}

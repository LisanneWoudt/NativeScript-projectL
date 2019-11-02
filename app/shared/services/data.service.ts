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
    if (this.user != null) {
      return this.user;
    }
    else {
      return this.getMockUser();
    }

  }

  getMockUser() {
    this.user = new User();
    this.user.id =3;

    return this.user;
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

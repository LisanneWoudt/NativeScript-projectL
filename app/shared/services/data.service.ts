import { Injectable } from '@angular/core';
import { User } from '../../dto/user';
import { SwapRequest } from '../../dto/swap-request';
import { Garment } from '../../dto/garment';
import { Chat } from '../../dto/chat';
import {GarmentService} from './garment.service';

@Injectable()
export class DataService {

  user: User;
  swapRequest: SwapRequest;
  garment: Garment = new Garment();
  chat: Chat = new Chat();
  error: string;
  garmentCategories: string[] = new Array();
  categoryMap: Map<string, string>;

  constructor(private garmentService: GarmentService) {
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

  getChat() {
    return this.chat;
  }

  setChat(chat: Chat) {
    this.chat = chat;
  }

  getCategoryMap() {
    return this.categoryMap;
  }
  getGarmentCategories() {
    return this.garmentCategories;
  }

  setGarmentCategories() {
    if (this.garmentCategories.length == 0) {
      this.garmentService.getGarmentTypes().subscribe(data => {
        this.categoryMap = data;

        for (let cat in this.categoryMap) {
          this.garmentCategories.push(this.categoryMap[cat]);
        }
      }, error => {
            console.log("error while getting garmentTypes:" + error);
      })
    }
  }

  setError(error: string) {
    this.error = error;
  }

  getError() {
    return this.error;
  }
}

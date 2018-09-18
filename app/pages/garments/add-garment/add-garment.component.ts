import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {Pant} from '../../../dto/pant';
import { User } from '../../../dto/user';
import { Shirt } from '../../../dto/shirt';
import {GarmentService} from '../../../shared/services/garment.service';
import {DataService} from '../../../shared/services/data.service';
import {Router} from '@angular/router';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
    selector: "app-add-garment",
    moduleId: module.id,
    templateUrl: "./add-garment.component.html"
})

export class AddGarmentComponent implements OnInit {

 garment: Garment = new Garment();
 pant: Pant = new Pant();
 shirt: Shirt = new Shirt();
 currentUser: User = new User();
 selectedIndex: number;
 categories: String[] = ["Pant", "Shirt"];
 categorySelected: Boolean = false;
 pantSelected: Boolean = false;
 shirtSelected: Boolean = false;
 result: number;

 @ViewChild('dd') dropDown: ElementRef;

  constructor(private garmentService: GarmentService, private dataService: DataService,
    private router: Router) {
  }

  ngOnInit() {
  }

  public onchange(args: SelectedIndexChangedEventData) {
    this.categorySelected = true;
    if (args.newIndex == 0) {
        this.pantSelected = true;
        this.shirtSelected = false;
    }
    if (args.newIndex == 1) {
      this.shirtSelected = true;
      this.pantSelected = false;
    }
    if (args.newIndex == null) {
      this.shirtSelected = true;
      this.pantSelected = true;
    }
  }

  addGarment(garment: Garment, pant: Pant, shirt: Shirt) {
    if (!this.shirtSelected && !this.pantSelected) {
      alert({title: "Type missing",
        message: "Please select a garment type",
        okButtonText: "Ok"});
      return;
    }
    if (!this.checkFormFilled(garment, pant, shirt)) {
      alert({title: "Field(s) empty",
        message: "Please fill all input fields",
        okButtonText: "Ok"});
      return;
    }

    this.currentUser = this.dataService.getMockUser();

    if (this.pantSelected == true) {
      this.pant.name = garment.name;
      this.pant.brand = garment.brand;
      this.pant.userId = this.currentUser.id;
      this.pant.waistSize = pant.waistSize;
      this.pant.waistLength = pant.waistLength;
      console.log(this.pant);

        this.garmentService.addPant(this.pant).subscribe(data => {
          this.responseSuccess();
        }, errorResponse => {
          this.responseError();
        })
    }

    else if (this.shirtSelected) {
      this.shirt.name = garment.name;
      this.shirt.brand = garment.brand;
      this.shirt.userId = this.currentUser.id;
      this.shirt.size = shirt.size;
      console.log(this.shirt);

      this.garmentService.addShirt(this.shirt).subscribe(data => {
        this.responseSuccess();
      }, errorResponse => {
         this.responseError();
      })
    }
  }

  checkFormFilled(garment: Garment, pant: Pant, shirt: Shirt) {
    console.log(garment);
    console.log(pant);
    console.log(shirt);
    if (!garment.name || !garment.brand) {
      return false;
    }
    if (this.shirtSelected) {
      if (!shirt.size) {
        console.log(shirt);
        return false;
      }
    }
    else if (this.pantSelected) {
      if (!pant.waistSize || !pant.waistLength) {
        return false;
      }
    }
    return true;
  }

  responseSuccess() {
    this.result = 1;
    this.router.navigate(['/home/' + this.result]);
  }

  responseError() {
    console.log('Something went wrong');
  }
}

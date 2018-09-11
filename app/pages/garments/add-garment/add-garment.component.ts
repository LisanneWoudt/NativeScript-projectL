import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {Pant} from '../../../dto/pant';
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

  addGarment(garment: Garment) {
    this.garment = garment;
    this.garment.userId = 1;
    this.garment.user = this.dataService.getMockUser();
    this.pant.name = garment.name;
    this.pant.user = this.dataService.getMockUser();
    this.pant.userId = 1;
    this.garmentService.addGarment(this.pant).subscribe(data => {
      this.result = 1;
      this.router.navigate(['/home/' + this.result]);
    }, errorResponse => {
      console.error(errorResponse);
      this.result = 0;
      this.router.navigate(['/error']);
    });
  }
}

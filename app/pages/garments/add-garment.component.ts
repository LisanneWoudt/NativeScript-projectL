import { Component, OnInit } from '@angular/core';
//import {Garment} from '../../dto/garment';
//import {GarmentService} from '../../../shared/services/garment.service';
// import {Router} from '@angular/router';

@Component({
    selector: "app-add-garment",
    moduleId: module.id,
    templateUrl: "./add-garment.component.html"
})

export class AddGarmentComponent implements OnInit {

//  garmentToAdd: Garment = new Garment();

  constructor(
    //private garmentService: GarmentService,
  //   private router: Router
   ) { }

  ngOnInit() {
  }

  // addGarment(garment: Garment) {
    // this.garmentToAdd = garment;
    // this.garmentService.addGarment(this.garmentToAdd).subscribe(data => {
    //   console.log(data);
    // }, errorResponse => {
    //   console.error(errorResponse);
    //   this.router.navigate(['/error']);
    // });
  //}
}

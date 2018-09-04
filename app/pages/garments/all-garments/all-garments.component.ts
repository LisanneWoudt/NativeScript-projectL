import { Component, OnInit } from '@angular/core';
import {Garment} from '../../../dto/garment';
 import {GarmentService} from '../../../shared/services/garment.service';
import {Router} from '@angular/router';

@Component({
    selector: "app-all-garments",
    moduleId: module.id,
    templateUrl: "./all-garments.component.html",
    styleUrls: ["../../home/home.component.css"]
})

export class AllGarmentsComponent implements OnInit {

 garments: Garment[] = new Array;

  constructor(private garmentService: GarmentService, private router: Router) { }

  ngOnInit() {
   this.getAllGarments();
  }

  getAllGarments() {
    this.garmentService.getAllGarments().subscribe(data => {
      console.log(data);
    this.garments = data;
    }, errorResponse => {
      console.error(errorResponse);
      this.router.navigate(['/error']);
    });
  }

  navigateToSendSwap(garmentId: number) {
    console.log('garmentId = ' + garmentId);
    this.router.navigate(['/swap-request', garmentId])
  }
}

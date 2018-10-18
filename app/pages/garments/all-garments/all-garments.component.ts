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
 garmentsFinal: Garment[] = new Array;
 imageSrc: any;
 previewSize: number = 100;
 count: number;
 isBusy: boolean = true;

  constructor(private garmentService: GarmentService, private router: Router) { }

  ngOnInit() {
   this.getAllGarments();
  }

  getAllGarments() {
    this.garmentService.getAllGarments().subscribe(data => {
      console.log(data);
      this.garments = data;

      for (let int in this.garments) {

        this.count = +int;
        console.log(this.count);
        console.log(this.count + 1);
        this.search(this.garments[this.count].id, this.count, this.garments.length);
      }
      this.isBusy = false;
    }, errorResponse => {
      console.error(errorResponse);
    //  this.router.navigate(['/error']);
    });
  }


  search(garmentId: number, int: number, length: number) {
    console.log("searching with garmentID = " + garmentId);
    const httpModule = require("http");
    httpModule.getImage("http://192.168.178.18:8080/images/download/" + garmentId).then(
        res => { // Success
         console.log('success');
        this.garments[int].image = res;
        this.imageSrc = res;

         if (int == length) {
           this.isBusy = false;
         }
         return res;
        },
        msg => { // Error
         console.log("error!")
        }
      )
   }


  navigateToSendSwap(garmentId: number) {
    console.log('garmentId = ' + garmentId);
    this.router.navigate(['/swap-request', garmentId])
  }

}

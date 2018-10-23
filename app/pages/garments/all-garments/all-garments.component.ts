import { Component, OnInit } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {GarmentService} from '../../../shared/services/garment.service';
import {ImageService} from '../../../shared/services/image.service';
import {Router} from '@angular/router';

@Component({
    selector: "app-all-garments",
    moduleId: module.id,
    templateUrl: "./all-garments.component.html",
    styleUrls: ["../../home/home.component.css"]
})

export class AllGarmentsComponent implements OnInit {

 garments: Garment[] = new Array;
 promises: Array<any> = new Array;

 imageSrc: any;
 // Thumbsize/previewSize magically makes spinner on item stop when loaded
 thumbSize: number = 120;
 previewSize: number = 120;
 count: number;
 processing: boolean;

  constructor(private garmentService: GarmentService, private router: Router,
    private imageService: ImageService) { }

  ngOnInit() {
  // this.getAllGarments();
  }

  getAllGarments() {
    this.processing = true;
    this.garmentService.getAllGarments().subscribe(data => {
      console.log(data);
      this.garments = data;

      for (let int in this.garments) {
        this.count = +int;
        this.promises.push(this.search(this.garments[this.count].id, this.count));
      }

      Promise.all(this.promises)
      .then(res => {
        console.log('All promises returned');
      //  this.processing = false;
      }, error => {
      console.log('Error')
      })

    }, errorResponse => {
      console.error(errorResponse);
    //  this.router.navigate(['/error']);
    });
  }

  search(garmentId: number, int: number) {
    console.log("searching with garmentID = " + garmentId);

    this.imageService.downloadImage(garmentId).then(
        res => {
        console.log('success');
        this.garments[int].image = res;
        this.imageSrc = res;
        return res;
        },
        msg => {
         console.log("error!")
        }
      )
   }


  navigateToSendSwap(garmentId: number) {
    console.log('garmentId = ' + garmentId);
    this.router.navigate(['/swap-request', garmentId])
  }

}

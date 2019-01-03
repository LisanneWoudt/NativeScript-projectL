import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {GarmentService} from '../../../shared/services/garment.service';
import {ImageService} from '../../../shared/services/image.service';
import {Router} from '@angular/router';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

@Component({
    selector: "app-garment-overview",
    moduleId: module.id,
    templateUrl: "./garment-overview.component.html"
})

export class GarmentOverviewComponent implements OnInit {

  garments: Garment[] = new Array;
  promises: Array<any> = new Array;
  sizes: String[] = new Array;

  imageSrc: any;
  //Thumbsize/previewSize magically makes spinner on item stop when loaded
  thumbSize: number = 120;
  previewSize: number = 120;
  count: number;
  processing: boolean;
  userId: number;
  garmentFilter: any = {};

  @Input('garmentsUrl') garmentsUrl: string;

  constructor(private garmentService: GarmentService, private imageService: ImageService,
    private router: Router) { }

  ngOnInit() {
   this.userId = 1;
   this.sizes = ["XS", "S"];
   this.getAllGarments();
  }

  getAllGarments() {
    this.processing = true;
    this.garmentService.getAllGarments(this.garmentsUrl, this.userId).subscribe(data => {
      console.log(data);
      this.garments = data;

      for (let int in this.garments) {
        this.count = +int;
        this.promises.push(this.search(this.garments[this.count].id, this.count));
      }

      Promise.all(this.promises)
      .then(res => {
      //  this.processing = false;
      }, error => {
      console.log('Error')
      })

    }, errorResponse => {
      console.error(errorResponse);
    //  this.router.navigate(['/error']);
    });
  }

  filterGarmentsOnSize(size: string) {
    if (!size || size == this.garmentFilter["size"]) {
      this.garmentFilter = {}
    }
    else {
      this.garmentFilter = {size: size};
    }

  }

  search(garmentId: number, int: number) {
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

   toGarmentDetail(garmentId: number) {
     this.router.navigate(['/garment/', garmentId])
   }


}

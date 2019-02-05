import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Garment} from '../../../dto/garment';
import { SwapRequest } from '../../../dto/swap-request'
import {GarmentService} from '../../../shared/services/garment.service';
import {ImageService} from '../../../shared/services/image.service';
import { DataService } from '../../../shared/services/data.service';
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
  selectedSizes: String[] = new Array;

  imageSrc: any;
  //Thumbsize/previewSize magically makes spinner on item stop when loaded
  thumbSize: number = 120;
  previewSize: number = 120;
  count: number;
  processing: boolean;
  userId: number;
  garmentFilter: any = {};
  swapRequest: SwapRequest;

  @Input('garmentsUrl') garmentsUrl: string;
  @Input('garmentId') swapGarmentId: number = 0;

  constructor(private garmentService: GarmentService, private imageService: ImageService,
    private router: Router, private dataService: DataService) { }

  ngOnInit() {
   this.userId = 1;
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
      }, error => {
        console.log('Error:' + error);
        this.router.navigate(['/error']);
      })
    }, errorResponse => {
      console.log('Error:' + errorResponse);
      this.router.navigate(['/error']);
    });
  }

  filterGarmentsOnSize(size: string) {
    if (!size || this.selectedSizes.includes(size)) {
      this.selectedSizes = this.selectedSizes.filter(obj => obj !== size);
      if (this.selectedSizes.length == 0) {
        this.garmentFilter = {};
      }
      else {
       this.garmentFilter = {size: this.selectedSizes};
      }
    }
    else {
      this.selectedSizes.push(size);
      this.garmentFilter = {size: this.selectedSizes};
    }
  }

  filterGarmentsOnUser(userId: number) {
    console.log("filter garments on userid " + userId);
    this.garmentFilter = {userId: [userId]};
  }

  search(garmentId: number, int: number) {
    this.imageService.downloadImage(garmentId).then(
        res => {
          this.garments[int].image = res;
          this.imageSrc = res;
          return res;
        },
        msg => {
         console.log('Error:' + msg);
         this.router.navigate(['/error']);
        }
      )
   }

   toGarmentDetail(garmentId: number) {
     this.swapRequest = this.dataService.getSwapRequest();
     this.swapRequest.garmentInReturnId = garmentId;
     this.dataService.setSwapRequest(this.swapRequest);
     this.router.navigate(['/garment/', garmentId])
   }

}

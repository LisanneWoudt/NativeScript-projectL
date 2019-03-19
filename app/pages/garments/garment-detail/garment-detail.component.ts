import { Component, OnInit } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {Router, ActivatedRoute} from '@angular/router';
import {GarmentService} from '../../../shared/services/garment.service';
import {ImageService} from '../../../shared/services/image.service';
import {DataService} from '../../../shared/services/data.service';

@Component({
    selector: "app-garment-detail",
    moduleId: module.id,
    templateUrl: "./garment-detail.component.html"
})

export class GarmentDetailComponent implements OnInit {

  private sub: any;
  garment: Garment;
  garmentId: number;
  garmentSwapId: number;

  imageSrc: any;
  //Thumbsize/previewSize magically makes spinner on item stop when loaded
  thumbSize: number = 200;
  previewSize: number = 200;

  constructor(private router: Router, private route: ActivatedRoute,
    private garmentService: GarmentService, private imageService: ImageService,
    private dataService: DataService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.garmentId = +params['garmentId']; // (+) converts string 'id' to a number
     });

     this.garmentService.getGarment(this.garmentId).subscribe(data => {
       this.garment = data;
       this.checkSize();

       this.imageService.downloadImage(this.garmentId).then(
           res => {
             console.log('success');
             this.garment.image = res;
             this.imageSrc = res;
             return res;
           },
           msg => {
             console.log("error!")
           }
         )
     })

     if (this.dataService.getSwapRequest()) {
       this.garmentSwapId = this.dataService.getSwapRequest().id;
       console.log('garment swap id: ' + this.garmentSwapId);
     }

  }

  checkSize() {
    if (!this.garment.size) {
      if(this.garment.pantLength) {
        this.garment.size = this.garment.pantWaist + '-' + this.garment.pantLength;
      }
      else {
        this.garment.size = this.garment.pantWaist;
      }
    }
  }

  toSwapRequest(garmentId: number) {
    this.router.navigate(['/swap-request/', garmentId]);
  }

  toSwapReturnRequest(garmentId: number) {
    this.router.navigate(['/swap-return-request'])
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

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

       this.imageService.downloadImage(this.garmentId).then(
           res => {
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

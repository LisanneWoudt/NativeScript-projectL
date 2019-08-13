import { Component, OnInit } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {SwapRequest} from '../../../dto/swap-request';
import {Router, ActivatedRoute} from '@angular/router';
import {GarmentService} from '../../../shared/services/garment.service';
import {ImageService} from '../../../shared/services/image.service';
import {DataService} from '../../../shared/services/data.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-garment-detail",
    moduleId: module.id,
    templateUrl: "./garment-detail.component.html"
})

export class GarmentDetailComponent implements OnInit {

  private sub: any;
  garment: Garment = new Garment();
  garmentId: number;
  userId: number;
  garmentSwapId: number;
  previewSize: number = 200;
  swapRequest: SwapRequest;

  constructor(private router: Router, private route: ActivatedRoute,
    private garmentService: GarmentService, private imageService: ImageService,
    private dataService: DataService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.garmentId = +params['garmentId']; // (+) converts string 'id' to a number
       this.userId = this.dataService.getMockUserId();
     });

     this.garmentService.getGarment(this.garmentId).subscribe(data => {
       this.garment = data;

       this.imageService.downloadImage(this.garmentId).then(
           res => {
             this.garment.image = res;
             return res;
           },
           msg => {
             console.log("error in downloading image")
           }
         )
     })
     if (this.dataService.getSwapRequest()) {
       this.garmentSwapId = this.dataService.getSwapRequest().id;
     }
  }

  confirmDeleteGarment(garmentId: number) {
   dialogs.confirm({
      title: "Delete item",
      message: "Are you sure you want to delete this item",
      okButtonText: "OK",
      cancelButtonText: "Cancel"
    }).then(result => {
       if (result) {
         this.deleteGarment(garmentId);
       }
    });
  }

  deleteGarment(garmentId: number) {
    this.garmentService.deleteGarment(garmentId).subscribe(data => {
    this.router.navigate(['/home']);
    }, errorResponse => {
       console.log('Error in delete:' + errorResponse);
       this.router.navigate(['/error']);
     });
  }

  toSwapRequest(garmentId: number) {
    this.router.navigate(['/swap-request/', garmentId]);
  }

  toSwapReturnRequest(garmentId: number){
    this.swapRequest = this.dataService.getSwapRequest();
    this.swapRequest.garmentInReturnId = garmentId;
    this.dataService.setSwapRequest(this.swapRequest);
    this.router.navigate(['/swap-return-request'])
  }

  toEditGarment(garment: Garment) {
    this.dataService.setGarment(garment);
    this.router.navigate(['garments/edit'])
  }
  navigateBack() {
    if (!this.garmentSwapId && this.userId != this.garment.userId) {
      this.router.navigate(['/garments/all']);
    }
    else if (this.garmentSwapId){
      this.router.navigate(['/swap-requests/return-garment/' + this.garment.userId]);
    }
    else {
      this.router.navigate(['/home']);
    }
  }

}

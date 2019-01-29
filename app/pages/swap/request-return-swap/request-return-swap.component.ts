import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Garment } from '../../../dto/garment';
import { SwapRequest } from '../../../dto/swap-request';
import { User } from '../../../dto/user';
import { GarmentService } from '../../../shared/services/garment.service';
import { DataService } from '../../../shared/services/data.service';
import { SwapService } from '../../../shared/services/swap.service';
import { ImageService } from '../../../shared/services/image.service';

@Component({
    selector: "app-request-return-swap",
    moduleId: module.id,
    templateUrl: "./request-return-swap.component.html"
})

export class RequestReturnSwapComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private garmentService: GarmentService, private dataService: DataService,
    private swapService: SwapService, private imageService: ImageService) { }

  garmentId: number;
  garmentInReturnId: number;
  currentUser: User;
  private sub: any;
  garment: Garment = new Garment();
  garmentInReturn: Garment = new Garment();
  swapRequest: SwapRequest = new SwapRequest();
  thumbSize: number = 40;
  previewSize: number = 80;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.garmentId = +params['garmentId']; // (+) converts string 'id' to a number
       this.garmentInReturnId = +params['garmentInReturnId']
       this.getSelectedGarment(this.garmentId, 'garment');
       this.getSelectedGarment(this.garmentInReturnId, 'garmentInReturn');
    });
  }

  getSelectedGarment(id: number, type: string) {
    this.garmentService.getGarment(id).subscribe(data => {

      if (type == 'garment') {
        this.garment = data;
      } else {
          this.garmentInReturn = data;
      }

      this.imageService.downloadImage(id).then(
          res => {
            if (type == 'garment') {
              this.garment.image = res;
            } else {
                this.garmentInReturn.image = res;
            }
            return res;
          },
          msg => {
            console.log("error!")
          }
       )
    }, errorResponse => {
        console.error(errorResponse);
        this.router.navigate(['/error']);
      })
  }

  sendSwapRequest(swapRequest: SwapRequest){
      this.swapRequest = swapRequest;
      this.swapRequest.garmentId = this.garmentId;
      this.swapRequest.garmentInReturnId = this.garmentInReturnId;

      this.swapService.sendSwapRequest(this.swapRequest).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  navigateBack() {
     this.router.navigate(['/garment', this.garmentId]);
  }

}

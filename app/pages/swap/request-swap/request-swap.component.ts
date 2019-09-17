import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Garment } from '../../../dto/garment';
import { SwapRequest } from '../../../dto/swap-request';
import { User } from '../../../dto/user';
import { GarmentService } from '../../../shared/services/garment.service';
import { DataService } from '../../../shared/services/data.service';
import { SwapService } from '../../../shared/services/swap.service';
import { ImageService } from '../../../shared/services/image.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-request-swap",
    moduleId: module.id,
    templateUrl: "./request-swap.component.html"
})

export class RequestSwapComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private garmentService: GarmentService, private dataService: DataService,
    private swapService: SwapService, private imageService: ImageService) { }

  garmentId: number;
  currentUser: User;
  private sub: any;
  garment: Garment = new Garment();
  swapRequest: SwapRequest = new SwapRequest();
  previewSize: number = 120;
  imageSrc: any;
  userGarments: Garment[];

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.garmentId = +params['id']; // (+) converts string 'id' to a number
       this.getSelectedGarment(this.garmentId);
    });
  }

  getSelectedGarment(id: number) {
    this.garmentService.getGarment(id).subscribe(data => {
      console.log(data);
      this.garment = data;
      this.imageService.downloadCompressedImage(this.garmentId).then(
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

    }, errorResponse => {
      console.log("ERROR");
      console.error(errorResponse);
      //    this.router.navigate(['/error']);
      })
  }

  sendSwapRequest(swapRequest: SwapRequest){
      this.swapRequest = swapRequest;
      this.swapRequest.garmentId = this.garmentId;
      this.currentUser = this.dataService.getUser();
      this.swapRequest.receivedFromId = this.currentUser.id;
      this.swapRequest.status = 'NEW';
      this.swapService.sendSwapRequest(this.swapRequest).subscribe(data => {
        this.responseSuccess();
      }, error => {
        console.log(error);
      })
  }

  responseSuccess() {
    dialogs.alert({
        title: "Request send",
        message: "Swap request has been send!",
        okButtonText: "OK"
    }).then(() => {
         this.dataService.setSwapRequest(new SwapRequest())
         this.navigateToOpenRequests();
    });
  }

  navigateToOpenRequests() {
     this.router.navigate(['/swap-requests/open/' + this.currentUser.id]);
  }

  navigateBack() {
     this.router.navigate(['/garment', this.garmentId]);
  }

}

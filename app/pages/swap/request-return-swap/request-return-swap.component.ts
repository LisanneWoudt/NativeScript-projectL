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

  currentUser: User = new User();
  garment: Garment = new Garment();
  garmentInReturn: Garment = new Garment();
  swapRequest: SwapRequest = new SwapRequest();
  previewSize: number = 80;

  ngOnInit() {
    this.swapRequest = this.dataService.getSwapRequest();
    this.getSelectedGarment(this.swapRequest.garmentId, 'garment');
    this.getSelectedGarment(this.swapRequest.garmentInReturnId, 'garmentInReturn');
    this.currentUser = this.dataService.getMockUser();
  }

  getSelectedGarment(id: number, type: string) {
    this.garmentService.getGarment(id).subscribe(data => {

      if (type == 'garment') {
        this.garment = data;
      } else {
          this.garmentInReturn = data;
      }

      this.imageService.downloadCompressedImage(id).then(
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

  sendSwapRequest(){
      this.swapRequest.status = "PROCESSING";
      this.swapService.updateSwapRequest(this.swapRequest).subscribe(data => {
        this.navigateToOpenRequests();
      }, error => {
        console.log(error);
      })
  }

  navigateBack() {
     this.router.navigate(['/garment', this.swapRequest.garmentId]);
  }

  navigateToOpenRequests() {
    console.log(this.currentUser);
    this.router.navigate(['/swap-requests/open/', this.currentUser.id]);
  }

}

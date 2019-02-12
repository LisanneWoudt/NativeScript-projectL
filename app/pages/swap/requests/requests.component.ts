import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { ReceivedRequest } from '../../../dto/received-request';
import { SwapRequest } from '../../../dto/swap-request';
import { SwapService } from '../../../shared/services/swap.service';
import { UserService } from '../../../shared/services/user.service';
import { ImageService } from '../../../shared/services/image.service';
import { DataService } from '../../../shared/services/data.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-requests",
    moduleId: module.id,
    templateUrl: "./requests.component.html"
})

export class RequestsComponent implements OnInit {

  sub: any;
  userId: number;
  swapRequests: ReceivedRequest[] = new Array;
  requestsNewAndUpdated: ReceivedRequest[] = new Array;
  requestsProcessing: ReceivedRequest[] = new Array;
  requestsDone: ReceivedRequest[] = new Array;
  previewSize: number = 60;

  constructor(private route: ActivatedRoute, private router: Router, private swapService: SwapService,
    private userService: UserService, private imageService: ImageService,
    private dataService: DataService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['userid']; // (+) converts string 'id' to a number
       this.getSwapRequests();
    });
  }

  getSwapRequests() {
    this.swapService.getUserSwapRequests(this.userId).subscribe(data => {
      this.swapRequests = data;
      this.getExtraRequestData();
    }, errorResponse => {
      console.log("ERROR");
      })
  }

  getSwapRequestsByStatus(receivedRequest: ReceivedRequest) {
     if (receivedRequest.status == 'NEW' || (receivedRequest.status == 'PROCESSING' && this.userId == receivedRequest.receivedFromId)) {
       this.requestsNewAndUpdated.push(receivedRequest);
     }
     else if (receivedRequest.status == 'PROCESSING' && this.userId != receivedRequest.receivedFromId) {
       this.requestsProcessing.push(receivedRequest);
     }
     else if (receivedRequest.status == 'DONE') {
       this.requestsDone.push(receivedRequest);
     }
  }

  getExtraRequestData() {
    this.swapRequests.forEach((item, index) => {

    this.userService.getUser(item.receivedFromId).subscribe(data => {
      item.receivedFromUser = data.name;

      this.imageService.downloadImage(item.garmentId).then(
        res => {
          item.garmentImage = res;
          return res;
        },
        msg => {
         console.log("error!")
        })

     if (item.garmentInReturnId != null) {
       this.imageService.downloadImage(item.garmentInReturnId).then(
         res => {
           item.garmentInReturnImage = res;
           return res;
         },
         msg => {
          console.log("error!")
         })
       }
    })

    this.getSwapRequestsByStatus(item);
  });
  }

  pickSwapReturnGarment(swapRequest: SwapRequest) {
    this.dataService.setSwapRequest(swapRequest);
    this.router.navigate(['/swap-requests/return-garment/' + this.userId]);
  }

  acceptRequest(swapRequest: SwapRequest) {
    swapRequest.status = 'DONE';

    this.swapService.updateSwapRequest(swapRequest).subscribe(response => {

      dialogs.alert({
          title: "Swap swap swap",
          message: "You reached a swap agreement!",
          okButtonText: "OK"
      }).then(() => {
          this.router.navigate(['home']);
      });

    }, errorResponse => {
        console.log("ERROR");
        this.router.navigate(['/error']);
    })
  }

  rejectRequest(swapRequest: SwapRequest) {
    swapRequest.status = 'NEW';
    swapRequest.messageInReturn = '';
    swapRequest.garmentInReturnId = null;
    this.swapService.updateSwapRequest(swapRequest).subscribe(response => {

      dialogs.alert({
          title: "No swap",
          message: "You have declined the swap request",
          okButtonText: "OK"
      }).then(() => {
        this.router.navigate(['home']);
      });

    }, error => {
      console.log("ERROR");
      this.router.navigate(['/error']);
    });
  }

  checkUserDetails(userId: number) {
    console.log(userId);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

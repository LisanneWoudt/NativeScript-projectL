import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { ReceivedRequest } from '../../../dto/received-request';
import { SwapService } from '../../../shared/services/swap.service';
import { UserService } from '../../../shared/services/user.service';
import { ImageService } from '../../../shared/services/image.service';

@Component({
    selector: "app-requests",
    moduleId: module.id,
    templateUrl: "./requests.component.html"
})

export class RequestsComponent implements OnInit {

  @Input('sendOrReceived') sendOrReceived: string;

  sub: any;
  userId: number;
  receivedRequests: ReceivedRequest[] = new Array;
  receivedRequestsNew: ReceivedRequest[] = new Array;
  receivedRequestsProcessing: ReceivedRequest[] = new Array;
  receivedRequestsDone: ReceivedRequest[] = new Array;
  previewSize: number = 60;
  swapUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private swapService: SwapService,
    private userService: UserService, private imageService: ImageService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['userid']; // (+) converts string 'id' to a number
       this.setSwapUrl();
       this.getSwapRequests();
    });
  }

  getSwapRequests() {
    this.swapService.getUserSwapRequests(this.swapUrl, this.userId).subscribe(data => {
      this.receivedRequests = data;
      this.getExtraRequestData();
    }, errorResponse => {
      console.log("ERROR");
      })
  }

  getSwapRequestsByStatus(receivedRequest: ReceivedRequest) {
     if (receivedRequest.status == 'NEW') {
       this.receivedRequestsNew.push(receivedRequest);
     }
     else if (receivedRequest.status == 'PROCESSING') {
       this.receivedRequestsProcessing.push(receivedRequest);
     }
     else if (receivedRequest.status == 'DONE') {
       this.receivedRequestsDone.push(receivedRequest);
     }
  }

  getExtraRequestData() {
    this.receivedRequests.forEach((item, index) => {

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


  setSwapUrl() {
    if (this.sendOrReceived == 'send') {
      this.swapUrl = 'send/';
    }
    else {
      this.swapUrl = 'received/';
    }
  }

  pickSwapReturnGarment(receivedFromId: number, garmentId: number) {
    this.router.navigate(['/swap-requests/return-garment/' + receivedFromId + garmentId]);
  }

}

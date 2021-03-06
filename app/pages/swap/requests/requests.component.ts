import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { ReceivedRequest } from '../../../dto/received-request';
import { SwapRequest } from '../../../dto/swap-request';
import { Chat } from '../../../dto/chat';
import { SwapService } from '../../../shared/services/swap.service';
import { UserService } from '../../../shared/services/user.service';
import { ImageService } from '../../../shared/services/image.service';
import { ChatService } from '../../../shared/services/chat.service';
import { DataService } from '../../../shared/services/data.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-requests",
    moduleId: module.id,
    templateUrl: "./requests.component.html"
})

export class RequestsComponent implements OnInit {

  @Input('showHistory') showHistory: boolean;

  sub: any;
  userId: number;
  swapRequests: ReceivedRequest[] = new Array;
  requestsNew: ReceivedRequest[] = new Array;
  requestsSend: ReceivedRequest[] = new Array;
  requestsProcessing: ReceivedRequest[] = new Array;
  requestsDone: ReceivedRequest[] = new Array;
  previewSize: number = 60;
  userGarmentIds: number[] = new Array;

  constructor(private route: ActivatedRoute, private router: Router, private swapService: SwapService,
    private userService: UserService, private imageService: ImageService,
    private dataService: DataService, private chatService: ChatService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['userid']; // (+) converts string 'id' to a number
       this.getSwapRequests();
       this.getUserGarmentIds();
    });
  }

  getUserGarmentIds() {
    this.userService.getUserGarmentIds(this.userId).subscribe(data => {
      this.userGarmentIds = data;
    }, errorResponse => {
      console.log("ERROR in getUserGarmentIds");
      console.log(errorResponse);
      })
  }

  getSwapRequests() {
    this.swapService.getUserSwapRequests(this.userId).subscribe(data => {
      this.swapRequests = data;
      this.sortDataByDate();
      this.getExtraRequestData();
    }, errorResponse => {
      console.log("ERROR in getExtraRequestData");
      })
  }

  getSwapRequestsByStatus(receivedRequest: ReceivedRequest) {
     if (receivedRequest.status == 'NEW' && this.userId != receivedRequest.receivedFromId
        && this.userGarmentIds.indexOf(receivedRequest.garmentId) > -1) {
       this.requestsNew.push(receivedRequest);
     }
     else if (receivedRequest.status == 'NEW' && this.userId == receivedRequest.receivedFromId) {
       this.requestsSend.push(receivedRequest);
     }
     else if (receivedRequest.status == 'PROCESSING' && this.userId == receivedRequest.receivedFromId) {
       this.requestsProcessing.push(receivedRequest);
     }
     else if (receivedRequest.status == 'PROCESSING' && this.userId != receivedRequest.receivedFromId) {
       this.requestsSend.push(receivedRequest);
     }
     else if (receivedRequest.status == 'DONE') {
       this.requestsDone.push(receivedRequest);
     }
  }

  getExtraRequestData() {
    this.swapRequests.forEach((item, index) => {

    this.userService.getUser(item.receivedFromId).subscribe(data => {
      item.receivedFromUser = data.name;

      this.imageService.downloadCompressedImage(item.garmentId).then(
        res => {
          item.garmentImage = res;
          return res;
        },
        msg => {
         console.log("error!")
        })

     if (item.garmentInReturnId != null) {
       this.imageService.downloadCompressedImage(item.garmentInReturnId).then(
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
          this.router.navigate(['/swap-requests/history/' + this.userId]);
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
        this.router.navigate(['/home']);
      });

    }, error => {
      console.log(error);
      this.router.navigate(['/error']);
    });
  }

  tabIndexChanged(event: any, leavingPage: boolean) {
    if (leavingPage || event.oldIndex == 0) {
      for (let request of this.requestsNew) {
        if (request.statusUpdated == true) {
          this.updateSwapRequestStatusBool(request.id);
        }
      }
    }
    if (leavingPage || event.oldIndex == 1) {
      for (let request of this.requestsProcessing) {
        if ((this.userId == request.receivedFromId) && request.statusUpdated == true) {
          this.updateSwapRequestStatusBool(request.id);
        }
      }
    }
  }

  updateSwapRequestStatusBool(swapRequestId: number) {
    this.swapService.updateSwapRequestStatusBool(swapRequestId).subscribe(response => {
       // no action
    }, error => {
        console.log(error);
        this.router.navigate(['/error']);
      });
  }

  getUserAndNavigateToChat(garmentId: number) {
     this.userService.getUserByGarment(garmentId).subscribe(data => {
       let userId = data.id;
       this.toChatWithOwner(userId);
     }, error => {
       console.log(error);
     });
  }

  sortDataByDate() {
     return this.swapRequests.sort((a, b) => {
     return <any>new Date(b.dateUpdated) - <any>new Date(a.dateUpdated);
   });
  }

  toChatWithOwner(garmentUserId: number) {
    this.chatService.getChatBetweenUsers(this.userId, garmentUserId).subscribe(data => {
      let chat = new Chat();
      chat = data;
      this.dataService.setChat(chat);
      this.router.navigate(['/inbox/chat/history']);
    }, errorResponse => {
      console.log(errorResponse);
      this.router.navigate(['/error']);
    });
  }

  navigateToHome() {
    this.tabIndexChanged(null, true);
    this.router.navigate(['/home']);
  }

}

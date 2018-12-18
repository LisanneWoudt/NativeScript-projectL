import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { SwapRequest } from '../../../dto/swap-request';
import { SwapService } from '../../../shared/services/swap.service';

@Component({
    selector: "app-received-request",
    moduleId: module.id,
    templateUrl: "./received-requests.component.html"
})

export class ReceivedRequestsComponent implements OnInit {

  sub: any;
  userId: number;
  receivedRequests: SwapRequest[] = new Array;

  constructor(private route: ActivatedRoute, private router: Router, private swapService: SwapService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['userid']; // (+) converts string 'id' to a number
       this.getSwapRequests();
    });
  }

  getSwapRequests() {
    this.swapService.getUserSwapRequests(this.userId).subscribe(data => {
      console.log('swap requests received :)');
      console.log(data);
      this.receivedRequests = data;
    //  console.log(this.receivedRequests)
    }, errorResponse => {
      console.log("ERROR");
     // console.error(errorResponse);
      //    this.router.navigate(['/error']);
      })
  }

  navigateBack() {
     this.router.navigate(['/home']);
  }

}

import { Component, OnInit } from "@angular/core";
import {User} from '../../dto/user';
import {SwapRequest} from '../../dto/swap-request';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

@Component({
    selector: "app-inbox",
    moduleId: module.id,
    templateUrl: "./inbox.component.html",
    styleUrls: ["../home/home.component.css"]
})

export class InboxComponent implements OnInit {

  currentUser: User = new User();
  requests: SwapRequest[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUser(1);

  }

  getUser(userId: number) {
    this.userService.getUser(userId).subscribe(data => {
      this.currentUser = data;
      this.requests = this.currentUser.swapRequests;
      console.log(this.requests);
    })
  }

  openMessage(args) {
    console.log(args.index);
    this.requests[args.index].received = true;
  }
}

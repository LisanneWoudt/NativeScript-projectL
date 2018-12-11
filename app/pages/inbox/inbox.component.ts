import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import {User} from '../../dto/user';
import {SwapRequest} from '../../dto/swap-request';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    selector: "app-inbox",
    moduleId: module.id,
    templateUrl: "./inbox.component.html"
})

export class InboxComponent implements AfterViewInit, OnInit {

  currentUser: User = new User();
  requests: SwapRequest[];

  constructor(private router: Router, private userService: UserService) { }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

  ngOnInit() {
    this.getUser(1);
  }

  ngAfterViewInit() {
      this.drawer = this.drawerComponent.sideDrawer;
  }

  public toggleDrawer() {
    this.drawer.toggleDrawerState();
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

  navigateBack() {
    console.log('navigate home');
    this.router.navigate(['/home']);
  }
}

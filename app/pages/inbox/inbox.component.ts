import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import {User} from '../../dto/user';
import {SwapRequest} from '../../dto/swap-request';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import view = require("ui/core/view");


@Component({
    selector: "app-inbox",
    moduleId: module.id,
    templateUrl: "./inbox.component.html"
})

export class InboxComponent implements AfterViewInit, OnInit {

  currentUser: User = new User();
  requests: SwapRequest[];
  _mainContentText: string;

  constructor(private router: Router, private userService: UserService, private _changeDetectionRef: ChangeDetectorRef) { }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

  ngOnInit() {
    this.getUser(1);
    this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    this.drawer.closeDrawer();
  }

  ngAfterViewInit() {
      this.drawer = this.drawerComponent.sideDrawer;
      this._changeDetectionRef.detectChanges();
  }
  
  get mainContentText() {
      return this._mainContentText;
  }

  set mainContentText(value: string) {
      this._mainContentText = value;
  }

  public openDrawer() {
      this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
      this.drawer.closeDrawer();
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

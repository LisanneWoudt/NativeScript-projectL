import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Garment } from '../../../dto/garment';
import { Router, ActivatedRoute } from '@angular/router';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    selector: "app-pick-swap-return-garment",
    moduleId: module.id,
    templateUrl: "./pick-swap-return-garment.component.html"
})

export class PickSwapReturnGarmentComponent implements OnInit {

  @ViewChild('garmentOverview') child;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  drawer: RadSideDrawer;
  sub: any;
  garmentsUrl: string = 'all/';
  sizes = ["XS", "S", "M", "L", "XL"];
  genders = ["Woman", "Man"];
  receivedFromId: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
       this.receivedFromId = +params['userid']; // (+) converts string 'userId' to a number
       console.log("received from: " + this.receivedFromId);
     });
     this.child.filterGarmentsOnUser(this.receivedFromId);
  }

  ngAfterViewInit() {
      this.drawer = this.drawerComponent.sideDrawer;
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

  public toggleDrawer() {
    this.drawer.toggleDrawerState();
  }

}

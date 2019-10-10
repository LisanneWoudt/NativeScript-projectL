import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Garment } from '../../../dto/garment';
import { SwapRequest } from '../../../dto/swap-request';
import { Router } from '@angular/router';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { DataService } from '../../../shared/services/data.service';

@Component({
    selector: "app-pick-swap-return-garment",
    moduleId: module.id,
    templateUrl: "./pick-swap-return-garment.component.html"
})

export class PickSwapReturnGarmentComponent implements OnInit {

  @ViewChild('garmentOverview', {static: false}) child;
  @ViewChild(RadSideDrawerComponent, {static: false}) public drawerComponent: RadSideDrawerComponent;

  drawer: RadSideDrawer;
  garmentsUrl: string = 'all/';
  sizes = ["XS", "S", "M", "L", "XL"];
  genders = ["Woman", "Man"];
  swapRequest: SwapRequest;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(){
      this.swapRequest = this.dataService.getSwapRequest();
      this.child.filterGarmentsOnUser(this.swapRequest.receivedFromId);
  }

  ngAfterViewInit() {
      this.drawer = this.drawerComponent.sideDrawer;
  }

  navigateBack() {
    this.router.navigate(['/swap-requests/open/' + this.swapRequest.userId]);
  }

  public toggleDrawer() {
    this.drawer.toggleDrawerState();
  }

}

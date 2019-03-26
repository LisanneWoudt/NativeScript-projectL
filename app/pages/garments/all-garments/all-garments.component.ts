import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {Router} from '@angular/router';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    selector: "app-all-garments",
    moduleId: module.id,
    templateUrl: "./all-garments.component.html"
})

export class AllGarmentsComponent implements OnInit {

  @ViewChild('garmentOverview') child;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  drawer: RadSideDrawer;

  garmentsUrl: string = 'all/';
  sizes = ['XS', 'S', 'M', 'L', 'XL', '27', '28', '30'];
  genders = ["Woman", "Man"];
  types = ["SHIRT", "PANT"];

  constructor(private router: Router) { }

  ngOnInit(){}

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

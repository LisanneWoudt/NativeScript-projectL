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
  sizes: string[];
  types: string[];
  sizeLengths: number[];

  constructor(private router: Router) { }

  ngOnInit(){}

  ngAfterViewInit() {
      this.drawer = this.drawerComponent.sideDrawer;
      this.sizes = this.child.allSizes;
      this.sizes.sort();
      this.types = this.child.allTypes;
      this.sizeLengths = this.child.allLengths;
  }

  public toggleDrawer() {
    this.drawer.toggleDrawerState();
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

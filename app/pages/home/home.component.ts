import { Component, ViewChild, OnInit, AfterViewInit  } from "@angular/core";
import { Garment } from '../../dto/garment';
import { User } from '../../dto/user';
import { DataService } from '../../shared/services/data.service';
import { SwapService } from '../../shared/services/swap.service';
import { Router } from '@angular/router';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    garments: Garment[] = new Array();
    currentUser: User = new User();
    garment1: Garment = new Garment();
    garment2: Garment = new Garment();
    garmentsUrl: string = 'all/user/';
    swapRequestCount: number;
    swapRequestNewCount: number;

    constructor(private dataService: DataService, private router: Router,
      private swapService: SwapService) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
      private drawer: RadSideDrawer;

    ngOnInit() {
      this.currentUser = this.dataService.getMockUser();
      this.getCountOpenRequests();
      this.getCountOpenNewRequests();
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    toggleDrawer() {
      this.drawer.toggleDrawerState();
    }

    getMockGarments() {
     this.garment1.name = 'GARMENT1';
     this.garment1.brand = 'H&M';
     this.garment1.size = 'XS';
     this.garment2.name = 'GARMENT2';
     this.garment2.brand = 'Zara';
     this.garment2.size = 'M';
     this.garments.push(this.garment1);
     this.garments.push(this.garment2);
    }

    getCountOpenRequests() {
      this.swapService.countSwapRequests(1).subscribe(data => {
        this.swapRequestCount = data;
        console.log('count: ' + data);
      }, error => {
        console.log('error in getting swap request count:' + error);
      })
    }

    getCountOpenNewRequests() {
      this.swapService.countNewSwapRequests(1).subscribe(data => {
        this.swapRequestNewCount = data;
        console.log(data)
      }, error => {
        console.log('error in getting swap request count:' + error);
      })
    }

    navigateToUserProfile() {
      this.router.navigate(['/profile']);
    }

    navigateToAllGarments() {
      this.router.navigate(['/garments/all'])
    }

    navigateToOpenSwapRequests() {
      this.router.navigate(['/swap-requests/open/', this.currentUser.id])
    }

    navigateToSwapHistory() {
      this.router.navigate(['/swap-requests/history/', this.currentUser.id])
    }

}

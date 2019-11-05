import { Component, ViewChild, OnInit, AfterViewInit  } from "@angular/core";
import { Garment } from '../../dto/garment';
import { User } from '../../dto/user';
import { DataService } from '../../shared/services/data.service';
import { SwapService } from '../../shared/services/swap.service';
import { GarmentService } from '../../shared/services/garment.service';
import { Router } from '@angular/router';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    currentUser: User = new User();
    limit: number = 4;
    garmentsUrl: string = 'all/';
    swapRequestCount: number = 0;
    swapRequestNewCount: number = 0;

    constructor(private dataService: DataService, private router: Router,
      private swapService: SwapService, private garmentService: GarmentService) {
    }

    @ViewChild(RadSideDrawerComponent, {static: false}) public drawerComponent: RadSideDrawerComponent;
      private drawer: RadSideDrawer;

    ngOnInit() {
      this.currentUser = this.dataService.getUser();
      this.getCountOpenRequests();
      this.getCountOpenNewRequests();
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    toggleDrawer() {
      this.drawer.toggleDrawerState();
    }

    getCountOpenRequests() {
      this.swapService.countSwapRequests(this.currentUser.id).subscribe(data => {
        this.swapRequestCount = data;
      }, error => {
        console.log(error);
      })
    }

    getCountOpenNewRequests() {
      this.swapService.countNewSwapRequests(1).subscribe(data => {
        this.swapRequestNewCount = data;
      }, error => {
        console.log(error);
      })
    }

    navigateToInbox() {
      this.router.navigate(['/inbox']);
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

    logout() {
      this.dataService.setUser(new User());
      this.router.navigate(['login']);
    }

}

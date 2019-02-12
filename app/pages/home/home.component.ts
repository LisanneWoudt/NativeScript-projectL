import { Component, ViewChild, OnInit, AfterViewInit  } from "@angular/core";
import { Garment } from '../../dto/garment';
import { User } from '../../dto/user';
import { DataService } from '../../shared/services/data.service';
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

    constructor(private dataService: DataService, private router: Router) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
      private drawer: RadSideDrawer;

    ngOnInit() {
      this.currentUser = this.dataService.getMockUser();
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

    navigateToAddGarment() {
      this.router.navigate(['/garments/add']);
    }

    navigateToAllGarments() {
      this.router.navigate(['/garments/all'])
    }

    navigateToInbox() {
      this.router.navigate(['/inbox'])
    }

    navigateToSwapRequests() {
      this.router.navigate(['/swap-requests/', this.currentUser.id])
    }
    
}

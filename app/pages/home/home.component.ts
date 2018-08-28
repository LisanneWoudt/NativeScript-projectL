import { Component, OnInit } from "@angular/core";
import { Garment } from '../../dto/garment';
import { User } from '../../dto/user';
import { DataService } from '../../shared/services/data.service';
import { GarmentService} from '../../shared/services/garment.service';
import { Router } from '@angular/router';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    garments: Garment[] = new Array;
    currentUser: User = new User();
    garment1: Garment = new Garment();
    garment2: Garment = new Garment();

    constructor(private dataService: DataService, private router: Router,
      private garmentService: GarmentService) {
    }

    ngOnInit() {
    console.log("in home component");
    this.currentUser = this.dataService.getUser();
    console.log(this.currentUser);
    this.garments = this.currentUser.garments;
//    this.getGarments();
    }

    getAllGarments() {
      this.garmentService.getAllGarments().subscribe(data => {
        this.garments = data;
      }, errorResponse => {
        console.error(errorResponse);
        this.router.navigate(['/error']);
      });
    }

    getGarments() {
      console.log("getting garments");
     this.garment1.name = 'GARMENT1';
     this.garment1.brand = 'H&M';
     this.garment1.size = 'XS';
     this.garment2.name = 'GARMENT2';
     this.garment2.brand = 'Zara';
     this.garment2.size = 'M';
     this.garments.push(this.garment1);
     this.garments.push(this.garment2);
    }

    navigateToAddUser() {
      console.log("navigate to add garments");
      this.router.navigate(['/garments/add']);
    }
}

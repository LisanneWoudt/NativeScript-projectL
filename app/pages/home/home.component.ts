import { Component, OnInit } from "@angular/core";
import { Garment } from '../../dto/garment';
import { User } from '../../dto/user';
import { DataService } from '../../shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    private sub: any;
    garments: Garment[] = new Array();
    currentUser: User = new User();
    garment1: Garment = new Garment();
    garment2: Garment = new Garment();
    success: number = 0;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.success = +params['success']; // (+) converts string 'id' to a number
     });

    this.currentUser = this.dataService.getMockUser();
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
      this.success = 0;
      this.router.navigate(['/garments/add']);
    }

    navigateToGarments() {
      this.success = 0;
      this.router.navigate(['/garments/all']);
    }
}

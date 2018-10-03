import { Component, OnInit } from "@angular/core";
import { Garment } from '../../dto/garment';
import { User } from '../../dto/user';
import { DataService } from '../../shared/services/data.service';
import { GarmentService} from '../../shared/services/garment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    private sub: any;
    garments: Garment[];
    currentUser: User = new User();
    garment1: Garment = new Garment();
    garment2: Garment = new Garment();
    icon: any;
    success: number = 0;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute,
      private garmentService: GarmentService) {
    }

    ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.success = +params['success']; // (+) converts string 'id' to a number
     });

    this.garments = new Array;
    console.log("in home component ngOnInit");
    this.currentUser = this.dataService.getMockUser();
    console.log(this.currentUser);
    this.getAllGarments();
  //  this.getGarments();
    }

    getAllGarments() {
      this.garmentService.getAllGarments().subscribe(data => {
        this.garments = data;
      }, errorResponse => {
        console.error(errorResponse);
        this.router.navigate(['/error']);
      });
    }

    getMockGarments() {
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

    navigateToAddGarment() {
      this.success = 0;
      console.log("navigate to add garments");
      this.router.navigate(['/garments/add']);
    }

    navigateToGarments() {
      this.success = 0;
      console.log("navigate to garments overview");
      this.router.navigate(['/garments/all']);
    }
}

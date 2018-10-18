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
    count: number;
    imageSrc: any;
    thumbSize: number = 120;
    previewSize: number = 120;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute,
      private garmentService: GarmentService) {
    }

    ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.success = +params['success']; // (+) converts string 'id' to a number
     });

    this.garments = new Array;
    this.currentUser = this.dataService.getMockUser();
    console.log(this.currentUser);
    this.getAllGarments();
    }

    getAllGarments() {
      this.garmentService.getAllGarments().subscribe(data => {
        this.garments = data;

        for (let int in this.garments) {
          this.count = +int;
          this.search(this.garments[this.count].id, this.count);
        }

      }, errorResponse => {
        console.error(errorResponse);
     //   this.router.navigate(['/error']);
      });
    }

    search(garmentId: number, int: number) {
      console.log("searching with garmentID = " + garmentId);
      const httpModule = require("http");
      httpModule.getImage("http://192.168.178.18:8080/images/download/" + garmentId).then(
          res => { // Success
           console.log('success');
          this.garments[int].image = res;
          this.imageSrc = res;
           return res;
          },
          msg => { // Error
           console.log("error!")
          }
        )
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

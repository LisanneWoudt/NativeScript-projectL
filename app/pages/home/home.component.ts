import { Component, OnInit } from "@angular/core";
import { Garment } from '../../dto/garment';
import { User } from '../../dto/user';
import { DataService } from '../../shared/services/data.service';
import { GarmentService} from '../../shared/services/garment.service';
import { ImageService} from '../../shared/services/image.service';
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
    promises: Array<any> = new Array();
    currentUser: User = new User();
    garment1: Garment = new Garment();
    garment2: Garment = new Garment();
    icon: any;
    success: number = 0;
    count: number;
    imageSrc: any;
    thumbSize: number = 120;
    previewSize: number = 120;
    processing: boolean;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute,
      private garmentService: GarmentService, private imageService: ImageService) {
    }

    ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.success = +params['success']; // (+) converts string 'id' to a number
     });

    this.currentUser = this.dataService.getMockUser();
    this.getAllGarments();
    }

    getAllGarments() {
      this.processing = true;
      this.garmentService.getAllGarments().subscribe(data => {
        this.garments = data;

        // Get image of garment one by one
        for (let int in this.garments) {
          this.count = +int;
          this.promises.push(this.search(this.garments[this.count].id, this.count));
        }

        Promise.all(this.promises)
        .then(res => {
          console.log('All promises returned');
        //  this.processing = false;
        }, error => {
        console.log('Error')
        })

      }, errorResponse => {
        console.error(errorResponse);
      });
    }

    search(garmentId: number, int: number) {
      console.log("searching with garmentID = " + garmentId);

      this.imageService.downloadImage(garmentId).then(
          res => {
          console.log('success');
          this.garments[int].image = res;
          this.imageSrc = res;
          return res;
          },
          msg => {
           console.log("error!")
          }
        )
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

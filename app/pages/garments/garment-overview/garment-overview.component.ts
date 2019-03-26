import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Garment} from '../../../dto/garment';
import { SwapRequest } from '../../../dto/swap-request'
import {GarmentService} from '../../../shared/services/garment.service';
import {ImageService} from '../../../shared/services/image.service';
import { DataService } from '../../../shared/services/data.service';
import {Router} from '@angular/router';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

@Component({
    selector: "app-garment-overview",
    moduleId: module.id,
    templateUrl: "./garment-overview.component.html"
})

export class GarmentOverviewComponent implements OnInit {

  garments: Garment[] = new Array;
  promises: Array<any> = new Array;
  allSizes: String[] = ['XS', 'S', 'M', 'L', 'XL', '27', '28', '30'];
  allGenders: String[] = ['MAN', 'WOMAN'];
  allTypes: String[] = ['SHIRT', 'PANT'];
  selectedSizes: String[] = this.allSizes;
  selectedGender: String[] = this.allGenders;
  selectedTypes: String[] = this.allTypes;
  lastSelectedGender: string;
  lastSelectedSize: string;
  lastSelectedType: string;

  imageSrc: any;
  //PreviewSize magically makes spinner on item stop when loaded
  previewSize: number = 120;
  count: number;
  processing: boolean;
  userId: number;
  garmentFilter: any = {};
  swapRequest: SwapRequest;


  @Input('garmentsUrl') garmentsUrl: string;
  @Input('garmentId') swapGarmentId: number = 0;

  constructor(private garmentService: GarmentService, private imageService: ImageService,
    private router: Router, private dataService: DataService) { }

  ngOnInit() {
   this.userId = 1;
   this.getAllGarments();
  }

  getAllGarments() {
    this.processing = true;
    this.garmentService.getAllGarments(this.garmentsUrl, this.userId).subscribe(data => {
      console.log(data);
      this.garments = data;

      for (let int in this.garments) {
        this.count = +int;
        this.promises.push(this.search(this.garments[this.count].id, this.count));
      }

      Promise.all(this.promises)
      .then(res => {
      }, error => {
        console.log('Error in getAllGarments:' + error);
        this.router.navigate(['/error']);
      })
    }, errorResponse => {
      console.log('Error in getAllGarments(2):' + errorResponse);
      this.router.navigate(['/error']);
    });
  }

  filterGarmentsOnSize(size: string) {
    this.filterGarments(size, 'size', this.selectedSizes, this.allSizes, this.lastSelectedSize);
  }
  filterGarmentsOnGender(gender: string) {
    gender = gender.toUpperCase();
    this.filterGarments(gender, 'gender', this.selectedGender, this.allGenders, this.lastSelectedGender);
  }
  filterGarmentsOnType(type: string) {
    this.filterGarments(type, 'garmentType', this.selectedTypes, this.allTypes, this.lastSelectedType);
  }

  filterGarments(filterKey: string, filterOn: string, selectedList: Array<String>,
    allList: Array<String>, lastSelected: string) {

    if (selectedList.length == allList.length && !lastSelected) {
      selectedList = [];
    }
    if (selectedList.includes(filterKey)) {
      selectedList = selectedList.filter(obj => obj !== filterKey);
      if (selectedList.length == 0) {
        selectedList = allList;
        lastSelected = null;
      }
    }
    else {
      selectedList.push(filterKey);
      lastSelected = filterKey;
    }

    if(filterOn == 'size') {
      this.selectedSizes = selectedList;
      this.lastSelectedSize = lastSelected;
    }
    if(filterOn == 'gender') {
      this.selectedGender = selectedList;
      this.lastSelectedGender = lastSelected;
    }
    if(filterOn == 'garmentType') {
      this.selectedTypes = selectedList;
      this.lastSelectedType = lastSelected;
    }

    this.garmentFilter = {'size': this.selectedSizes, 'gender': this.selectedGender,
      'garmentType': this.selectedTypes}
  }

  filterGarmentsOnUser(userId: number) {
    this.garmentFilter = {userId: [userId]};
  }

  search(garmentId: number, int: number) {
    this.imageService.downloadCompressedImage(garmentId).then(
        res => {
          this.garments[int].image = res;
          this.imageSrc = res;
          return res;
        },
        msg => {
         console.log('Error in downloadImage:' + msg);
         this.router.navigate(['/error']);
        }
      )
   }

   toGarmentDetail(garmentId: number) {
     if (this.swapRequest) {
       this.swapRequest = this.dataService.getSwapRequest();
       this.swapRequest.garmentInReturnId = garmentId;
       this.dataService.setSwapRequest(this.swapRequest);
     }
     this.router.navigate(['/garment/', garmentId])
   }

}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Garment} from '../../../dto/garment';
import { SwapRequest } from '../../../dto/swap-request'
import {GarmentService} from '../../../shared/services/garment.service';
import {ImageService} from '../../../shared/services/image.service';
import { DataService } from '../../../shared/services/data.service';
import {Router} from '@angular/router';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-garment-overview",
    moduleId: module.id,
    templateUrl: "./garment-overview.component.html"
})

export class GarmentOverviewComponent implements OnInit {
  garments: Garment[] = new Array;
  garmentsEven: Garment[] = new Array;
  garmentsOdd: Garment[] = new Array;
  promises: Array<any> = new Array;
  allSizes: string[] = new Array;
  allLengths: number[] = new Array;
  allTypes: string[] = new Array;
  selectedSizes: string[] = this.allSizes;
  selectedLength: number[] = this.allLengths;
  selectedTypes: string[] = this.allTypes;
  lastSelectedLength: string;
  lastSelectedSize: string;
  lastSelectedType: string;

  imageSrc: any;
  previewSize: number = 120;
  count: number;
  processing: boolean;
  userIdLimit: string;
  userId: number;
  garmentFilter: any = {};
  swapRequest: SwapRequest;

  @Input('garmentsUrl') garmentsUrl: string;
  @Input('limit') limit: number = 0;
  @Input('garmentId') swapGarmentId: number = 0;

  constructor(private garmentService: GarmentService, private imageService: ImageService,
    private router: Router, private dataService: DataService) { }

  ngOnInit() {
   this.userId = this.dataService.getUser().id;
   this.setUrlPart();
   this.getAllGarments();
  }

  setUrlPart() {
    if (this.limit > 0) {
      this.userIdLimit = "?userId=" + this.userId + "&limit=" + this.limit;
    }
    else {
      this.userIdLimit = "?userId=" + this.userId.toString();
    }
  }

  isOdd(listcount: number) {
    //return true;
    return listcount % 2;
  }

  getAllGarments() {
    this.processing = true;
    this.garmentService.getAllGarments(this.garmentsUrl, this.userIdLimit).subscribe(data => {
      this.garments = data;
      this.garmentsEven = data;
      this.garmentsOdd = data;

      for (let int in this.garments) {
        this.count = +int;
        //TODO: add garment to array instead of filtering. Fix filters.
        if (this.isOdd(this.count)) {
          this.garmentsEven = this.garmentsEven.filter(obj => this.garments[this.count] !== obj);
          this.promises.push(this.getImage(this.garments[this.count], this.count));
        }
        else {
           this.garmentsOdd = this.garmentsOdd.filter(obj => this.garments[this.count] !== obj);
           this.promises.push(this.getImage(this.garments[this.count], this.count));
        }

        this.setCategories(this.garments[this.count]);
      }

      this.setListNum(this.garmentsEven, 0);
      this.setListNum(this.garmentsOdd, 1);

      Promise.all(this.promises)
      .then(res => {
      }, error => {
        console.log('Error in getAllGarments:' + error);
        this.router.navigate(['/error']);
      })
    }, errorResponse => {
      console.log(errorResponse)
      console.log('Error in getAllGarments(2):' + errorResponse);
      this.router.navigate(['/error']);
    });
  }

  setListNum(garmentList: Garment[], startCount: number) {
    for (let int in garmentList) {
        garmentList[int].listNum = startCount;
        startCount = startCount + 2;
    }
  }


  setCategories(garment: Garment){
    if (!this.allSizes.includes(garment.size)) {
      this.allSizes.push(garment.size);
    }
    if (!this.allTypes.includes(garment.garmentType)) {
      this.allTypes.push(garment.garmentType);
    }
    if (!this.allLengths.includes(garment.lengthSize)) {
      this.allLengths.push(garment.lengthSize);
    }
  }

  filterGarmentsOnUser(userId: number) {
    this.garmentFilter = {userId: [userId]};
  }
  filterGarmentsOnSize(size: string) {
    this.filterGarments(size, 'size', this.selectedSizes, this.allSizes, this.lastSelectedSize);
  }
  filterGarmentsOnLength(length: number) {
    this.filterGarments(length, 'length', this.selectedLength, this.allLengths, this.lastSelectedLength);
  }
  filterGarmentsOnType(type: string) {
    this.filterGarments(type, 'garmentType', this.selectedTypes, this.allTypes, this.lastSelectedType);
  }

  filterGarments(filterKey: any, filterOn: string, selectedList: Array<any>,
    allList: Array<any>, lastSelected: string) {

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

    this.updateLastSelectedCategory(filterOn, selectedList, lastSelected);

    this.garmentFilter = {'size': this.selectedSizes, 'lengthSize': this.selectedLength,
      'garmentType': this.selectedTypes}
  }

  updateLastSelectedCategory(category: string, selectedList: Array<any>, lastSelected: string) {
    if(category == 'size') {
      this.selectedSizes = selectedList;
      this.lastSelectedSize = lastSelected;
    }
    if(category == 'length') {
      this.selectedLength = selectedList;
      this.lastSelectedLength = lastSelected;
    }
    if(category == 'garmentType') {
      this.selectedTypes = selectedList;
      this.lastSelectedType = lastSelected;
    }
  }

  getImage(garment: Garment, int: number) {
    this.imageService.downloadCompressedImage(garment.id).then(
        res => {
          garment.image = res;
          this.imageSrc = res;
          return res;
        },
        msg => {
         console.log('Image could not be loaded:' + msg);
        }
      )
   }

  showReservedInfo() {
   dialogs.confirm({
      message: "This item has been requested for a swap. It can still be selected for swap by other users.",
      okButtonText: "OK",
    });
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

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {Pant} from '../../../dto/pant';
import { User } from '../../../dto/user';
import { Shirt } from '../../../dto/shirt';
import {GarmentService} from '../../../shared/services/garment.service';
import {DataService} from '../../../shared/services/data.service';
import {ImageService} from '../../../shared/services/image.service';
import {Router} from '@angular/router';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import * as camera from "nativescript-camera";
import * as imagepicker from "nativescript-imagepicker";
var fs = require("file-system");
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";

//let imagepicker = require("nativescript-imagepicker")
@Component({
    selector: "app-add-garment",
    moduleId: module.id,
    templateUrl: "./add-garment.component.html"
})

export class AddGarmentComponent implements OnInit {

 garment: Garment = new Garment();
 pant: Pant = new Pant();
 shirt: Shirt = new Shirt();
 currentUser: User = new User();
 selectedIndex: number;
 categories: String[] = ["Pant", "Shirt"];
 categorySelected: Boolean = false;
 pantSelected: Boolean = false;
 shirtSelected: Boolean = false;
 result: number;
 uploadedImage: any;

 imageAssets = [];
 imageSrc: any;
 isSingleMode: boolean = true;
 thumbSize: number = 80;
 previewSize: number = 300;
 imageString: string;

 @ViewChild('dd') dropDown: ElementRef;

  constructor(private garmentService: GarmentService, private dataService: DataService,
    private imageService: ImageService, private router: Router) {
  }


  ngOnInit() {
    this.getMockPant();
  }

  getMockPant() {
    this.categorySelected = true;
    this.pantSelected = true;
    this.selectedIndex = 0;
    this.garment.name = "nieuwe broek";
    this.garment.brand ="Vero Moda";
    this.garment.userId = 1;
    this.pant.waistSize = 27;
    this.pant.waistLength = 34;
  }

  getImage() {
    this.isSingleMode = true;
    var milliseconds = (new Date).getTime();
    var that = this;
    let context = imagepicker.create({
      mode: "single"
    });
    this.startSelection(context);
  }

  private startSelection(context) {
      let that = this;

      context
      .authorize()
      .then(() => {
          that.imageAssets = [];
          that.imageSrc = null;
          return context.present();
      })
      .then((selection) => {
          this.imageString = selection[0]._android;
          that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

          // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
          selection.forEach(function (element) {
              element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
              element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
          });

          that.imageAssets = selection;
      }).catch(function (e) {
          console.log(e);
      });
  }

  public onchange(args: SelectedIndexChangedEventData) {
    this.categorySelected = true;
    if (args.newIndex == 0) {
        this.pantSelected = true;
        this.shirtSelected = false;
    }
    if (args.newIndex == 1) {
      this.shirtSelected = true;
      this.pantSelected = false;
    }
    if (args.newIndex == null) {
      this.shirtSelected = true;
      this.pantSelected = true;
    }
  }

  addGarment(garment: Garment, pant: Pant, shirt: Shirt) {
    if (!this.shirtSelected && !this.pantSelected) {
      alert({title: "Type missing",
        message: "Please select a garment type",
        okButtonText: "Ok"});
      return;
    }
    if (!this.checkFormFilled(garment, pant, shirt)) {
      alert({title: "Field(s) empty",
        message: "Please fill all input fields",
        okButtonText: "Ok"});
      return;
    }

    this.currentUser = this.dataService.getMockUser();

    if (this.pantSelected == true) {
      this.pant.name = garment.name;
      this.pant.brand = garment.brand;
      this.pant.userId = this.currentUser.id;
      this.pant.waistSize = pant.waistSize;
      this.pant.waistLength = pant.waistLength;
      console.log(this.pant);
    }
    else if (this.shirtSelected) {
        this.shirt.name = garment.name;
        this.shirt.brand = garment.brand;
        this.shirt.userId = this.currentUser.id;
        this.shirt.size = shirt.size;
        console.log(this.shirt);
    }

    this.garmentService.saveGarment(this.pant, this.shirt)
      .subscribe(data => {
        console.log('data saved');
        console.log(data);
        this.imageService.multipartUpload(data.toString(), this.imageString);
    //    this.router.navigate(['/home']);
      }, errorResponse => {
          this.responseError();
        })

    }

  checkFormFilled(garment: Garment, pant: Pant, shirt: Shirt) {
    if (!garment.name || !garment.brand || !this.imageString) {
      return false;
    }
    if (this.shirtSelected) {
      if (!shirt.size) {
        console.log(shirt);
        return false;
      }
    }
    else if (this.pantSelected) {
      if (!pant.waistSize || !pant.waistLength) {
        return false;
      }
    }
    return true;
  }

  responseSuccess() {
    this.result = 1;
    this.router.navigate(['/home/' + this.result]);
  }

  responseError() {
    console.log('Something went wrong');
  }

}

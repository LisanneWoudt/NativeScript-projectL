import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Garment} from '../../../dto/garment';
import { User } from '../../../dto/user';
import {GarmentService} from '../../../shared/services/garment.service';
import {DataService} from '../../../shared/services/data.service';
import {ImageService} from '../../../shared/services/image.service';
import {Router} from '@angular/router';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import * as camera from "nativescript-camera";
import * as imagepicker from "nativescript-imagepicker";
var fs = require("file-system");
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import * as bghttp from "nativescript-background-http";
var session = bghttp.session("image-upload");
import * as dialogs from "tns-core-modules/ui/dialogs";

//let imagepicker = require("nativescript-imagepicker")
@Component({
    selector: "app-add-garment",
    moduleId: module.id,
    templateUrl: "./add-garment.component.html"
})

export class AddGarmentComponent implements OnInit {

 garment: Garment = new Garment()
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
 busy: boolean = true;
 processing: boolean = false;

 @ViewChild('dd') dropDown: ElementRef;

  constructor(private garmentService: GarmentService, private dataService: DataService,
    private imageService: ImageService, private router: Router) {
  }

  ngOnInit() {
    this.getMockGarment();
  }

  getMockGarment() {
    this.categorySelected = true;
    this.pantSelected = true;
    this.selectedIndex = 0;
    this.garment.name = "nieuwe broek";
    this.garment.brand ="Vero Moda";
    this.garment.userId = 1;
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

  addGarment(garment: Garment) {
    if (!this.shirtSelected && !this.pantSelected) {
      alert({title: "Type missing",
        message: "Please select a garment type",
        okButtonText: "Ok"});
      return;
    }
    if (!this.checkFormFilled(garment)) {
      alert({title: "Field(s) empty",
        message: "Please fill all input fields",
        okButtonText: "Ok"});
      return;
    }

    this.currentUser = this.dataService.getMockUser();

    this.garment = garment;
    if (this.pantSelected) {
      this.garment.garmentType = 'PANT';
    }
    else {
      this.garment.garmentType = 'SHIRT';
    }

    this.processing = true;

    this.garmentService.saveGarment(this.garment)
      .subscribe(data => {

        let task: bghttp.Task;
        task = this.imageService.multipartUpload(data.id.toString(), this.imageString);
        task.on("complete", data => {
          this.processing = false;
          this.responseSuccess();
        });
        task.on("error", data => {
         this.processing = false;
         this.responseError();
       });

    });
  }

  checkFormFilled(garment: Garment) {
    if (!garment.name || !garment.brand || !this.imageString || !garment.size) {
      return false;
    }
    if (this.pantSelected) {
      if (!garment.length_size) {
        return false;
      }
    }
    return true;
  }

  responseSuccess() {
    dialogs.alert({
        title: "Garment added",
        message: "You have successfully added a garment to your collection!",
        okButtonText: "OK"
    }).then(() => {
         this.router.navigate(['/home/']);
    });
  }

  responseError() {
    console.log('Something went wrong');
    this.router.navigate(['/error']);
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {GarmentService} from '../../../shared/services/garment.service';
import {DataService} from '../../../shared/services/data.service';
import {ImageService} from '../../../shared/services/image.service';
import {Router} from '@angular/router';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { ValueList } from "nativescript-drop-down";
import * as camera from "nativescript-camera";
import * as imagepicker from "nativescript-imagepicker";
var fs = require("file-system");
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import * as bghttp from "nativescript-background-http";
var session = bghttp.session("image-upload");

//let imagepicker = require("nativescript-imagepicker")
@Component({
    selector: "app-garment-input-fields",
    moduleId: module.id,
    templateUrl: "./garment-input-fields.component.html"
})

export class GarmentInputFieldsComponent implements OnInit {

 garment: Garment = new Garment()
 selectedIndex: number = 1;

 categorySelected: Boolean = false;
 pantSelected: Boolean = false;
 shirtSelected: Boolean = false;
 categories = ["Pant", "Shirt", "Other"]

 imageSrc: any;
 previewSize: number = 300;
 imageString: string;
 busy: boolean = true;
 processing: boolean = false;

 @ViewChild('dd') dropDown: ElementRef;
 @Output() showSuccessDialog = new EventEmitter();
 @Input('urlString') urlString: String;

  constructor(private garmentService: GarmentService, private dataService: DataService,
    private imageService: ImageService, private router: Router) {
  }

  ngOnInit() {
    this.garment = this.dataService.getGarment();
  }

  getImage() {
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
          that.imageSrc = null;
          return context.present();
      })
      .then((selection) => {
          this.imageString = selection[0]._android;
          that.imageSrc = selection.length > 0 ? selection[0] : null;

          selection.forEach(function (element) {
              element.options.width = that.previewSize;
              element.options.height = that.previewSize;
          });
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
    if (!this.validateGarment(garment)) {
      return;
    };

    this.garment = garment;
    if (this.pantSelected) {
      this.garment.garmentType = 'PANT';
    }
    else {
      this.garment.garmentType = 'SHIRT';
    }

    this.processing = true;

    this.garmentService.saveGarment(this.garment, this.urlString)
      .subscribe(data => {
        if (this.imageString) {
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
        }
      else {
        this.responseSuccess();
      }
    });
  }

  validateGarment(garment: Garment) {
    if (!this.shirtSelected && !this.pantSelected) {
      alert({title: "Type missing",
        message: "Please select a garment type",
        okButtonText: "Ok"});
      return false;
    }
    if (!this.checkFormFilled(garment)) {
      alert({title: "Field(s) empty",
        message: "Please fill all input fields",
        okButtonText: "Ok"});
      return false;
    }
    return true;
  }

  checkFormFilled(garment: Garment) {
    if (!garment.name || !garment.brand || (!this.imageString &&
      !this.garment.image) || !garment.size) {
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
    this.showSuccessDialog.emit();
  }

  responseError() {
    console.log('Something went wrong');
    this.router.navigate(['/error']);
  }

}

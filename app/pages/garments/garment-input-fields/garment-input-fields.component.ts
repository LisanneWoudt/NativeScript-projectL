import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {User} from '../../../dto/user';
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

@Component({
    selector: "app-garment-input-fields",
    moduleId: module.id,
    templateUrl: "./garment-input-fields.component.html"
})

export class GarmentInputFieldsComponent implements OnInit {

 garment: Garment = new Garment();
 longForm: boolean = false;
 selectedIndex: string = "1";
 categoryMap: Map<string, string>;
 categories: string[] = new Array();

 imageSrc: any;
 previewSize: number = 300;
 imageString: string;
 busy: boolean = true;
 processing: boolean = false;
 currentUser: User;

 @ViewChild('dd') dropDown: ElementRef;
 @Output() showSuccessDialog = new EventEmitter();
 @Input('urlString') urlString: String;

  constructor(private garmentService: GarmentService, private dataService: DataService,
    private imageService: ImageService, private router: Router) {
  }

  ngOnInit() {
    this.garment = this.dataService.getGarment();
    if (this.garment.image) {
      this.imageSrc = this.garment.image;
    }
    this.getGarmentTypes();
  }

  getGarmentTypes() {
      this.garmentService.getGarmentTypes().subscribe(data => {
        this.categoryMap = data;
        for (let cat in this.categoryMap) {
          this.categories.push(this.categoryMap[cat]);
        }

        this.setSelectedIndex();
      }, error => {
            console.log("error while getting garmentTypes:" + error);
      })
  }

  setSelectedIndex() {
    if (this.garment && this.garment.garmentType) {
      //TODO: works only after updating garment?
      this.selectedIndex = this.categories.indexOf(this.garment.garmentType).toString();
    }
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
    if (this.categoryMap[args.newIndex] == "Pant") {
        this.longForm = true;
    }
    else {
      this.longForm = false;
    }
  }

  addGarment(garment: Garment) {

    this.garment = garment;
    this.garment.garmentType = this.categoryMap[this.selectedIndex];

    if (!this.validateGarment(garment)) {
      return;
    };
    this.currentUser = this.dataService.getUser();
    this.garment.userId = this.currentUser.id;
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
    if (!this.garment.garmentType) {
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
    console.log(garment);
    if (!garment.name || !garment.brand || (!this.imageString &&
      !this.garment.image) || !garment.size) {
      return false;
    }
    if (this.longForm) {
      if (!garment.lengthSize) {
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

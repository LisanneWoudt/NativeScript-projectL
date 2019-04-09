import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Garment } from '../../../dto/garment';
import { DataService} from '../../../shared/services/data.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-edit-garment",
    moduleId: module.id,
    templateUrl: "./edit-garment.component.html"
})

export class EditGarmentComponent {

  constructor(private router: Router, private dataService: DataService) {
  }

  responseSuccess() {
    this.dataService.setGarment(new Garment());
    dialogs.alert({
        title: "Garment added",
        message: "You have successfully edited your garment!",
        okButtonText: "OK"
    }).then(() => {
         this.router.navigate(['/home/']);
    });
  }

  navigateBack() {
    this.dataService.setGarment(new Garment());
    this.router.navigate(['/home']);
  }

}

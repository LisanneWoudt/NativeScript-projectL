import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-add-garment",
    moduleId: module.id,
    templateUrl: "./add-garment.component.html"
})

export class AddGarmentComponent {

  constructor(private router: Router) {
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

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

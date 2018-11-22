import { Component, OnInit } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {Router} from '@angular/router';

@Component({
    selector: "app-all-garments",
    moduleId: module.id,
    templateUrl: "./all-garments.component.html",
    styleUrls: ["../../home/home.component.css"]
})

export class AllGarmentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToSendSwap(garmentId: number) {
    console.log('garmentId = ' + garmentId);
    this.router.navigate(['/swap-request', garmentId])
  }

}

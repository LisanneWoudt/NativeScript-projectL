import { Component, OnInit } from '@angular/core';
import {Garment} from '../../../dto/garment';
import {Router} from '@angular/router';

@Component({
    selector: "app-all-garments",
    moduleId: module.id,
    templateUrl: "./all-garments.component.html"
})

export class AllGarmentsComponent implements OnInit {

  garmentsUrl: string = 'all/';

  constructor(private router: Router) { }

  ngOnInit(){}

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

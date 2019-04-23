import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "app-open-requests",
    moduleId: module.id,
    templateUrl: "./open-requests.component.html"
})

export class OpenRequestsComponent implements OnInit {

  @ViewChild('appRequests') child;

  showHistory: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(){}

  navigateToHome() {
    this.child.navigateToHome();
  }

}

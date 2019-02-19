import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "app-open-requests",
    moduleId: module.id,
    templateUrl: "./open-requests.component.html"
})

export class OpenRequestsComponent implements OnInit {

  showHistory: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(){
    
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}

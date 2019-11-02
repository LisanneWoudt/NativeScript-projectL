import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: "app-user-profile",
    moduleId: module.id,
    templateUrl: "./user-profile.component.html"
})

export class UserProfileComponent implements OnInit {

  garmentsUrl: string = 'all/user/';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAddGarment() {
    this.router.navigate(['/garments/add']);
  }
  
  navigateToContact() {
    this.router.navigate(['/contact/', this.dataService.getUser().id]);

  navigateToInbox() {
    this.router.navigate(['/inbox']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}

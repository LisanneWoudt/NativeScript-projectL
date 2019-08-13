import { Component, OnInit } from "@angular/core";
import {User} from '../../dto/user';
import {Router} from '@angular/router';
import {LoginService} from '../../shared/services/login.service';
import {DataService} from '../../shared/services/data.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-user-profile",
    moduleId: module.id,
    templateUrl: "./user-profile.component.html"
})

export class UserProfileComponent implements OnInit {

  garmentsUrl: string = 'all/user/';

  constructor(private router: Router, private loginService: LoginService,
    private dataService: DataService) { }

  ngOnInit() {
  }

  navigateToAddGarment() {
    this.router.navigate(['/garments/add']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

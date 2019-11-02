import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: "app-welcome",
    moduleId: module.id,
    templateUrl: "./welcome.component.html"
})

export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "app-error",
    moduleId: module.id,
    templateUrl: "./error.component.html"
})

export class ErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){}

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

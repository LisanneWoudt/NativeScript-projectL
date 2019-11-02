import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
    selector: "app-error",
    moduleId: module.id,
    templateUrl: "./error.component.html"
})

export class ErrorComponent implements OnInit {

  error: string;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(){
    this.error = this.dataService.getError();
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

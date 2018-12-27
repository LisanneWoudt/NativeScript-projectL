import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "app-send-requests",
    moduleId: module.id,
    templateUrl: "./send-requests.component.html"
})

export class SendRequestsComponent implements OnInit {

  sendOrReceived: string = 'send';

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

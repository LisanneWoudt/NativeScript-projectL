import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "app-received-request",
    moduleId: module.id,
    templateUrl: "./received-requests.component.html"
})

export class ReceivedRequestsComponent implements OnInit {

  sendOrReceived: string = 'received';

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateBack() {
    this.router.navigate(['/home']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-history",
    moduleId: module.id,
    templateUrl: "./history.component.html"
})

export class HistoryComponent implements OnInit {

  showHistory: boolean = true;
  sub: any;
  userId: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['userid']; // (+) converts string 'id' to a number
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToOpenRequests() {
    this.router.navigate(['/swap-requests/open/' + this.userId]);
  }

}

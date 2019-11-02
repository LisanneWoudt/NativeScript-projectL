import { Component, OnInit } from "@angular/core";
import {User} from '../../../dto/user';
import {Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../../shared/services/user.service';
import {DataService} from '../../../shared/services/data.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-contact-details",
    moduleId: module.id,
    templateUrl: "./contact-details.component.html"
})

export class ContactDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService, private dataService: DataService) { }

  private sub: any;
  user: User = new User();
  editState: boolean = false;

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      let userId = +params['userid'];
      if (userId == this.dataService.getUser().id) {
        this.editState = true;
      }

      this.userService.getUser(userId).subscribe(data => {
         this.user = data;
        }, error => {
         console.log(error);
        })
      });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(data => {
      this.responseSuccess();
    }, error => {
      console.log(error);
    });
  }

  responseSuccess() {
    this.dataService.setUser(this.user);
    dialogs.alert({
        title: "Contact details updated",
        message: "You have successfully edited your contact details!",
        okButtonText: "OK"
    }).then(() => {
         this.navigateBack();
    });
  }

  navigateBack() {
    if (this.editState) {
      this.router.navigate(['/profile']);
    }
    else {
      this.router.navigate(['/swap-requests/history/', this.dataService.getUser().id])
    }

  }
}

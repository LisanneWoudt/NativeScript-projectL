import { Component, OnInit } from "@angular/core";
import {User} from '../../dto/user';
import {Router} from '@angular/router';
import {LoginService} from '../../shared/services/login.service';
import {DataService} from '../../shared/services/data.service';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "app-login-user",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {

  user = new User();

  constructor(private router: Router, private loginService: LoginService,
    private dataService: DataService) { }

  ngOnInit() {
  }

  login(user: User) {
    this.loginService.login(user).subscribe(data => {
      if (data == null) {
        this.loginFailed();
      }
      else {
        this.dataService.setUser(data);
        this.navigateToHome();
      }

    }, errorResponse => {
        console.error(errorResponse);
        this.router.navigate(['/error']);
        });
  }

  loginFailed() {
    dialogs.alert({
        title: "Login failed",
        message: "Username or password incorrect",
        okButtonText: "OK"
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

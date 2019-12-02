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
  isLoggingIn: Boolean = true;
  passwordRepeat: string;

  constructor(private router: Router, private loginService: LoginService,
    private dataService: DataService) { }

  ngOnInit() {
  }

  login(user: User) {
    this.loginService.login(user).subscribe(data => {
      if (data == null) {
        this.showAlert("Login failed", "Username or password incorrect");
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

  signUp(user: User) {
    if (!this.validateUser(user)) {
      return;
    }

    this.loginService.register(user).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.showAlert("YAY", "Account created!");
        this.dataService.setUser(data);
        this.navigateToWelcome();
      }
      else {
       this.showAlert("Oh no..", "Account could not be created");
      }
    },
    errorResponse => {
      console.error(errorResponse);
      this.router.navigate(['/error']);
    });
  }

  validateUser(user: User) {
     let regexp = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");
     if (!user.name || !user.email || !user.password ) {
       this.showAlert("Oh oh", "Please fill in all input fields")
       return false;
     }
     if (!regexp.test(user.email)) {
        this.showAlert("Oh oh", "Not a valid email")
        return false;
     }
     if (user.password != this.passwordRepeat) {
        this.showAlert("Oh oh", "Passwords are not the same")
        return false;
     }
     return true;
   }

  toggleDisplay() {
    if (this.isLoggingIn) {
      this.isLoggingIn = false;
    }
    else {
      this.isLoggingIn = true;
    }
  }

  showAlert(title: string, message: string) {
    dialogs.alert({
        title: title,
        message: message,
        okButtonText: "OK"
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToWelcome() {
    this.router.navigate(['/welcome']);
  }

}

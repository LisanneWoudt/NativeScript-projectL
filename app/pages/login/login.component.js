"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var router_1 = require("@angular/router");
var login_service_1 = require("../../shared/services/login.service");
var data_service_1 = require("../../shared/services/data.service");
var dialogs = require("tns-core-modules/ui/dialogs");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService, dataService) {
        this.router = router;
        this.loginService = loginService;
        this.dataService = dataService;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.loginService.login(user).subscribe(function (data) {
            if (data == null) {
                _this.loginFailed();
            }
            else {
                _this.dataService.setUser(data);
                _this.navigateToHome();
            }
        }, function (errorResponse) {
            console.error(errorResponse);
            _this.router.navigate(['/error']);
        });
    };
    LoginComponent.prototype.loginFailed = function () {
        dialogs.alert({
            title: "Login failed",
            message: "Username or password incorrect",
            okButtonText: "OK"
        });
    };
    LoginComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login-user",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, login_service_1.LoginService,
            data_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVDQUFvQztBQUNwQywwQ0FBdUM7QUFDdkMscUVBQWlFO0FBQ2pFLG1FQUErRDtBQUMvRCxxREFBdUQ7QUFRdkQ7SUFJRSx3QkFBb0IsTUFBYyxFQUFVLFlBQTBCLEVBQzVELFdBQXdCO1FBRGQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSGxDLFNBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBR29CLENBQUM7SUFFdkMsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFjQztRQWJDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBRUgsQ0FBQyxFQUFFLFVBQUEsYUFBYTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLGNBQWM7WUFDckIsT0FBTyxFQUFFLGdDQUFnQztZQUN6QyxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBcENVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FNNEIsZUFBTSxFQUF3Qiw0QkFBWTtZQUMvQywwQkFBVztPQUx2QixjQUFjLENBcUMxQjtJQUFELHFCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW4tdXNlclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdXNlciA9IG5ldyBVc2VyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odXNlcikuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkZhaWxlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0VXNlcihkYXRhKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9Ib21lKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW5GYWlsZWQoKSB7XHJcbiAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJMb2dpbiBmYWlsZWRcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlVzZXJuYW1lIG9yIHBhc3N3b3JkIGluY29ycmVjdFwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlVG9Ib21lKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcbn1cclxuIl19
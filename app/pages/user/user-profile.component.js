"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("../../shared/services/login.service");
var data_service_1 = require("../../shared/services/data.service");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, loginService, dataService) {
        this.router = router;
        this.loginService = loginService;
        this.dataService = dataService;
        this.garmentsUrl = 'all/user/';
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.navigateToAddGarment = function () {
        this.router.navigate(['/garments/add']);
    };
    UserProfileComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/home']);
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: "app-user-profile",
            moduleId: module.id,
            templateUrl: "./user-profile.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, login_service_1.LoginService,
            data_service_1.DataService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXVDO0FBQ3ZDLHFFQUFpRTtBQUNqRSxtRUFBK0Q7QUFTL0Q7SUFJRSw4QkFBb0IsTUFBYyxFQUFVLFlBQTBCLEVBQzVELFdBQXdCO1FBRGQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSGxDLGdCQUFXLEdBQVcsV0FBVyxDQUFDO0lBR0ksQ0FBQztJQUV2Qyx1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG1EQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBaEJVLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDO3lDQU00QixlQUFNLEVBQXdCLDRCQUFZO1lBQy9DLDBCQUFXO09BTHZCLG9CQUFvQixDQWlCaEM7SUFBRCwyQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC11c2VyLXByb2ZpbGVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3VzZXItcHJvZmlsZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBnYXJtZW50c1VybDogc3RyaW5nID0gJ2FsbC91c2VyLyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0FkZEdhcm1lbnQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50cy9hZGQnXSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvSG9tZSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
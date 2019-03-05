"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var router_1 = require("@angular/router");
var user_service_1 = require("../../shared/services/user.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var InboxComponent = /** @class */ (function () {
    function InboxComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.currentUser = new user_1.User();
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.getUser(1);
    };
    InboxComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    InboxComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    InboxComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.userService.getUser(userId).subscribe(function (data) {
            _this.currentUser = data;
            _this.requests = _this.currentUser.swapRequests;
            console.log(_this.requests);
        });
    };
    InboxComponent.prototype.openMessage = function (args) {
        console.log(args.index);
    };
    InboxComponent.prototype.navigateBack = function () {
        console.log('navigate home');
        this.router.navigate(['/home']);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], InboxComponent.prototype, "drawerComponent", void 0);
    InboxComponent = __decorate([
        core_1.Component({
            selector: "app-inbox",
            moduleId: module.id,
            templateUrl: "./inbox.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], InboxComponent);
    return InboxComponent;
}());
exports.InboxComponent = InboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBQzVFLHVDQUFvQztBQUVwQywwQ0FBdUM7QUFDdkMsbUVBQStEO0FBQy9ELDhEQUE0RTtBQVM1RTtJQUtFLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSHBFLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUd5QyxDQUFDO0lBS3pFLGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQXRCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBOUJrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MkRBQUM7SUFQdkUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FPNEIsZUFBTSxFQUF1QiwwQkFBVztPQUx6RCxjQUFjLENBc0MxQjtJQUFELHFCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7U3dhcFJlcXVlc3R9IGZyb20gJy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtaW5ib3hcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2luYm94LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmJveENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcblxyXG4gIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcclxuICByZXF1ZXN0czogU3dhcFJlcXVlc3RbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxyXG5cclxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFVzZXIoMSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcih1c2VySWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKHVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZGF0YTtcclxuICAgICAgdGhpcy5yZXF1ZXN0cyA9IHRoaXMuY3VycmVudFVzZXIuc3dhcFJlcXVlc3RzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlcXVlc3RzKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvcGVuTWVzc2FnZShhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmdzLmluZGV4KTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlQmFjaygpIHtcclxuICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0ZSBob21lJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=
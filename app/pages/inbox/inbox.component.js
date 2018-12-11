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
        this.requests[args.index].received = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBQzVFLHVDQUFvQztBQUVwQywwQ0FBdUM7QUFDdkMsbUVBQStEO0FBQy9ELDhEQUE0RTtBQVM1RTtJQUtFLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSHBFLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUd5QyxDQUFDO0lBS3pFLGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQXRCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUEvQmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsyREFBQztJQVB2RSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU80QixlQUFNLEVBQXVCLDBCQUFXO09BTHpELGNBQWMsQ0F1QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL2R0by91c2VyJztcclxuaW1wb3J0IHtTd2FwUmVxdWVzdH0gZnJvbSAnLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1pbmJveFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaW5ib3guY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEluYm94Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIHJlcXVlc3RzOiBTd2FwUmVxdWVzdFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VXNlcigxKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIodXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhO1xyXG4gICAgICB0aGlzLnJlcXVlc3RzID0gdGhpcy5jdXJyZW50VXNlci5zd2FwUmVxdWVzdHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVxdWVzdHMpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9wZW5NZXNzYWdlKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZ3MuaW5kZXgpO1xyXG4gICAgdGhpcy5yZXF1ZXN0c1thcmdzLmluZGV4XS5yZWNlaXZlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdGUgaG9tZScpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcbn1cclxuIl19
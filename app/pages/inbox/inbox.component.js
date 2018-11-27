"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var router_1 = require("@angular/router");
var user_service_1 = require("../../shared/services/user.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var InboxComponent = /** @class */ (function () {
    function InboxComponent(router, userService, _changeDetectionRef) {
        this.router = router;
        this.userService = userService;
        this._changeDetectionRef = _changeDetectionRef;
        this.currentUser = new user_1.User();
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.getUser(1);
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
        this.drawer.closeDrawer();
    };
    InboxComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(InboxComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    InboxComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    InboxComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
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
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, core_1.ChangeDetectorRef])
    ], InboxComponent);
    return InboxComponent;
}());
exports.InboxComponent = InboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBQy9GLHVDQUFvQztBQUVwQywwQ0FBdUM7QUFDdkMsbUVBQStEO0FBQy9ELDhEQUE0RTtBQVc1RTtJQU1FLHdCQUFvQixNQUFjLEVBQVUsV0FBd0IsRUFBVSxtQkFBc0M7UUFBaEcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUpwSCxnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7SUFJeUYsQ0FBQztJQUt6SCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLDZSQUE2UixDQUFDO1FBQ3JULElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQUksMkNBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFNTSxtQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHlDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUdELGdDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQXRCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUEvQ2tDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsyREFBQztJQVJ2RSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQVE0QixlQUFNLEVBQXVCLDBCQUFXLEVBQStCLHdCQUFpQjtPQU56RyxjQUFjLENBd0QxQjtJQUFELHFCQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQge1N3YXBSZXF1ZXN0fSBmcm9tICcuLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtaW5ib3hcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2luYm94LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmJveENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcblxyXG4gIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcclxuICByZXF1ZXN0czogU3dhcFJlcXVlc3RbXTtcclxuICBfbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRVc2VyKDEpO1xyXG4gICAgdGhpcy5tYWluQ29udGVudFRleHQgPSBcIlNpZGVEcmF3ZXIgZm9yIE5hdGl2ZVNjcmlwdCBjYW4gYmUgZWFzaWx5IHNldHVwIGluIHRoZSBIVE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIHRrRHJhd2VyQ29udGVudCBhbmQgdGtNYWluQ29udGVudC4gVGhlIGNvbXBvbmVudCBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIjtcclxuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX21haW5Db250ZW50VGV4dDtcclxuICB9XHJcblxyXG4gIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xyXG4gICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcclxuICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRVc2VyKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIodXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhO1xyXG4gICAgICB0aGlzLnJlcXVlc3RzID0gdGhpcy5jdXJyZW50VXNlci5zd2FwUmVxdWVzdHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVxdWVzdHMpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9wZW5NZXNzYWdlKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZ3MuaW5kZXgpO1xyXG4gICAgdGhpcy5yZXF1ZXN0c1thcmdzLmluZGV4XS5yZWNlaXZlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdGUgaG9tZScpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcbn1cclxuIl19
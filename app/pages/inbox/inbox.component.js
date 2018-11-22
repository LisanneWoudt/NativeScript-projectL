"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var router_1 = require("@angular/router");
var user_service_1 = require("../../shared/services/user.service");
var InboxComponent = /** @class */ (function () {
    function InboxComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.currentUser = new user_1.User();
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.getUser(1);
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
    InboxComponent = __decorate([
        core_1.Component({
            selector: "app-inbox",
            moduleId: module.id,
            templateUrl: "./inbox.component.html",
            styleUrls: ["../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], InboxComponent);
    return InboxComponent;
}());
exports.InboxComponent = InboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVDQUFvQztBQUVwQywwQ0FBdUM7QUFDdkMsbUVBQStEO0FBUy9EO0lBS0Usd0JBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIcEUsZ0JBQVcsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBR3lDLENBQUM7SUFFekUsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQXRCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBdkJVLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBTzRCLGVBQU0sRUFBdUIsMEJBQVc7T0FMekQsY0FBYyxDQXdCMUI7SUFBRCxxQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL2R0by91c2VyJztcclxuaW1wb3J0IHtTd2FwUmVxdWVzdH0gZnJvbSAnLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWluYm94XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pbmJveC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9ob21lL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEluYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIHJlcXVlc3RzOiBTd2FwUmVxdWVzdFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRVc2VyKDEpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldFVzZXIodXNlcklkOiBudW1iZXIpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcih1c2VySWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGRhdGE7XHJcbiAgICAgIHRoaXMucmVxdWVzdHMgPSB0aGlzLmN1cnJlbnRVc2VyLnN3YXBSZXF1ZXN0cztcclxuICAgICAgY29uc29sZS5sb2codGhpcy5yZXF1ZXN0cyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb3Blbk1lc3NhZ2UoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coYXJncy5pbmRleCk7XHJcbiAgICB0aGlzLnJlcXVlc3RzW2FyZ3MuaW5kZXhdLnJlY2VpdmVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19
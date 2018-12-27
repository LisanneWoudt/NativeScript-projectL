"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ReceivedRequestsComponent = /** @class */ (function () {
    function ReceivedRequestsComponent(router) {
        this.router = router;
        this.sendOrReceived = 'received';
    }
    ReceivedRequestsComponent.prototype.ngOnInit = function () { };
    ReceivedRequestsComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    ReceivedRequestsComponent = __decorate([
        core_1.Component({
            selector: "app-received-request",
            moduleId: module.id,
            templateUrl: "./received-requests.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ReceivedRequestsComponent);
    return ReceivedRequestsComponent;
}());
exports.ReceivedRequestsComponent = ReceivedRequestsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2ZWQtcmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjZWl2ZWQtcmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQVF6QztJQUlFLG1DQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZsQyxtQkFBYyxHQUFXLFVBQVUsQ0FBQztJQUVFLENBQUM7SUFFdkMsNENBQVEsR0FBUixjQUFZLENBQUM7SUFFYixnREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFWVSx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQ0FBb0M7U0FDcEQsQ0FBQzt5Q0FNNEIsZUFBTTtPQUp2Qix5QkFBeUIsQ0FZckM7SUFBRCxnQ0FBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXJlY2VpdmVkLXJlcXVlc3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlY2VpdmVkLXJlcXVlc3RzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNlaXZlZFJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgc2VuZE9yUmVjZWl2ZWQ6IHN0cmluZyA9ICdyZWNlaXZlZCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5hdmlnYXRlQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
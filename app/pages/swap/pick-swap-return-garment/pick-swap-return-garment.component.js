"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var PickSwapReturnGarmentComponent = /** @class */ (function () {
    function PickSwapReturnGarmentComponent(router, route) {
        this.router = router;
        this.route = route;
        this.garmentsUrl = 'all/';
        this.sizes = ["XS", "S", "M", "L", "XL"];
        this.genders = ["Woman", "Man"];
    }
    PickSwapReturnGarmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.receivedFromId = +params['userid']; // (+) converts string 'userId' to a number
            console.log("received from: " + _this.receivedFromId);
        });
        this.child.filterGarmentsOnUser(this.receivedFromId);
    };
    PickSwapReturnGarmentComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    PickSwapReturnGarmentComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    PickSwapReturnGarmentComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild('garmentOverview'),
        __metadata("design:type", Object)
    ], PickSwapReturnGarmentComponent.prototype, "child", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], PickSwapReturnGarmentComponent.prototype, "drawerComponent", void 0);
    PickSwapReturnGarmentComponent = __decorate([
        core_1.Component({
            selector: "app-pick-swap-return-garment",
            moduleId: module.id,
            templateUrl: "./pick-swap-return-garment.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], PickSwapReturnGarmentComponent);
    return PickSwapReturnGarmentComponent;
}());
exports.PickSwapReturnGarmentComponent = PickSwapReturnGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpY2stc3dhcC1yZXR1cm4tZ2FybWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFFNUUsMENBQXlEO0FBQ3pELDhEQUE0RTtBQVM1RTtJQVlFLHdDQUFvQixNQUFjLEVBQVUsS0FBcUI7UUFBN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTGpFLGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBQzdCLFVBQUssR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxZQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFHMEMsQ0FBQztJQUV0RSxpREFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztZQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3REFBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRUQscURBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0scURBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQTlCNkI7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzs7aUVBQU87SUFDRDtRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MkVBQUM7SUFIdkUsOEJBQThCO1FBTjFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkNBQTJDO1NBQzNELENBQUM7eUNBYzRCLGVBQU0sRUFBaUIsdUJBQWM7T0FadEQsOEJBQThCLENBa0MxQztJQUFELHFDQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksd0VBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BpY2stc3dhcC1yZXR1cm4tZ2FybWVudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGlja1N3YXBSZXR1cm5HYXJtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZ2FybWVudE92ZXJ2aWV3JykgY2hpbGQ7XHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcbiAgc3ViOiBhbnk7XHJcbiAgZ2FybWVudHNVcmw6IHN0cmluZyA9ICdhbGwvJztcclxuICBzaXplcyA9IFtcIlhTXCIsIFwiU1wiLCBcIk1cIiwgXCJMXCIsIFwiWExcIl07XHJcbiAgZ2VuZGVycyA9IFtcIldvbWFuXCIsIFwiTWFuXCJdO1xyXG4gIHJlY2VpdmVkRnJvbUlkOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLnJlY2VpdmVkRnJvbUlkID0gK3BhcmFtc1sndXNlcmlkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ3VzZXJJZCcgdG8gYSBudW1iZXJcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgZnJvbTogXCIgKyB0aGlzLnJlY2VpdmVkRnJvbUlkKTtcclxuICAgICB9KTtcclxuICAgICB0aGlzLmNoaWxkLmZpbHRlckdhcm1lbnRzT25Vc2VyKHRoaXMucmVjZWl2ZWRGcm9tSWQpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
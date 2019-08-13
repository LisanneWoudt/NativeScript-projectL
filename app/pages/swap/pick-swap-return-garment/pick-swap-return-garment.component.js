"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var data_service_1 = require("../../../shared/services/data.service");
var PickSwapReturnGarmentComponent = /** @class */ (function () {
    function PickSwapReturnGarmentComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.garmentsUrl = 'all/';
        this.sizes = ["XS", "S", "M", "L", "XL"];
        this.genders = ["Woman", "Man"];
    }
    PickSwapReturnGarmentComponent.prototype.ngOnInit = function () {
        this.swapRequest = this.dataService.getSwapRequest();
        this.child.filterGarmentsOnUser(this.swapRequest.receivedFromId);
    };
    PickSwapReturnGarmentComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    PickSwapReturnGarmentComponent.prototype.navigateBack = function () {
        this.router.navigate(['/swap-requests/open/' + this.swapRequest.userId]);
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
        __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService])
    ], PickSwapReturnGarmentComponent);
    return PickSwapReturnGarmentComponent;
}());
exports.PickSwapReturnGarmentComponent = PickSwapReturnGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpY2stc3dhcC1yZXR1cm4tZ2FybWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFHNUUsMENBQXlDO0FBQ3pDLDhEQUE0RTtBQUU1RSxzRUFBb0U7QUFRcEU7SUFXRSx3Q0FBb0IsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxwRSxnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRzZDLENBQUM7SUFFekUsaURBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHdEQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCxxREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLHFEQUFZLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUExQjZCO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7O2lFQUFPO0lBQ0Q7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCOzJFQUFDO0lBSHZFLDhCQUE4QjtRQU4xQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJDQUEyQztTQUMzRCxDQUFDO3lDQWE0QixlQUFNLEVBQXVCLDBCQUFXO09BWHpELDhCQUE4QixDQThCMUM7SUFBRCxxQ0FBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdFQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BpY2stc3dhcC1yZXR1cm4tZ2FybWVudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGlja1N3YXBSZXR1cm5HYXJtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZ2FybWVudE92ZXJ2aWV3JykgY2hpbGQ7XHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcbiAgZ2FybWVudHNVcmw6IHN0cmluZyA9ICdhbGwvJztcclxuICBzaXplcyA9IFtcIlhTXCIsIFwiU1wiLCBcIk1cIiwgXCJMXCIsIFwiWExcIl07XHJcbiAgZ2VuZGVycyA9IFtcIldvbWFuXCIsIFwiTWFuXCJdO1xyXG4gIHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgICB0aGlzLnN3YXBSZXF1ZXN0ID0gdGhpcy5kYXRhU2VydmljZS5nZXRTd2FwUmVxdWVzdCgpO1xyXG4gICAgICB0aGlzLmNoaWxkLmZpbHRlckdhcm1lbnRzT25Vc2VyKHRoaXMuc3dhcFJlcXVlc3QucmVjZWl2ZWRGcm9tSWQpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3RzL29wZW4vJyArIHRoaXMuc3dhcFJlcXVlc3QudXNlcklkXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
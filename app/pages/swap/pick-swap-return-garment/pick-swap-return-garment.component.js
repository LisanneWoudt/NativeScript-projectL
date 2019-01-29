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
            _this.garmentId = +params['garmentId'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpY2stc3dhcC1yZXR1cm4tZ2FybWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFFNUUsMENBQXlEO0FBQ3pELDhEQUE0RTtBQVM1RTtJQWFFLHdDQUFvQixNQUFjLEVBQVUsS0FBcUI7UUFBN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTmpFLGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBQzdCLFVBQUssR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxZQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFJMEMsQ0FBQztJQUV0RSxpREFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztZQUNwRixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHdEQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCxxREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxxREFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBL0I2QjtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDOztpRUFBTztJQUNEO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsyRUFBQztJQUh2RSw4QkFBOEI7UUFOMUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQ0FBMkM7U0FDM0QsQ0FBQzt5Q0FlNEIsZUFBTSxFQUFpQix1QkFBYztPQWJ0RCw4QkFBOEIsQ0FtQzFDO0lBQUQscUNBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXBpY2stc3dhcC1yZXR1cm4tZ2FybWVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQaWNrU3dhcFJldHVybkdhcm1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdnYXJtZW50T3ZlcnZpZXcnKSBjaGlsZDtcclxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuICBzdWI6IGFueTtcclxuICBnYXJtZW50c1VybDogc3RyaW5nID0gJ2FsbC8nO1xyXG4gIHNpemVzID0gW1wiWFNcIiwgXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiXTtcclxuICBnZW5kZXJzID0gW1wiV29tYW5cIiwgXCJNYW5cIl07XHJcbiAgcmVjZWl2ZWRGcm9tSWQ6IG51bWJlcjtcclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgIHRoaXMucmVjZWl2ZWRGcm9tSWQgPSArcGFyYW1zWyd1c2VyaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAndXNlcklkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy5nYXJtZW50SWQgPSArcGFyYW1zWydnYXJtZW50SWQnXTtcclxuICAgICB9KTtcclxuICAgICB0aGlzLmNoaWxkLmZpbHRlckdhcm1lbnRzT25Vc2VyKHRoaXMucmVjZWl2ZWRGcm9tSWQpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
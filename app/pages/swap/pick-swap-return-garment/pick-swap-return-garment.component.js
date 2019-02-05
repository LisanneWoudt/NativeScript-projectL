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
        __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService])
    ], PickSwapReturnGarmentComponent);
    return PickSwapReturnGarmentComponent;
}());
exports.PickSwapReturnGarmentComponent = PickSwapReturnGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpY2stc3dhcC1yZXR1cm4tZ2FybWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFHNUUsMENBQXlDO0FBQ3pDLDhEQUE0RTtBQUU1RSxzRUFBb0U7QUFRcEU7SUFXRSx3Q0FBb0IsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxwRSxnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRzZDLENBQUM7SUFFekUsaURBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHdEQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCxxREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxxREFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBMUI2QjtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDOztpRUFBTztJQUNEO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsyRUFBQztJQUh2RSw4QkFBOEI7UUFOMUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQ0FBMkM7U0FDM0QsQ0FBQzt5Q0FhNEIsZUFBTSxFQUF1QiwwQkFBVztPQVh6RCw4QkFBOEIsQ0E4QjFDO0lBQUQscUNBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtcGljay1zd2FwLXJldHVybi1nYXJtZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpY2tTd2FwUmV0dXJuR2FybWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2dhcm1lbnRPdmVydmlldycpIGNoaWxkO1xyXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG4gIGdhcm1lbnRzVXJsOiBzdHJpbmcgPSAnYWxsLyc7XHJcbiAgc2l6ZXMgPSBbXCJYU1wiLCBcIlNcIiwgXCJNXCIsIFwiTFwiLCBcIlhMXCJdO1xyXG4gIGdlbmRlcnMgPSBbXCJXb21hblwiLCBcIk1hblwiXTtcclxuICBzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKTtcclxuICAgICAgdGhpcy5jaGlsZC5maWx0ZXJHYXJtZW50c09uVXNlcih0aGlzLnN3YXBSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
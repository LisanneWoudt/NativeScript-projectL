"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../dto/garment");
var user_1 = require("../../dto/user");
var data_service_1 = require("../../shared/services/data.service");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.garments = new Array();
        this.currentUser = new user_1.User();
        this.garment1 = new garment_1.Garment();
        this.garment2 = new garment_1.Garment();
        this.success = 0;
        this.garmentsUrl = 'all/user/';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.success = +params['success']; // (+) converts string 'id' to a number
        });
        this.currentUser = this.dataService.getMockUser();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    HomeComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    HomeComponent.prototype.getMockGarments = function () {
        this.garment1.name = 'GARMENT1';
        this.garment1.brand = 'H&M';
        this.garment1.size = 'XS';
        this.garment2.name = 'GARMENT2';
        this.garment2.brand = 'Zara';
        this.garment2.size = 'M';
        this.garments.push(this.garment1);
        this.garments.push(this.garment2);
    };
    HomeComponent.prototype.navigateToAddGarment = function () {
        this.success = 0;
        this.router.navigate(['/garments/add']);
    };
    HomeComponent.prototype.navigateToAllGarments = function () {
        this.router.navigate(['/garments/all']);
    };
    HomeComponent.prototype.navigateToInbox = function () {
        this.router.navigate(['/inbox']);
    };
    HomeComponent.prototype.navigateToReceivedRequests = function () {
        this.router.navigate(['//swap-requests/received/', this.currentUser.id]);
    };
    HomeComponent.prototype.navigateToSendRequests = function () {
        this.router.navigate(['/swap-requests/send/', this.currentUser.id]);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router, router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSwwQ0FBeUQ7QUFDekQsOERBQTRFO0FBUTVFO0lBVUksdUJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUG5HLGFBQVEsR0FBYyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2xDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxXQUFXLENBQUM7SUFHbEMsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQUxELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRU0sb0NBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw0Q0FBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsa0RBQTBCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELDhDQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFsRGtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjswREFBQztJQWJ6RSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVdtQywwQkFBVyxFQUFrQixlQUFNLEVBQWlCLHVCQUFjO09BVjFGLGFBQWEsQ0FnRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi9kdG8vZ2FybWVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIGdhcm1lbnRzOiBHYXJtZW50W10gPSBuZXcgQXJyYXkoKTtcbiAgICBjdXJyZW50VXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XG4gICAgZ2FybWVudDE6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xuICAgIGdhcm1lbnQyOiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcbiAgICBzdWNjZXNzOiBudW1iZXIgPSAwO1xuICAgIGdhcm1lbnRzVXJsOiBzdHJpbmcgPSAnYWxsL3VzZXIvJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgIHRoaXMuc3VjY2VzcyA9ICtwYXJhbXNbJ3N1Y2Nlc3MnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgIH0pO1xuXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRNb2NrR2FybWVudHMoKSB7XG4gICAgIHRoaXMuZ2FybWVudDEubmFtZSA9ICdHQVJNRU5UMSc7XG4gICAgIHRoaXMuZ2FybWVudDEuYnJhbmQgPSAnSCZNJztcbiAgICAgdGhpcy5nYXJtZW50MS5zaXplID0gJ1hTJztcbiAgICAgdGhpcy5nYXJtZW50Mi5uYW1lID0gJ0dBUk1FTlQyJztcbiAgICAgdGhpcy5nYXJtZW50Mi5icmFuZCA9ICdaYXJhJztcbiAgICAgdGhpcy5nYXJtZW50Mi5zaXplID0gJ00nO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50MSk7XG4gICAgIHRoaXMuZ2FybWVudHMucHVzaCh0aGlzLmdhcm1lbnQyKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvQWRkR2FybWVudCgpIHtcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDA7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50cy9hZGQnXSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0FsbEdhcm1lbnRzKCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWxsJ10pXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0luYm94KCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaW5ib3gnXSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvUmVjZWl2ZWRSZXF1ZXN0cygpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLy9zd2FwLXJlcXVlc3RzL3JlY2VpdmVkLycsIHRoaXMuY3VycmVudFVzZXIuaWRdKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9TZW5kUmVxdWVzdHMoKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3RzL3NlbmQvJywgdGhpcy5jdXJyZW50VXNlci5pZF0pXG4gICAgfVxufVxuIl19
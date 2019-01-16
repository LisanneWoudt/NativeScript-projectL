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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSwwQ0FBeUQ7QUFDekQsOERBQTRFO0FBUTVFO0lBVUksdUJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUG5HLGFBQVEsR0FBYyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2xDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxXQUFXLENBQUM7SUFHbEMsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQUxELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDRDQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNkNBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxrREFBMEIsR0FBMUI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBRUQsOENBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDckUsQ0FBQztJQWxEa0M7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCOzBEQUFDO0lBYnpFLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBV21DLDBCQUFXLEVBQWtCLGVBQU0sRUFBaUIsdUJBQWM7T0FWMUYsYUFBYSxDQWdFekI7SUFBRCxvQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheSgpO1xuICAgIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBnYXJtZW50MTogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG4gICAgZ2FybWVudDI6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xuICAgIHN1Y2Nlc3M6IG51bWJlciA9IDA7XG4gICAgZ2FybWVudHNVcmw6IHN0cmluZyA9ICdhbGwvdXNlci8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgdGhpcy5zdWNjZXNzID0gK3BhcmFtc1snc3VjY2VzcyddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgfSk7XG5cbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5kYXRhU2VydmljZS5nZXRNb2NrVXNlcigpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0TW9ja0dhcm1lbnRzKCkge1xuICAgICB0aGlzLmdhcm1lbnQxLm5hbWUgPSAnR0FSTUVOVDEnO1xuICAgICB0aGlzLmdhcm1lbnQxLmJyYW5kID0gJ0gmTSc7XG4gICAgIHRoaXMuZ2FybWVudDEuc2l6ZSA9ICdYUyc7XG4gICAgIHRoaXMuZ2FybWVudDIubmFtZSA9ICdHQVJNRU5UMic7XG4gICAgIHRoaXMuZ2FybWVudDIuYnJhbmQgPSAnWmFyYSc7XG4gICAgIHRoaXMuZ2FybWVudDIuc2l6ZSA9ICdNJztcbiAgICAgdGhpcy5nYXJtZW50cy5wdXNoKHRoaXMuZ2FybWVudDEpO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50Mik7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0FkZEdhcm1lbnQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3MgPSAwO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWRkJ10pO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG9BbGxHYXJtZW50cygpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FsbCddKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9JbmJveCgpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2luYm94J10pXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb1JlY2VpdmVkUmVxdWVzdHMoKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8vc3dhcC1yZXF1ZXN0cy9yZWNlaXZlZC8nLCB0aGlzLmN1cnJlbnRVc2VyLmlkXSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvU2VuZFJlcXVlc3RzKCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9zZW5kLycsIHRoaXMuY3VycmVudFVzZXIuaWRdKVxuICAgIH1cbn1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var data_service_1 = require("../../shared/services/data.service");
var swap_service_1 = require("../../shared/services/swap.service");
var garment_service_1 = require("../../shared/services/garment.service");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, swapService, garmentService) {
        this.dataService = dataService;
        this.router = router;
        this.swapService = swapService;
        this.garmentService = garmentService;
        this.currentUser = new user_1.User();
        this.limit = 4;
        this.garmentsUrl = 'all/';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.currentUser = this.dataService.getMockUser();
        this.getCountOpenRequests();
        this.getCountOpenNewRequests();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    HomeComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    HomeComponent.prototype.getCountOpenRequests = function () {
        var _this = this;
        this.swapService.countSwapRequests(1).subscribe(function (data) {
            _this.swapRequestCount = data;
            console.log('count: ' + data);
        }, function (error) {
            console.log('error in getting swap request count:' + error);
        });
    };
    HomeComponent.prototype.getCountOpenNewRequests = function () {
        var _this = this;
        this.swapService.countNewSwapRequests(1).subscribe(function (data) {
            _this.swapRequestNewCount = data;
            console.log(data);
        }, function (error) {
            console.log('error in getting swap request count:' + error);
        });
    };
    HomeComponent.prototype.navigateToUserProfile = function () {
        this.router.navigate(['/profile']);
    };
    HomeComponent.prototype.navigateToAllGarments = function () {
        this.router.navigate(['/garments/all']);
    };
    HomeComponent.prototype.navigateToOpenSwapRequests = function () {
        this.router.navigate(['/swap-requests/open/', this.currentUser.id]);
    };
    HomeComponent.prototype.navigateToSwapHistory = function () {
        this.router.navigate(['/swap-requests/history/', this.currentUser.id]);
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
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router,
            swap_service_1.SwapService, garment_service_1.GarmentService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUU3RSx1Q0FBc0M7QUFDdEMsbUVBQWlFO0FBQ2pFLG1FQUFpRTtBQUNqRSx5RUFBdUU7QUFDdkUsMENBQXlDO0FBQ3pDLDhEQUE0RTtBQVE1RTtJQVFJLHVCQUFvQixXQUF3QixFQUFVLE1BQWMsRUFDMUQsV0FBd0IsRUFBVSxjQUE4QjtRQUR0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQMUUsZ0JBQVcsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQy9CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVcsR0FBVyxNQUFNLENBQUM7SUFNN0IsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw0Q0FBb0IsR0FBcEI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNsRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELCtDQUF1QixHQUF2QjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3JELEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw2Q0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsa0RBQTBCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFqRGtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjswREFBQztJQVp6RSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVNtQywwQkFBVyxFQUFrQixlQUFNO1lBQzdDLDBCQUFXLEVBQTBCLGdDQUFjO09BVGpFLGFBQWEsQ0ErRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi9kdG8vZ2FybWVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN3YXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZSc7XG5pbXBvcnQgeyBHYXJtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuICAgIGxpbWl0OiBudW1iZXIgPSA0O1xuICAgIGdhcm1lbnRzVXJsOiBzdHJpbmcgPSAnYWxsLyc7XG4gICAgc3dhcFJlcXVlc3RDb3VudDogbnVtYmVyO1xuICAgIHN3YXBSZXF1ZXN0TmV3Q291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UsIHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XG4gICAgICB0aGlzLmdldENvdW50T3BlblJlcXVlc3RzKCk7XG4gICAgICB0aGlzLmdldENvdW50T3Blbk5ld1JlcXVlc3RzKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRDb3VudE9wZW5SZXF1ZXN0cygpIHtcbiAgICAgIHRoaXMuc3dhcFNlcnZpY2UuY291bnRTd2FwUmVxdWVzdHMoMSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN3YXBSZXF1ZXN0Q291bnQgPSBkYXRhO1xuICAgICAgICBjb25zb2xlLmxvZygnY291bnQ6ICcgKyBkYXRhKTtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGdldHRpbmcgc3dhcCByZXF1ZXN0IGNvdW50OicgKyBlcnJvcik7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldENvdW50T3Blbk5ld1JlcXVlc3RzKCkge1xuICAgICAgdGhpcy5zd2FwU2VydmljZS5jb3VudE5ld1N3YXBSZXF1ZXN0cygxKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3dhcFJlcXVlc3ROZXdDb3VudCA9IGRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBnZXR0aW5nIHN3YXAgcmVxdWVzdCBjb3VudDonICsgZXJyb3IpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvVXNlclByb2ZpbGUoKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG9BbGxHYXJtZW50cygpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FsbCddKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9PcGVuU3dhcFJlcXVlc3RzKCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9vcGVuLycsIHRoaXMuY3VycmVudFVzZXIuaWRdKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9Td2FwSGlzdG9yeSgpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdHMvaGlzdG9yeS8nLCB0aGlzLmN1cnJlbnRVc2VyLmlkXSlcbiAgICB9XG5cbn1cbiJdfQ==
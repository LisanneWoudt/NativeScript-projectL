"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../dto/garment");
var user_1 = require("../../dto/user");
var data_service_1 = require("../../shared/services/data.service");
var swap_service_1 = require("../../shared/services/swap.service");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, swapService) {
        this.dataService = dataService;
        this.router = router;
        this.swapService = swapService;
        this.garments = new Array();
        this.currentUser = new user_1.User();
        this.garment1 = new garment_1.Garment();
        this.garment2 = new garment_1.Garment();
        this.garmentsUrl = 'all/user/';
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
    HomeComponent.prototype.navigateToAddGarment = function () {
        this.router.navigate(['/garments/add']);
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
            swap_service_1.SwapService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSxtRUFBaUU7QUFDakUsMENBQXlDO0FBQ3pDLDhEQUE0RTtBQVE1RTtJQVVJLHVCQUFvQixXQUF3QixFQUFVLE1BQWMsRUFDMUQsV0FBd0I7UUFEZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFUbEMsYUFBUSxHQUFjLElBQUksS0FBSyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBVyxXQUFXLENBQUM7SUFNbEMsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQW9CLEdBQXBCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDbEQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwrQ0FBdUIsR0FBdkI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNyRCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNENBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2Q0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVELGtEQUEwQixHQUExQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCw2Q0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBNURrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MERBQUM7SUFkekUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FXbUMsMEJBQVcsRUFBa0IsZUFBTTtZQUM3QywwQkFBVztPQVh6QixhQUFhLENBNEV6QjtJQUFELG9CQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0ICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2R0by91c2VyJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheSgpO1xuICAgIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBnYXJtZW50MTogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG4gICAgZ2FybWVudDI6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xuICAgIGdhcm1lbnRzVXJsOiBzdHJpbmcgPSAnYWxsL3VzZXIvJztcbiAgICBzd2FwUmVxdWVzdENvdW50OiBudW1iZXI7XG4gICAgc3dhcFJlcXVlc3ROZXdDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICBwcml2YXRlIHN3YXBTZXJ2aWNlOiBTd2FwU2VydmljZSkge1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5kYXRhU2VydmljZS5nZXRNb2NrVXNlcigpO1xuICAgICAgdGhpcy5nZXRDb3VudE9wZW5SZXF1ZXN0cygpO1xuICAgICAgdGhpcy5nZXRDb3VudE9wZW5OZXdSZXF1ZXN0cygpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0TW9ja0dhcm1lbnRzKCkge1xuICAgICB0aGlzLmdhcm1lbnQxLm5hbWUgPSAnR0FSTUVOVDEnO1xuICAgICB0aGlzLmdhcm1lbnQxLmJyYW5kID0gJ0gmTSc7XG4gICAgIHRoaXMuZ2FybWVudDEuc2l6ZSA9ICdYUyc7XG4gICAgIHRoaXMuZ2FybWVudDIubmFtZSA9ICdHQVJNRU5UMic7XG4gICAgIHRoaXMuZ2FybWVudDIuYnJhbmQgPSAnWmFyYSc7XG4gICAgIHRoaXMuZ2FybWVudDIuc2l6ZSA9ICdNJztcbiAgICAgdGhpcy5nYXJtZW50cy5wdXNoKHRoaXMuZ2FybWVudDEpO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50Mik7XG4gICAgfVxuXG4gICAgZ2V0Q291bnRPcGVuUmVxdWVzdHMoKSB7XG4gICAgICB0aGlzLnN3YXBTZXJ2aWNlLmNvdW50U3dhcFJlcXVlc3RzKDEpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zd2FwUmVxdWVzdENvdW50ID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvdW50OiAnICsgZGF0YSk7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBnZXR0aW5nIHN3YXAgcmVxdWVzdCBjb3VudDonICsgZXJyb3IpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRDb3VudE9wZW5OZXdSZXF1ZXN0cygpIHtcbiAgICAgIHRoaXMuc3dhcFNlcnZpY2UuY291bnROZXdTd2FwUmVxdWVzdHMoMSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN3YXBSZXF1ZXN0TmV3Q291bnQgPSBkYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZ2V0dGluZyBzd2FwIHJlcXVlc3QgY291bnQ6JyArIGVycm9yKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0FkZEdhcm1lbnQoKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50cy9hZGQnXSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0FsbEdhcm1lbnRzKCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWxsJ10pXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb09wZW5Td2FwUmVxdWVzdHMoKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3RzL29wZW4vJywgdGhpcy5jdXJyZW50VXNlci5pZF0pXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb1N3YXBIaXN0b3J5KCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9oaXN0b3J5LycsIHRoaXMuY3VycmVudFVzZXIuaWRdKVxuICAgIH1cblxufVxuIl19
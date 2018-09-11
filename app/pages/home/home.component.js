"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../dto/garment");
var user_1 = require("../../dto/user");
var data_service_1 = require("../../shared/services/data.service");
var garment_service_1 = require("../../shared/services/garment.service");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, route, garmentService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.garmentService = garmentService;
        this.currentUser = new user_1.User();
        this.garment1 = new garment_1.Garment();
        this.garment2 = new garment_1.Garment();
        this.success = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.success = +params['success']; // (+) converts string 'id' to a number
        });
        this.garments = new Array;
        console.log("in home component ngOnInit");
        this.currentUser = this.dataService.getMockUser();
        console.log(this.currentUser);
        //    this.garments = this.currentUser.garments;
        this.getGarments();
    };
    // getAllGarments() {
    //   this.garmentService.getAllGarments().subscribe(data => {
    //     this.garments = data;
    //   }, errorResponse => {
    //     console.error(errorResponse);
    //     this.router.navigate(['/error']);
    //   });
    // }
    HomeComponent.prototype.getGarments = function () {
        console.log("getting garments");
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
        console.log("navigate to add garments");
        this.router.navigate(['/garments/add']);
    };
    HomeComponent.prototype.navigateToGarments = function () {
        console.log("navigate to garments overview");
        this.router.navigate(['/garments/all']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router, router_1.ActivatedRoute,
            garment_service_1.GarmentService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsMENBQXlEO0FBUXpEO0lBVUksdUJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCLEVBQ3pGLGNBQThCO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3pGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUVsQyxZQUFPLEdBQVcsQ0FBQyxDQUFDO0lBSXBCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFWRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RSxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxnREFBZ0Q7UUFDNUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQkFBcUI7SUFDckIsNkRBQTZEO0lBQzdELDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLHdDQUF3QztJQUN4QyxRQUFRO0lBQ1IsSUFBSTtJQUVKLG1DQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQW9CLEdBQXBCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBekRRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBV21DLDBCQUFXLEVBQWtCLGVBQU0sRUFBaUIsdUJBQWM7WUFDekUsZ0NBQWM7T0FYL0IsYUFBYSxDQTBEekI7SUFBRCxvQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBnYXJtZW50czogR2FybWVudFtdO1xuICAgIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBnYXJtZW50MTogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG4gICAgZ2FybWVudDI6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xuICAgIGljb246IGFueTtcbiAgICBzdWNjZXNzOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgdGhpcy5zdWNjZXNzID0gK3BhcmFtc1snc3VjY2VzcyddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgfSk7XG5cbiAgICB0aGlzLmdhcm1lbnRzID0gbmV3IEFycmF5O1xuICAgIGNvbnNvbGUubG9nKFwiaW4gaG9tZSBjb21wb25lbnQgbmdPbkluaXRcIik7XG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRVc2VyKTtcbi8vICAgIHRoaXMuZ2FybWVudHMgPSB0aGlzLmN1cnJlbnRVc2VyLmdhcm1lbnRzO1xuICAgIHRoaXMuZ2V0R2FybWVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBnZXRBbGxHYXJtZW50cygpIHtcbiAgICAvLyAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0QWxsR2FybWVudHMoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgLy8gICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xuICAgIC8vICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgZ2V0R2FybWVudHMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZ2FybWVudHNcIik7XG4gICAgIHRoaXMuZ2FybWVudDEubmFtZSA9ICdHQVJNRU5UMSc7XG4gICAgIHRoaXMuZ2FybWVudDEuYnJhbmQgPSAnSCZNJztcbiAgICAgdGhpcy5nYXJtZW50MS5zaXplID0gJ1hTJztcbiAgICAgdGhpcy5nYXJtZW50Mi5uYW1lID0gJ0dBUk1FTlQyJztcbiAgICAgdGhpcy5nYXJtZW50Mi5icmFuZCA9ICdaYXJhJztcbiAgICAgdGhpcy5nYXJtZW50Mi5zaXplID0gJ00nO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50MSk7XG4gICAgIHRoaXMuZ2FybWVudHMucHVzaCh0aGlzLmdhcm1lbnQyKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvQWRkR2FybWVudCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgdG8gYWRkIGdhcm1lbnRzXCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWRkJ10pO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG9HYXJtZW50cygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgdG8gZ2FybWVudHMgb3ZlcnZpZXdcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50cy9hbGwnXSk7XG4gICAgfVxufVxuIl19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../dto/garment");
var user_1 = require("../../dto/user");
var data_service_1 = require("../../shared/services/data.service");
var router_1 = require("@angular/router");
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
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.success = +params['success']; // (+) converts string 'id' to a number
        });
        this.currentUser = this.dataService.getMockUser();
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
    HomeComponent.prototype.navigateToGarments = function () {
        this.success = 0;
        this.router.navigate(['/garments/all']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router, router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSwwQ0FBeUQ7QUFRekQ7SUFTSSx1QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsS0FBcUI7UUFBL0UsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFObkcsYUFBUSxHQUFjLElBQUksS0FBSyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDbEMsWUFBTyxHQUFXLENBQUMsQ0FBQztJQUdwQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUdELHVDQUFlLEdBQWY7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw0Q0FBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBekNRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBVW1DLDBCQUFXLEVBQWtCLGVBQU0sRUFBaUIsdUJBQWM7T0FUMUYsYUFBYSxDQTBDekI7SUFBRCxvQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBnYXJtZW50czogR2FybWVudFtdID0gbmV3IEFycmF5KCk7XG4gICAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuICAgIGdhcm1lbnQxOiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcbiAgICBnYXJtZW50MjogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG4gICAgc3VjY2VzczogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICB0aGlzLnN1Y2Nlc3MgPSArcGFyYW1zWydzdWNjZXNzJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxuICAgICB9KTtcblxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNb2NrR2FybWVudHMoKSB7XG4gICAgIHRoaXMuZ2FybWVudDEubmFtZSA9ICdHQVJNRU5UMSc7XG4gICAgIHRoaXMuZ2FybWVudDEuYnJhbmQgPSAnSCZNJztcbiAgICAgdGhpcy5nYXJtZW50MS5zaXplID0gJ1hTJztcbiAgICAgdGhpcy5nYXJtZW50Mi5uYW1lID0gJ0dBUk1FTlQyJztcbiAgICAgdGhpcy5nYXJtZW50Mi5icmFuZCA9ICdaYXJhJztcbiAgICAgdGhpcy5nYXJtZW50Mi5zaXplID0gJ00nO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50MSk7XG4gICAgIHRoaXMuZ2FybWVudHMucHVzaCh0aGlzLmdhcm1lbnQyKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvQWRkR2FybWVudCgpIHtcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDA7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50cy9hZGQnXSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0dhcm1lbnRzKCkge1xuICAgICAgdGhpcy5zdWNjZXNzID0gMDtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FsbCddKTtcbiAgICB9XG59XG4iXX0=
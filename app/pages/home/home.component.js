"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../dto/garment");
var user_1 = require("../../dto/user");
var data_service_1 = require("../../shared/services/data.service");
var garment_service_1 = require("../../shared/services/garment.service");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, garmentService) {
        this.dataService = dataService;
        this.router = router;
        this.garmentService = garmentService;
        this.garments = new Array;
        this.currentUser = new user_1.User();
        this.garment1 = new garment_1.Garment();
        this.garment2 = new garment_1.Garment();
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("in home component");
        //    this.currentUser = this.dataService.getUser();
        //    this.garments = this.currentUser.garments;
        this.getGarments();
    };
    HomeComponent.prototype.toggleDrawer = function () {
        console.log("togglin");
        //drawer.toggleDrawerState();
    };
    HomeComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.garmentService.getAllGarments().subscribe(function (data) {
            _this.garments = data;
        }, function (errorResponse) {
            console.error(errorResponse);
            _this.router.navigate(['/error']);
        });
    };
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
    HomeComponent.prototype.addGarment = function () {
        this.router.navigate(['/garments/add']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router,
            garment_service_1.GarmentService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsMENBQXlDO0FBUXpDO0lBT0ksdUJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUMxRCxjQUE4QjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTnhDLGFBQVEsR0FBYyxJQUFJLEtBQUssQ0FBQztRQUNoQyxnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUlsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNyQyxvREFBb0Q7UUFDcEQsZ0RBQWdEO1FBQzVDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBR0Qsb0NBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckIsNkJBQTZCO0lBQ2pDLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxFQUFFLFVBQUEsYUFBYTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBL0NRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBUW1DLDBCQUFXLEVBQWtCLGVBQU07WUFDMUMsZ0NBQWM7T0FSL0IsYUFBYSxDQWdEekI7SUFBRCxvQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGdhcm1lbnRzOiBHYXJtZW50W10gPSBuZXcgQXJyYXk7XG4gICAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuICAgIGdhcm1lbnQxOiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcbiAgICBnYXJtZW50MjogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJpbiBob21lIGNvbXBvbmVudFwiKTtcbi8vICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFVzZXIoKTtcbi8vICAgIHRoaXMuZ2FybWVudHMgPSB0aGlzLmN1cnJlbnRVc2VyLmdhcm1lbnRzO1xuICAgIHRoaXMuZ2V0R2FybWVudHMoKTtcbiAgICB9XG5cblxuICAgIHRvZ2dsZURyYXdlcigpe1xuICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGluXCIpO1xuICAgICAgICAvL2RyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIGdldEFsbEdhcm1lbnRzKCkge1xuICAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cygpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nYXJtZW50cyA9IGRhdGE7XG4gICAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRHYXJtZW50cygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBnYXJtZW50c1wiKTtcbiAgICAgdGhpcy5nYXJtZW50MS5uYW1lID0gJ0dBUk1FTlQxJztcbiAgICAgdGhpcy5nYXJtZW50MS5icmFuZCA9ICdIJk0nO1xuICAgICB0aGlzLmdhcm1lbnQxLnNpemUgPSAnWFMnO1xuICAgICB0aGlzLmdhcm1lbnQyLm5hbWUgPSAnR0FSTUVOVDInO1xuICAgICB0aGlzLmdhcm1lbnQyLmJyYW5kID0gJ1phcmEnO1xuICAgICB0aGlzLmdhcm1lbnQyLnNpemUgPSAnTSc7XG4gICAgIHRoaXMuZ2FybWVudHMucHVzaCh0aGlzLmdhcm1lbnQxKTtcbiAgICAgdGhpcy5nYXJtZW50cy5wdXNoKHRoaXMuZ2FybWVudDIpO1xuICAgIH1cblxuICAgIGFkZEdhcm1lbnQoKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50cy9hZGQnXSk7XG4gICAgfVxufVxuIl19
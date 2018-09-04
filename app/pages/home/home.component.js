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
        this.currentUser = new user_1.User();
        this.garment1 = new garment_1.Garment();
        this.garment2 = new garment_1.Garment();
    }
    HomeComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router,
            garment_service_1.GarmentService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsMENBQXlDO0FBUXpDO0lBT0ksdUJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUMxRCxjQUE4QjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTHhDLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBSWxDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLGdEQUFnRDtRQUM1QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHFCQUFxQjtJQUNyQiw2REFBNkQ7SUFDN0QsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLFFBQVE7SUFDUixJQUFJO0lBRUosbUNBQVcsR0FBWDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw0Q0FBb0IsR0FBcEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFqRFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FRbUMsMEJBQVcsRUFBa0IsZUFBTTtZQUMxQyxnQ0FBYztPQVIvQixhQUFhLENBa0R6QjtJQUFELG9CQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2R0by91c2VyJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGdhcm1lbnRzOiBHYXJtZW50W107XG4gICAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuICAgIGdhcm1lbnQxOiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcbiAgICBnYXJtZW50MjogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nYXJtZW50cyA9IG5ldyBBcnJheTtcbiAgICBjb25zb2xlLmxvZyhcImluIGhvbWUgY29tcG9uZW50IG5nT25Jbml0XCIpO1xuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VXNlcik7XG4vLyAgICB0aGlzLmdhcm1lbnRzID0gdGhpcy5jdXJyZW50VXNlci5nYXJtZW50cztcbiAgICB0aGlzLmdldEdhcm1lbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gZ2V0QWxsR2FybWVudHMoKSB7XG4gICAgLy8gICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmdldEFsbEdhcm1lbnRzKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgIC8vICAgICB0aGlzLmdhcm1lbnRzID0gZGF0YTtcbiAgICAvLyAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xuICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cblxuICAgIGdldEdhcm1lbnRzKCkge1xuICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGdhcm1lbnRzXCIpO1xuICAgICB0aGlzLmdhcm1lbnQxLm5hbWUgPSAnR0FSTUVOVDEnO1xuICAgICB0aGlzLmdhcm1lbnQxLmJyYW5kID0gJ0gmTSc7XG4gICAgIHRoaXMuZ2FybWVudDEuc2l6ZSA9ICdYUyc7XG4gICAgIHRoaXMuZ2FybWVudDIubmFtZSA9ICdHQVJNRU5UMic7XG4gICAgIHRoaXMuZ2FybWVudDIuYnJhbmQgPSAnWmFyYSc7XG4gICAgIHRoaXMuZ2FybWVudDIuc2l6ZSA9ICdNJztcbiAgICAgdGhpcy5nYXJtZW50cy5wdXNoKHRoaXMuZ2FybWVudDEpO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50Mik7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0FkZEdhcm1lbnQoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIGFkZCBnYXJtZW50c1wiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FkZCddKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvR2FybWVudHMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIGdhcm1lbnRzIG92ZXJ2aWV3XCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWxsJ10pO1xuICAgIH1cbn1cbiJdfQ==
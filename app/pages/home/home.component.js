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
        this.thumbSize = 120;
        this.previewSize = 120;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.success = +params['success']; // (+) converts string 'id' to a number
        });
        this.garments = new Array;
        this.currentUser = this.dataService.getMockUser();
        console.log(this.currentUser);
        this.getAllGarments();
    };
    HomeComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.garmentService.getAllGarments().subscribe(function (data) {
            _this.garments = data;
            for (var int in _this.garments) {
                _this.count = +int;
                _this.search(_this.garments[_this.count].id, _this.count);
            }
        }, function (errorResponse) {
            console.error(errorResponse);
            //   this.router.navigate(['/error']);
        });
    };
    HomeComponent.prototype.search = function (garmentId, int) {
        var _this = this;
        console.log("searching with garmentID = " + garmentId);
        var httpModule = require("http");
        httpModule.getImage("http://192.168.178.18:8080/images/download/" + garmentId).then(function (res) {
            console.log('success');
            _this.garments[int].image = res;
            _this.imageSrc = res;
            return res;
        }, function (msg) {
            console.log("error!");
        });
    };
    HomeComponent.prototype.getMockGarments = function () {
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
        this.success = 0;
        console.log("navigate to add garments");
        this.router.navigate(['/garments/add']);
    };
    HomeComponent.prototype.navigateToGarments = function () {
        this.success = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsMENBQXlEO0FBUXpEO0lBY0ksdUJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCLEVBQ3pGLGNBQThCO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3pGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVh4QyxnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUVsQyxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBR3BCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFJMUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVJELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFD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QVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBZW1DLDBCQUFXLEVBQWtCLGVBQU0sRUFBaUIsdUJBQWM7WUFDekUsZ0NBQWM7T0FmL0IsYUFBYSxDQW9GekI7SUFBRCxvQkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBnYXJtZW50czogR2FybWVudFtdO1xuICAgIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBnYXJtZW50MTogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG4gICAgZ2FybWVudDI6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xuICAgIGljb246IGFueTtcbiAgICBzdWNjZXNzOiBudW1iZXIgPSAwO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgaW1hZ2VTcmM6IGFueTtcbiAgICB0aHVtYlNpemU6IG51bWJlciA9IDEyMDtcbiAgICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTIwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgdGhpcy5zdWNjZXNzID0gK3BhcmFtc1snc3VjY2VzcyddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgfSk7XG5cbiAgICB0aGlzLmdhcm1lbnRzID0gbmV3IEFycmF5O1xuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VXNlcik7XG4gICAgdGhpcy5nZXRBbGxHYXJtZW50cygpO1xuICAgIH1cblxuICAgIGdldEFsbEdhcm1lbnRzKCkge1xuICAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cygpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nYXJtZW50cyA9IGRhdGE7XG5cbiAgICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gK2ludDtcbiAgICAgICAgICB0aGlzLnNlYXJjaCh0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdLmlkLCB0aGlzLmNvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKTtcbiAgICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlYXJjaChnYXJtZW50SWQ6IG51bWJlciwgaW50OiBudW1iZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIHdpdGggZ2FybWVudElEID0gXCIgKyBnYXJtZW50SWQpO1xuICAgICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgICAgaHR0cE1vZHVsZS5nZXRJbWFnZShcImh0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2ltYWdlcy9kb3dubG9hZC9cIiArIGdhcm1lbnRJZCkudGhlbihcbiAgICAgICAgICByZXMgPT4geyAvLyBTdWNjZXNzXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XG4gICAgICAgICAgdGhpcy5nYXJtZW50c1tpbnRdLmltYWdlID0gcmVzO1xuICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XG4gICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtc2cgPT4geyAvLyBFcnJvclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICB9XG5cbiAgICBnZXRNb2NrR2FybWVudHMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZ2FybWVudHNcIik7XG4gICAgIHRoaXMuZ2FybWVudDEubmFtZSA9ICdHQVJNRU5UMSc7XG4gICAgIHRoaXMuZ2FybWVudDEuYnJhbmQgPSAnSCZNJztcbiAgICAgdGhpcy5nYXJtZW50MS5zaXplID0gJ1hTJztcbiAgICAgdGhpcy5nYXJtZW50Mi5uYW1lID0gJ0dBUk1FTlQyJztcbiAgICAgdGhpcy5nYXJtZW50Mi5icmFuZCA9ICdaYXJhJztcbiAgICAgdGhpcy5nYXJtZW50Mi5zaXplID0gJ00nO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50MSk7XG4gICAgIHRoaXMuZ2FybWVudHMucHVzaCh0aGlzLmdhcm1lbnQyKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvQWRkR2FybWVudCgpIHtcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDA7XG4gICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIGFkZCBnYXJtZW50c1wiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FkZCddKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvR2FybWVudHMoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3MgPSAwO1xuICAgICAgY29uc29sZS5sb2coXCJuYXZpZ2F0ZSB0byBnYXJtZW50cyBvdmVydmlld1wiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FsbCddKTtcbiAgICB9XG59XG4iXX0=
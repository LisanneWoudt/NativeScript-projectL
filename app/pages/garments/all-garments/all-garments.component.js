"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var router_1 = require("@angular/router");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(garmentService, router) {
        this.garmentService = garmentService;
        this.router = router;
        this.garments = new Array;
        this.garmentsFinal = new Array;
        this.previewSize = 100;
    }
    AllGarmentsComponent.prototype.ngOnInit = function () {
        this.getAllGarments();
    };
    AllGarmentsComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.garmentService.getAllGarments().subscribe(function (data) {
            console.log(data);
            _this.garments = data;
            for (var int in _this.garments) {
                _this.count = +int;
                console.log(_this.count);
                console.log(_this.count + 1);
                _this.search(_this.garments[_this.count].id, _this.count);
            }
        }, function (errorResponse) {
            console.error(errorResponse);
            _this.router.navigate(['/error']);
        });
    };
    AllGarmentsComponent.prototype.search = function (garmentId, int) {
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
    AllGarmentsComponent.prototype.navigateToSendSwap = function (garmentId) {
        console.log('garmentId = ' + garmentId);
        this.router.navigate(['/swap-request', garmentId]);
    };
    AllGarmentsComponent = __decorate([
        core_1.Component({
            selector: "app-all-garments",
            moduleId: module.id,
            templateUrl: "./all-garments.component.html",
            styleUrls: ["../../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, router_1.Router])
    ], AllGarmentsComponent);
    return AllGarmentsComponent;
}());
exports.AllGarmentsComponent = AllGarmentsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFakQsNEVBQXdFO0FBQ3pFLDBDQUF1QztBQVN2QztJQVFFLDhCQUFvQixjQUE4QixFQUFVLE1BQWM7UUFBdEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU4zRSxhQUFRLEdBQWMsSUFBSSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBYyxJQUFJLEtBQUssQ0FBQztRQUVyQyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUdxRCxDQUFDO0lBRS9FLHVDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDZDQUFjLEdBQWQ7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFckIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBRTlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxDQUFDO1FBRUgsQ0FBQyxFQUFFLFVBQUEsYUFBYTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELHFDQUFNLEdBQU4sVUFBTyxTQUFpQixFQUFFLEdBQVc7UUFBckMsaUJBY0U7UUFiQSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsUUFBUSxDQUFDLDZDQUE2QyxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDL0UsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDL0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNaLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FDRixDQUFBO0lBQ0osQ0FBQztJQUdGLGlEQUFrQixHQUFsQixVQUFtQixTQUFpQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUF0RFUsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7eUNBVW9DLGdDQUFjLEVBQWtCLGVBQU07T0FSL0Qsb0JBQW9CLENBd0RoQztJQUFELDJCQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbiBpbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1hbGwtZ2FybWVudHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FsbC1nYXJtZW50cy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi8uLi9ob21lL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFsbEdhcm1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiBnYXJtZW50czogR2FybWVudFtdID0gbmV3IEFycmF5O1xyXG4gZ2FybWVudHNGaW5hbDogR2FybWVudFtdID0gbmV3IEFycmF5O1xyXG4gaW1hZ2VTcmM6IGFueTtcclxuIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMDA7XHJcbiBjb3VudDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICB0aGlzLmdldEFsbEdhcm1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxHYXJtZW50cygpIHtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0QWxsR2FybWVudHMoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmdhcm1lbnRzID0gZGF0YTtcclxuXHJcbiAgICAgIGZvciAobGV0IGludCBpbiB0aGlzLmdhcm1lbnRzKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgPSAraW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291bnQgKyAxKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCh0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdLmlkLCB0aGlzLmNvdW50KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHNlYXJjaChnYXJtZW50SWQ6IG51bWJlciwgaW50OiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIHdpdGggZ2FybWVudElEID0gXCIgKyBnYXJtZW50SWQpO1xyXG4gICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4gICAgaHR0cE1vZHVsZS5nZXRJbWFnZShcImh0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2ltYWdlcy9kb3dubG9hZC9cIiArIGdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICByZXMgPT4geyAvLyBTdWNjZXNzXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50c1tpbnRdLmltYWdlID0gcmVzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtc2cgPT4geyAvLyBFcnJvclxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICB9XHJcblxyXG5cclxuICBuYXZpZ2F0ZVRvU2VuZFN3YXAoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnYXJtZW50SWQgPSAnICsgZ2FybWVudElkKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdCcsIGdhcm1lbnRJZF0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var data_service_1 = require("../../../shared/services/data.service");
var GarmentDetailComponent = /** @class */ (function () {
    function GarmentDetailComponent(router, route, garmentService, imageService, dataService) {
        this.router = router;
        this.route = route;
        this.garmentService = garmentService;
        this.imageService = imageService;
        this.dataService = dataService;
        //Thumbsize/previewSize magically makes spinner on item stop when loaded
        this.thumbSize = 200;
        this.previewSize = 200;
    }
    GarmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.garmentId = +params['garmentId']; // (+) converts string 'id' to a number
        });
        this.garmentService.getGarment(this.garmentId).subscribe(function (data) {
            _this.garment = data;
            _this.checkSize();
            _this.imageService.downloadImage(_this.garmentId).then(function (res) {
                console.log('success');
                _this.garment.image = res;
                _this.imageSrc = res;
                return res;
            }, function (msg) {
                console.log("error!");
            });
        });
        if (this.dataService.getSwapRequest()) {
            this.garmentSwapId = this.dataService.getSwapRequest().id;
            console.log('garment swap id: ' + this.garmentSwapId);
        }
    };
    GarmentDetailComponent.prototype.checkSize = function () {
        if (!this.garment.size) {
            if (this.garment.pantLength) {
                this.garment.size = this.garment.pantWaist + '-' + this.garment.pantLength;
            }
            else {
                this.garment.size = this.garment.pantWaist;
            }
        }
    };
    GarmentDetailComponent.prototype.toSwapRequest = function (garmentId) {
        this.router.navigate(['/swap-request/', garmentId]);
    };
    GarmentDetailComponent.prototype.toSwapReturnRequest = function (garmentId) {
        this.router.navigate(['/swap-return-request']);
    };
    GarmentDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    GarmentDetailComponent = __decorate([
        core_1.Component({
            selector: "app-garment-detail",
            moduleId: module.id,
            templateUrl: "./garment-detail.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            garment_service_1.GarmentService, image_service_1.ImageService,
            data_service_1.DataService])
    ], GarmentDetailComponent);
    return GarmentDetailComponent;
}());
exports.GarmentDetailComponent = GarmentDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUF1RDtBQUN2RCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFrRTtBQVFsRTtJQVlFLGdDQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFDdkQsY0FBOEIsRUFBVSxZQUEwQixFQUNsRSxXQUF3QjtRQUZkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN2RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNsRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5sQyx3RUFBd0U7UUFDeEUsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUlZLENBQUM7SUFFdkMseUNBQVEsR0FBUjtRQUFBLGlCQTRCQztRQTFCQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztRQUNoRixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVqQixLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNoRCxVQUFBLEdBQUc7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN2QixDQUFDLENBQ0YsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxDQUFDO0lBRUosQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUM3RSxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDN0MsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsb0RBQW1CLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFuRVUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1NBQ2pELENBQUM7eUNBYzRCLGVBQU0sRUFBaUIsdUJBQWM7WUFDdkMsZ0NBQWMsRUFBd0IsNEJBQVk7WUFDckQsMEJBQVc7T0FkdkIsc0JBQXNCLENBcUVsQztJQUFELDZCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1kZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICBnYXJtZW50OiBHYXJtZW50O1xyXG4gIGdhcm1lbnRJZDogbnVtYmVyO1xyXG4gIGdhcm1lbnRTd2FwSWQ6IG51bWJlcjtcclxuXHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuICAvL1RodW1ic2l6ZS9wcmV2aWV3U2l6ZSBtYWdpY2FsbHkgbWFrZXMgc3Bpbm5lciBvbiBpdGVtIHN0b3Agd2hlbiBsb2FkZWRcclxuICB0aHVtYlNpemU6IG51bWJlciA9IDIwMDtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMjAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdGhpcy5nYXJtZW50SWQgPSArcGFyYW1zWydnYXJtZW50SWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudCh0aGlzLmdhcm1lbnRJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgdGhpcy5nYXJtZW50ID0gZGF0YTtcclxuICAgICAgIHRoaXMuY2hlY2tTaXplKCk7XHJcblxyXG4gICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZSh0aGlzLmdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgIHRoaXMuZ2FybWVudC5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICApXHJcbiAgICAgfSlcclxuXHJcbiAgICAgaWYgKHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKSkge1xyXG4gICAgICAgdGhpcy5nYXJtZW50U3dhcElkID0gdGhpcy5kYXRhU2VydmljZS5nZXRTd2FwUmVxdWVzdCgpLmlkO1xyXG4gICAgICAgY29uc29sZS5sb2coJ2dhcm1lbnQgc3dhcCBpZDogJyArIHRoaXMuZ2FybWVudFN3YXBJZCk7XHJcbiAgICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrU2l6ZSgpIHtcclxuICAgIGlmICghdGhpcy5nYXJtZW50LnNpemUpIHtcclxuICAgICAgaWYodGhpcy5nYXJtZW50LnBhbnRMZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmdhcm1lbnQuc2l6ZSA9IHRoaXMuZ2FybWVudC5wYW50V2Fpc3QgKyAnLScgKyB0aGlzLmdhcm1lbnQucGFudExlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhcm1lbnQuc2l6ZSA9IHRoaXMuZ2FybWVudC5wYW50V2Fpc3Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvU3dhcFJlcXVlc3QoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdC8nLCBnYXJtZW50SWRdKTtcclxuICB9XHJcblxyXG4gIHRvU3dhcFJldHVyblJlcXVlc3QoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmV0dXJuLXJlcXVlc3QnXSlcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var GarmentDetailComponent = /** @class */ (function () {
    function GarmentDetailComponent(router, route, garmentService, imageService) {
        this.router = router;
        this.route = route;
        this.garmentService = garmentService;
        this.imageService = imageService;
        //Thumbsize/previewSize magically makes spinner on item stop when loaded
        this.thumbSize = 200;
        this.previewSize = 200;
    }
    GarmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.garmentId = +params['id']; // (+) converts string 'id' to a number
        });
        this.garmentService.getGarment(this.garmentId).subscribe(function (data) {
            console.log(data);
            _this.garment = data;
            _this.imageService.downloadImage(_this.garmentId).then(function (res) {
                console.log('success');
                _this.garment.image = res;
                _this.imageSrc = res;
                return res;
            }, function (msg) {
                console.log("error!");
            });
        });
    };
    GarmentDetailComponent.prototype.toSwapRequest = function (garmentId) {
        this.router.navigate(['/swap-request/', garmentId]);
    };
    GarmentDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    GarmentDetailComponent = __decorate([
        core_1.Component({
            selector: "app-garment-detail",
            moduleId: module.id,
            templateUrl: "./garment-detail.component.html",
            styleUrls: ["../../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            garment_service_1.GarmentService, image_service_1.ImageService])
    ], GarmentDetailComponent);
    return GarmentDetailComponent;
}());
exports.GarmentDetailComponent = GarmentDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUF1RDtBQUN2RCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBU3BFO0lBV0UsZ0NBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUN2RCxjQUE4QixFQUFVLFlBQTBCO1FBRHhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN2RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUw1RSx3RUFBd0U7UUFDeEUsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUdzRCxDQUFDO0lBRWpGLHlDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFuQkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ2hELFVBQUEsR0FBRztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3ZCLENBQUMsQ0FDRixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsNkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBM0NVLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQWE0QixlQUFNLEVBQWlCLHVCQUFjO1lBQ3ZDLGdDQUFjLEVBQXdCLDRCQUFZO09BWmpFLHNCQUFzQixDQTZDbEM7SUFBRCw2QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1kZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4uLy4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgZ2FybWVudDogR2FybWVudDtcclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuXHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuICAvL1RodW1ic2l6ZS9wcmV2aWV3U2l6ZSBtYWdpY2FsbHkgbWFrZXMgc3Bpbm5lciBvbiBpdGVtIHN0b3Agd2hlbiBsb2FkZWRcclxuICB0aHVtYlNpemU6IG51bWJlciA9IDIwMDtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMjAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgIHRoaXMuZ2FybWVudElkID0gK3BhcmFtc1snaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgfSk7XHJcbiAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KHRoaXMuZ2FybWVudElkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgIHRoaXMuZ2FybWVudCA9IGRhdGE7XHJcblxyXG4gICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZSh0aGlzLmdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgIHRoaXMuZ2FybWVudC5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICApXHJcbiAgICAgfSlcclxuICB9XHJcblxyXG4gIHRvU3dhcFJlcXVlc3QoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdC8nLCBnYXJtZW50SWRdKTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
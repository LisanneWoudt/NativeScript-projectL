"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var router_1 = require("@angular/router");
var GarmentOverviewComponent = /** @class */ (function () {
    function GarmentOverviewComponent(garmentService, imageService, router) {
        this.garmentService = garmentService;
        this.imageService = imageService;
        this.router = router;
        this.garments = new Array;
        this.promises = new Array;
        //Thumbsize/previewSize magically makes spinner on item stop when loaded
        this.thumbSize = 120;
        this.previewSize = 120;
    }
    GarmentOverviewComponent.prototype.ngOnInit = function () {
        this.userId = 1;
        this.getAllGarments();
    };
    GarmentOverviewComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.processing = true;
        this.garmentService.getAllGarments(this.garmentsUrl, this.userId).subscribe(function (data) {
            console.log(data);
            _this.garments = data;
            for (var int in _this.garments) {
                _this.count = +int;
                _this.promises.push(_this.search(_this.garments[_this.count].id, _this.count));
            }
            Promise.all(_this.promises)
                .then(function (res) {
                //  this.processing = false;
            }, function (error) {
                console.log('Error');
            });
        }, function (errorResponse) {
            console.error(errorResponse);
            //  this.router.navigate(['/error']);
        });
    };
    GarmentOverviewComponent.prototype.search = function (garmentId, int) {
        var _this = this;
        this.imageService.downloadImage(garmentId).then(function (res) {
            console.log('success');
            _this.garments[int].image = res;
            _this.imageSrc = res;
            return res;
        }, function (msg) {
            console.log("error!");
        });
    };
    GarmentOverviewComponent.prototype.toGarmentDetail = function (garmentId) {
        this.router.navigate(['/garment/', garmentId]);
    };
    __decorate([
        core_1.Input('garmentsUrl'),
        __metadata("design:type", String)
    ], GarmentOverviewComponent.prototype, "garmentsUrl", void 0);
    GarmentOverviewComponent = __decorate([
        core_1.Component({
            selector: "app-garment-overview",
            moduleId: module.id,
            templateUrl: "./garment-overview.component.html"
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, image_service_1.ImageService,
            router_1.Router])
    ], GarmentOverviewComponent);
    return GarmentOverviewComponent;
}());
exports.GarmentOverviewComponent = GarmentOverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLDBDQUF1QztBQVF2QztJQWVFLGtDQUFvQixjQUE4QixFQUFVLFlBQTBCLEVBQzVFLE1BQWM7UUFESixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUM1RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZHhCLGFBQVEsR0FBYyxJQUFJLEtBQUssQ0FBQztRQUNoQyxhQUFRLEdBQWUsSUFBSSxLQUFLLENBQUM7UUFHakMsd0VBQXdFO1FBQ3hFLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFRRSxDQUFDO0lBRTdCLDJDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlEQUFjLEdBQWQ7UUFBQSxpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1RSxDQUFDO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO2lCQUN6QixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNULDRCQUE0QjtZQUM1QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixxQ0FBcUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsR0FBVztRQUFyQyxpQkFZRTtRQVhBLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDM0MsVUFBQSxHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDL0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNYLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FDRixDQUFBO0lBQ0osQ0FBQztJQUVELGtEQUFlLEdBQWYsVUFBZ0IsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBbERvQjtRQUFyQixZQUFLLENBQUMsYUFBYSxDQUFDOztpRUFBcUI7SUFiL0Isd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBaUJvQyxnQ0FBYyxFQUF3Qiw0QkFBWTtZQUNwRSxlQUFNO09BaEJiLHdCQUF3QixDQWtFcEM7SUFBRCwrQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1vdmVydmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuICBwcm9taXNlczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTtcclxuXHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuICAvL1RodW1ic2l6ZS9wcmV2aWV3U2l6ZSBtYWdpY2FsbHkgbWFrZXMgc3Bpbm5lciBvbiBpdGVtIHN0b3Agd2hlbiBsb2FkZWRcclxuICB0aHVtYlNpemU6IG51bWJlciA9IDEyMDtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJvY2Vzc2luZzogYm9vbGVhbjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCdnYXJtZW50c1VybCcpIGdhcm1lbnRzVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICB0aGlzLnVzZXJJZCA9IDE7XHJcbiAgIHRoaXMuZ2V0QWxsR2FybWVudHMoKTtcclxuICB9XHJcblxyXG4gIGdldEFsbEdhcm1lbnRzKCkge1xyXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0QWxsR2FybWVudHModGhpcy5nYXJtZW50c1VybCwgdGhpcy51c2VySWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gK2ludDtcclxuICAgICAgICB0aGlzLnByb21pc2VzLnB1c2godGhpcy5zZWFyY2godGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XS5pZCwgdGhpcy5jb3VudCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBQcm9taXNlLmFsbCh0aGlzLnByb21pc2VzKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAvLyAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yJylcclxuICAgICAgfSlcclxuXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKTtcclxuICAgIC8vICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGdhcm1lbnRJZDogbnVtYmVyLCBpbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShnYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG4gICAgICAgIHRoaXMuZ2FybWVudHNbaW50XS5pbWFnZSA9IHJlcztcclxuICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICB9XHJcblxyXG4gICB0b0dhcm1lbnREZXRhaWwoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50LycsIGdhcm1lbnRJZF0pXHJcbiAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
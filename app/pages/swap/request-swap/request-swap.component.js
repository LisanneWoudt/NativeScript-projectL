"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_1 = require("../../../dto/garment");
var swap_request_1 = require("../../../dto/swap-request");
var garment_service_1 = require("../../../shared/services/garment.service");
var data_service_1 = require("../../../shared/services/data.service");
var swap_service_1 = require("../../../shared/services/swap.service");
var image_service_1 = require("../../../shared/services/image.service");
var RequestSwapComponent = /** @class */ (function () {
    function RequestSwapComponent(route, router, garmentService, dataService, swapService, imageService) {
        this.route = route;
        this.router = router;
        this.garmentService = garmentService;
        this.dataService = dataService;
        this.swapService = swapService;
        this.imageService = imageService;
        this.garment = new garment_1.Garment();
        this.swapRequest = new swap_request_1.SwapRequest();
        this.previewSize = 120;
    }
    RequestSwapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.garmentId = +params['id']; // (+) converts string 'id' to a number
            _this.getSelectedGarment(_this.garmentId);
        });
    };
    RequestSwapComponent.prototype.getSelectedGarment = function (id) {
        var _this = this;
        this.garmentService.getGarment(id).subscribe(function (data) {
            console.log(data);
            _this.garment = data;
            _this.imageService.downloadCompressedImage(_this.garmentId).then(function (res) {
                console.log('success');
                _this.garment.image = res;
                _this.imageSrc = res;
                return res;
            }, function (msg) {
                console.log("error!");
            });
        }, function (errorResponse) {
            console.log("ERROR");
            console.error(errorResponse);
            //    this.router.navigate(['/error']);
        });
    };
    RequestSwapComponent.prototype.sendSwapRequest = function (swapRequest) {
        var _this = this;
        this.swapRequest = swapRequest;
        this.swapRequest.garmentId = this.garmentId;
        this.currentUser = this.dataService.getMockUser();
        this.swapRequest.receivedFromId = this.currentUser.id;
        this.swapRequest.status = 'NEW';
        console.log(this.swapRequest);
        this.swapService.sendSwapRequest(this.swapRequest).subscribe(function (data) {
            console.log(data);
            _this.navigateToInbox();
        }, function (error) {
            console.log(error);
        });
    };
    RequestSwapComponent.prototype.navigateToInbox = function () {
        this.router.navigate(['/inbox']);
    };
    RequestSwapComponent.prototype.navigateBack = function () {
        this.router.navigate(['/garment', this.garmentId]);
    };
    RequestSwapComponent = __decorate([
        core_1.Component({
            selector: "app-request-swap",
            moduleId: module.id,
            templateUrl: "./request-swap.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
            garment_service_1.GarmentService, data_service_1.DataService,
            swap_service_1.SwapService, image_service_1.ImageService])
    ], RequestSwapComponent);
    return RequestSwapComponent;
}());
exports.RequestSwapComponent = RequestSwapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zd2FwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3Qtc3dhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELGdEQUErQztBQUMvQywwREFBd0Q7QUFFeEQsNEVBQTBFO0FBQzFFLHNFQUFvRTtBQUNwRSxzRUFBb0U7QUFDcEUsd0VBQXNFO0FBUXRFO0lBRUUsOEJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUN2RCxjQUE4QixFQUFVLFdBQXdCLEVBQ2hFLFdBQXdCLEVBQVUsWUFBMEI7UUFGbEQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFLdEUsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQWdCLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQzdDLGdCQUFXLEdBQVcsR0FBRyxDQUFDO0lBUGdELENBQUM7SUFVM0UsdUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDdkUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBa0IsR0FBbEIsVUFBbUIsRUFBVTtRQUE3QixpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDMUQsVUFBQSxHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkIsQ0FBQyxDQUNGLENBQUE7UUFFTCxDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdCLHVDQUF1QztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw4Q0FBZSxHQUFmLFVBQWdCLFdBQXdCO1FBQXhDLGlCQWVDO1FBZEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXpCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBbkVVLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDO3lDQUkyQix1QkFBYyxFQUFrQixlQUFNO1lBQ3ZDLGdDQUFjLEVBQXVCLDBCQUFXO1lBQ25ELDBCQUFXLEVBQXdCLDRCQUFZO09BSjNELG9CQUFvQixDQXFFaEM7SUFBRCwyQkFBQztDQUFBLEFBckVELElBcUVDO0FBckVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7IEdhcm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFN3YXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXJlcXVlc3Qtc3dhcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVxdWVzdC1zd2FwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0U3dhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHsgfVxyXG5cclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuICBjdXJyZW50VXNlcjogVXNlcjtcclxuICBwcml2YXRlIHN1YjogYW55O1xyXG4gIGdhcm1lbnQ6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xyXG4gIHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCA9IG5ldyBTd2FwUmVxdWVzdCgpO1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMjA7XHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdGhpcy5nYXJtZW50SWQgPSArcGFyYW1zWydpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRHYXJtZW50KHRoaXMuZ2FybWVudElkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRHYXJtZW50KGlkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudChpZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5nYXJtZW50ID0gZGF0YTtcclxuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRDb21wcmVzc2VkSW1hZ2UodGhpcy5nYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICB0aGlzLmdhcm1lbnQuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgIC8vICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2VuZFN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCl7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3QgPSBzd2FwUmVxdWVzdDtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdC5nYXJtZW50SWQgPSB0aGlzLmdhcm1lbnRJZDtcclxuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdC5yZWNlaXZlZEZyb21JZCA9IHRoaXMuY3VycmVudFVzZXIuaWQ7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3Quc3RhdHVzID0gJ05FVyc7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN3YXBSZXF1ZXN0KTtcclxuICAgICAgdGhpcy5zd2FwU2VydmljZS5zZW5kU3dhcFJlcXVlc3QodGhpcy5zd2FwUmVxdWVzdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVUb0luYm94KCk7XHJcblxyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0luYm94KCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2luYm94J10pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQnLCB0aGlzLmdhcm1lbnRJZF0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
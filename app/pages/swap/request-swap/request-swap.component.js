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
        this.thumbSize = 120;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zd2FwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3Qtc3dhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELGdEQUErQztBQUMvQywwREFBd0Q7QUFFeEQsNEVBQTBFO0FBQzFFLHNFQUFvRTtBQUNwRSxzRUFBb0U7QUFDcEUsd0VBQXNFO0FBUXRFO0lBRUUsOEJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUN2RCxjQUE4QixFQUFVLFdBQXdCLEVBQ2hFLFdBQXdCLEVBQVUsWUFBMEI7UUFGbEQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFLdEUsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQWdCLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQzdDLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFSZ0QsQ0FBQztJQVczRSx1Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN2RSxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFrQixHQUFsQixVQUFtQixFQUFVO1FBQTdCLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUMxRCxVQUFBLEdBQUc7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN2QixDQUFDLENBQ0YsQ0FBQTtRQUVMLENBQUMsRUFBRSxVQUFBLGFBQWE7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsdUNBQXVDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFBeEMsaUJBZUM7UUFkRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFekIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFwRVUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBSTJCLHVCQUFjLEVBQWtCLGVBQU07WUFDdkMsZ0NBQWMsRUFBdUIsMEJBQVc7WUFDbkQsMEJBQVcsRUFBd0IsNEJBQVk7T0FKM0Qsb0JBQW9CLENBc0VoQztJQUFELDJCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2R0by91c2VyJztcclxuaW1wb3J0IHsgR2FybWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3dhcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtcmVxdWVzdC1zd2FwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0LXN3YXAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RTd2FwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN3YXBTZXJ2aWNlOiBTd2FwU2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIGdhcm1lbnRJZDogbnVtYmVyO1xyXG4gIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG4gIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgZ2FybWVudDogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0ID0gbmV3IFN3YXBSZXF1ZXN0KCk7XHJcbiAgdGh1bWJTaXplOiBudW1iZXIgPSAxMjA7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDEyMDtcclxuICBpbWFnZVNyYzogYW55O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRJZCA9ICtwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy5nZXRTZWxlY3RlZEdhcm1lbnQodGhpcy5nYXJtZW50SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZEdhcm1lbnQoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KGlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmdhcm1lbnQgPSBkYXRhO1xyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZENvbXByZXNzZWRJbWFnZSh0aGlzLmdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FybWVudC5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNyYyA9IHJlcztcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKTtcclxuICAgICAgLy8gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZW5kU3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KXtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdCA9IHN3YXBSZXF1ZXN0O1xyXG4gICAgICB0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJZCA9IHRoaXMuZ2FybWVudElkO1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5kYXRhU2VydmljZS5nZXRNb2NrVXNlcigpO1xyXG4gICAgICB0aGlzLnN3YXBSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdC5zdGF0dXMgPSAnTkVXJztcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dhcFJlcXVlc3QpO1xyXG4gICAgICB0aGlzLnN3YXBTZXJ2aWNlLnNlbmRTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvSW5ib3goKTtcclxuXHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvSW5ib3goKSB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaW5ib3gnXSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudCcsIHRoaXMuZ2FybWVudElkXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
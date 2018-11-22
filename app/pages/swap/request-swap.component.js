"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_1 = require("../../dto/garment");
var swap_request_1 = require("../../dto/swap-request");
var garment_service_1 = require("../../shared/services/garment.service");
var data_service_1 = require("../../shared/services/data.service");
var swap_service_1 = require("../../shared/services/swap.service");
var image_service_1 = require("../../shared/services/image.service");
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
            _this.imageService.downloadImage(_this.garmentId).then(function (res) {
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
        this.swapRequest.userId = this.currentUser.id;
        this.swapRequest.received = false;
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
    RequestSwapComponent = __decorate([
        core_1.Component({
            selector: "app-request-swap",
            moduleId: module.id,
            templateUrl: "./request-swap.component.html",
            styleUrls: ["../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
            garment_service_1.GarmentService, data_service_1.DataService,
            swap_service_1.SwapService, image_service_1.ImageService])
    ], RequestSwapComponent);
    return RequestSwapComponent;
}());
exports.RequestSwapComponent = RequestSwapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zd2FwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3Qtc3dhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDZDQUE0QztBQUM1Qyx1REFBcUQ7QUFFckQseUVBQXVFO0FBQ3ZFLG1FQUFpRTtBQUNqRSxtRUFBaUU7QUFDakUscUVBQW1FO0FBU25FO0lBRUUsOEJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUN2RCxjQUE4QixFQUFVLFdBQXdCLEVBQ2hFLFdBQXdCLEVBQVUsWUFBMEI7UUFGbEQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFLdEUsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQWdCLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQzdDLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFSZ0QsQ0FBQztJQVczRSx1Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN2RSxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFrQixHQUFsQixVQUFtQixFQUFVO1FBQTdCLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDaEQsVUFBQSxHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkIsQ0FBQyxDQUNGLENBQUE7UUFFTCxDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdCLHVDQUF1QztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw4Q0FBZSxHQUFmLFVBQWdCLFdBQXdCO1FBQXhDLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXpCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTlEVSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FJMkIsdUJBQWMsRUFBa0IsZUFBTTtZQUN2QyxnQ0FBYyxFQUF1QiwwQkFBVztZQUNuRCwwQkFBVyxFQUF3Qiw0QkFBWTtPQUozRCxvQkFBb0IsQ0FnRWhDO0lBQUQsMkJBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQgeyBTd2FwUmVxdWVzdCB9IGZyb20gJy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0LXN3YXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlcXVlc3Qtc3dhcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9ob21lL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RTd2FwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN3YXBTZXJ2aWNlOiBTd2FwU2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIGdhcm1lbnRJZDogbnVtYmVyO1xyXG4gIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG4gIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgZ2FybWVudDogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0ID0gbmV3IFN3YXBSZXF1ZXN0KCk7XHJcbiAgdGh1bWJTaXplOiBudW1iZXIgPSAxMjA7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDEyMDtcclxuICBpbWFnZVNyYzogYW55O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRJZCA9ICtwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy5nZXRTZWxlY3RlZEdhcm1lbnQodGhpcy5nYXJtZW50SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZEdhcm1lbnQoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KGlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmdhcm1lbnQgPSBkYXRhO1xyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKHRoaXMuZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgdGhpcy5nYXJtZW50LmltYWdlID0gcmVzO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICAvLyAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHNlbmRTd2FwUmVxdWVzdChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3Qpe1xyXG4gICAgICB0aGlzLnN3YXBSZXF1ZXN0ID0gc3dhcFJlcXVlc3Q7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudElkID0gdGhpcy5nYXJtZW50SWQ7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3QudXNlcklkID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdC5yZWNlaXZlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnN3YXBTZXJ2aWNlLnNlbmRTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvSW5ib3goKTtcclxuXHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvSW5ib3goKSB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaW5ib3gnXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
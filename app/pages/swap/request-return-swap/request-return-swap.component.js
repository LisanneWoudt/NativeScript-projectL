"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_1 = require("../../../dto/garment");
var swap_request_1 = require("../../../dto/swap-request");
var user_1 = require("../../../dto/user");
var garment_service_1 = require("../../../shared/services/garment.service");
var data_service_1 = require("../../../shared/services/data.service");
var swap_service_1 = require("../../../shared/services/swap.service");
var image_service_1 = require("../../../shared/services/image.service");
var RequestReturnSwapComponent = /** @class */ (function () {
    function RequestReturnSwapComponent(route, router, garmentService, dataService, swapService, imageService) {
        this.route = route;
        this.router = router;
        this.garmentService = garmentService;
        this.dataService = dataService;
        this.swapService = swapService;
        this.imageService = imageService;
        this.currentUser = new user_1.User();
        this.garment = new garment_1.Garment();
        this.garmentInReturn = new garment_1.Garment();
        this.swapRequest = new swap_request_1.SwapRequest();
        this.previewSize = 80;
    }
    RequestReturnSwapComponent.prototype.ngOnInit = function () {
        this.swapRequest = this.dataService.getSwapRequest();
        this.getSelectedGarment(this.swapRequest.garmentId, 'garment');
        this.getSelectedGarment(this.swapRequest.garmentInReturnId, 'garmentInReturn');
        this.currentUser = this.dataService.getMockUser();
    };
    RequestReturnSwapComponent.prototype.getSelectedGarment = function (id, type) {
        var _this = this;
        this.garmentService.getGarment(id).subscribe(function (data) {
            if (type == 'garment') {
                _this.garment = data;
            }
            else {
                _this.garmentInReturn = data;
            }
            _this.imageService.downloadCompressedImage(id).then(function (res) {
                if (type == 'garment') {
                    _this.garment.image = res;
                }
                else {
                    _this.garmentInReturn.image = res;
                }
                return res;
            }, function (msg) {
                console.log("error!");
            });
        }, function (errorResponse) {
            console.error(errorResponse);
            _this.router.navigate(['/error']);
        });
    };
    RequestReturnSwapComponent.prototype.sendSwapRequest = function () {
        var _this = this;
        this.swapRequest.status = "PROCESSING";
        this.swapService.updateSwapRequest(this.swapRequest).subscribe(function (data) {
            _this.navigateToOpenRequests();
        }, function (error) {
            console.log(error);
        });
    };
    RequestReturnSwapComponent.prototype.navigateBack = function () {
        this.router.navigate(['/garment', this.swapRequest.garmentId]);
    };
    RequestReturnSwapComponent.prototype.navigateToOpenRequests = function () {
        this.router.navigate(['/swap-requests/open/', this.currentUser.id]);
    };
    RequestReturnSwapComponent = __decorate([
        core_1.Component({
            selector: "app-request-return-swap",
            moduleId: module.id,
            templateUrl: "./request-return-swap.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
            garment_service_1.GarmentService, data_service_1.DataService,
            swap_service_1.SwapService, image_service_1.ImageService])
    ], RequestReturnSwapComponent);
    return RequestReturnSwapComponent;
}());
exports.RequestReturnSwapComponent = RequestReturnSwapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsZ0RBQStDO0FBQy9DLDBEQUF3RDtBQUN4RCwwQ0FBeUM7QUFDekMsNEVBQTBFO0FBQzFFLHNFQUFvRTtBQUNwRSxzRUFBb0U7QUFDcEUsd0VBQXNFO0FBUXRFO0lBRUUsb0NBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUN2RCxjQUE4QixFQUFVLFdBQXdCLEVBQ2hFLFdBQXdCLEVBQVUsWUFBMEI7UUFGbEQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFdEUsZ0JBQVcsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQy9CLFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNqQyxvQkFBZSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3pDLGdCQUFXLEdBQWdCLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQzdDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBTmlELENBQUM7SUFRM0UsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELHVEQUFrQixHQUFsQixVQUFtQixFQUFVLEVBQUUsSUFBWTtRQUEzQyxpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUUvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLENBQUM7WUFFRCxLQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUMsVUFBQSxHQUFHO2dCQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzNCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNyQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkIsQ0FBQyxDQUNILENBQUE7UUFDSixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsb0RBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakUsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaURBQVksR0FBWjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsMkRBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQTlEVSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7U0FDdEQsQ0FBQzt5Q0FJMkIsdUJBQWMsRUFBa0IsZUFBTTtZQUN2QyxnQ0FBYyxFQUF1QiwwQkFBVztZQUNuRCwwQkFBVyxFQUF3Qiw0QkFBWTtPQUozRCwwQkFBMEIsQ0FnRXRDO0lBQUQsaUNBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQgeyBTd2FwUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0LXJldHVybi1zd2FwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHsgfVxyXG5cclxuICBjdXJyZW50VXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgZ2FybWVudDogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XHJcbiAgZ2FybWVudEluUmV0dXJuOiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuICBzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QgPSBuZXcgU3dhcFJlcXVlc3QoKTtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gODA7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zd2FwUmVxdWVzdCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKTtcclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRHYXJtZW50KHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudElkLCAnZ2FybWVudCcpO1xyXG4gICAgdGhpcy5nZXRTZWxlY3RlZEdhcm1lbnQodGhpcy5zd2FwUmVxdWVzdC5nYXJtZW50SW5SZXR1cm5JZCwgJ2dhcm1lbnRJblJldHVybicpO1xyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkR2FybWVudChpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudChpZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT0gJ2dhcm1lbnQnKSB7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50ID0gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudEluUmV0dXJuID0gZGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRDb21wcmVzc2VkSW1hZ2UoaWQpLnRoZW4oXHJcbiAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAnZ2FybWVudCcpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdhcm1lbnQuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhcm1lbnRJblJldHVybi5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICApXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2VuZFN3YXBSZXF1ZXN0KCl7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3Quc3RhdHVzID0gXCJQUk9DRVNTSU5HXCI7XHJcbiAgICAgIHRoaXMuc3dhcFNlcnZpY2UudXBkYXRlU3dhcFJlcXVlc3QodGhpcy5zd2FwUmVxdWVzdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVUb09wZW5SZXF1ZXN0cygpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQnLCB0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJZF0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb09wZW5SZXF1ZXN0cygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdHMvb3Blbi8nLCB0aGlzLmN1cnJlbnRVc2VyLmlkXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
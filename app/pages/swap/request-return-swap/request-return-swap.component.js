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
            _this.imageService.downloadImage(id).then(function (res) {
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
        console.log(this.currentUser);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsZ0RBQStDO0FBQy9DLDBEQUF3RDtBQUN4RCwwQ0FBeUM7QUFDekMsNEVBQTBFO0FBQzFFLHNFQUFvRTtBQUNwRSxzRUFBb0U7QUFDcEUsd0VBQXNFO0FBUXRFO0lBRUUsb0NBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUN2RCxjQUE4QixFQUFVLFdBQXdCLEVBQ2hFLFdBQXdCLEVBQVUsWUFBMEI7UUFGbEQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFdEUsZ0JBQVcsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQy9CLFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNqQyxvQkFBZSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3pDLGdCQUFXLEdBQWdCLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQzdDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBTmlELENBQUM7SUFRM0UsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELHVEQUFrQixHQUFsQixVQUFtQixFQUFVLEVBQUUsSUFBWTtRQUEzQyxpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUUvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLENBQUM7WUFFRCxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3BDLFVBQUEsR0FBRztnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUMzQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDckMsQ0FBQztnQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3ZCLENBQUMsQ0FDSCxDQUFBO1FBQ0osQ0FBQyxFQUFFLFVBQUEsYUFBYTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELG9EQUFlLEdBQWY7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2pFLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlEQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDJEQUFzQixHQUF0QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUEvRFUsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0NBQXNDO1NBQ3RELENBQUM7eUNBSTJCLHVCQUFjLEVBQWtCLGVBQU07WUFDdkMsZ0NBQWMsRUFBdUIsMEJBQVc7WUFDbkQsMEJBQVcsRUFBd0IsNEJBQVk7T0FKM0QsMEJBQTBCLENBaUV0QztJQUFELGlDQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2R0by91c2VyJztcclxuaW1wb3J0IHsgR2FybWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3dhcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtcmVxdWVzdC1yZXR1cm4tc3dhcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdFJldHVyblN3YXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgIHByaXZhdGUgc3dhcFNlcnZpY2U6IFN3YXBTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIGdhcm1lbnQ6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xyXG4gIGdhcm1lbnRJblJldHVybjogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0ID0gbmV3IFN3YXBSZXF1ZXN0KCk7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDgwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3dhcFJlcXVlc3QgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCk7XHJcbiAgICB0aGlzLmdldFNlbGVjdGVkR2FybWVudCh0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJZCwgJ2dhcm1lbnQnKTtcclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRHYXJtZW50KHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQsICdnYXJtZW50SW5SZXR1cm4nKTtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZEdhcm1lbnQoaWQ6IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmdldEdhcm1lbnQoaWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHJcbiAgICAgIGlmICh0eXBlID09ICdnYXJtZW50Jykge1xyXG4gICAgICAgIHRoaXMuZ2FybWVudCA9IGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdhcm1lbnRJblJldHVybiA9IGRhdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoaWQpLnRoZW4oXHJcbiAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAnZ2FybWVudCcpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdhcm1lbnQuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhcm1lbnRJblJldHVybi5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICApXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2VuZFN3YXBSZXF1ZXN0KCl7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3Quc3RhdHVzID0gXCJQUk9DRVNTSU5HXCI7XHJcbiAgICAgIHRoaXMuc3dhcFNlcnZpY2UudXBkYXRlU3dhcFJlcXVlc3QodGhpcy5zd2FwUmVxdWVzdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVUb09wZW5SZXF1ZXN0cygpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQnLCB0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJZF0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb09wZW5SZXF1ZXN0cygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFVzZXIpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9vcGVuLycsIHRoaXMuY3VycmVudFVzZXIuaWRdKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
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
var RequestReturnSwapComponent = /** @class */ (function () {
    function RequestReturnSwapComponent(route, router, garmentService, dataService, swapService, imageService) {
        this.route = route;
        this.router = router;
        this.garmentService = garmentService;
        this.dataService = dataService;
        this.swapService = swapService;
        this.imageService = imageService;
        this.garment = new garment_1.Garment();
        this.garmentInReturn = new garment_1.Garment();
        this.swapRequest = new swap_request_1.SwapRequest();
        this.thumbSize = 40;
        this.previewSize = 80;
    }
    RequestReturnSwapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.garmentId = +params['garmentId']; // (+) converts string 'id' to a number
            _this.garmentInReturnId = +params['garmentInReturnId'];
            _this.getSelectedGarment(_this.garmentId, 'garment');
            _this.getSelectedGarment(_this.garmentInReturnId, 'garmentInReturn');
        });
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
    RequestReturnSwapComponent.prototype.sendSwapRequest = function (swapRequest) {
        this.swapRequest = swapRequest;
        this.swapRequest.garmentId = this.garmentId;
        this.swapRequest.garmentInReturnId = this.garmentInReturnId;
        this.swapService.sendSwapRequest(this.swapRequest).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    RequestReturnSwapComponent.prototype.navigateBack = function () {
        this.router.navigate(['/garment', this.garmentId]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsZ0RBQStDO0FBQy9DLDBEQUF3RDtBQUV4RCw0RUFBMEU7QUFDMUUsc0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSx3RUFBc0U7QUFRdEU7SUFFRSxvQ0FBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQ3ZELGNBQThCLEVBQVUsV0FBd0IsRUFDaEUsV0FBd0IsRUFBVSxZQUEwQjtRQUZsRCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdkQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU10RSxZQUFPLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDakMsb0JBQWUsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN6QyxnQkFBVyxHQUFnQixJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUM3QyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBVmlELENBQUM7SUFZM0UsNkNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDOUUsS0FBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDckQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVEQUFrQixHQUFsQixVQUFtQixFQUFVLEVBQUUsSUFBWTtRQUEzQyxpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUUvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLENBQUM7WUFFRCxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3BDLFVBQUEsR0FBRztnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUMzQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDckMsQ0FBQztnQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3ZCLENBQUMsQ0FDSCxDQUFBO1FBQ0osQ0FBQyxFQUFFLFVBQUEsYUFBYTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELG9EQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUU1RCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlEQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBbkVVLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNDQUFzQztTQUN0RCxDQUFDO3lDQUkyQix1QkFBYyxFQUFrQixlQUFNO1lBQ3ZDLGdDQUFjLEVBQXVCLDBCQUFXO1lBQ25ELDBCQUFXLEVBQXdCLDRCQUFZO09BSjNELDBCQUEwQixDQXFFdEM7SUFBRCxpQ0FBQztDQUFBLEFBckVELElBcUVDO0FBckVZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7IEdhcm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFN3YXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXJlcXVlc3QtcmV0dXJuLXN3YXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlcXVlc3QtcmV0dXJuLXN3YXAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RSZXR1cm5Td2FwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN3YXBTZXJ2aWNlOiBTd2FwU2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIGdhcm1lbnRJZDogbnVtYmVyO1xyXG4gIGdhcm1lbnRJblJldHVybklkOiBudW1iZXI7XHJcbiAgY3VycmVudFVzZXI6IFVzZXI7XHJcbiAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuICBnYXJtZW50SW5SZXR1cm46IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xyXG4gIHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCA9IG5ldyBTd2FwUmVxdWVzdCgpO1xyXG4gIHRodW1iU2l6ZTogbnVtYmVyID0gNDA7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDgwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRJZCA9ICtwYXJhbXNbJ2dhcm1lbnRJZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMuZ2FybWVudEluUmV0dXJuSWQgPSArcGFyYW1zWydnYXJtZW50SW5SZXR1cm5JZCddXHJcbiAgICAgICB0aGlzLmdldFNlbGVjdGVkR2FybWVudCh0aGlzLmdhcm1lbnRJZCwgJ2dhcm1lbnQnKTtcclxuICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRHYXJtZW50KHRoaXMuZ2FybWVudEluUmV0dXJuSWQsICdnYXJtZW50SW5SZXR1cm4nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRHYXJtZW50KGlkOiBudW1iZXIsIHR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KGlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PSAnZ2FybWVudCcpIHtcclxuICAgICAgICB0aGlzLmdhcm1lbnQgPSBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5nYXJtZW50SW5SZXR1cm4gPSBkYXRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGlkKS50aGVuKFxyXG4gICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ2dhcm1lbnQnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5nYXJtZW50LmltYWdlID0gcmVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXJtZW50SW5SZXR1cm4uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgKVxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHNlbmRTd2FwUmVxdWVzdChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3Qpe1xyXG4gICAgICB0aGlzLnN3YXBSZXF1ZXN0ID0gc3dhcFJlcXVlc3Q7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudElkID0gdGhpcy5nYXJtZW50SWQ7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQgPSB0aGlzLmdhcm1lbnRJblJldHVybklkO1xyXG5cclxuICAgICAgdGhpcy5zd2FwU2VydmljZS5zZW5kU3dhcFJlcXVlc3QodGhpcy5zd2FwUmVxdWVzdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQnLCB0aGlzLmdhcm1lbnRJZF0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
        this.swapRequest = this.dataService.getSwapRequest();
        this.getSelectedGarment(this.swapRequest.garmentId, 'garment');
        this.getSelectedGarment(this.swapRequest.garmentInReturnId, 'garmentInReturn');
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
            _this.navigateToReceivedRequests();
        }, function (error) {
            console.log(error);
        });
    };
    RequestReturnSwapComponent.prototype.navigateBack = function () {
        this.router.navigate(['/garment', this.swapRequest.garmentId]);
    };
    RequestReturnSwapComponent.prototype.navigateToReceivedRequests = function () {
        this.router.navigate(['/swap-requests/received', this.swapRequest.userId]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsZ0RBQStDO0FBQy9DLDBEQUF3RDtBQUV4RCw0RUFBMEU7QUFDMUUsc0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSx3RUFBc0U7QUFRdEU7SUFFRSxvQ0FBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQ3ZELGNBQThCLEVBQVUsV0FBd0IsRUFDaEUsV0FBd0IsRUFBVSxZQUEwQjtRQUZsRCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdkQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUd0RSxZQUFPLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDakMsb0JBQWUsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN6QyxnQkFBVyxHQUFnQixJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUM3QyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBUGlELENBQUM7SUFTM0UsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsdURBQWtCLEdBQWxCLFVBQW1CLEVBQVUsRUFBRSxJQUFZO1FBQTNDLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBRS9DLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDaEMsQ0FBQztZQUVELEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDcEMsVUFBQSxHQUFHO2dCQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzNCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNyQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkIsQ0FBQyxDQUNILENBQUE7UUFDSixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsb0RBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakUsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDcEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaURBQVksR0FBWjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsK0RBQTBCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDNUUsQ0FBQztJQTlEVSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7U0FDdEQsQ0FBQzt5Q0FJMkIsdUJBQWMsRUFBa0IsZUFBTTtZQUN2QyxnQ0FBYyxFQUF1QiwwQkFBVztZQUNuRCwwQkFBVyxFQUF3Qiw0QkFBWTtPQUozRCwwQkFBMEIsQ0FnRXRDO0lBQUQsaUNBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQgeyBTd2FwUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0LXJldHVybi1zd2FwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHsgfVxyXG5cclxuICBjdXJyZW50VXNlcjogVXNlcjtcclxuICBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuICBnYXJtZW50SW5SZXR1cm46IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xyXG4gIHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCA9IG5ldyBTd2FwUmVxdWVzdCgpO1xyXG4gIHRodW1iU2l6ZTogbnVtYmVyID0gNDA7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDgwO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3dhcFJlcXVlc3QgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCk7XHJcbiAgICB0aGlzLmdldFNlbGVjdGVkR2FybWVudCh0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJZCwgJ2dhcm1lbnQnKTtcclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRHYXJtZW50KHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQsICdnYXJtZW50SW5SZXR1cm4nKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkR2FybWVudChpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudChpZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT0gJ2dhcm1lbnQnKSB7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50ID0gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudEluUmV0dXJuID0gZGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShpZCkudGhlbihcclxuICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdnYXJtZW50Jykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2FybWVudC5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FybWVudEluUmV0dXJuLmltYWdlID0gcmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICAgIH1cclxuICAgICAgIClcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZW5kU3dhcFJlcXVlc3QoKXtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdC5zdGF0dXMgPSBcIlBST0NFU1NJTkdcIjtcclxuICAgICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvUmVjZWl2ZWRSZXF1ZXN0cygpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQnLCB0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJZF0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb1JlY2VpdmVkUmVxdWVzdHMoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3RzL3JlY2VpdmVkJywgdGhpcy5zd2FwUmVxdWVzdC51c2VySWRdKVxyXG4gIH1cclxuXHJcbn1cclxuIl19
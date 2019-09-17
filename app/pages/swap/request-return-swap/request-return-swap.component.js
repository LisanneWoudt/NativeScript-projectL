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
var dialogs = require("tns-core-modules/ui/dialogs");
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
        this.currentUser = this.dataService.getUser();
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
            console.log(_this.swapRequest);
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
            _this.responseSuccess();
        }, function (error) {
            console.log(error);
        });
    };
    RequestReturnSwapComponent.prototype.responseSuccess = function () {
        var _this = this;
        dialogs.alert({
            title: "Request send",
            message: "Swap request has been send!",
            okButtonText: "OK"
        }).then(function () {
            _this.dataService.setSwapRequest(new swap_request_1.SwapRequest());
            _this.navigateToOpenRequests();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsZ0RBQStDO0FBQy9DLDBEQUF3RDtBQUN4RCwwQ0FBeUM7QUFDekMsNEVBQTBFO0FBQzFFLHNFQUFvRTtBQUNwRSxzRUFBb0U7QUFDcEUsd0VBQXNFO0FBQ3RFLHFEQUF1RDtBQVF2RDtJQUVFLG9DQUFvQixLQUFxQixFQUFVLE1BQWMsRUFDdkQsY0FBOEIsRUFBVSxXQUF3QixFQUNoRSxXQUF3QixFQUFVLFlBQTBCO1FBRmxELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN2RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRXRFLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUMvQixZQUFPLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDakMsb0JBQWUsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN6QyxnQkFBVyxHQUFnQixJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUM3QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQU5pRCxDQUFDO0lBUTNFLDZDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlC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QUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNDQUFzQztTQUN0RCxDQUFDO3lDQUkyQix1QkFBYyxFQUFrQixlQUFNO1lBQ3ZDLGdDQUFjLEVBQXVCLDBCQUFXO1lBQ25ELDBCQUFXLEVBQXdCLDRCQUFZO09BSjNELDBCQUEwQixDQTZFdEM7SUFBRCxpQ0FBQztDQUFBLEFBN0VELElBNkVDO0FBN0VZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7IEdhcm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFN3YXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0LXJldHVybi1zd2FwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHsgfVxyXG5cclxuICBjdXJyZW50VXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgZ2FybWVudDogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XHJcbiAgZ2FybWVudEluUmV0dXJuOiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuICBzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QgPSBuZXcgU3dhcFJlcXVlc3QoKTtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gODA7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zd2FwUmVxdWVzdCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKTtcclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRHYXJtZW50KHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudElkLCAnZ2FybWVudCcpO1xyXG4gICAgdGhpcy5nZXRTZWxlY3RlZEdhcm1lbnQodGhpcy5zd2FwUmVxdWVzdC5nYXJtZW50SW5SZXR1cm5JZCwgJ2dhcm1lbnRJblJldHVybicpO1xyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkR2FybWVudChpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudChpZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT0gJ2dhcm1lbnQnKSB7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50ID0gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudEluUmV0dXJuID0gZGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5zd2FwUmVxdWVzdCk7XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZENvbXByZXNzZWRJbWFnZShpZCkudGhlbihcclxuICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdnYXJtZW50Jykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2FybWVudC5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FybWVudEluUmV0dXJuLmltYWdlID0gcmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICAgIH1cclxuICAgICAgIClcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZW5kU3dhcFJlcXVlc3QoKXtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdC5zdGF0dXMgPSBcIlBST0NFU1NJTkdcIjtcclxuICAgICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZVN1Y2Nlc3MoKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gICAgcmVzcG9uc2VTdWNjZXNzKCkge1xyXG4gICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIlJlcXVlc3Qgc2VuZFwiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCJTd2FwIHJlcXVlc3QgaGFzIGJlZW4gc2VuZCFcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U3dhcFJlcXVlc3QobmV3IFN3YXBSZXF1ZXN0KCkpXHJcbiAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvT3BlblJlcXVlc3RzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudCcsIHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudElkXSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvT3BlblJlcXVlc3RzKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9vcGVuLycsIHRoaXMuY3VycmVudFVzZXIuaWRdKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
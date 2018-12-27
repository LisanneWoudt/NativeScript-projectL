"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var swap_service_1 = require("../../../shared/services/swap.service");
var user_service_1 = require("../../../shared/services/user.service");
var image_service_1 = require("../../../shared/services/image.service");
var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(route, router, swapService, userService, imageService) {
        this.route = route;
        this.router = router;
        this.swapService = swapService;
        this.userService = userService;
        this.imageService = imageService;
        this.receivedRequests = new Array;
        this.previewSize = 60;
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userId = +params['userid']; // (+) converts string 'id' to a number
            _this.setSwapUrl();
            _this.getSwapRequests();
        });
    };
    RequestsComponent.prototype.getSwapRequests = function () {
        var _this = this;
        this.swapService.getUserSwapRequests(this.swapUrl, this.userId).subscribe(function (data) {
            _this.receivedRequests = data;
            _this.getExtraRequestData();
        }, function (errorResponse) {
            console.log("ERROR");
        });
    };
    RequestsComponent.prototype.getExtraRequestData = function () {
        var _this = this;
        this.receivedRequests.forEach(function (item, index) {
            _this.userService.getUser(item.receivedFromId).subscribe(function (data) {
                item.receivedFromUser = data.name;
                _this.imageService.downloadImage(item.garmentId).then(function (res) {
                    item.garmentImage = res;
                    return res;
                }, function (msg) {
                    console.log("error!");
                });
                if (item.garmentInReturnId != null) {
                    _this.imageService.downloadImage(item.garmentInReturnId).then(function (res) {
                        item.garmentInReturnImage = res;
                        return res;
                    }, function (msg) {
                        console.log("error!");
                    });
                }
            });
        });
    };
    RequestsComponent.prototype.setSwapUrl = function () {
        if (this.sendOrReceived == 'send') {
            this.swapUrl = 'send/';
        }
        else {
            this.swapUrl = 'received/';
        }
    };
    RequestsComponent.prototype.navigateToAllGarments = function () {
        this.router.navigate(['/garments/all']);
    };
    __decorate([
        core_1.Input('sendOrReceived'),
        __metadata("design:type", String)
    ], RequestsComponent.prototype, "sendOrReceived", void 0);
    RequestsComponent = __decorate([
        core_1.Component({
            selector: "app-requests",
            moduleId: module.id,
            templateUrl: "./requests.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, swap_service_1.SwapService,
            user_service_1.UserService, image_service_1.ImageService])
    ], RequestsComponent);
    return RequestsComponent;
}());
exports.RequestsComponent = RequestsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUV6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQVF0RTtJQVVFLDJCQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxXQUF3QixFQUN6RixXQUF3QixFQUFVLFlBQTBCO1FBRGxELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMdEUscUJBQWdCLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQ2hELGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBSWlELENBQUM7SUFHM0Usb0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDeEUsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDNUUsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQ0FBbUIsR0FBbkI7UUFBQSxpQkEyQkM7UUExQkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQzFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFbEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDaEQsVUFBQSxHQUFHO29CQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO29CQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNYLENBQUMsRUFDRCxVQUFBLEdBQUc7b0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDdEIsQ0FBQyxDQUFDLENBQUE7Z0JBRVAsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDeEQsVUFBQSxHQUFHO3dCQUNILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ1gsQ0FBQyxFQUNELFVBQUEsR0FBRzt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUN0QixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO1lBRUosQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUFHRCxzQ0FBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsaURBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUF0RXdCO1FBQXhCLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7NkRBQXdCO0lBRnJDLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FZMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUF1QiwwQkFBVztZQUM1RSwwQkFBVyxFQUF3Qiw0QkFBWTtPQVgzRCxpQkFBaUIsQ0EwRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmVjZWl2ZWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3JlY2VpdmVkLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVxdWVzdHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCdzZW5kT3JSZWNlaXZlZCcpIHNlbmRPclJlY2VpdmVkOiBzdHJpbmc7XHJcblxyXG4gIHN1YjogYW55O1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIHJlY2VpdmVkUmVxdWVzdHM6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSA2MDtcclxuICBzd2FwVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN3YXBTZXJ2aWNlOiBTd2FwU2VydmljZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgIHRoaXMudXNlcklkID0gK3BhcmFtc1sndXNlcmlkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy5zZXRTd2FwVXJsKCk7XHJcbiAgICAgICB0aGlzLmdldFN3YXBSZXF1ZXN0cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTd2FwUmVxdWVzdHMoKSB7XHJcbiAgICB0aGlzLnN3YXBTZXJ2aWNlLmdldFVzZXJTd2FwUmVxdWVzdHModGhpcy5zd2FwVXJsLCB0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnJlY2VpdmVkUmVxdWVzdHMgPSBkYXRhO1xyXG4gICAgICB0aGlzLmdldEV4dHJhUmVxdWVzdERhdGEoKTtcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0RXh0cmFSZXF1ZXN0RGF0YSgpIHtcclxuICAgIHRoaXMucmVjZWl2ZWRSZXF1ZXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKGl0ZW0ucmVjZWl2ZWRGcm9tSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaXRlbS5yZWNlaXZlZEZyb21Vc2VyID0gZGF0YS5uYW1lO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShpdGVtLmdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICBpdGVtLmdhcm1lbnRJbWFnZSA9IHJlcztcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgaWYgKGl0ZW0uZ2FybWVudEluUmV0dXJuSWQgIT0gbnVsbCkge1xyXG4gICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShpdGVtLmdhcm1lbnRJblJldHVybklkKS50aGVuKFxyXG4gICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgaXRlbS5nYXJtZW50SW5SZXR1cm5JbWFnZSA9IHJlcztcclxuICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0U3dhcFVybCgpIHtcclxuICAgIGlmICh0aGlzLnNlbmRPclJlY2VpdmVkID09ICdzZW5kJykge1xyXG4gICAgICB0aGlzLnN3YXBVcmwgPSAnc2VuZC8nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3dhcFVybCA9ICdyZWNlaXZlZC8nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0FsbEdhcm1lbnRzKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWxsJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
        this.receivedRequestsNew = new Array;
        this.receivedRequestsProcessing = new Array;
        this.receivedRequestsDone = new Array;
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
    RequestsComponent.prototype.getSwapRequestsByStatus = function (receivedRequest) {
        if (receivedRequest.status == 'NEW') {
            this.receivedRequestsNew.push(receivedRequest);
        }
        else if (receivedRequest.status == 'PROCESSING') {
            this.receivedRequestsProcessing.push(receivedRequest);
        }
        else if (receivedRequest.status == 'DONE') {
            this.receivedRequestsDone.push(receivedRequest);
        }
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
            _this.getSwapRequestsByStatus(item);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUV6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQVF0RTtJQWFFLDJCQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxXQUF3QixFQUN6RixXQUF3QixFQUFVLFlBQTBCO1FBRGxELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFSdEUscUJBQWdCLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQ2hELHdCQUFtQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNuRCwrQkFBMEIsR0FBc0IsSUFBSSxLQUFLLENBQUM7UUFDMUQseUJBQW9CLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQ3BELGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBSWlELENBQUM7SUFHM0Usb0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDeEUsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFP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QXZGd0I7UUFBeEIsWUFBSyxDQUFDLGdCQUFnQixDQUFDOzs2REFBd0I7SUFGckMsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQWUyQix1QkFBYyxFQUFrQixlQUFNLEVBQXVCLDBCQUFXO1lBQzVFLDBCQUFXLEVBQXdCLDRCQUFZO09BZDNELGlCQUFpQixDQTJGN0I7SUFBRCx3QkFBQztDQUFBLEFBM0ZELElBMkZDO0FBM0ZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZWNlaXZlZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vcmVjZWl2ZWQtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN3YXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXJlcXVlc3RzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0cy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoJ3NlbmRPclJlY2VpdmVkJykgc2VuZE9yUmVjZWl2ZWQ6IHN0cmluZztcclxuXHJcbiAgc3ViOiBhbnk7XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgcmVjZWl2ZWRSZXF1ZXN0czogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVjZWl2ZWRSZXF1ZXN0c05ldzogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVjZWl2ZWRSZXF1ZXN0c1Byb2Nlc3Npbmc6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlY2VpdmVkUmVxdWVzdHNEb25lOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gNjA7XHJcbiAgc3dhcFVybDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkgeyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLnVzZXJJZCA9ICtwYXJhbXNbJ3VzZXJpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMuc2V0U3dhcFVybCgpO1xyXG4gICAgICAgdGhpcy5nZXRTd2FwUmVxdWVzdHMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3dhcFJlcXVlc3RzKCkge1xyXG4gICAgdGhpcy5zd2FwU2VydmljZS5nZXRVc2VyU3dhcFJlcXVlc3RzKHRoaXMuc3dhcFVybCwgdGhpcy51c2VySWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5yZWNlaXZlZFJlcXVlc3RzID0gZGF0YTtcclxuICAgICAgdGhpcy5nZXRFeHRyYVJlcXVlc3REYXRhKCk7XHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0c0J5U3RhdHVzKHJlY2VpdmVkUmVxdWVzdDogUmVjZWl2ZWRSZXF1ZXN0KSB7XHJcbiAgICAgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ05FVycpIHtcclxuICAgICAgIHRoaXMucmVjZWl2ZWRSZXF1ZXN0c05ldy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ1BST0NFU1NJTkcnKSB7XHJcbiAgICAgICB0aGlzLnJlY2VpdmVkUmVxdWVzdHNQcm9jZXNzaW5nLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnRE9ORScpIHtcclxuICAgICAgIHRoaXMucmVjZWl2ZWRSZXF1ZXN0c0RvbmUucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIGdldEV4dHJhUmVxdWVzdERhdGEoKSB7XHJcbiAgICB0aGlzLnJlY2VpdmVkUmVxdWVzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoaXRlbS5yZWNlaXZlZEZyb21JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpdGVtLnJlY2VpdmVkRnJvbVVzZXIgPSBkYXRhLm5hbWU7XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGl0ZW0uZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIGl0ZW0uZ2FybWVudEltYWdlID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICBpZiAoaXRlbS5nYXJtZW50SW5SZXR1cm5JZCAhPSBudWxsKSB7XHJcbiAgICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGl0ZW0uZ2FybWVudEluUmV0dXJuSWQpLnRoZW4oXHJcbiAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICBpdGVtLmdhcm1lbnRJblJldHVybkltYWdlID0gcmVzO1xyXG4gICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U3dhcFJlcXVlc3RzQnlTdGF0dXMoaXRlbSk7XHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0U3dhcFVybCgpIHtcclxuICAgIGlmICh0aGlzLnNlbmRPclJlY2VpdmVkID09ICdzZW5kJykge1xyXG4gICAgICB0aGlzLnN3YXBVcmwgPSAnc2VuZC8nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3dhcFVybCA9ICdyZWNlaXZlZC8nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0FsbEdhcm1lbnRzKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWxsJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
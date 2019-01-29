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
    RequestsComponent.prototype.pickSwapReturnGarment = function (receivedFromId, garmentId) {
        this.router.navigate(['/swap-requests/return-garment/' + receivedFromId + garmentId]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUV6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQVF0RTtJQWFFLDJCQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxXQUF3QixFQUN6RixXQUF3QixFQUFVLFlBQTBCO1FBRGxELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFSdEUscUJBQWdCLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQ2hELHdCQUFtQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNuRCwrQkFBMEIsR0FBc0IsSUFBSSxLQUFLLENBQUM7UUFDMUQseUJBQW9CLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQ3BELGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBSWlELENBQUM7SUFHM0Usb0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDeEUsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFP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QUFHLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUF2RndCO1FBQXhCLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7NkRBQXdCO0lBRnJDLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FlMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUF1QiwwQkFBVztZQUM1RSwwQkFBVyxFQUF3Qiw0QkFBWTtPQWQzRCxpQkFBaUIsQ0EyRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNGRCxJQTJGQztBQTNGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmVjZWl2ZWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3JlY2VpdmVkLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVxdWVzdHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCdzZW5kT3JSZWNlaXZlZCcpIHNlbmRPclJlY2VpdmVkOiBzdHJpbmc7XHJcblxyXG4gIHN1YjogYW55O1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIHJlY2VpdmVkUmVxdWVzdHM6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlY2VpdmVkUmVxdWVzdHNOZXc6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlY2VpdmVkUmVxdWVzdHNQcm9jZXNzaW5nOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZWNlaXZlZFJlcXVlc3RzRG9uZTogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDYwO1xyXG4gIHN3YXBVcmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3dhcFNlcnZpY2U6IFN3YXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdGhpcy51c2VySWQgPSArcGFyYW1zWyd1c2VyaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICB0aGlzLnNldFN3YXBVcmwoKTtcclxuICAgICAgIHRoaXMuZ2V0U3dhcFJlcXVlc3RzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0cygpIHtcclxuICAgIHRoaXMuc3dhcFNlcnZpY2UuZ2V0VXNlclN3YXBSZXF1ZXN0cyh0aGlzLnN3YXBVcmwsIHRoaXMudXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMucmVjZWl2ZWRSZXF1ZXN0cyA9IGRhdGE7XHJcbiAgICAgIHRoaXMuZ2V0RXh0cmFSZXF1ZXN0RGF0YSgpO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRTd2FwUmVxdWVzdHNCeVN0YXR1cyhyZWNlaXZlZFJlcXVlc3Q6IFJlY2VpdmVkUmVxdWVzdCkge1xyXG4gICAgIGlmIChyZWNlaXZlZFJlcXVlc3Quc3RhdHVzID09ICdORVcnKSB7XHJcbiAgICAgICB0aGlzLnJlY2VpdmVkUmVxdWVzdHNOZXcucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICAgICBlbHNlIGlmIChyZWNlaXZlZFJlcXVlc3Quc3RhdHVzID09ICdQUk9DRVNTSU5HJykge1xyXG4gICAgICAgdGhpcy5yZWNlaXZlZFJlcXVlc3RzUHJvY2Vzc2luZy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ0RPTkUnKSB7XHJcbiAgICAgICB0aGlzLnJlY2VpdmVkUmVxdWVzdHNEb25lLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFeHRyYVJlcXVlc3REYXRhKCkge1xyXG4gICAgdGhpcy5yZWNlaXZlZFJlcXVlc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblxyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKGl0ZW0ucmVjZWl2ZWRGcm9tSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaXRlbS5yZWNlaXZlZEZyb21Vc2VyID0gZGF0YS5uYW1lO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShpdGVtLmdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICBpdGVtLmdhcm1lbnRJbWFnZSA9IHJlcztcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgaWYgKGl0ZW0uZ2FybWVudEluUmV0dXJuSWQgIT0gbnVsbCkge1xyXG4gICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShpdGVtLmdhcm1lbnRJblJldHVybklkKS50aGVuKFxyXG4gICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgaXRlbS5nYXJtZW50SW5SZXR1cm5JbWFnZSA9IHJlcztcclxuICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFN3YXBSZXF1ZXN0c0J5U3RhdHVzKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHNldFN3YXBVcmwoKSB7XHJcbiAgICBpZiAodGhpcy5zZW5kT3JSZWNlaXZlZCA9PSAnc2VuZCcpIHtcclxuICAgICAgdGhpcy5zd2FwVXJsID0gJ3NlbmQvJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnN3YXBVcmwgPSAncmVjZWl2ZWQvJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBpY2tTd2FwUmV0dXJuR2FybWVudChyZWNlaXZlZEZyb21JZDogbnVtYmVyLCBnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9yZXR1cm4tZ2FybWVudC8nICsgcmVjZWl2ZWRGcm9tSWQgKyBnYXJtZW50SWRdKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
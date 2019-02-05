"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var swap_service_1 = require("../../../shared/services/swap.service");
var user_service_1 = require("../../../shared/services/user.service");
var image_service_1 = require("../../../shared/services/image.service");
var data_service_1 = require("../../../shared/services/data.service");
var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(route, router, swapService, userService, imageService, dataService) {
        this.route = route;
        this.router = router;
        this.swapService = swapService;
        this.userService = userService;
        this.imageService = imageService;
        this.dataService = dataService;
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
    RequestsComponent.prototype.pickSwapReturnGarment = function (swapRequest) {
        this.dataService.setSwapRequest(swapRequest);
        this.router.navigate(['/swap-requests/return-garment/' + this.userId]);
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
            user_service_1.UserService, image_service_1.ImageService,
            data_service_1.DataService])
    ], RequestsComponent);
    return RequestsComponent;
}());
exports.RequestsComponent = RequestsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxzRUFBb0U7QUFRcEU7SUFhRSwyQkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsV0FBd0IsRUFDekYsV0FBd0IsRUFBVSxZQUEwQixFQUM1RCxXQUF3QjtRQUZkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFUbEMscUJBQWdCLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQ2hELHdCQUFtQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNuRCwrQkFBMEIsR0FBc0IsSUFBSSxLQUFLLENBQUM7UUFDMUQseUJBQW9CLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQ3BELGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBS2EsQ0FBQztJQUd2QyxvQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN4RSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFBQSxpQkFPQztR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LENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUF6RndCO1FBQXhCLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7NkRBQXdCO0lBRnJDLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FlMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUF1QiwwQkFBVztZQUM1RSwwQkFBVyxFQUF3Qiw0QkFBWTtZQUMvQywwQkFBVztPQWZ2QixpQkFBaUIsQ0E2RjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdGRCxJQTZGQztBQTdGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmVjZWl2ZWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3JlY2VpdmVkLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTd2FwUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVxdWVzdHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCdzZW5kT3JSZWNlaXZlZCcpIHNlbmRPclJlY2VpdmVkOiBzdHJpbmc7XHJcblxyXG4gIHN1YjogYW55O1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIHJlY2VpdmVkUmVxdWVzdHM6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlY2VpdmVkUmVxdWVzdHNOZXc6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlY2VpdmVkUmVxdWVzdHNQcm9jZXNzaW5nOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZWNlaXZlZFJlcXVlc3RzRG9uZTogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDYwO1xyXG4gIHN3YXBVcmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3dhcFNlcnZpY2U6IFN3YXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLnVzZXJJZCA9ICtwYXJhbXNbJ3VzZXJpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMuc2V0U3dhcFVybCgpO1xyXG4gICAgICAgdGhpcy5nZXRTd2FwUmVxdWVzdHMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3dhcFJlcXVlc3RzKCkge1xyXG4gICAgdGhpcy5zd2FwU2VydmljZS5nZXRVc2VyU3dhcFJlcXVlc3RzKHRoaXMuc3dhcFVybCwgdGhpcy51c2VySWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5yZWNlaXZlZFJlcXVlc3RzID0gZGF0YTtcclxuICAgICAgdGhpcy5nZXRFeHRyYVJlcXVlc3REYXRhKCk7XHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0c0J5U3RhdHVzKHJlY2VpdmVkUmVxdWVzdDogUmVjZWl2ZWRSZXF1ZXN0KSB7XHJcbiAgICAgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ05FVycpIHtcclxuICAgICAgIHRoaXMucmVjZWl2ZWRSZXF1ZXN0c05ldy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ1BST0NFU1NJTkcnKSB7XHJcbiAgICAgICB0aGlzLnJlY2VpdmVkUmVxdWVzdHNQcm9jZXNzaW5nLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnRE9ORScpIHtcclxuICAgICAgIHRoaXMucmVjZWl2ZWRSZXF1ZXN0c0RvbmUucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIGdldEV4dHJhUmVxdWVzdERhdGEoKSB7XHJcbiAgICB0aGlzLnJlY2VpdmVkUmVxdWVzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoaXRlbS5yZWNlaXZlZEZyb21JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpdGVtLnJlY2VpdmVkRnJvbVVzZXIgPSBkYXRhLm5hbWU7XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGl0ZW0uZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIGl0ZW0uZ2FybWVudEltYWdlID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICBpZiAoaXRlbS5nYXJtZW50SW5SZXR1cm5JZCAhPSBudWxsKSB7XHJcbiAgICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGl0ZW0uZ2FybWVudEluUmV0dXJuSWQpLnRoZW4oXHJcbiAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICBpdGVtLmdhcm1lbnRJblJldHVybkltYWdlID0gcmVzO1xyXG4gICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U3dhcFJlcXVlc3RzQnlTdGF0dXMoaXRlbSk7XHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0U3dhcFVybCgpIHtcclxuICAgIGlmICh0aGlzLnNlbmRPclJlY2VpdmVkID09ICdzZW5kJykge1xyXG4gICAgICB0aGlzLnN3YXBVcmwgPSAnc2VuZC8nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3dhcFVybCA9ICdyZWNlaXZlZC8nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGlja1N3YXBSZXR1cm5HYXJtZW50KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5zZXRTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3RzL3JldHVybi1nYXJtZW50LycgKyB0aGlzLnVzZXJJZF0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
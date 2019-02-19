"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var swap_service_1 = require("../../../shared/services/swap.service");
var user_service_1 = require("../../../shared/services/user.service");
var image_service_1 = require("../../../shared/services/image.service");
var data_service_1 = require("../../../shared/services/data.service");
var dialogs = require("tns-core-modules/ui/dialogs");
var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(route, router, swapService, userService, imageService, dataService) {
        this.route = route;
        this.router = router;
        this.swapService = swapService;
        this.userService = userService;
        this.imageService = imageService;
        this.dataService = dataService;
        this.swapRequests = new Array;
        this.requestsNew = new Array;
        this.requestsSend = new Array;
        this.requestsProcessing = new Array;
        this.requestsDone = new Array;
        this.previewSize = 60;
        this.history = true;
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userId = +params['userid']; // (+) converts string 'id' to a number
            _this.getSwapRequests();
        });
    };
    RequestsComponent.prototype.getSwapRequests = function () {
        var _this = this;
        this.swapService.getUserSwapRequests(this.userId).subscribe(function (data) {
            _this.swapRequests = data;
            _this.getExtraRequestData();
        }, function (errorResponse) {
            console.log("ERROR");
        });
    };
    RequestsComponent.prototype.getSwapRequestsByStatus = function (receivedRequest) {
        if (receivedRequest.status == 'NEW' && this.userId != receivedRequest.receivedFromId) {
            this.requestsNew.push(receivedRequest);
        }
        else if (receivedRequest.status == 'NEW' && this.userId == receivedRequest.receivedFromId) {
            this.requestsSend.push(receivedRequest);
        }
        else if (receivedRequest.status == 'PROCESSING') {
            this.requestsProcessing.push(receivedRequest);
        }
        else if (receivedRequest.status == 'DONE') {
            this.requestsDone.push(receivedRequest);
        }
    };
    RequestsComponent.prototype.getExtraRequestData = function () {
        var _this = this;
        this.swapRequests.forEach(function (item, index) {
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
    RequestsComponent.prototype.pickSwapReturnGarment = function (swapRequest) {
        this.dataService.setSwapRequest(swapRequest);
        this.router.navigate(['/swap-requests/return-garment/' + this.userId]);
    };
    RequestsComponent.prototype.acceptRequest = function (swapRequest) {
        var _this = this;
        swapRequest.status = 'DONE';
        this.swapService.updateSwapRequest(swapRequest).subscribe(function (response) {
            dialogs.alert({
                title: "Swap swap swap",
                message: "You reached a swap agreement!",
                okButtonText: "OK"
            }).then(function () {
                _this.router.navigate(['/swap-requests/history/' + _this.userId]);
            });
        }, function (errorResponse) {
            console.log("ERROR");
            _this.router.navigate(['/error']);
        });
    };
    RequestsComponent.prototype.rejectRequest = function (swapRequest) {
        var _this = this;
        swapRequest.status = 'NEW';
        swapRequest.messageInReturn = '';
        swapRequest.garmentInReturnId = null;
        this.swapService.updateSwapRequest(swapRequest).subscribe(function (response) {
            dialogs.alert({
                title: "No swap",
                message: "You have declined the swap request",
                okButtonText: "OK"
            }).then(function () {
                _this.router.navigate(['/home']);
            });
        }, function (error) {
            console.log("ERROR");
            _this.router.navigate(['/error']);
        });
    };
    RequestsComponent.prototype.checkUserDetails = function (userId) {
        console.log(userId);
    };
    RequestsComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/home']);
    };
    __decorate([
        core_1.Input('showHistory'),
        __metadata("design:type", Boolean)
    ], RequestsComponent.prototype, "showHistory", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxzRUFBb0U7QUFDcEUscURBQXVEO0FBUXZEO0lBY0UsMkJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLFdBQXdCLEVBQ3pGLFdBQXdCLEVBQVUsWUFBMEIsRUFDNUQsV0FBd0I7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6RixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVmxDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLGdCQUFXLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzNDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLHVCQUFrQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNsRCxpQkFBWSxHQUFzQixJQUFJLEtBQUssQ0FBQztRQUM1QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO0lBSWMsQ0FBQztJQUd2QyxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN4RSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7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QyxVQUFBLFFBQVE7WUFFaEUsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDVixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLE1BQWM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBaklxQjtRQUFyQixZQUFLLENBQUMsYUFBYSxDQUFDOzswREFBc0I7SUFGaEMsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQWdCMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUF1QiwwQkFBVztZQUM1RSwwQkFBVyxFQUF3Qiw0QkFBWTtZQUMvQywwQkFBVztPQWhCdkIsaUJBQWlCLENBb0k3QjtJQUFELHdCQUFDO0NBQUEsQUFwSUQsSUFvSUM7QUFwSVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJlY2VpdmVkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2R0by9yZWNlaXZlZC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgU3dhcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXJlcXVlc3RzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0cy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoJ3Nob3dIaXN0b3J5Jykgc2hvd0hpc3Rvcnk6IGJvb2xlYW47XHJcblxyXG4gIHN1YjogYW55O1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIHN3YXBSZXF1ZXN0czogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVxdWVzdHNOZXc6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlcXVlc3RzU2VuZDogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVxdWVzdHNQcm9jZXNzaW5nOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZXF1ZXN0c0RvbmU6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSA2MDtcclxuICBoaXN0b3J5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3dhcFNlcnZpY2U6IFN3YXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLnVzZXJJZCA9ICtwYXJhbXNbJ3VzZXJpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMuZ2V0U3dhcFJlcXVlc3RzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0cygpIHtcclxuICAgIHRoaXMuc3dhcFNlcnZpY2UuZ2V0VXNlclN3YXBSZXF1ZXN0cyh0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnN3YXBSZXF1ZXN0cyA9IGRhdGE7XHJcbiAgICAgIHRoaXMuZ2V0RXh0cmFSZXF1ZXN0RGF0YSgpO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRTd2FwUmVxdWVzdHNCeVN0YXR1cyhyZWNlaXZlZFJlcXVlc3Q6IFJlY2VpdmVkUmVxdWVzdCkge1xyXG4gICAgIGlmIChyZWNlaXZlZFJlcXVlc3Quc3RhdHVzID09ICdORVcnICYmIHRoaXMudXNlcklkICE9IHJlY2VpdmVkUmVxdWVzdC5yZWNlaXZlZEZyb21JZCkge1xyXG4gICAgICAgdGhpcy5yZXF1ZXN0c05ldy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ05FVycgJiYgdGhpcy51c2VySWQgPT0gcmVjZWl2ZWRSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzU2VuZC5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ1BST0NFU1NJTkcnKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzUHJvY2Vzc2luZy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ0RPTkUnKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzRG9uZS5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RXh0cmFSZXF1ZXN0RGF0YSgpIHtcclxuICAgIHRoaXMuc3dhcFJlcXVlc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblxyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKGl0ZW0ucmVjZWl2ZWRGcm9tSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaXRlbS5yZWNlaXZlZEZyb21Vc2VyID0gZGF0YS5uYW1lO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShpdGVtLmdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgaXRlbS5nYXJtZW50SW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICB9KVxyXG5cclxuICAgICBpZiAoaXRlbS5nYXJtZW50SW5SZXR1cm5JZCAhPSBudWxsKSB7XHJcbiAgICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGl0ZW0uZ2FybWVudEluUmV0dXJuSWQpLnRoZW4oXHJcbiAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgaXRlbS5nYXJtZW50SW5SZXR1cm5JbWFnZSA9IHJlcztcclxuICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICAgfSlcclxuICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5nZXRTd2FwUmVxdWVzdHNCeVN0YXR1cyhpdGVtKTtcclxuICB9KTtcclxuICB9XHJcblxyXG4gIHBpY2tTd2FwUmV0dXJuR2FybWVudChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3QpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9yZXR1cm4tZ2FybWVudC8nICsgdGhpcy51c2VySWRdKTtcclxuICB9XHJcblxyXG4gIGFjY2VwdFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KSB7XHJcbiAgICBzd2FwUmVxdWVzdC5zdGF0dXMgPSAnRE9ORSc7XHJcblxyXG4gICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiU3dhcCBzd2FwIHN3YXBcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IHJlYWNoZWQgYSBzd2FwIGFncmVlbWVudCFcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9oaXN0b3J5LycgKyB0aGlzLnVzZXJJZF0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlamVjdFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KSB7XHJcbiAgICBzd2FwUmVxdWVzdC5zdGF0dXMgPSAnTkVXJztcclxuICAgIHN3YXBSZXF1ZXN0Lm1lc3NhZ2VJblJldHVybiA9ICcnO1xyXG4gICAgc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQgPSBudWxsO1xyXG4gICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiTm8gc3dhcFwiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBkZWNsaW5lZCB0aGUgc3dhcCByZXF1ZXN0XCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja1VzZXJEZXRhaWxzKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0hvbWUoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=
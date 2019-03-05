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
            console.log("ERROR in getExtraRequestData");
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
    RequestsComponent.prototype.tabIndexChanged = function (event) {
        if (event.oldIndex == 0) {
            for (var _i = 0, _a = this.requestsNew; _i < _a.length; _i++) {
                var request = _a[_i];
                if (request.statusUpdated == true) {
                    this.updateSwapRequestStatusBool(request.id);
                }
            }
        }
        else if (event.oldIndex == 1) {
            for (var _b = 0, _c = this.requestsProcessing; _b < _c.length; _b++) {
                var request = _c[_b];
                if ((this.userId == request.receivedFromId) && request.statusUpdated == true) {
                    this.updateSwapRequestStatusBool(request.id);
                }
            }
        }
    };
    RequestsComponent.prototype.updateSwapRequestStatusBool = function (swapRequestId) {
        var _this = this;
        this.swapService.updateSwapRequestStatusBool(swapRequestId).subscribe(function (response) {
            // no action
        }, function (error) {
            console.log("ERROR in updating swapRequestStatusBool");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxzRUFBb0U7QUFDcEUscURBQXVEO0FBUXZEO0lBY0UsMkJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLFdBQXdCLEVBQ3pGLFdBQXdCLEVBQVUsWUFBMEIsRUFDNUQsV0FBd0I7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6RixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVmxDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLGdCQUFXLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzNDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLHVCQUFrQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNsRCxpQkFBWSxHQUFzQixJQUFJLEtBQUssQ0FBQztRQUM1QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO0lBSWMsQ0FBQztJQUd2QyxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN4RSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7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SUE2SkM7QUE3SlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJlY2VpdmVkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2R0by9yZWNlaXZlZC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgU3dhcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXJlcXVlc3RzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0cy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoJ3Nob3dIaXN0b3J5Jykgc2hvd0hpc3Rvcnk6IGJvb2xlYW47XHJcblxyXG4gIHN1YjogYW55O1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIHN3YXBSZXF1ZXN0czogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVxdWVzdHNOZXc6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlcXVlc3RzU2VuZDogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVxdWVzdHNQcm9jZXNzaW5nOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZXF1ZXN0c0RvbmU6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSA2MDtcclxuICBoaXN0b3J5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3dhcFNlcnZpY2U6IFN3YXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLnVzZXJJZCA9ICtwYXJhbXNbJ3VzZXJpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMuZ2V0U3dhcFJlcXVlc3RzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0cygpIHtcclxuICAgIHRoaXMuc3dhcFNlcnZpY2UuZ2V0VXNlclN3YXBSZXF1ZXN0cyh0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnN3YXBSZXF1ZXN0cyA9IGRhdGE7XHJcbiAgICAgIHRoaXMuZ2V0RXh0cmFSZXF1ZXN0RGF0YSgpO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgaW4gZ2V0RXh0cmFSZXF1ZXN0RGF0YVwiKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0c0J5U3RhdHVzKHJlY2VpdmVkUmVxdWVzdDogUmVjZWl2ZWRSZXF1ZXN0KSB7XHJcbiAgICAgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ05FVycgJiYgdGhpcy51c2VySWQgIT0gcmVjZWl2ZWRSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzTmV3LnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnTkVXJyAmJiB0aGlzLnVzZXJJZCA9PSByZWNlaXZlZFJlcXVlc3QucmVjZWl2ZWRGcm9tSWQpIHtcclxuICAgICAgIHRoaXMucmVxdWVzdHNTZW5kLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnUFJPQ0VTU0lORycpIHtcclxuICAgICAgIHRoaXMucmVxdWVzdHNQcm9jZXNzaW5nLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnRE9ORScpIHtcclxuICAgICAgIHRoaXMucmVxdWVzdHNEb25lLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFeHRyYVJlcXVlc3REYXRhKCkge1xyXG4gICAgdGhpcy5zd2FwUmVxdWVzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoaXRlbS5yZWNlaXZlZEZyb21JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpdGVtLnJlY2VpdmVkRnJvbVVzZXIgPSBkYXRhLm5hbWU7XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGl0ZW0uZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICBpdGVtLmdhcm1lbnRJbWFnZSA9IHJlcztcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgIGlmIChpdGVtLmdhcm1lbnRJblJldHVybklkICE9IG51bGwpIHtcclxuICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoaXRlbS5nYXJtZW50SW5SZXR1cm5JZCkudGhlbihcclxuICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICBpdGVtLmdhcm1lbnRJblJldHVybkltYWdlID0gcmVzO1xyXG4gICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICB9KVxyXG4gICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U3dhcFJlcXVlc3RzQnlTdGF0dXMoaXRlbSk7XHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuICBwaWNrU3dhcFJldHVybkdhcm1lbnQoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldFN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0KTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdHMvcmV0dXJuLWdhcm1lbnQvJyArIHRoaXMudXNlcklkXSk7XHJcbiAgfVxyXG5cclxuICBhY2NlcHRSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCkge1xyXG4gICAgc3dhcFJlcXVlc3Quc3RhdHVzID0gJ0RPTkUnO1xyXG5cclxuICAgIHRoaXMuc3dhcFNlcnZpY2UudXBkYXRlU3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3QpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIlN3YXAgc3dhcCBzd2FwXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcIllvdSByZWFjaGVkIGEgc3dhcCBhZ3JlZW1lbnQhXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdHMvaGlzdG9yeS8nICsgdGhpcy51c2VySWRdKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWplY3RSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCkge1xyXG4gICAgc3dhcFJlcXVlc3Quc3RhdHVzID0gJ05FVyc7XHJcbiAgICBzd2FwUmVxdWVzdC5tZXNzYWdlSW5SZXR1cm4gPSAnJztcclxuICAgIHN3YXBSZXF1ZXN0Lmdhcm1lbnRJblJldHVybklkID0gbnVsbDtcclxuICAgIHRoaXMuc3dhcFNlcnZpY2UudXBkYXRlU3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3QpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIk5vIHN3YXBcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgZGVjbGluZWQgdGhlIHN3YXAgcmVxdWVzdFwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGFiSW5kZXhDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmIChldmVudC5vbGRJbmRleCA9PSAwKSB7XHJcbiAgICAgIGZvciAobGV0IHJlcXVlc3Qgb2YgdGhpcy5yZXF1ZXN0c05ldykge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1c1VwZGF0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2wocmVxdWVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldmVudC5vbGRJbmRleCA9PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IHJlcXVlc3Qgb2YgdGhpcy5yZXF1ZXN0c1Byb2Nlc3NpbmcpIHtcclxuICAgICAgICBpZiAoKHRoaXMudXNlcklkID09IHJlcXVlc3QucmVjZWl2ZWRGcm9tSWQpICYmIHJlcXVlc3Quc3RhdHVzVXBkYXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3YXBSZXF1ZXN0U3RhdHVzQm9vbChyZXF1ZXN0LmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVN3YXBSZXF1ZXN0U3RhdHVzQm9vbChzd2FwUmVxdWVzdElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3dhcFNlcnZpY2UudXBkYXRlU3dhcFJlcXVlc3RTdGF0dXNCb29sKHN3YXBSZXF1ZXN0SWQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAvLyBubyBhY3Rpb25cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIGluIHVwZGF0aW5nIHN3YXBSZXF1ZXN0U3RhdHVzQm9vbFwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja1VzZXJEZXRhaWxzKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0hvbWUoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=
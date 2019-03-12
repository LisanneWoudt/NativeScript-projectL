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
            _this.sortDataByDate();
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
        else if (receivedRequest.status == 'PROCESSING' && this.userId == receivedRequest.receivedFromId) {
            this.requestsProcessing.push(receivedRequest);
        }
        else if (receivedRequest.status == 'PROCESSING' && this.userId != receivedRequest.receivedFromId) {
            this.requestsSend.push(receivedRequest);
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
    RequestsComponent.prototype.tabIndexChanged = function (event, leavingPage) {
        if (leavingPage || event.oldIndex == 0) {
            for (var _i = 0, _a = this.requestsNew; _i < _a.length; _i++) {
                var request = _a[_i];
                if (request.statusUpdated == true) {
                    this.updateSwapRequestStatusBool(request.id);
                }
            }
        }
        if (leavingPage || event.oldIndex == 1) {
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
    RequestsComponent.prototype.sortDataByDate = function () {
        return this.swapRequests.sort(function (a, b) {
            return new Date(b.dateUpdated) - new Date(a.dateUpdated);
        });
    };
    RequestsComponent.prototype.navigateToHome = function () {
        this.tabIndexChanged(null, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxzRUFBb0U7QUFDcEUscURBQXVEO0FBUXZEO0lBY0UsMkJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLFdBQXdCLEVBQ3pGLFdBQXdCLEVBQVUsWUFBMEIsRUFDNUQsV0FBd0I7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6RixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVmxDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLGdCQUFXLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzNDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLHVCQUFrQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNsRCxpQkFBWSxHQUFzQixJQUFJLEtBQUssQ0FBQztRQUM1QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO0lBSWMsQ0FBQztJQUd2QyxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN4RSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7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TSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXJLcUI7UUFBckIsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7MERBQXNCO0lBRmhDLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FnQjJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBdUIsMEJBQVc7WUFDNUUsMEJBQVcsRUFBd0IsNEJBQVk7WUFDL0MsMEJBQVc7T0FoQnZCLGlCQUFpQixDQXdLN0I7SUFBRCx3QkFBQztDQUFBLEFBeEtELElBd0tDO0FBeEtZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZWNlaXZlZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vcmVjZWl2ZWQtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN3YXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVxdWVzdHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCdzaG93SGlzdG9yeScpIHNob3dIaXN0b3J5OiBib29sZWFuO1xyXG5cclxuICBzdWI6IGFueTtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBzd2FwUmVxdWVzdHM6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlcXVlc3RzTmV3OiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZXF1ZXN0c1NlbmQ6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlcXVlc3RzUHJvY2Vzc2luZzogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVxdWVzdHNEb25lOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gNjA7XHJcbiAgaGlzdG9yeTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN3YXBTZXJ2aWNlOiBTd2FwU2VydmljZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdGhpcy51c2VySWQgPSArcGFyYW1zWyd1c2VyaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICB0aGlzLmdldFN3YXBSZXF1ZXN0cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTd2FwUmVxdWVzdHMoKSB7XHJcbiAgICB0aGlzLnN3YXBTZXJ2aWNlLmdldFVzZXJTd2FwUmVxdWVzdHModGhpcy51c2VySWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdHMgPSBkYXRhO1xyXG4gICAgICB0aGlzLnNvcnREYXRhQnlEYXRlKCk7XHJcbiAgICAgIHRoaXMuZ2V0RXh0cmFSZXF1ZXN0RGF0YSgpO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgaW4gZ2V0RXh0cmFSZXF1ZXN0RGF0YVwiKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0c0J5U3RhdHVzKHJlY2VpdmVkUmVxdWVzdDogUmVjZWl2ZWRSZXF1ZXN0KSB7XHJcbiAgICAgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ05FVycgJiYgdGhpcy51c2VySWQgIT0gcmVjZWl2ZWRSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzTmV3LnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnTkVXJyAmJiB0aGlzLnVzZXJJZCA9PSByZWNlaXZlZFJlcXVlc3QucmVjZWl2ZWRGcm9tSWQpIHtcclxuICAgICAgIHRoaXMucmVxdWVzdHNTZW5kLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnUFJPQ0VTU0lORycgJiYgdGhpcy51c2VySWQgPT0gcmVjZWl2ZWRSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzUHJvY2Vzc2luZy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ1BST0NFU1NJTkcnICYmIHRoaXMudXNlcklkICE9IHJlY2VpdmVkUmVxdWVzdC5yZWNlaXZlZEZyb21JZCkge1xyXG4gICAgICAgdGhpcy5yZXF1ZXN0c1NlbmQucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICAgICBlbHNlIGlmIChyZWNlaXZlZFJlcXVlc3Quc3RhdHVzID09ICdET05FJykge1xyXG4gICAgICAgdGhpcy5yZXF1ZXN0c0RvbmUucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIGdldEV4dHJhUmVxdWVzdERhdGEoKSB7XHJcbiAgICB0aGlzLnN3YXBSZXF1ZXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cclxuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcihpdGVtLnJlY2VpdmVkRnJvbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGl0ZW0ucmVjZWl2ZWRGcm9tVXNlciA9IGRhdGEubmFtZTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoaXRlbS5nYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIGl0ZW0uZ2FybWVudEltYWdlID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgaWYgKGl0ZW0uZ2FybWVudEluUmV0dXJuSWQgIT0gbnVsbCkge1xyXG4gICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShpdGVtLmdhcm1lbnRJblJldHVybklkKS50aGVuKFxyXG4gICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgIGl0ZW0uZ2FybWVudEluUmV0dXJuSW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSxcclxuICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTd2FwUmVxdWVzdHNCeVN0YXR1cyhpdGVtKTtcclxuICB9KTtcclxuICB9XHJcblxyXG4gIHBpY2tTd2FwUmV0dXJuR2FybWVudChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3QpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9yZXR1cm4tZ2FybWVudC8nICsgdGhpcy51c2VySWRdKTtcclxuICB9XHJcblxyXG4gIGFjY2VwdFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KSB7XHJcbiAgICBzd2FwUmVxdWVzdC5zdGF0dXMgPSAnRE9ORSc7XHJcblxyXG4gICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiU3dhcCBzd2FwIHN3YXBcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IHJlYWNoZWQgYSBzd2FwIGFncmVlbWVudCFcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9oaXN0b3J5LycgKyB0aGlzLnVzZXJJZF0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlamVjdFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KSB7XHJcbiAgICBzd2FwUmVxdWVzdC5zdGF0dXMgPSAnTkVXJztcclxuICAgIHN3YXBSZXF1ZXN0Lm1lc3NhZ2VJblJldHVybiA9ICcnO1xyXG4gICAgc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQgPSBudWxsO1xyXG4gICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiTm8gc3dhcFwiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBkZWNsaW5lZCB0aGUgc3dhcCByZXF1ZXN0XCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0YWJJbmRleENoYW5nZWQoZXZlbnQ6IGFueSwgbGVhdmluZ1BhZ2U6IGJvb2xlYW4pIHtcclxuICAgIGlmIChsZWF2aW5nUGFnZSB8fCBldmVudC5vbGRJbmRleCA9PSAwKSB7XHJcbiAgICAgIGZvciAobGV0IHJlcXVlc3Qgb2YgdGhpcy5yZXF1ZXN0c05ldykge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1c1VwZGF0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2wocmVxdWVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGVhdmluZ1BhZ2UgfHwgZXZlbnQub2xkSW5kZXggPT0gMSkge1xyXG4gICAgICBmb3IgKGxldCByZXF1ZXN0IG9mIHRoaXMucmVxdWVzdHNQcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnVzZXJJZCA9PSByZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSAmJiByZXF1ZXN0LnN0YXR1c1VwZGF0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2wocmVxdWVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2woc3dhcFJlcXVlc3RJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN3YXBTZXJ2aWNlLnVwZGF0ZVN3YXBSZXF1ZXN0U3RhdHVzQm9vbChzd2FwUmVxdWVzdElkKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgLy8gbm8gYWN0aW9uXHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBpbiB1cGRhdGluZyBzd2FwUmVxdWVzdFN0YXR1c0Jvb2xcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tVc2VyRGV0YWlscyh1c2VySWQ6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICB9XHJcblxyXG4gIHNvcnREYXRhQnlEYXRlKCkge1xyXG4gICAgIHJldHVybiB0aGlzLnN3YXBSZXF1ZXN0cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgcmV0dXJuIDxhbnk+bmV3IERhdGUoYi5kYXRlVXBkYXRlZCkgLSA8YW55Pm5ldyBEYXRlKGEuZGF0ZVVwZGF0ZWQpO1xyXG4gICB9KTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlVG9Ib21lKCkge1xyXG4gICAgdGhpcy50YWJJbmRleENoYW5nZWQobnVsbCwgdHJ1ZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=
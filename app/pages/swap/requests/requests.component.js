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
                _this.imageService.downloadCompressedImage(item.garmentId).then(function (res) {
                    item.garmentImage = res;
                    return res;
                }, function (msg) {
                    console.log("error!");
                });
                if (item.garmentInReturnId != null) {
                    _this.imageService.downloadCompressedImage(item.garmentInReturnId).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxzRUFBb0U7QUFDcEUscURBQXVEO0FBUXZEO0lBYUUsMkJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLFdBQXdCLEVBQ3pGLFdBQXdCLEVBQVUsWUFBMEIsRUFDNUQsV0FBd0I7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6RixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVGxDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLGdCQUFXLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzNDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLHVCQUFrQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNsRCxpQkFBWSxHQUFzQixJQUFJLEtBQUssQ0FBQztRQUM1QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUlhLENBQUM7SUFHdkMsb0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDeEUsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFlLEdBQWY7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Q0FBQyxXQUFXLENBQUMsR0FBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBcEtxQjtRQUFyQixZQUFLLENBQUMsYUFBYSxDQUFDOzswREFBc0I7SUFGaEMsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQWUyQix1QkFBYyxFQUFrQixlQUFNLEVBQXVCLDBCQUFXO1lBQzVFLDBCQUFXLEVBQXdCLDRCQUFZO1lBQy9DLDBCQUFXO09BZnZCLGlCQUFpQixDQXVLN0I7SUFBRCx3QkFBQztDQUFBLEFBdktELElBdUtDO0FBdktZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZWNlaXZlZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vcmVjZWl2ZWQtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN3YXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZXF1ZXN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVxdWVzdHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCdzaG93SGlzdG9yeScpIHNob3dIaXN0b3J5OiBib29sZWFuO1xyXG5cclxuICBzdWI6IGFueTtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBzd2FwUmVxdWVzdHM6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlcXVlc3RzTmV3OiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZXF1ZXN0c1NlbmQ6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlcXVlc3RzUHJvY2Vzc2luZzogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVxdWVzdHNEb25lOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gNjA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN3YXBTZXJ2aWNlOiBTd2FwU2VydmljZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdGhpcy51c2VySWQgPSArcGFyYW1zWyd1c2VyaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICB0aGlzLmdldFN3YXBSZXF1ZXN0cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTd2FwUmVxdWVzdHMoKSB7XHJcbiAgICB0aGlzLnN3YXBTZXJ2aWNlLmdldFVzZXJTd2FwUmVxdWVzdHModGhpcy51c2VySWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdHMgPSBkYXRhO1xyXG4gICAgICB0aGlzLnNvcnREYXRhQnlEYXRlKCk7XHJcbiAgICAgIHRoaXMuZ2V0RXh0cmFSZXF1ZXN0RGF0YSgpO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgaW4gZ2V0RXh0cmFSZXF1ZXN0RGF0YVwiKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN3YXBSZXF1ZXN0c0J5U3RhdHVzKHJlY2VpdmVkUmVxdWVzdDogUmVjZWl2ZWRSZXF1ZXN0KSB7XHJcbiAgICAgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ05FVycgJiYgdGhpcy51c2VySWQgIT0gcmVjZWl2ZWRSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzTmV3LnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnTkVXJyAmJiB0aGlzLnVzZXJJZCA9PSByZWNlaXZlZFJlcXVlc3QucmVjZWl2ZWRGcm9tSWQpIHtcclxuICAgICAgIHRoaXMucmVxdWVzdHNTZW5kLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnUFJPQ0VTU0lORycgJiYgdGhpcy51c2VySWQgPT0gcmVjZWl2ZWRSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzUHJvY2Vzc2luZy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ1BST0NFU1NJTkcnICYmIHRoaXMudXNlcklkICE9IHJlY2VpdmVkUmVxdWVzdC5yZWNlaXZlZEZyb21JZCkge1xyXG4gICAgICAgdGhpcy5yZXF1ZXN0c1NlbmQucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICAgICBlbHNlIGlmIChyZWNlaXZlZFJlcXVlc3Quc3RhdHVzID09ICdET05FJykge1xyXG4gICAgICAgdGhpcy5yZXF1ZXN0c0RvbmUucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIGdldEV4dHJhUmVxdWVzdERhdGEoKSB7XHJcbiAgICB0aGlzLnN3YXBSZXF1ZXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cclxuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcihpdGVtLnJlY2VpdmVkRnJvbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGl0ZW0ucmVjZWl2ZWRGcm9tVXNlciA9IGRhdGEubmFtZTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkQ29tcHJlc3NlZEltYWdlKGl0ZW0uZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICBpdGVtLmdhcm1lbnRJbWFnZSA9IHJlcztcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgIGlmIChpdGVtLmdhcm1lbnRJblJldHVybklkICE9IG51bGwpIHtcclxuICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkQ29tcHJlc3NlZEltYWdlKGl0ZW0uZ2FybWVudEluUmV0dXJuSWQpLnRoZW4oXHJcbiAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgaXRlbS5nYXJtZW50SW5SZXR1cm5JbWFnZSA9IHJlcztcclxuICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICAgfSlcclxuICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFN3YXBSZXF1ZXN0c0J5U3RhdHVzKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIH1cclxuXHJcbiAgcGlja1N3YXBSZXR1cm5HYXJtZW50KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5zZXRTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3RzL3JldHVybi1nYXJtZW50LycgKyB0aGlzLnVzZXJJZF0pO1xyXG4gIH1cclxuXHJcbiAgYWNjZXB0UmVxdWVzdChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QpIHtcclxuICAgIHN3YXBSZXF1ZXN0LnN0YXR1cyA9ICdET05FJztcclxuXHJcbiAgICB0aGlzLnN3YXBTZXJ2aWNlLnVwZGF0ZVN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJTd2FwIHN3YXAgc3dhcFwiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCJZb3UgcmVhY2hlZCBhIHN3YXAgYWdyZWVtZW50IVwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3RzL2hpc3RvcnkvJyArIHRoaXMudXNlcklkXSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVqZWN0UmVxdWVzdChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QpIHtcclxuICAgIHN3YXBSZXF1ZXN0LnN0YXR1cyA9ICdORVcnO1xyXG4gICAgc3dhcFJlcXVlc3QubWVzc2FnZUluUmV0dXJuID0gJyc7XHJcbiAgICBzd2FwUmVxdWVzdC5nYXJtZW50SW5SZXR1cm5JZCA9IG51bGw7XHJcbiAgICB0aGlzLnN3YXBTZXJ2aWNlLnVwZGF0ZVN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJObyBzd2FwXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIGRlY2xpbmVkIHRoZSBzd2FwIHJlcXVlc3RcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRhYkluZGV4Q2hhbmdlZChldmVudDogYW55LCBsZWF2aW5nUGFnZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGxlYXZpbmdQYWdlIHx8IGV2ZW50Lm9sZEluZGV4ID09IDApIHtcclxuICAgICAgZm9yIChsZXQgcmVxdWVzdCBvZiB0aGlzLnJlcXVlc3RzTmV3KSB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzVXBkYXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3YXBSZXF1ZXN0U3RhdHVzQm9vbChyZXF1ZXN0LmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsZWF2aW5nUGFnZSB8fCBldmVudC5vbGRJbmRleCA9PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IHJlcXVlc3Qgb2YgdGhpcy5yZXF1ZXN0c1Byb2Nlc3NpbmcpIHtcclxuICAgICAgICBpZiAoKHRoaXMudXNlcklkID09IHJlcXVlc3QucmVjZWl2ZWRGcm9tSWQpICYmIHJlcXVlc3Quc3RhdHVzVXBkYXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3YXBSZXF1ZXN0U3RhdHVzQm9vbChyZXF1ZXN0LmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVN3YXBSZXF1ZXN0U3RhdHVzQm9vbChzd2FwUmVxdWVzdElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3dhcFNlcnZpY2UudXBkYXRlU3dhcFJlcXVlc3RTdGF0dXNCb29sKHN3YXBSZXF1ZXN0SWQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAvLyBubyBhY3Rpb25cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIGluIHVwZGF0aW5nIHN3YXBSZXF1ZXN0U3RhdHVzQm9vbFwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja1VzZXJEZXRhaWxzKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gIH1cclxuXHJcbiAgc29ydERhdGFCeURhdGUoKSB7XHJcbiAgICAgcmV0dXJuIHRoaXMuc3dhcFJlcXVlc3RzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICByZXR1cm4gPGFueT5uZXcgRGF0ZShiLmRhdGVVcGRhdGVkKSAtIDxhbnk+bmV3IERhdGUoYS5kYXRlVXBkYXRlZCk7XHJcbiAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0hvbWUoKSB7XHJcbiAgICB0aGlzLnRhYkluZGV4Q2hhbmdlZChudWxsLCB0cnVlKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
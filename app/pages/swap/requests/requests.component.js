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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxzRUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxzRUFBb0U7QUFDcEUscURBQXVEO0FBUXZEO0lBY0UsMkJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLFdBQXdCLEVBQ3pGLFdBQXdCLEVBQVUsWUFBMEIsRUFDNUQsV0FBd0I7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6RixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVmxDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLGdCQUFXLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzNDLGlCQUFZLEdBQXNCLElBQUksS0FBSyxDQUFDO1FBQzVDLHVCQUFrQixHQUFzQixJQUFJLEtBQUssQ0FBQztRQUNsRCxpQkFBWSxHQUFzQixJQUFJLEtBQUssQ0FBQztRQUM1QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO0lBSWMsQ0FBQztJQUd2QyxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN4RSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7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LENBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFyS3FCO1FBQXJCLFlBQUssQ0FBQyxhQUFhLENBQUM7OzBEQUFzQjtJQUZoQyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7eUNBZ0IyQix1QkFBYyxFQUFrQixlQUFNLEVBQXVCLDBCQUFXO1lBQzVFLDBCQUFXLEVBQXdCLDRCQUFZO1lBQy9DLDBCQUFXO09BaEJ2QixpQkFBaUIsQ0F3SzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhLRCxJQXdLQztBQXhLWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmVjZWl2ZWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3JlY2VpdmVkLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTd2FwUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtcmVxdWVzdHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlcXVlc3RzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgnc2hvd0hpc3RvcnknKSBzaG93SGlzdG9yeTogYm9vbGVhbjtcclxuXHJcbiAgc3ViOiBhbnk7XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgc3dhcFJlcXVlc3RzOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZXF1ZXN0c05ldzogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcmVxdWVzdHNTZW5kOiBSZWNlaXZlZFJlcXVlc3RbXSA9IG5ldyBBcnJheTtcclxuICByZXF1ZXN0c1Byb2Nlc3Npbmc6IFJlY2VpdmVkUmVxdWVzdFtdID0gbmV3IEFycmF5O1xyXG4gIHJlcXVlc3RzRG9uZTogUmVjZWl2ZWRSZXF1ZXN0W10gPSBuZXcgQXJyYXk7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDYwO1xyXG4gIGhpc3Rvcnk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgIHRoaXMudXNlcklkID0gK3BhcmFtc1sndXNlcmlkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy5nZXRTd2FwUmVxdWVzdHMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3dhcFJlcXVlc3RzKCkge1xyXG4gICAgdGhpcy5zd2FwU2VydmljZS5nZXRVc2VyU3dhcFJlcXVlc3RzKHRoaXMudXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3RzID0gZGF0YTtcclxuICAgICAgdGhpcy5zb3J0RGF0YUJ5RGF0ZSgpO1xyXG4gICAgICB0aGlzLmdldEV4dHJhUmVxdWVzdERhdGEoKTtcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIGluIGdldEV4dHJhUmVxdWVzdERhdGFcIik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRTd2FwUmVxdWVzdHNCeVN0YXR1cyhyZWNlaXZlZFJlcXVlc3Q6IFJlY2VpdmVkUmVxdWVzdCkge1xyXG4gICAgIGlmIChyZWNlaXZlZFJlcXVlc3Quc3RhdHVzID09ICdORVcnICYmIHRoaXMudXNlcklkICE9IHJlY2VpdmVkUmVxdWVzdC5yZWNlaXZlZEZyb21JZCkge1xyXG4gICAgICAgdGhpcy5yZXF1ZXN0c05ldy5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ05FVycgJiYgdGhpcy51c2VySWQgPT0gcmVjZWl2ZWRSZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSB7XHJcbiAgICAgICB0aGlzLnJlcXVlc3RzU2VuZC5wdXNoKHJlY2VpdmVkUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYgKHJlY2VpdmVkUmVxdWVzdC5zdGF0dXMgPT0gJ1BST0NFU1NJTkcnICYmIHRoaXMudXNlcklkID09IHJlY2VpdmVkUmVxdWVzdC5yZWNlaXZlZEZyb21JZCkge1xyXG4gICAgICAgdGhpcy5yZXF1ZXN0c1Byb2Nlc3NpbmcucHVzaChyZWNlaXZlZFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICAgICBlbHNlIGlmIChyZWNlaXZlZFJlcXVlc3Quc3RhdHVzID09ICdQUk9DRVNTSU5HJyAmJiB0aGlzLnVzZXJJZCAhPSByZWNlaXZlZFJlcXVlc3QucmVjZWl2ZWRGcm9tSWQpIHtcclxuICAgICAgIHRoaXMucmVxdWVzdHNTZW5kLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgZWxzZSBpZiAocmVjZWl2ZWRSZXF1ZXN0LnN0YXR1cyA9PSAnRE9ORScpIHtcclxuICAgICAgIHRoaXMucmVxdWVzdHNEb25lLnB1c2gocmVjZWl2ZWRSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFeHRyYVJlcXVlc3REYXRhKCkge1xyXG4gICAgdGhpcy5zd2FwUmVxdWVzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoaXRlbS5yZWNlaXZlZEZyb21JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpdGVtLnJlY2VpdmVkRnJvbVVzZXIgPSBkYXRhLm5hbWU7XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZENvbXByZXNzZWRJbWFnZShpdGVtLmdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgaXRlbS5nYXJtZW50SW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICB9KVxyXG5cclxuICAgICBpZiAoaXRlbS5nYXJtZW50SW5SZXR1cm5JZCAhPSBudWxsKSB7XHJcbiAgICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZENvbXByZXNzZWRJbWFnZShpdGVtLmdhcm1lbnRJblJldHVybklkKS50aGVuKFxyXG4gICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgIGl0ZW0uZ2FybWVudEluUmV0dXJuSW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSxcclxuICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTd2FwUmVxdWVzdHNCeVN0YXR1cyhpdGVtKTtcclxuICB9KTtcclxuICB9XHJcblxyXG4gIHBpY2tTd2FwUmV0dXJuR2FybWVudChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3QpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9yZXR1cm4tZ2FybWVudC8nICsgdGhpcy51c2VySWRdKTtcclxuICB9XHJcblxyXG4gIGFjY2VwdFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KSB7XHJcbiAgICBzd2FwUmVxdWVzdC5zdGF0dXMgPSAnRE9ORSc7XHJcblxyXG4gICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiU3dhcCBzd2FwIHN3YXBcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IHJlYWNoZWQgYSBzd2FwIGFncmVlbWVudCFcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0cy9oaXN0b3J5LycgKyB0aGlzLnVzZXJJZF0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlamVjdFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KSB7XHJcbiAgICBzd2FwUmVxdWVzdC5zdGF0dXMgPSAnTkVXJztcclxuICAgIHN3YXBSZXF1ZXN0Lm1lc3NhZ2VJblJldHVybiA9ICcnO1xyXG4gICAgc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQgPSBudWxsO1xyXG4gICAgdGhpcy5zd2FwU2VydmljZS51cGRhdGVTd2FwUmVxdWVzdChzd2FwUmVxdWVzdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiTm8gc3dhcFwiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBkZWNsaW5lZCB0aGUgc3dhcCByZXF1ZXN0XCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0YWJJbmRleENoYW5nZWQoZXZlbnQ6IGFueSwgbGVhdmluZ1BhZ2U6IGJvb2xlYW4pIHtcclxuICAgIGlmIChsZWF2aW5nUGFnZSB8fCBldmVudC5vbGRJbmRleCA9PSAwKSB7XHJcbiAgICAgIGZvciAobGV0IHJlcXVlc3Qgb2YgdGhpcy5yZXF1ZXN0c05ldykge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1c1VwZGF0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2wocmVxdWVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGVhdmluZ1BhZ2UgfHwgZXZlbnQub2xkSW5kZXggPT0gMSkge1xyXG4gICAgICBmb3IgKGxldCByZXF1ZXN0IG9mIHRoaXMucmVxdWVzdHNQcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnVzZXJJZCA9PSByZXF1ZXN0LnJlY2VpdmVkRnJvbUlkKSAmJiByZXF1ZXN0LnN0YXR1c1VwZGF0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2wocmVxdWVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2woc3dhcFJlcXVlc3RJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN3YXBTZXJ2aWNlLnVwZGF0ZVN3YXBSZXF1ZXN0U3RhdHVzQm9vbChzd2FwUmVxdWVzdElkKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgLy8gbm8gYWN0aW9uXHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBpbiB1cGRhdGluZyBzd2FwUmVxdWVzdFN0YXR1c0Jvb2xcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tVc2VyRGV0YWlscyh1c2VySWQ6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICB9XHJcblxyXG4gIHNvcnREYXRhQnlEYXRlKCkge1xyXG4gICAgIHJldHVybiB0aGlzLnN3YXBSZXF1ZXN0cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgcmV0dXJuIDxhbnk+bmV3IERhdGUoYi5kYXRlVXBkYXRlZCkgLSA8YW55Pm5ldyBEYXRlKGEuZGF0ZVVwZGF0ZWQpO1xyXG4gICB9KTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlVG9Ib21lKCkge1xyXG4gICAgdGhpcy50YWJJbmRleENoYW5nZWQobnVsbCwgdHJ1ZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=
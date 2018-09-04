"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_1 = require("../../dto/garment");
var swap_request_1 = require("../../dto/swap-request");
var garment_service_1 = require("../../shared/services/garment.service");
var data_service_1 = require("../../shared/services/data.service");
var swap_service_1 = require("../../shared/services/swap.service");
var RequestSwapComponent = /** @class */ (function () {
    function RequestSwapComponent(route, router, garmentService, dataService, swapService) {
        this.route = route;
        this.router = router;
        this.garmentService = garmentService;
        this.dataService = dataService;
        this.swapService = swapService;
        this.garment = new garment_1.Garment();
        this.swapRequest = new swap_request_1.SwapRequest();
    }
    RequestSwapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.garmentId = +params['id']; // (+) converts string 'id' to a number
            _this.getSelectedGarment(_this.garmentId);
        });
    };
    RequestSwapComponent.prototype.getSelectedGarment = function (id) {
        var _this = this;
        this.garmentService.getGarment(id).subscribe(function (data) {
            console.log(data);
            _this.garment = data;
        }, function (errorResponse) {
            console.log("ERROR");
            console.error(errorResponse);
            //    this.router.navigate(['/error']);
        });
    };
    RequestSwapComponent.prototype.sendSwapRequest = function (swapRequest) {
        //TODO: swapRequest data binding (swapRequest.message) is not working.
        this.swapRequest = swapRequest;
        this.swapRequest.garmentId = this.garmentId;
        //    this.swapRequest.message = "hello";
        this.currentUser = this.dataService.getMockUser();
        this.swapRequest.userId = this.currentUser.id;
        this.swapService.sendSwapRequest(this.swapRequest).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    RequestSwapComponent = __decorate([
        core_1.Component({
            selector: "app-request-swap",
            moduleId: module.id,
            templateUrl: "./request-swap.component.html",
            styleUrls: ["../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
            garment_service_1.GarmentService, data_service_1.DataService,
            swap_service_1.SwapService])
    ], RequestSwapComponent);
    return RequestSwapComponent;
}());
exports.RequestSwapComponent = RequestSwapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zd2FwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3Qtc3dhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDZDQUE0QztBQUM1Qyx1REFBcUQ7QUFFckQseUVBQXVFO0FBQ3ZFLG1FQUFpRTtBQUNqRSxtRUFBaUU7QUFTakU7SUFFRSw4QkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQ3ZELGNBQThCLEVBQVUsV0FBd0IsRUFDaEUsV0FBd0I7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdkQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFLbEMsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQWdCLElBQUksMEJBQVcsRUFBRSxDQUFDO0lBTlAsQ0FBQztJQVF2Qyx1Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUN2RSxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFrQixHQUFsQixVQUFtQixFQUFVO1FBQTdCLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxVQUFBLGFBQWE7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsdUNBQXVDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFDdEMsc0VBQXNFO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEQseUNBQXlDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNDVSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FJMkIsdUJBQWMsRUFBa0IsZUFBTTtZQUN2QyxnQ0FBYyxFQUF1QiwwQkFBVztZQUNuRCwwQkFBVztPQUp2QixvQkFBb0IsQ0E4Q2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQgeyBTd2FwUmVxdWVzdCB9IGZyb20gJy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQgeyBHYXJtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTd2FwU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtcmVxdWVzdC1zd2FwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXF1ZXN0LXN3YXAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0U3dhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzd2FwU2VydmljZTogU3dhcFNlcnZpY2UpIHsgfVxyXG5cclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuICBjdXJyZW50VXNlcjogVXNlcjtcclxuICBwcml2YXRlIHN1YjogYW55O1xyXG4gIGdhcm1lbnQ6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xyXG4gIHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCA9IG5ldyBTd2FwUmVxdWVzdCgpO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRJZCA9ICtwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy5nZXRTZWxlY3RlZEdhcm1lbnQodGhpcy5nYXJtZW50SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZEdhcm1lbnQoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KGlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmdhcm1lbnQgPSBkYXRhO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgIC8vICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2VuZFN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCl7XHJcbiAgICAvL1RPRE86IHN3YXBSZXF1ZXN0IGRhdGEgYmluZGluZyAoc3dhcFJlcXVlc3QubWVzc2FnZSkgaXMgbm90IHdvcmtpbmcuXHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3QgPSBzd2FwUmVxdWVzdDtcclxuICAgICAgdGhpcy5zd2FwUmVxdWVzdC5nYXJtZW50SWQgPSB0aGlzLmdhcm1lbnRJZDtcclxuICAvLyAgICB0aGlzLnN3YXBSZXF1ZXN0Lm1lc3NhZ2UgPSBcImhlbGxvXCI7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XHJcbiAgICAgIHRoaXMuc3dhcFJlcXVlc3QudXNlcklkID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgICAgdGhpcy5zd2FwU2VydmljZS5zZW5kU3dhcFJlcXVlc3QodGhpcy5zd2FwUmVxdWVzdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=
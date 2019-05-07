"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var data_service_1 = require("../../../shared/services/data.service");
var dialogs = require("tns-core-modules/ui/dialogs");
var GarmentDetailComponent = /** @class */ (function () {
    function GarmentDetailComponent(router, route, garmentService, imageService, dataService) {
        this.router = router;
        this.route = route;
        this.garmentService = garmentService;
        this.imageService = imageService;
        this.dataService = dataService;
        this.previewSize = 200;
    }
    GarmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.garmentId = +params['garmentId']; // (+) converts string 'id' to a number
            _this.userId = _this.dataService.getMockUserId();
        });
        this.garmentService.getGarment(this.garmentId).subscribe(function (data) {
            _this.garment = data;
            _this.imageService.downloadImage(_this.garmentId).then(function (res) {
                _this.garment.image = res;
                return res;
            }, function (msg) {
                console.log("error in downloading image");
            });
        });
        if (this.dataService.getSwapRequest()) {
            this.garmentSwapId = this.dataService.getSwapRequest().id;
        }
    };
    GarmentDetailComponent.prototype.confirmDeleteGarment = function (garmentId) {
        var _this = this;
        dialogs.confirm({
            title: "Delete item",
            message: "Are you sure you want to delete this item",
            okButtonText: "OK",
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result) {
                _this.deleteGarment(garmentId);
            }
        });
    };
    GarmentDetailComponent.prototype.deleteGarment = function (garmentId) {
        var _this = this;
        this.garmentService.deleteGarment(garmentId).subscribe(function (data) {
            _this.router.navigate(['/home']);
        }, function (errorResponse) {
            console.log('Error in delete:' + errorResponse);
            _this.router.navigate(['/error']);
        });
    };
    GarmentDetailComponent.prototype.toSwapRequest = function (garmentId) {
        this.router.navigate(['/swap-request/', garmentId]);
    };
    GarmentDetailComponent.prototype.toSwapReturnRequest = function (garmentId) {
        this.router.navigate(['/swap-return-request']);
    };
    GarmentDetailComponent.prototype.toEditGarment = function (garment) {
        this.dataService.setGarment(garment);
        this.router.navigate(['garments/edit']);
    };
    GarmentDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    GarmentDetailComponent = __decorate([
        core_1.Component({
            selector: "app-garment-detail",
            moduleId: module.id,
            templateUrl: "./garment-detail.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            garment_service_1.GarmentService, image_service_1.ImageService,
            data_service_1.DataService])
    ], GarmentDetailComponent);
    return GarmentDetailComponent;
}());
exports.GarmentDetailComponent = GarmentDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUF1RDtBQUN2RCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFrRTtBQUNsRSxxREFBdUQ7QUFRdkQ7SUFTRSxnQ0FBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQ3ZELGNBQThCLEVBQVUsWUFBMEIsRUFDbEUsV0FBd0I7UUFGZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdkQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKbEMsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFJWSxDQUFDO0lBRXZDLHlDQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUFyQkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDOUUsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDM0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDaEQsVUFBQSxHQUFHO2dCQUNELEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQzNDLENBQUMsQ0FDRixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzVELENBQUM7SUFDSixDQUFDO0lBRUQscURBQW9CLEdBQXBCLFVBQXFCLFNBQWlCO1FBQXRDLGlCQVdDO1FBVkEsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNiLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSwyQ0FBMkM7WUFDcEQsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNYLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLFNBQWlCO1FBQS9CLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMzRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFFLFVBQUEsYUFBYTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELDhDQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG9EQUFtQixHQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsNkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBMUVVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztTQUNqRCxDQUFDO3lDQVc0QixlQUFNLEVBQWlCLHVCQUFjO1lBQ3ZDLGdDQUFjLEVBQXdCLDRCQUFZO1lBQ3JELDBCQUFXO09BWHZCLHNCQUFzQixDQTRFbEM7SUFBRCw2QkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1nYXJtZW50LWRldGFpbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhcm1lbnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHN1YjogYW55O1xyXG4gIGdhcm1lbnQ6IEdhcm1lbnQ7XHJcbiAgZ2FybWVudElkOiBudW1iZXI7XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgZ2FybWVudFN3YXBJZDogbnVtYmVyO1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRJZCA9ICtwYXJhbXNbJ2dhcm1lbnRJZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMudXNlcklkID0gdGhpcy5kYXRhU2VydmljZS5nZXRNb2NrVXNlcklkKCk7XHJcbiAgICAgfSk7XHJcblxyXG4gICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudCh0aGlzLmdhcm1lbnRJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgdGhpcy5nYXJtZW50ID0gZGF0YTtcclxuXHJcbiAgICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKHRoaXMuZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICB0aGlzLmdhcm1lbnQuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gZG93bmxvYWRpbmcgaW1hZ2VcIilcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIClcclxuICAgICB9KVxyXG4gICAgIGlmICh0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCkpIHtcclxuICAgICAgIHRoaXMuZ2FybWVudFN3YXBJZCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKS5pZDtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuICBjb25maXJtRGVsZXRlR2FybWVudChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogXCJEZWxldGUgaXRlbVwiLFxyXG4gICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgIHRoaXMuZGVsZXRlR2FybWVudChnYXJtZW50SWQpO1xyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVHYXJtZW50KGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmRlbGV0ZUdhcm1lbnQoZ2FybWVudElkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZGVsZXRlOicgKyBlcnJvclJlc3BvbnNlKTtcclxuICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9Td2FwUmVxdWVzdChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0LycsIGdhcm1lbnRJZF0pO1xyXG4gIH1cclxuXHJcbiAgdG9Td2FwUmV0dXJuUmVxdWVzdChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXR1cm4tcmVxdWVzdCddKVxyXG4gIH1cclxuXHJcbiAgdG9FZGl0R2FybWVudChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldEdhcm1lbnQoZ2FybWVudCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2dhcm1lbnRzL2VkaXQnXSlcclxuICB9XHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
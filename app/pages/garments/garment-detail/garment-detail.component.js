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
                _this.imageSrc = res;
                return res;
            }, function (msg) {
                console.log("error!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUF1RDtBQUN2RCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFrRTtBQUNsRSxxREFBdUQ7QUFRdkQ7SUFXRSxnQ0FBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQ3ZELGNBQThCLEVBQVUsWUFBMEIsRUFDbEUsV0FBd0I7UUFGZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdkQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKbEMsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFJWSxDQUFDO0lBRXZDLHlDQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF0QkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDOUUsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDM0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDaEQsVUFBQSxHQUFHO2dCQUNELEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkIsQ0FBQyxDQUNGLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDNUQsQ0FBQztJQUNKLENBQUM7SUFFRCxxREFBb0IsR0FBcEIsVUFBcUIsU0FBaUI7UUFBdEMsaUJBV0M7UUFWQSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsT0FBTyxFQUFFLDJDQUEyQztZQUNwRCxZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1gsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsU0FBaUI7UUFBL0IsaUJBT0M7UUFOQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzNELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsb0RBQW1CLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRCw2Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE3RVUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1NBQ2pELENBQUM7eUNBYTRCLGVBQU0sRUFBaUIsdUJBQWM7WUFDdkMsZ0NBQWMsRUFBd0IsNEJBQVk7WUFDckQsMEJBQVc7T0FidkIsc0JBQXNCLENBK0VsQztJQUFELDZCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWdhcm1lbnQtZGV0YWlsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nYXJtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgZ2FybWVudDogR2FybWVudDtcclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBnYXJtZW50U3dhcElkOiBudW1iZXI7XHJcblxyXG4gIGltYWdlU3JjOiBhbnk7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgIHRoaXMuZ2FybWVudElkID0gK3BhcmFtc1snZ2FybWVudElkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VySWQoKTtcclxuICAgICB9KTtcclxuXHJcbiAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KHRoaXMuZ2FybWVudElkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnQgPSBkYXRhO1xyXG5cclxuICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UodGhpcy5nYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgIHRoaXMuZ2FybWVudC5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IhXCIpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICApXHJcbiAgICAgfSlcclxuICAgICBpZiAodGhpcy5kYXRhU2VydmljZS5nZXRTd2FwUmVxdWVzdCgpKSB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRTd2FwSWQgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCkuaWQ7XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlybURlbGV0ZUdhcm1lbnQoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgdGl0bGU6IFwiRGVsZXRlIGl0ZW1cIixcclxuICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbVwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICB0aGlzLmRlbGV0ZUdhcm1lbnQoZ2FybWVudElkKTtcclxuICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlR2FybWVudChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5kZWxldGVHYXJtZW50KGdhcm1lbnRJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGRlbGV0ZTonICsgZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvU3dhcFJlcXVlc3QoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdC8nLCBnYXJtZW50SWRdKTtcclxuICB9XHJcblxyXG4gIHRvU3dhcFJldHVyblJlcXVlc3QoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmV0dXJuLXJlcXVlc3QnXSlcclxuICB9XHJcblxyXG4gIHRvRWRpdEdhcm1lbnQoZ2FybWVudDogR2FybWVudCkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5zZXRHYXJtZW50KGdhcm1lbnQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydnYXJtZW50cy9lZGl0J10pXHJcbiAgfVxyXG4gIG5hdmlnYXRlQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
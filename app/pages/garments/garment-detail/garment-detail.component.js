"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../../dto/garment");
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
        this.garment = new garment_1.Garment();
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
        this.swapRequest = this.dataService.getSwapRequest();
        this.swapRequest.garmentInReturnId = garmentId;
        this.dataService.setSwapRequest(this.swapRequest);
        this.router.navigate(['/swap-return-request']);
    };
    GarmentDetailComponent.prototype.toEditGarment = function (garment) {
        this.dataService.setGarment(garment);
        this.router.navigate(['garments/edit']);
    };
    GarmentDetailComponent.prototype.navigateBack = function () {
        if (!this.garmentSwapId && this.userId != this.garment.userId) {
            this.router.navigate(['/garments/all']);
        }
        else if (this.garmentSwapId) {
            this.router.navigate(['/swap-requests/return-garment/' + this.garment.userId]);
        }
        else {
            this.router.navigate(['/home']);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdEQUE2QztBQUU3QywwQ0FBdUQ7QUFDdkQsNEVBQXdFO0FBQ3hFLHdFQUFvRTtBQUNwRSxzRUFBa0U7QUFDbEUscURBQXVEO0FBUXZEO0lBVUUsZ0NBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUN2RCxjQUE4QixFQUFVLFlBQTBCLEVBQ2xFLFdBQXdCO1FBRmQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ2xFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVGxDLFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUlqQyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUtZLENBQUM7SUFFdkMseUNBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXJCQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUM5RSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMzRCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVwQixLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEs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SUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBdEZVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztTQUNqRCxDQUFDO3lDQVk0QixlQUFNLEVBQWlCLHVCQUFjO1lBQ3ZDLGdDQUFjLEVBQXdCLDRCQUFZO1lBQ3JELDBCQUFXO09BWnZCLHNCQUFzQixDQXdGbEM7SUFBRCw2QkFBQztDQUFBLEFBeEZELElBd0ZDO0FBeEZZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge1N3YXBSZXF1ZXN0fSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1kZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBnYXJtZW50U3dhcElkOiBudW1iZXI7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDIwMDtcclxuICBzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRJZCA9ICtwYXJhbXNbJ2dhcm1lbnRJZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMudXNlcklkID0gdGhpcy5kYXRhU2VydmljZS5nZXRNb2NrVXNlcklkKCk7XHJcbiAgICAgfSk7XHJcblxyXG4gICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudCh0aGlzLmdhcm1lbnRJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgdGhpcy5nYXJtZW50ID0gZGF0YTtcclxuXHJcbiAgICAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKHRoaXMuZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICB0aGlzLmdhcm1lbnQuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gZG93bmxvYWRpbmcgaW1hZ2VcIilcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIClcclxuICAgICB9KVxyXG4gICAgIGlmICh0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCkpIHtcclxuICAgICAgIHRoaXMuZ2FybWVudFN3YXBJZCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKS5pZDtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuICBjb25maXJtRGVsZXRlR2FybWVudChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogXCJEZWxldGUgaXRlbVwiLFxyXG4gICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgIHRoaXMuZGVsZXRlR2FybWVudChnYXJtZW50SWQpO1xyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVHYXJtZW50KGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmRlbGV0ZUdhcm1lbnQoZ2FybWVudElkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZGVsZXRlOicgKyBlcnJvclJlc3BvbnNlKTtcclxuICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9Td2FwUmVxdWVzdChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3dhcC1yZXF1ZXN0LycsIGdhcm1lbnRJZF0pO1xyXG4gIH1cclxuXHJcbiAgdG9Td2FwUmV0dXJuUmVxdWVzdChnYXJtZW50SWQ6IG51bWJlcil7XHJcbiAgICB0aGlzLnN3YXBSZXF1ZXN0ID0gdGhpcy5kYXRhU2VydmljZS5nZXRTd2FwUmVxdWVzdCgpO1xyXG4gICAgdGhpcy5zd2FwUmVxdWVzdC5nYXJtZW50SW5SZXR1cm5JZCA9IGdhcm1lbnRJZDtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U3dhcFJlcXVlc3QodGhpcy5zd2FwUmVxdWVzdCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJldHVybi1yZXF1ZXN0J10pXHJcbiAgfVxyXG5cclxuICB0b0VkaXRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0R2FybWVudChnYXJtZW50KTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZ2FybWVudHMvZWRpdCddKVxyXG4gIH1cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2FybWVudFN3YXBJZCAmJiB0aGlzLnVzZXJJZCAhPSB0aGlzLmdhcm1lbnQudXNlcklkKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FsbCddKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZ2FybWVudFN3YXBJZCl7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdHMvcmV0dXJuLWdhcm1lbnQvJyArIHRoaXMuZ2FybWVudC51c2VySWRdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
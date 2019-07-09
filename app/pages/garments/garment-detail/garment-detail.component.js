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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdEQUE2QztBQUM3QywwQ0FBdUQ7QUFDdkQsNEVBQXdFO0FBQ3hFLHdFQUFvRTtBQUNwRSxzRUFBa0U7QUFDbEUscURBQXVEO0FBUXZEO0lBU0UsZ0NBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUN2RCxjQUE4QixFQUFVLFlBQTBCLEVBQ2xFLFdBQXdCO1FBRmQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3ZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ2xFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUmxDLFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUlqQyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUlZLENBQUM7SUFFdkMseUNBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXJCQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztZQUM5RSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMzRCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVwQixLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEs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QUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQWxGVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDakQsQ0FBQzt5Q0FXNEIsZUFBTSxFQUFpQix1QkFBYztZQUN2QyxnQ0FBYyxFQUF3Qiw0QkFBWTtZQUNyRCwwQkFBVztPQVh2QixzQkFBc0IsQ0FvRmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXBGRCxJQW9GQztBQXBGWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1kZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBnYXJtZW50U3dhcElkOiBudW1iZXI7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgIHRoaXMuZ2FybWVudElkID0gK3BhcmFtc1snZ2FybWVudElkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VySWQoKTtcclxuICAgICB9KTtcclxuXHJcbiAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KHRoaXMuZ2FybWVudElkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnQgPSBkYXRhO1xyXG5cclxuICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UodGhpcy5nYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgIHRoaXMuZ2FybWVudC5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiBkb3dubG9hZGluZyBpbWFnZVwiKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgKVxyXG4gICAgIH0pXHJcbiAgICAgaWYgKHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKSkge1xyXG4gICAgICAgdGhpcy5nYXJtZW50U3dhcElkID0gdGhpcy5kYXRhU2VydmljZS5nZXRTd2FwUmVxdWVzdCgpLmlkO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZpcm1EZWxldGVHYXJtZW50KGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiBcIkRlbGV0ZSBpdGVtXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW1cIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgdGhpcy5kZWxldGVHYXJtZW50KGdhcm1lbnRJZCk7XHJcbiAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUdhcm1lbnQoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZGVsZXRlR2FybWVudChnYXJtZW50SWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBkZWxldGU6JyArIGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b1N3YXBSZXF1ZXN0KGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3QvJywgZ2FybWVudElkXSk7XHJcbiAgfVxyXG5cclxuICB0b1N3YXBSZXR1cm5SZXF1ZXN0KGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJldHVybi1yZXF1ZXN0J10pXHJcbiAgfVxyXG5cclxuICB0b0VkaXRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0R2FybWVudChnYXJtZW50KTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZ2FybWVudHMvZWRpdCddKVxyXG4gIH1cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2FybWVudFN3YXBJZCAmJiB0aGlzLnVzZXJJZCAhPSB0aGlzLmdhcm1lbnQudXNlcklkKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnRzL2FsbCddKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZ2FybWVudFN3YXBJZCl7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdHMvcmV0dXJuLWdhcm1lbnQvJyArIHRoaXMuZ2FybWVudC51c2VySWRdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
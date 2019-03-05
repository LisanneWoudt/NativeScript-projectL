"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var data_service_1 = require("../../../shared/services/data.service");
var router_1 = require("@angular/router");
var GarmentOverviewComponent = /** @class */ (function () {
    function GarmentOverviewComponent(garmentService, imageService, router, dataService) {
        this.garmentService = garmentService;
        this.imageService = imageService;
        this.router = router;
        this.dataService = dataService;
        this.garments = new Array;
        this.promises = new Array;
        this.selectedSizes = new Array;
        //Thumbsize/previewSize magically makes spinner on item stop when loaded
        this.thumbSize = 120;
        this.previewSize = 120;
        this.garmentFilter = {};
        this.swapGarmentId = 0;
    }
    GarmentOverviewComponent.prototype.ngOnInit = function () {
        this.userId = 1;
        this.getAllGarments();
    };
    GarmentOverviewComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.processing = true;
        this.garmentService.getAllGarments(this.garmentsUrl, this.userId).subscribe(function (data) {
            console.log(data);
            _this.garments = data;
            for (var int in _this.garments) {
                _this.count = +int;
                _this.promises.push(_this.search(_this.garments[_this.count].id, _this.count));
            }
            Promise.all(_this.promises)
                .then(function (res) {
            }, function (error) {
                console.log('Error in getAllGarments:' + error);
                _this.router.navigate(['/error']);
            });
        }, function (errorResponse) {
            console.log('Error in getAllGarments(2):' + errorResponse);
            _this.router.navigate(['/error']);
        });
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnSize = function (size) {
        if (!size || this.selectedSizes.includes(size)) {
            this.selectedSizes = this.selectedSizes.filter(function (obj) { return obj !== size; });
            if (this.selectedSizes.length == 0) {
                this.garmentFilter = {};
            }
            else {
                this.garmentFilter = { size: this.selectedSizes };
            }
        }
        else {
            this.selectedSizes.push(size);
            this.garmentFilter = { size: this.selectedSizes };
        }
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnUser = function (userId) {
        console.log("filter garments on userid " + userId);
        this.garmentFilter = { userId: [userId] };
    };
    GarmentOverviewComponent.prototype.search = function (garmentId, int) {
        var _this = this;
        this.imageService.downloadImage(garmentId).then(function (res) {
            _this.garments[int].image = res;
            _this.imageSrc = res;
            return res;
        }, function (msg) {
            console.log('Error in downloadImage:' + msg);
            _this.router.navigate(['/error']);
        });
    };
    GarmentOverviewComponent.prototype.toGarmentDetail = function (garmentId) {
        this.swapRequest = this.dataService.getSwapRequest();
        this.swapRequest.garmentInReturnId = garmentId;
        this.dataService.setSwapRequest(this.swapRequest);
        this.router.navigate(['/garment/', garmentId]);
    };
    __decorate([
        core_1.Input('garmentsUrl'),
        __metadata("design:type", String)
    ], GarmentOverviewComponent.prototype, "garmentsUrl", void 0);
    __decorate([
        core_1.Input('garmentId'),
        __metadata("design:type", Number)
    ], GarmentOverviewComponent.prototype, "swapGarmentId", void 0);
    GarmentOverviewComponent = __decorate([
        core_1.Component({
            selector: "app-garment-overview",
            moduleId: module.id,
            templateUrl: "./garment-overview.component.html"
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, image_service_1.ImageService,
            router_1.Router, data_service_1.DataService])
    ], GarmentOverviewComponent);
    return GarmentOverviewComponent;
}());
exports.GarmentOverviewComponent = GarmentOverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUFtQkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWxCMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxrQkFBYSxHQUFhLElBQUksS0FBSyxDQUFDO1FBR3BDLHdFQUF3RTtRQUN4RSxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBSTFCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBSUosa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFHZ0IsQ0FBQztJQUUvRCwyQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpREFBYyxHQUFkO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJ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TSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUNGLENBQUE7SUFDSixDQUFDO0lBRUQsa0RBQWUsR0FBZixVQUFnQixTQUFpQjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQTFFb0I7UUFBckIsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7aUVBQXFCO0lBQ3RCO1FBQW5CLFlBQUssQ0FBQyxXQUFXLENBQUM7O21FQUEyQjtJQWpCbkMsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBcUJvQyxnQ0FBYyxFQUF3Qiw0QkFBWTtZQUNwRSxlQUFNLEVBQXVCLDBCQUFXO09BcEIvQyx3QkFBd0IsQ0E0RnBDO0lBQUQsK0JBQUM7Q0FBQSxBQTVGRCxJQTRGQztBQTVGWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0J1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1vdmVydmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuICBwcm9taXNlczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTtcclxuICBzZWxlY3RlZFNpemVzOiBTdHJpbmdbXSA9IG5ldyBBcnJheTtcclxuXHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuICAvL1RodW1ic2l6ZS9wcmV2aWV3U2l6ZSBtYWdpY2FsbHkgbWFrZXMgc3Bpbm5lciBvbiBpdGVtIHN0b3Agd2hlbiBsb2FkZWRcclxuICB0aHVtYlNpemU6IG51bWJlciA9IDEyMDtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJvY2Vzc2luZzogYm9vbGVhbjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBnYXJtZW50RmlsdGVyOiBhbnkgPSB7fTtcclxuICBzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3Q7XHJcblxyXG4gIEBJbnB1dCgnZ2FybWVudHNVcmwnKSBnYXJtZW50c1VybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgnZ2FybWVudElkJykgc3dhcEdhcm1lbnRJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICB0aGlzLnVzZXJJZCA9IDE7XHJcbiAgIHRoaXMuZ2V0QWxsR2FybWVudHMoKTtcclxuICB9XHJcblxyXG4gIGdldEFsbEdhcm1lbnRzKCkge1xyXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0QWxsR2FybWVudHModGhpcy5nYXJtZW50c1VybCwgdGhpcy51c2VySWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gK2ludDtcclxuICAgICAgICB0aGlzLnByb21pc2VzLnB1c2godGhpcy5zZWFyY2godGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XS5pZCwgdGhpcy5jb3VudCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBQcm9taXNlLmFsbCh0aGlzLnByb21pc2VzKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGdldEFsbEdhcm1lbnRzOicgKyBlcnJvcik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGdldEFsbEdhcm1lbnRzKDIpOicgKyBlcnJvclJlc3BvbnNlKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzT25TaXplKHNpemU6IHN0cmluZykge1xyXG4gICAgaWYgKCFzaXplIHx8IHRoaXMuc2VsZWN0ZWRTaXplcy5pbmNsdWRlcyhzaXplKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU2l6ZXMgPSB0aGlzLnNlbGVjdGVkU2l6ZXMuZmlsdGVyKG9iaiA9PiBvYmogIT09IHNpemUpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50RmlsdGVyID0ge307XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7c2l6ZTogdGhpcy5zZWxlY3RlZFNpemVzfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaXplcy5wdXNoKHNpemUpO1xyXG4gICAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7c2l6ZTogdGhpcy5zZWxlY3RlZFNpemVzfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzT25Vc2VyKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpbHRlciBnYXJtZW50cyBvbiB1c2VyaWQgXCIgKyB1c2VySWQpO1xyXG4gICAgdGhpcy5nYXJtZW50RmlsdGVyID0ge3VzZXJJZDogW3VzZXJJZF19O1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGdhcm1lbnRJZDogbnVtYmVyLCBpbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShnYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudHNbaW50XS5pbWFnZSA9IHJlcztcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGRvd25sb2FkSW1hZ2U6JyArIG1zZyk7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICB9XHJcblxyXG4gICB0b0dhcm1lbnREZXRhaWwoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgICB0aGlzLnN3YXBSZXF1ZXN0ID0gdGhpcy5kYXRhU2VydmljZS5nZXRTd2FwUmVxdWVzdCgpO1xyXG4gICAgIHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQgPSBnYXJtZW50SWQ7XHJcbiAgICAgdGhpcy5kYXRhU2VydmljZS5zZXRTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KTtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50LycsIGdhcm1lbnRJZF0pXHJcbiAgIH1cclxuXHJcbn1cclxuIl19
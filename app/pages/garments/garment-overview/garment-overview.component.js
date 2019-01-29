"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var router_1 = require("@angular/router");
var GarmentOverviewComponent = /** @class */ (function () {
    function GarmentOverviewComponent(garmentService, imageService, router) {
        this.garmentService = garmentService;
        this.imageService = imageService;
        this.router = router;
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
                console.log('Error:' + error);
                _this.router.navigate(['/error']);
            });
        }, function (errorResponse) {
            console.log('Error:' + errorResponse);
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
            console.log('Error:' + msg);
            _this.router.navigate(['/error']);
        });
    };
    GarmentOverviewComponent.prototype.toGarmentDetail = function (garmentId) {
        this.router.navigate(['/garment/', garmentId, this.swapGarmentId]);
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
            router_1.Router])
    ], GarmentOverviewComponent);
    return GarmentOverviewComponent;
}());
exports.GarmentOverviewComponent = GarmentOverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUVoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLDBDQUF1QztBQVN2QztJQWtCRSxrQ0FBb0IsY0FBOEIsRUFBVSxZQUEwQixFQUM1RSxNQUFjO1FBREosbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWpCeEIsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxrQkFBYSxHQUFhLElBQUksS0FBSyxDQUFDO1FBR3BDLHdFQUF3RTtRQUN4RSxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBSTFCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBR0osa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFHbEIsQ0FBQztJQUU3QiwyQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpREFBYyxHQUFkO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJ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LENBQUE7SUFDSixDQUFDO0lBRUQsa0RBQWUsR0FBZixVQUFnQixTQUFpQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQXZFb0I7UUFBckIsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7aUVBQXFCO0lBQ3RCO1FBQW5CLFlBQUssQ0FBQyxXQUFXLENBQUM7O21FQUEyQjtJQWhCbkMsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBb0JvQyxnQ0FBYyxFQUF3Qiw0QkFBWTtZQUNwRSxlQUFNO09BbkJiLHdCQUF3QixDQXdGcEM7SUFBRCwrQkFBQztDQUFBLEFBeEZELElBd0ZDO0FBeEZZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1vdmVydmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuICBwcm9taXNlczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTtcclxuICBzZWxlY3RlZFNpemVzOiBTdHJpbmdbXSA9IG5ldyBBcnJheTtcclxuXHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuICAvL1RodW1ic2l6ZS9wcmV2aWV3U2l6ZSBtYWdpY2FsbHkgbWFrZXMgc3Bpbm5lciBvbiBpdGVtIHN0b3Agd2hlbiBsb2FkZWRcclxuICB0aHVtYlNpemU6IG51bWJlciA9IDEyMDtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJvY2Vzc2luZzogYm9vbGVhbjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBnYXJtZW50RmlsdGVyOiBhbnkgPSB7fTtcclxuXHJcbiAgQElucHV0KCdnYXJtZW50c1VybCcpIGdhcm1lbnRzVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdnYXJtZW50SWQnKSBzd2FwR2FybWVudElkOiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy51c2VySWQgPSAxO1xyXG4gICB0aGlzLmdldEFsbEdhcm1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxHYXJtZW50cygpIHtcclxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmdldEFsbEdhcm1lbnRzKHRoaXMuZ2FybWVudHNVcmwsIHRoaXMudXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmdhcm1lbnRzID0gZGF0YTtcclxuXHJcbiAgICAgIGZvciAobGV0IGludCBpbiB0aGlzLmdhcm1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9ICtpbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlcy5wdXNoKHRoaXMuc2VhcmNoKHRoaXMuZ2FybWVudHNbdGhpcy5jb3VudF0uaWQsIHRoaXMuY291bnQpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgUHJvbWlzZS5hbGwodGhpcy5wcm9taXNlcylcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonICsgZXJyb3IpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICB9KVxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonICsgZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJHYXJtZW50c09uU2l6ZShzaXplOiBzdHJpbmcpIHtcclxuICAgIGlmICghc2l6ZSB8fCB0aGlzLnNlbGVjdGVkU2l6ZXMuaW5jbHVkZXMoc2l6ZSkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFNpemVzID0gdGhpcy5zZWxlY3RlZFNpemVzLmZpbHRlcihvYmogPT4gb2JqICE9PSBzaXplKTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTaXplcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHRoaXMuZ2FybWVudEZpbHRlciA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgdGhpcy5nYXJtZW50RmlsdGVyID0ge3NpemU6IHRoaXMuc2VsZWN0ZWRTaXplc307XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU2l6ZXMucHVzaChzaXplKTtcclxuICAgICAgdGhpcy5nYXJtZW50RmlsdGVyID0ge3NpemU6IHRoaXMuc2VsZWN0ZWRTaXplc307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJHYXJtZW50c09uVXNlcih1c2VySWQ6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJmaWx0ZXIgZ2FybWVudHMgb24gdXNlcmlkIFwiICsgdXNlcklkKTtcclxuICAgIHRoaXMuZ2FybWVudEZpbHRlciA9IHt1c2VySWQ6IFt1c2VySWRdfTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChnYXJtZW50SWQ6IG51bWJlciwgaW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonICsgbXNnKTtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgIH1cclxuXHJcbiAgIHRvR2FybWVudERldGFpbChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQvJywgZ2FybWVudElkLCB0aGlzLnN3YXBHYXJtZW50SWRdKVxyXG4gICB9XHJcblxyXG59XHJcbiJdfQ==
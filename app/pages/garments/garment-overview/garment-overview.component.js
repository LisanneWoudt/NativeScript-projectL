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
        this.router.navigate(['/garment/', garmentId]);
    };
    __decorate([
        core_1.Input('garmentsUrl'),
        __metadata("design:type", String)
    ], GarmentOverviewComponent.prototype, "garmentsUrl", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUVoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLDBDQUF1QztBQVN2QztJQWlCRSxrQ0FBb0IsY0FBOEIsRUFBVSxZQUEwQixFQUM1RSxNQUFjO1FBREosbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhCeEIsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxrQkFBYSxHQUFhLElBQUksS0FBSyxDQUFDO1FBR3BDLHdFQUF3RTtRQUN4RSxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBSTFCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO0lBS0ksQ0FBQztJQUU3QiwyQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpREFBYyxHQUFkO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsUUFBUSxD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Z0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQzt5Q0FtQm9DLGdDQUFjLEVBQXdCLDRCQUFZO1lBQ3BFLGVBQU07T0FsQmIsd0JBQXdCLENBa0ZwQztJQUFELCtCQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUFsRlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1nYXJtZW50LW92ZXJ2aWV3XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50T3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBnYXJtZW50czogR2FybWVudFtdID0gbmV3IEFycmF5O1xyXG4gIHByb21pc2VzOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5O1xyXG4gIHNlbGVjdGVkU2l6ZXM6IFN0cmluZ1tdID0gbmV3IEFycmF5O1xyXG5cclxuICBpbWFnZVNyYzogYW55O1xyXG4gIC8vVGh1bWJzaXplL3ByZXZpZXdTaXplIG1hZ2ljYWxseSBtYWtlcyBzcGlubmVyIG9uIGl0ZW0gc3RvcCB3aGVuIGxvYWRlZFxyXG4gIHRodW1iU2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMjA7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBwcm9jZXNzaW5nOiBib29sZWFuO1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIGdhcm1lbnRGaWx0ZXI6IGFueSA9IHt9O1xyXG5cclxuICBASW5wdXQoJ2dhcm1lbnRzVXJsJykgZ2FybWVudHNVcmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMudXNlcklkID0gMTtcclxuICAgdGhpcy5nZXRBbGxHYXJtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsR2FybWVudHMoKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cyh0aGlzLmdhcm1lbnRzVXJsLCB0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5nYXJtZW50cyA9IGRhdGE7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbnQgaW4gdGhpcy5nYXJtZW50cykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAraW50O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZXMucHVzaCh0aGlzLnNlYXJjaCh0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdLmlkLCB0aGlzLmNvdW50KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFByb21pc2UuYWxsKHRoaXMucHJvbWlzZXMpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JyArIGVycm9yKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSlcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6JyArIGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyR2FybWVudHNPblNpemUoc2l6ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXNpemUgfHwgdGhpcy5zZWxlY3RlZFNpemVzLmluY2x1ZGVzKHNpemUpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaXplcyA9IHRoaXMuc2VsZWN0ZWRTaXplcy5maWx0ZXIob2JqID0+IG9iaiAhPT0gc2l6ZSk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2l6ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgIHRoaXMuZ2FybWVudEZpbHRlciA9IHtzaXplOiB0aGlzLnNlbGVjdGVkU2l6ZXN9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFNpemVzLnB1c2goc2l6ZSk7XHJcbiAgICAgIHRoaXMuZ2FybWVudEZpbHRlciA9IHtzaXplOiB0aGlzLnNlbGVjdGVkU2l6ZXN9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGdhcm1lbnRJZDogbnVtYmVyLCBpbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRJbWFnZShnYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudHNbaW50XS5pbWFnZSA9IHJlcztcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicgKyBtc2cpO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgfVxyXG5cclxuICAgdG9HYXJtZW50RGV0YWlsKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudC8nLCBnYXJtZW50SWRdKVxyXG4gICB9XHJcblxyXG59XHJcbiJdfQ==
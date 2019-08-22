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
        this.garmentsEven = new Array;
        this.garmentsOdd = new Array;
        this.promises = new Array;
        this.allSizes = new Array;
        this.allLengths = new Array;
        this.allTypes = new Array;
        this.selectedSizes = this.allSizes;
        this.selectedLength = this.allLengths;
        this.selectedTypes = this.allTypes;
        this.previewSize = 120;
        this.garmentFilter = {};
        this.limit = 0;
        this.swapGarmentId = 0;
    }
    GarmentOverviewComponent.prototype.ngOnInit = function () {
        this.userId = 1;
        this.setUrlPart();
        this.getAllGarments();
    };
    GarmentOverviewComponent.prototype.setUrlPart = function () {
        if (this.limit > 0) {
            this.userIdLimit = this.userId + "/" + this.limit;
        }
        else {
            this.userIdLimit = this.userId.toString();
        }
    };
    GarmentOverviewComponent.prototype.isOdd = function (listcount) {
        //return true;
        return listcount % 2;
    };
    GarmentOverviewComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.processing = true;
        this.garmentService.getAllGarments(this.garmentsUrl, this.userIdLimit).subscribe(function (data) {
            _this.garments = data;
            _this.garmentsEven = data;
            _this.garmentsOdd = data;
            for (var int in _this.garments) {
                _this.count = +int;
                //TODO: add garment to array instead of filtering. Fix filters.
                if (_this.isOdd(_this.count)) {
                    _this.garmentsEven = _this.garmentsEven.filter(function (obj) { return _this.garments[_this.count] !== obj; });
                    _this.promises.push(_this.getImage(_this.garments[_this.count], _this.count));
                }
                else {
                    _this.garmentsOdd = _this.garmentsOdd.filter(function (obj) { return _this.garments[_this.count] !== obj; });
                    _this.promises.push(_this.getImage(_this.garments[_this.count], _this.count));
                }
                _this.setCategories(_this.garments[_this.count]);
            }
            Promise.all(_this.promises)
                .then(function (res) {
            }, function (error) {
                console.log('Error in getAllGarments:' + error);
                _this.router.navigate(['/error']);
            });
        }, function (errorResponse) {
            console.log(errorResponse);
            console.log('Error in getAllGarments(2):' + errorResponse);
            _this.router.navigate(['/error']);
        });
    };
    GarmentOverviewComponent.prototype.setCategories = function (garment) {
        if (!this.allSizes.includes(garment.size)) {
            this.allSizes.push(garment.size);
        }
        if (!this.allTypes.includes(garment.garmentType)) {
            this.allTypes.push(garment.garmentType);
        }
        if (!this.allLengths.includes(garment.lengthSize)) {
            this.allLengths.push(garment.lengthSize);
        }
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnUser = function (userId) {
        this.garmentFilter = { userId: [userId] };
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnSize = function (size) {
        this.filterGarments(size, 'size', this.selectedSizes, this.allSizes, this.lastSelectedSize);
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnLength = function (length) {
        this.filterGarments(length, 'length', this.selectedLength, this.allLengths, this.lastSelectedLength);
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnType = function (type) {
        this.filterGarments(type, 'garmentType', this.selectedTypes, this.allTypes, this.lastSelectedType);
    };
    GarmentOverviewComponent.prototype.filterGarments = function (filterKey, filterOn, selectedList, allList, lastSelected) {
        if (selectedList.length == allList.length && !lastSelected) {
            selectedList = [];
        }
        if (selectedList.includes(filterKey)) {
            selectedList = selectedList.filter(function (obj) { return obj !== filterKey; });
            if (selectedList.length == 0) {
                selectedList = allList;
                lastSelected = null;
            }
        }
        else {
            selectedList.push(filterKey);
            lastSelected = filterKey;
        }
        this.updateLastSelectedCategory(filterOn, selectedList, lastSelected);
        this.garmentFilter = { 'size': this.selectedSizes, 'lengthSize': this.selectedLength,
            'garmentType': this.selectedTypes };
    };
    GarmentOverviewComponent.prototype.updateLastSelectedCategory = function (category, selectedList, lastSelected) {
        if (category == 'size') {
            this.selectedSizes = selectedList;
            this.lastSelectedSize = lastSelected;
        }
        if (category == 'length') {
            this.selectedLength = selectedList;
            this.lastSelectedLength = lastSelected;
        }
        if (category == 'garmentType') {
            this.selectedTypes = selectedList;
            this.lastSelectedType = lastSelected;
        }
    };
    GarmentOverviewComponent.prototype.getImage = function (garment, int) {
        var _this = this;
        this.imageService.downloadCompressedImage(garment.id).then(function (res) {
            garment.image = res;
            _this.imageSrc = res;
            return res;
        }, function (msg) {
            console.log('Image could not be loaded:' + msg);
        });
    };
    GarmentOverviewComponent.prototype.toGarmentDetail = function (garmentId) {
        if (this.swapRequest) {
            this.swapRequest = this.dataService.getSwapRequest();
            this.swapRequest.garmentInReturnId = garmentId;
            this.dataService.setSwapRequest(this.swapRequest);
        }
        this.router.navigate(['/garment/', garmentId]);
    };
    __decorate([
        core_1.Input('garmentsUrl'),
        __metadata("design:type", String)
    ], GarmentOverviewComponent.prototype, "garmentsUrl", void 0);
    __decorate([
        core_1.Input('limit'),
        __metadata("design:type", Number)
    ], GarmentOverviewComponent.prototype, "limit", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUE0QkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTVCMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQWMsSUFBSSxLQUFLLENBQUM7UUFDcEMsZ0JBQVcsR0FBYyxJQUFJLEtBQUssQ0FBQztRQUNuQyxhQUFRLEdBQWUsSUFBSSxLQUFLLENBQUM7UUFDakMsYUFBUSxHQUFhLElBQUksS0FBSyxDQUFDO1FBQy9CLGVBQVUsR0FBYSxJQUFJLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQWEsSUFBSSxLQUFLLENBQUM7UUFDL0Isa0JBQWEsR0FBYSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hDLG1CQUFjLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxrQkFBYSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUM7UUFNeEMsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFLMUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFJUixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFHZ0IsQ0FBQztJQUUvRCwyQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xC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IE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0J1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1vdmVydmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBnYXJtZW50czogR2FybWVudFtdID0gbmV3IEFycmF5O1xyXG4gIGdhcm1lbnRzRXZlbjogR2FybWVudFtdID0gbmV3IEFycmF5O1xyXG4gIGdhcm1lbnRzT2RkOiBHYXJtZW50W10gPSBuZXcgQXJyYXk7XHJcbiAgcHJvbWlzZXM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk7XHJcbiAgYWxsU2l6ZXM6IHN0cmluZ1tdID0gbmV3IEFycmF5O1xyXG4gIGFsbExlbmd0aHM6IG51bWJlcltdID0gbmV3IEFycmF5O1xyXG4gIGFsbFR5cGVzOiBzdHJpbmdbXSA9IG5ldyBBcnJheTtcclxuICBzZWxlY3RlZFNpemVzOiBzdHJpbmdbXSA9IHRoaXMuYWxsU2l6ZXM7XHJcbiAgc2VsZWN0ZWRMZW5ndGg6IG51bWJlcltdID0gdGhpcy5hbGxMZW5ndGhzO1xyXG4gIHNlbGVjdGVkVHlwZXM6IHN0cmluZ1tdID0gdGhpcy5hbGxUeXBlcztcclxuICBsYXN0U2VsZWN0ZWRMZW5ndGg6IHN0cmluZztcclxuICBsYXN0U2VsZWN0ZWRTaXplOiBzdHJpbmc7XHJcbiAgbGFzdFNlbGVjdGVkVHlwZTogc3RyaW5nO1xyXG5cclxuICBpbWFnZVNyYzogYW55O1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMjA7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBwcm9jZXNzaW5nOiBib29sZWFuO1xyXG4gIHVzZXJJZExpbWl0OiBzdHJpbmc7XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgZ2FybWVudEZpbHRlcjogYW55ID0ge307XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0O1xyXG5cclxuICBASW5wdXQoJ2dhcm1lbnRzVXJsJykgZ2FybWVudHNVcmw6IHN0cmluZztcclxuICBASW5wdXQoJ2xpbWl0JykgbGltaXQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCdnYXJtZW50SWQnKSBzd2FwR2FybWVudElkOiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMudXNlcklkID0gMTtcclxuICAgdGhpcy5zZXRVcmxQYXJ0KCk7XHJcbiAgIHRoaXMuZ2V0QWxsR2FybWVudHMoKTtcclxuICB9XHJcblxyXG4gIHNldFVybFBhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5saW1pdCA+IDApIHtcclxuICAgICAgdGhpcy51c2VySWRMaW1pdCA9IHRoaXMudXNlcklkICsgXCIvXCIgKyB0aGlzLmxpbWl0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudXNlcklkTGltaXQgPSB0aGlzLnVzZXJJZC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNPZGQobGlzdGNvdW50OiBudW1iZXIpIHtcclxuICAgIC8vcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gbGlzdGNvdW50ICUgMjtcclxuICB9XHJcbiAgZ2V0QWxsR2FybWVudHMoKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cyh0aGlzLmdhcm1lbnRzVXJsLCB0aGlzLnVzZXJJZExpbWl0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xyXG4gICAgICB0aGlzLmdhcm1lbnRzRXZlbiA9IGRhdGE7XHJcbiAgICAgIHRoaXMuZ2FybWVudHNPZGQgPSBkYXRhO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gK2ludDtcclxuXHJcbiAgICAgICAgLy9UT0RPOiBhZGQgZ2FybWVudCB0byBhcnJheSBpbnN0ZWFkIG9mIGZpbHRlcmluZy4gRml4IGZpbHRlcnMuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPZGQodGhpcy5jb3VudCkpIHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudHNFdmVuID0gdGhpcy5nYXJtZW50c0V2ZW4uZmlsdGVyKG9iaiA9PiB0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdICE9PSBvYmopO1xyXG4gICAgICAgICAgdGhpcy5wcm9taXNlcy5wdXNoKHRoaXMuZ2V0SW1hZ2UodGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XSwgdGhpcy5jb3VudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICB0aGlzLmdhcm1lbnRzT2RkID0gdGhpcy5nYXJtZW50c09kZC5maWx0ZXIob2JqID0+IHRoaXMuZ2FybWVudHNbdGhpcy5jb3VudF0gIT09IG9iaik7XHJcbiAgICAgICAgICAgdGhpcy5wcm9taXNlcy5wdXNoKHRoaXMuZ2V0SW1hZ2UodGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XSwgdGhpcy5jb3VudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldENhdGVnb3JpZXModGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFByb21pc2UuYWxsKHRoaXMucHJvbWlzZXMpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHM6JyArIGVycm9yKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSlcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvclJlc3BvbnNlKVxyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHMoMik6JyArIGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2F0ZWdvcmllcyhnYXJtZW50OiBHYXJtZW50KXtcclxuICAgIGlmICghdGhpcy5hbGxTaXplcy5pbmNsdWRlcyhnYXJtZW50LnNpemUpKSB7XHJcbiAgICAgIHRoaXMuYWxsU2l6ZXMucHVzaChnYXJtZW50LnNpemUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmFsbFR5cGVzLmluY2x1ZGVzKGdhcm1lbnQuZ2FybWVudFR5cGUpKSB7XHJcbiAgICAgIHRoaXMuYWxsVHlwZXMucHVzaChnYXJtZW50Lmdhcm1lbnRUeXBlKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5hbGxMZW5ndGhzLmluY2x1ZGVzKGdhcm1lbnQubGVuZ3RoU2l6ZSkpIHtcclxuICAgICAgdGhpcy5hbGxMZW5ndGhzLnB1c2goZ2FybWVudC5sZW5ndGhTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzT25Vc2VyKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7dXNlcklkOiBbdXNlcklkXX07XHJcbiAgfVxyXG4gIGZpbHRlckdhcm1lbnRzT25TaXplKHNpemU6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhzaXplLCAnc2l6ZScsIHRoaXMuc2VsZWN0ZWRTaXplcywgdGhpcy5hbGxTaXplcywgdGhpcy5sYXN0U2VsZWN0ZWRTaXplKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPbkxlbmd0aChsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhsZW5ndGgsICdsZW5ndGgnLCB0aGlzLnNlbGVjdGVkTGVuZ3RoLCB0aGlzLmFsbExlbmd0aHMsIHRoaXMubGFzdFNlbGVjdGVkTGVuZ3RoKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPblR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlckdhcm1lbnRzKHR5cGUsICdnYXJtZW50VHlwZScsIHRoaXMuc2VsZWN0ZWRUeXBlcywgdGhpcy5hbGxUeXBlcywgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzKGZpbHRlcktleTogYW55LCBmaWx0ZXJPbjogc3RyaW5nLCBzZWxlY3RlZExpc3Q6IEFycmF5PGFueT4sXHJcbiAgICBhbGxMaXN0OiBBcnJheTxhbnk+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoID09IGFsbExpc3QubGVuZ3RoICYmICFsYXN0U2VsZWN0ZWQpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWRMaXN0LmluY2x1ZGVzKGZpbHRlcktleSkpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LmZpbHRlcihvYmogPT4gb2JqICE9PSBmaWx0ZXJLZXkpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gYWxsTGlzdDtcclxuICAgICAgICBsYXN0U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0LnB1c2goZmlsdGVyS2V5KTtcclxuICAgICAgbGFzdFNlbGVjdGVkID0gZmlsdGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlTGFzdFNlbGVjdGVkQ2F0ZWdvcnkoZmlsdGVyT24sIHNlbGVjdGVkTGlzdCwgbGFzdFNlbGVjdGVkKTtcclxuXHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7J3NpemUnOiB0aGlzLnNlbGVjdGVkU2l6ZXMsICdsZW5ndGhTaXplJzogdGhpcy5zZWxlY3RlZExlbmd0aCxcclxuICAgICAgJ2dhcm1lbnRUeXBlJzogdGhpcy5zZWxlY3RlZFR5cGVzfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGFzdFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZywgc2VsZWN0ZWRMaXN0OiBBcnJheTxhbnk+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG4gICAgaWYoY2F0ZWdvcnkgPT0gJ3NpemUnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaXplcyA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRTaXplID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgaWYoY2F0ZWdvcnkgPT0gJ2xlbmd0aCcpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZExlbmd0aCA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRMZW5ndGggPSBsYXN0U2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICBpZihjYXRlZ29yeSA9PSAnZ2FybWVudFR5cGUnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUeXBlcyA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoZ2FybWVudDogR2FybWVudCwgaW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkQ29tcHJlc3NlZEltYWdlKGdhcm1lbnQuaWQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIGdhcm1lbnQuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBjb3VsZCBub3QgYmUgbG9hZGVkOicgKyBtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICB9XHJcblxyXG4gICB0b0dhcm1lbnREZXRhaWwoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgICBpZiAodGhpcy5zd2FwUmVxdWVzdCkge1xyXG4gICAgICAgdGhpcy5zd2FwUmVxdWVzdCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKTtcclxuICAgICAgIHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQgPSBnYXJtZW50SWQ7XHJcbiAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldFN3YXBSZXF1ZXN0KHRoaXMuc3dhcFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50LycsIGdhcm1lbnRJZF0pXHJcbiAgIH1cclxuXHJcbn1cclxuIl19
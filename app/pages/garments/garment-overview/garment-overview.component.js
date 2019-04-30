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
        this.allSizes = new Array;
        this.allLengths = new Array;
        this.allTypes = new Array;
        this.selectedSizes = this.allSizes;
        this.selectedLength = this.allLengths;
        this.selectedTypes = this.allTypes;
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
            _this.garments = data;
            for (var int in _this.garments) {
                _this.count = +int;
                _this.promises.push(_this.getImage(_this.garments[_this.count].id, _this.count));
                _this.setCategories(_this.garments[_this.count]);
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
    GarmentOverviewComponent.prototype.getImage = function (garmentId, int) {
        var _this = this;
        this.imageService.downloadCompressedImage(garmentId).then(function (res) {
            _this.garments[int].image = res;
            _this.imageSrc = res;
            return res;
        }, function (msg) {
            console.log('Error in downloadImage:' + msg);
            _this.router.navigate(['/error']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUF5QkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXhCMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQWEsSUFBSSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFhLElBQUksS0FBSyxDQUFDO1FBQ2pDLGFBQVEsR0FBYSxJQUFJLEtBQUssQ0FBQztRQUMvQixrQkFBYSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsbUJBQWMsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNDLGtCQUFhLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQU14QyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUkxQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUlKLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBR2dCLENBQUM7SUFFL0QsMkNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaURBQWMsR0FBZDtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FB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QUE7SUFDSixDQUFDO0lBRUQsa0RBQWUsR0FBZixVQUFnQixTQUFpQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUF4SG9CO1FBQXJCLFlBQUssQ0FBQyxhQUFhLENBQUM7O2lFQUFxQjtJQUN0QjtRQUFuQixZQUFLLENBQUMsV0FBVyxDQUFDOzttRUFBMkI7SUF2Qm5DLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztTQUNuRCxDQUFDO3lDQTJCb0MsZ0NBQWMsRUFBd0IsNEJBQVk7WUFDcEUsZUFBTSxFQUF1QiwwQkFBVztPQTFCL0Msd0JBQXdCLENBZ0pwQztJQUFELCtCQUFDO0NBQUEsQUFoSkQsSUFnSkM7QUFoSlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCdcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWdhcm1lbnQtb3ZlcnZpZXdcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGdhcm1lbnRzOiBHYXJtZW50W10gPSBuZXcgQXJyYXk7XHJcbiAgcHJvbWlzZXM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk7XHJcbiAgYWxsU2l6ZXM6IHN0cmluZ1tdID0gbmV3IEFycmF5O1xyXG4gIGFsbExlbmd0aHM6IG51bWJlcltdID0gbmV3IEFycmF5O1xyXG4gIGFsbFR5cGVzOiBzdHJpbmdbXSA9IG5ldyBBcnJheTtcclxuICBzZWxlY3RlZFNpemVzOiBzdHJpbmdbXSA9IHRoaXMuYWxsU2l6ZXM7XHJcbiAgc2VsZWN0ZWRMZW5ndGg6IG51bWJlcltdID0gdGhpcy5hbGxMZW5ndGhzO1xyXG4gIHNlbGVjdGVkVHlwZXM6IHN0cmluZ1tdID0gdGhpcy5hbGxUeXBlcztcclxuICBsYXN0U2VsZWN0ZWRMZW5ndGg6IHN0cmluZztcclxuICBsYXN0U2VsZWN0ZWRTaXplOiBzdHJpbmc7XHJcbiAgbGFzdFNlbGVjdGVkVHlwZTogc3RyaW5nO1xyXG5cclxuICBpbWFnZVNyYzogYW55O1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMjA7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBwcm9jZXNzaW5nOiBib29sZWFuO1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIGdhcm1lbnRGaWx0ZXI6IGFueSA9IHt9O1xyXG4gIHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdDtcclxuXHJcbiAgQElucHV0KCdnYXJtZW50c1VybCcpIGdhcm1lbnRzVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdnYXJtZW50SWQnKSBzd2FwR2FybWVudElkOiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMudXNlcklkID0gMTtcclxuICAgdGhpcy5nZXRBbGxHYXJtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsR2FybWVudHMoKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cyh0aGlzLmdhcm1lbnRzVXJsLCB0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cclxuICAgICAgdGhpcy5nYXJtZW50cyA9IGRhdGE7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbnQgaW4gdGhpcy5nYXJtZW50cykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAraW50O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZXMucHVzaCh0aGlzLmdldEltYWdlKHRoaXMuZ2FybWVudHNbdGhpcy5jb3VudF0uaWQsIHRoaXMuY291bnQpKTtcclxuICAgICAgICB0aGlzLnNldENhdGVnb3JpZXModGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFByb21pc2UuYWxsKHRoaXMucHJvbWlzZXMpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHM6JyArIGVycm9yKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSlcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHMoMik6JyArIGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2F0ZWdvcmllcyhnYXJtZW50OiBHYXJtZW50KXtcclxuICAgIGlmICghdGhpcy5hbGxTaXplcy5pbmNsdWRlcyhnYXJtZW50LnNpemUpKSB7XHJcbiAgICAgIHRoaXMuYWxsU2l6ZXMucHVzaChnYXJtZW50LnNpemUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmFsbFR5cGVzLmluY2x1ZGVzKGdhcm1lbnQuZ2FybWVudFR5cGUpKSB7XHJcbiAgICAgIHRoaXMuYWxsVHlwZXMucHVzaChnYXJtZW50Lmdhcm1lbnRUeXBlKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5hbGxMZW5ndGhzLmluY2x1ZGVzKGdhcm1lbnQubGVuZ3RoU2l6ZSkpIHtcclxuICAgICAgdGhpcy5hbGxMZW5ndGhzLnB1c2goZ2FybWVudC5sZW5ndGhTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzT25Vc2VyKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7dXNlcklkOiBbdXNlcklkXX07XHJcbiAgfVxyXG4gIGZpbHRlckdhcm1lbnRzT25TaXplKHNpemU6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhzaXplLCAnc2l6ZScsIHRoaXMuc2VsZWN0ZWRTaXplcywgdGhpcy5hbGxTaXplcywgdGhpcy5sYXN0U2VsZWN0ZWRTaXplKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPbkxlbmd0aChsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhsZW5ndGgsICdsZW5ndGgnLCB0aGlzLnNlbGVjdGVkTGVuZ3RoLCB0aGlzLmFsbExlbmd0aHMsIHRoaXMubGFzdFNlbGVjdGVkTGVuZ3RoKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPblR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlckdhcm1lbnRzKHR5cGUsICdnYXJtZW50VHlwZScsIHRoaXMuc2VsZWN0ZWRUeXBlcywgdGhpcy5hbGxUeXBlcywgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzKGZpbHRlcktleTogYW55LCBmaWx0ZXJPbjogc3RyaW5nLCBzZWxlY3RlZExpc3Q6IEFycmF5PGFueT4sXHJcbiAgICBhbGxMaXN0OiBBcnJheTxhbnk+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoID09IGFsbExpc3QubGVuZ3RoICYmICFsYXN0U2VsZWN0ZWQpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWRMaXN0LmluY2x1ZGVzKGZpbHRlcktleSkpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LmZpbHRlcihvYmogPT4gb2JqICE9PSBmaWx0ZXJLZXkpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gYWxsTGlzdDtcclxuICAgICAgICBsYXN0U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0LnB1c2goZmlsdGVyS2V5KTtcclxuICAgICAgbGFzdFNlbGVjdGVkID0gZmlsdGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlTGFzdFNlbGVjdGVkQ2F0ZWdvcnkoZmlsdGVyT24sIHNlbGVjdGVkTGlzdCwgbGFzdFNlbGVjdGVkKTtcclxuXHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7J3NpemUnOiB0aGlzLnNlbGVjdGVkU2l6ZXMsICdsZW5ndGhTaXplJzogdGhpcy5zZWxlY3RlZExlbmd0aCxcclxuICAgICAgJ2dhcm1lbnRUeXBlJzogdGhpcy5zZWxlY3RlZFR5cGVzfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGFzdFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZywgc2VsZWN0ZWRMaXN0OiBBcnJheTxhbnk+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG4gICAgaWYoY2F0ZWdvcnkgPT0gJ3NpemUnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaXplcyA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRTaXplID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgaWYoY2F0ZWdvcnkgPT0gJ2xlbmd0aCcpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZExlbmd0aCA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRMZW5ndGggPSBsYXN0U2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICBpZihjYXRlZ29yeSA9PSAnZ2FybWVudFR5cGUnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUeXBlcyA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoZ2FybWVudElkOiBudW1iZXIsIGludDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZENvbXByZXNzZWRJbWFnZShnYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudHNbaW50XS5pbWFnZSA9IHJlcztcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGRvd25sb2FkSW1hZ2U6JyArIG1zZyk7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICB9XHJcblxyXG4gICB0b0dhcm1lbnREZXRhaWwoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgICBpZiAodGhpcy5zd2FwUmVxdWVzdCkge1xyXG4gICAgICAgdGhpcy5zd2FwUmVxdWVzdCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3dhcFJlcXVlc3QoKTtcclxuICAgICAgIHRoaXMuc3dhcFJlcXVlc3QuZ2FybWVudEluUmV0dXJuSWQgPSBnYXJtZW50SWQ7XHJcbiAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldFN3YXBSZXF1ZXN0KHRoaXMuc3dhcFJlcXVlc3QpO1xyXG4gICAgIH1cclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50LycsIGdhcm1lbnRJZF0pXHJcbiAgIH1cclxuXHJcbn1cclxuIl19
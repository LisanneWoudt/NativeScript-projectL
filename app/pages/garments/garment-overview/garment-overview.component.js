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
            console.log('Error in getAllGarments(2):' + errorResponse.toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUF5QkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXhCMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQWEsSUFBSSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFhLElBQUksS0FBSyxDQUFDO1FBQ2pDLGFBQVEsR0FBYSxJQUFJLEtBQUssQ0FBQztRQUMvQixrQkFBYSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsbUJBQWMsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNDLGtCQUFhLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQU14QyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUkxQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUlKLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBR2dCLENBQUM7SUFFL0QsMkNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaURBQWMsR0FBZDtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FB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LEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQXRIb0I7UUFBckIsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7aUVBQXFCO0lBQ3RCO1FBQW5CLFlBQUssQ0FBQyxXQUFXLENBQUM7O21FQUEyQjtJQXZCbkMsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBMkJvQyxnQ0FBYyxFQUF3Qiw0QkFBWTtZQUNwRSxlQUFNLEVBQXVCLDBCQUFXO09BMUIvQyx3QkFBd0IsQ0E4SXBDO0lBQUQsK0JBQUM7Q0FBQSxBQTlJRCxJQThJQztBQTlJWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0J1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1vdmVydmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuICBwcm9taXNlczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTtcclxuICBhbGxTaXplczogc3RyaW5nW10gPSBuZXcgQXJyYXk7XHJcbiAgYWxsTGVuZ3RoczogbnVtYmVyW10gPSBuZXcgQXJyYXk7XHJcbiAgYWxsVHlwZXM6IHN0cmluZ1tdID0gbmV3IEFycmF5O1xyXG4gIHNlbGVjdGVkU2l6ZXM6IHN0cmluZ1tdID0gdGhpcy5hbGxTaXplcztcclxuICBzZWxlY3RlZExlbmd0aDogbnVtYmVyW10gPSB0aGlzLmFsbExlbmd0aHM7XHJcbiAgc2VsZWN0ZWRUeXBlczogc3RyaW5nW10gPSB0aGlzLmFsbFR5cGVzO1xyXG4gIGxhc3RTZWxlY3RlZExlbmd0aDogc3RyaW5nO1xyXG4gIGxhc3RTZWxlY3RlZFNpemU6IHN0cmluZztcclxuICBsYXN0U2VsZWN0ZWRUeXBlOiBzdHJpbmc7XHJcblxyXG4gIGltYWdlU3JjOiBhbnk7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDEyMDtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIHByb2Nlc3Npbmc6IGJvb2xlYW47XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgZ2FybWVudEZpbHRlcjogYW55ID0ge307XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0O1xyXG5cclxuICBASW5wdXQoJ2dhcm1lbnRzVXJsJykgZ2FybWVudHNVcmw6IHN0cmluZztcclxuICBASW5wdXQoJ2dhcm1lbnRJZCcpIHN3YXBHYXJtZW50SWQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy51c2VySWQgPSAxO1xyXG4gICB0aGlzLmdldEFsbEdhcm1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxHYXJtZW50cygpIHtcclxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmdldEFsbEdhcm1lbnRzKHRoaXMuZ2FybWVudHNVcmwsIHRoaXMudXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gK2ludDtcclxuICAgICAgICB0aGlzLnByb21pc2VzLnB1c2godGhpcy5nZXRJbWFnZSh0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdLmlkLCB0aGlzLmNvdW50KSk7XHJcbiAgICAgICAgdGhpcy5zZXRDYXRlZ29yaWVzKHRoaXMuZ2FybWVudHNbdGhpcy5jb3VudF0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBQcm9taXNlLmFsbCh0aGlzLnByb21pc2VzKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGdldEFsbEdhcm1lbnRzOicgKyBlcnJvcik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGdldEFsbEdhcm1lbnRzKDIpOicgKyBlcnJvclJlc3BvbnNlLnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2F0ZWdvcmllcyhnYXJtZW50OiBHYXJtZW50KXtcclxuICAgIGlmICghdGhpcy5hbGxTaXplcy5pbmNsdWRlcyhnYXJtZW50LnNpemUpKSB7XHJcbiAgICAgIHRoaXMuYWxsU2l6ZXMucHVzaChnYXJtZW50LnNpemUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmFsbFR5cGVzLmluY2x1ZGVzKGdhcm1lbnQuZ2FybWVudFR5cGUpKSB7XHJcbiAgICAgIHRoaXMuYWxsVHlwZXMucHVzaChnYXJtZW50Lmdhcm1lbnRUeXBlKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5hbGxMZW5ndGhzLmluY2x1ZGVzKGdhcm1lbnQubGVuZ3RoU2l6ZSkpIHtcclxuICAgICAgdGhpcy5hbGxMZW5ndGhzLnB1c2goZ2FybWVudC5sZW5ndGhTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzT25Vc2VyKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7dXNlcklkOiBbdXNlcklkXX07XHJcbiAgfVxyXG4gIGZpbHRlckdhcm1lbnRzT25TaXplKHNpemU6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhzaXplLCAnc2l6ZScsIHRoaXMuc2VsZWN0ZWRTaXplcywgdGhpcy5hbGxTaXplcywgdGhpcy5sYXN0U2VsZWN0ZWRTaXplKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPbkxlbmd0aChsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhsZW5ndGgsICdsZW5ndGgnLCB0aGlzLnNlbGVjdGVkTGVuZ3RoLCB0aGlzLmFsbExlbmd0aHMsIHRoaXMubGFzdFNlbGVjdGVkTGVuZ3RoKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPblR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlckdhcm1lbnRzKHR5cGUsICdnYXJtZW50VHlwZScsIHRoaXMuc2VsZWN0ZWRUeXBlcywgdGhpcy5hbGxUeXBlcywgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzKGZpbHRlcktleTogYW55LCBmaWx0ZXJPbjogc3RyaW5nLCBzZWxlY3RlZExpc3Q6IEFycmF5PGFueT4sXHJcbiAgICBhbGxMaXN0OiBBcnJheTxhbnk+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoID09IGFsbExpc3QubGVuZ3RoICYmICFsYXN0U2VsZWN0ZWQpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWRMaXN0LmluY2x1ZGVzKGZpbHRlcktleSkpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LmZpbHRlcihvYmogPT4gb2JqICE9PSBmaWx0ZXJLZXkpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gYWxsTGlzdDtcclxuICAgICAgICBsYXN0U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0LnB1c2goZmlsdGVyS2V5KTtcclxuICAgICAgbGFzdFNlbGVjdGVkID0gZmlsdGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlTGFzdFNlbGVjdGVkQ2F0ZWdvcnkoZmlsdGVyT24sIHNlbGVjdGVkTGlzdCwgbGFzdFNlbGVjdGVkKTtcclxuXHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7J3NpemUnOiB0aGlzLnNlbGVjdGVkU2l6ZXMsICdsZW5ndGhTaXplJzogdGhpcy5zZWxlY3RlZExlbmd0aCxcclxuICAgICAgJ2dhcm1lbnRUeXBlJzogdGhpcy5zZWxlY3RlZFR5cGVzfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGFzdFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZywgc2VsZWN0ZWRMaXN0OiBBcnJheTxhbnk+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG4gICAgaWYoY2F0ZWdvcnkgPT0gJ3NpemUnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaXplcyA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRTaXplID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgaWYoY2F0ZWdvcnkgPT0gJ2xlbmd0aCcpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZExlbmd0aCA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRMZW5ndGggPSBsYXN0U2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICBpZihjYXRlZ29yeSA9PSAnZ2FybWVudFR5cGUnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUeXBlcyA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoZ2FybWVudElkOiBudW1iZXIsIGludDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZENvbXByZXNzZWRJbWFnZShnYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2FybWVudHNbaW50XS5pbWFnZSA9IHJlcztcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSByZXM7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIGNvdWxkIG5vdCBiZSBsb2FkZWQ6JyArIG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgIH1cclxuXHJcbiAgIHRvR2FybWVudERldGFpbChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgIGlmICh0aGlzLnN3YXBSZXF1ZXN0KSB7XHJcbiAgICAgICB0aGlzLnN3YXBSZXF1ZXN0ID0gdGhpcy5kYXRhU2VydmljZS5nZXRTd2FwUmVxdWVzdCgpO1xyXG4gICAgICAgdGhpcy5zd2FwUmVxdWVzdC5nYXJtZW50SW5SZXR1cm5JZCA9IGdhcm1lbnRJZDtcclxuICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U3dhcFJlcXVlc3QodGhpcy5zd2FwUmVxdWVzdCk7XHJcbiAgICAgfVxyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQvJywgZ2FybWVudElkXSlcclxuICAgfVxyXG5cclxufVxyXG4iXX0=
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
        this.allSizes = ['XS', 'S', 'M', 'L', 'XL', '27', '28', '30'];
        this.allGenders = ['MAN', 'WOMAN'];
        this.allTypes = ['SHIRT', 'PANT'];
        this.selectedSizes = this.allSizes;
        this.selectedGender = this.allGenders;
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
        this.filterGarments(size, 'size', this.selectedSizes, this.allSizes, this.lastSelectedSize);
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnGender = function (gender) {
        gender = gender.toUpperCase();
        this.filterGarments(gender, 'gender', this.selectedGender, this.allGenders, this.lastSelectedGender);
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
        if (filterOn == 'size') {
            this.selectedSizes = selectedList;
            this.lastSelectedSize = lastSelected;
        }
        if (filterOn == 'gender') {
            this.selectedGender = selectedList;
            this.lastSelectedGender = lastSelected;
        }
        if (filterOn == 'garmentType') {
            this.selectedTypes = selectedList;
            this.lastSelectedType = lastSelected;
        }
        this.garmentFilter = { 'size': this.selectedSizes, 'gender': this.selectedGender,
            'garmentType': this.selectedTypes };
    };
    GarmentOverviewComponent.prototype.filterGarmentsOnUser = function (userId) {
        this.garmentFilter = { userId: [userId] };
    };
    GarmentOverviewComponent.prototype.search = function (garmentId, int) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUEwQkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXpCMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsZUFBVSxHQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLGFBQVEsR0FBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxrQkFBYSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsbUJBQWMsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNDLGtCQUFhLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQU14QyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUkxQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUtKLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBR2dCLENBQUM7SUFFL0QsMkNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxjQUFj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bUM7U0FDbkQsQ0FBQzt5Q0E0Qm9DLGdDQUFjLEVBQXdCLDRCQUFZO1lBQ3BFLGVBQU0sRUFBdUIsMEJBQVc7T0EzQi9DLHdCQUF3QixDQWtJcEM7SUFBRCwrQkFBQztDQUFBLEFBbElELElBa0lDO0FBbElZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQgeyBTd2FwUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2R0by9zd2FwLXJlcXVlc3QnXHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1nYXJtZW50LW92ZXJ2aWV3XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50T3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBnYXJtZW50czogR2FybWVudFtdID0gbmV3IEFycmF5O1xyXG4gIHByb21pc2VzOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5O1xyXG4gIGFsbFNpemVzOiBTdHJpbmdbXSA9IFsnWFMnLCAnUycsICdNJywgJ0wnLCAnWEwnLCAnMjcnLCAnMjgnLCAnMzAnXTtcclxuICBhbGxHZW5kZXJzOiBTdHJpbmdbXSA9IFsnTUFOJywgJ1dPTUFOJ107XHJcbiAgYWxsVHlwZXM6IFN0cmluZ1tdID0gWydTSElSVCcsICdQQU5UJ107XHJcbiAgc2VsZWN0ZWRTaXplczogU3RyaW5nW10gPSB0aGlzLmFsbFNpemVzO1xyXG4gIHNlbGVjdGVkR2VuZGVyOiBTdHJpbmdbXSA9IHRoaXMuYWxsR2VuZGVycztcclxuICBzZWxlY3RlZFR5cGVzOiBTdHJpbmdbXSA9IHRoaXMuYWxsVHlwZXM7XHJcbiAgbGFzdFNlbGVjdGVkR2VuZGVyOiBzdHJpbmc7XHJcbiAgbGFzdFNlbGVjdGVkU2l6ZTogc3RyaW5nO1xyXG4gIGxhc3RTZWxlY3RlZFR5cGU6IHN0cmluZztcclxuXHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJvY2Vzc2luZzogYm9vbGVhbjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBnYXJtZW50RmlsdGVyOiBhbnkgPSB7fTtcclxuICBzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3Q7XHJcblxyXG5cclxuICBASW5wdXQoJ2dhcm1lbnRzVXJsJykgZ2FybWVudHNVcmw6IHN0cmluZztcclxuICBASW5wdXQoJ2dhcm1lbnRJZCcpIHN3YXBHYXJtZW50SWQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy51c2VySWQgPSAxO1xyXG4gICB0aGlzLmdldEFsbEdhcm1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxHYXJtZW50cygpIHtcclxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmdldEFsbEdhcm1lbnRzKHRoaXMuZ2FybWVudHNVcmwsIHRoaXMudXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmdhcm1lbnRzID0gZGF0YTtcclxuXHJcbiAgICAgIGZvciAobGV0IGludCBpbiB0aGlzLmdhcm1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9ICtpbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlcy5wdXNoKHRoaXMuc2VhcmNoKHRoaXMuZ2FybWVudHNbdGhpcy5jb3VudF0uaWQsIHRoaXMuY291bnQpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgUHJvbWlzZS5hbGwodGhpcy5wcm9taXNlcylcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBnZXRBbGxHYXJtZW50czonICsgZXJyb3IpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICB9KVxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBnZXRBbGxHYXJtZW50cygyKTonICsgZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJHYXJtZW50c09uU2l6ZShzaXplOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmlsdGVyR2FybWVudHMoc2l6ZSwgJ3NpemUnLCB0aGlzLnNlbGVjdGVkU2l6ZXMsIHRoaXMuYWxsU2l6ZXMsIHRoaXMubGFzdFNlbGVjdGVkU2l6ZSk7XHJcbiAgfVxyXG4gIGZpbHRlckdhcm1lbnRzT25HZW5kZXIoZ2VuZGVyOiBzdHJpbmcpIHtcclxuICAgIGdlbmRlciA9IGdlbmRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhnZW5kZXIsICdnZW5kZXInLCB0aGlzLnNlbGVjdGVkR2VuZGVyLCB0aGlzLmFsbEdlbmRlcnMsIHRoaXMubGFzdFNlbGVjdGVkR2VuZGVyKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPblR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlckdhcm1lbnRzKHR5cGUsICdnYXJtZW50VHlwZScsIHRoaXMuc2VsZWN0ZWRUeXBlcywgdGhpcy5hbGxUeXBlcywgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzKGZpbHRlcktleTogc3RyaW5nLCBmaWx0ZXJPbjogc3RyaW5nLCBzZWxlY3RlZExpc3Q6IEFycmF5PFN0cmluZz4sXHJcbiAgICBhbGxMaXN0OiBBcnJheTxTdHJpbmc+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoID09IGFsbExpc3QubGVuZ3RoICYmICFsYXN0U2VsZWN0ZWQpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWRMaXN0LmluY2x1ZGVzKGZpbHRlcktleSkpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LmZpbHRlcihvYmogPT4gb2JqICE9PSBmaWx0ZXJLZXkpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gYWxsTGlzdDtcclxuICAgICAgICBsYXN0U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0LnB1c2goZmlsdGVyS2V5KTtcclxuICAgICAgbGFzdFNlbGVjdGVkID0gZmlsdGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGZpbHRlck9uID09ICdzaXplJykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU2l6ZXMgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIHRoaXMubGFzdFNlbGVjdGVkU2l6ZSA9IGxhc3RTZWxlY3RlZDtcclxuICAgIH1cclxuICAgIGlmKGZpbHRlck9uID09ICdnZW5kZXInKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRHZW5kZXIgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIHRoaXMubGFzdFNlbGVjdGVkR2VuZGVyID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgaWYoZmlsdGVyT24gPT0gJ2dhcm1lbnRUeXBlJykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVHlwZXMgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIHRoaXMubGFzdFNlbGVjdGVkVHlwZSA9IGxhc3RTZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7J3NpemUnOiB0aGlzLnNlbGVjdGVkU2l6ZXMsICdnZW5kZXInOiB0aGlzLnNlbGVjdGVkR2VuZGVyLFxyXG4gICAgICAnZ2FybWVudFR5cGUnOiB0aGlzLnNlbGVjdGVkVHlwZXN9XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJHYXJtZW50c09uVXNlcih1c2VySWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5nYXJtZW50RmlsdGVyID0ge3VzZXJJZDogW3VzZXJJZF19O1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGdhcm1lbnRJZDogbnVtYmVyLCBpbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRDb21wcmVzc2VkSW1hZ2UoZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBkb3dubG9hZEltYWdlOicgKyBtc2cpO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgfVxyXG5cclxuICAgdG9HYXJtZW50RGV0YWlsKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICAgaWYgKHRoaXMuc3dhcFJlcXVlc3QpIHtcclxuICAgICAgIHRoaXMuc3dhcFJlcXVlc3QgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCk7XHJcbiAgICAgICB0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJblJldHVybklkID0gZ2FybWVudElkO1xyXG4gICAgICAgdGhpcy5kYXRhU2VydmljZS5zZXRTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudC8nLCBnYXJtZW50SWRdKVxyXG4gICB9XHJcblxyXG59XHJcbiJdfQ==
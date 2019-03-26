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
        //PreviewSize magically makes spinner on item stop when loaded
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUEyQkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTFCMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsZUFBVSxHQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLGFBQVEsR0FBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxrQkFBYSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsbUJBQWMsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNDLGtCQUFhLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQU14Qyw4REFBOEQ7UUFDOUQsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFJMUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFLSixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQUdnQixDQUFDO0lBRS9ELDJDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJ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QUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBNkJvQyxnQ0FBYyxFQUF3Qiw0QkFBWTtZQUNwRSxlQUFNLEVBQXVCLDBCQUFXO09BNUIvQyx3QkFBd0IsQ0FtSXBDO0lBQUQsK0JBQUM7Q0FBQSxBQW5JRCxJQW1JQztBQW5JWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgU3dhcFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9kdG8vc3dhcC1yZXF1ZXN0J1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1vdmVydmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuICBwcm9taXNlczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTtcclxuICBhbGxTaXplczogU3RyaW5nW10gPSBbJ1hTJywgJ1MnLCAnTScsICdMJywgJ1hMJywgJzI3JywgJzI4JywgJzMwJ107XHJcbiAgYWxsR2VuZGVyczogU3RyaW5nW10gPSBbJ01BTicsICdXT01BTiddO1xyXG4gIGFsbFR5cGVzOiBTdHJpbmdbXSA9IFsnU0hJUlQnLCAnUEFOVCddO1xyXG4gIHNlbGVjdGVkU2l6ZXM6IFN0cmluZ1tdID0gdGhpcy5hbGxTaXplcztcclxuICBzZWxlY3RlZEdlbmRlcjogU3RyaW5nW10gPSB0aGlzLmFsbEdlbmRlcnM7XHJcbiAgc2VsZWN0ZWRUeXBlczogU3RyaW5nW10gPSB0aGlzLmFsbFR5cGVzO1xyXG4gIGxhc3RTZWxlY3RlZEdlbmRlcjogc3RyaW5nO1xyXG4gIGxhc3RTZWxlY3RlZFNpemU6IHN0cmluZztcclxuICBsYXN0U2VsZWN0ZWRUeXBlOiBzdHJpbmc7XHJcblxyXG4gIGltYWdlU3JjOiBhbnk7XHJcbiAgLy9QcmV2aWV3U2l6ZSBtYWdpY2FsbHkgbWFrZXMgc3Bpbm5lciBvbiBpdGVtIHN0b3Agd2hlbiBsb2FkZWRcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJvY2Vzc2luZzogYm9vbGVhbjtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBnYXJtZW50RmlsdGVyOiBhbnkgPSB7fTtcclxuICBzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3Q7XHJcblxyXG5cclxuICBASW5wdXQoJ2dhcm1lbnRzVXJsJykgZ2FybWVudHNVcmw6IHN0cmluZztcclxuICBASW5wdXQoJ2dhcm1lbnRJZCcpIHN3YXBHYXJtZW50SWQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy51c2VySWQgPSAxO1xyXG4gICB0aGlzLmdldEFsbEdhcm1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxHYXJtZW50cygpIHtcclxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmdldEFsbEdhcm1lbnRzKHRoaXMuZ2FybWVudHNVcmwsIHRoaXMudXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmdhcm1lbnRzID0gZGF0YTtcclxuXHJcbiAgICAgIGZvciAobGV0IGludCBpbiB0aGlzLmdhcm1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9ICtpbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlcy5wdXNoKHRoaXMuc2VhcmNoKHRoaXMuZ2FybWVudHNbdGhpcy5jb3VudF0uaWQsIHRoaXMuY291bnQpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgUHJvbWlzZS5hbGwodGhpcy5wcm9taXNlcylcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBnZXRBbGxHYXJtZW50czonICsgZXJyb3IpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgICB9KVxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBnZXRBbGxHYXJtZW50cygyKTonICsgZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJHYXJtZW50c09uU2l6ZShzaXplOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmlsdGVyR2FybWVudHMoc2l6ZSwgJ3NpemUnLCB0aGlzLnNlbGVjdGVkU2l6ZXMsIHRoaXMuYWxsU2l6ZXMsIHRoaXMubGFzdFNlbGVjdGVkU2l6ZSk7XHJcbiAgfVxyXG4gIGZpbHRlckdhcm1lbnRzT25HZW5kZXIoZ2VuZGVyOiBzdHJpbmcpIHtcclxuICAgIGdlbmRlciA9IGdlbmRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyhnZW5kZXIsICdnZW5kZXInLCB0aGlzLnNlbGVjdGVkR2VuZGVyLCB0aGlzLmFsbEdlbmRlcnMsIHRoaXMubGFzdFNlbGVjdGVkR2VuZGVyKTtcclxuICB9XHJcbiAgZmlsdGVyR2FybWVudHNPblR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlckdhcm1lbnRzKHR5cGUsICdnYXJtZW50VHlwZScsIHRoaXMuc2VsZWN0ZWRUeXBlcywgdGhpcy5hbGxUeXBlcywgdGhpcy5sYXN0U2VsZWN0ZWRUeXBlKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzKGZpbHRlcktleTogc3RyaW5nLCBmaWx0ZXJPbjogc3RyaW5nLCBzZWxlY3RlZExpc3Q6IEFycmF5PFN0cmluZz4sXHJcbiAgICBhbGxMaXN0OiBBcnJheTxTdHJpbmc+LCBsYXN0U2VsZWN0ZWQ6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoID09IGFsbExpc3QubGVuZ3RoICYmICFsYXN0U2VsZWN0ZWQpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWRMaXN0LmluY2x1ZGVzKGZpbHRlcktleSkpIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LmZpbHRlcihvYmogPT4gb2JqICE9PSBmaWx0ZXJLZXkpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gYWxsTGlzdDtcclxuICAgICAgICBsYXN0U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2VsZWN0ZWRMaXN0LnB1c2goZmlsdGVyS2V5KTtcclxuICAgICAgbGFzdFNlbGVjdGVkID0gZmlsdGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGZpbHRlck9uID09ICdzaXplJykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU2l6ZXMgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIHRoaXMubGFzdFNlbGVjdGVkU2l6ZSA9IGxhc3RTZWxlY3RlZDtcclxuICAgIH1cclxuICAgIGlmKGZpbHRlck9uID09ICdnZW5kZXInKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRHZW5kZXIgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIHRoaXMubGFzdFNlbGVjdGVkR2VuZGVyID0gbGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgaWYoZmlsdGVyT24gPT0gJ2dhcm1lbnRUeXBlJykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVHlwZXMgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIHRoaXMubGFzdFNlbGVjdGVkVHlwZSA9IGxhc3RTZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7J3NpemUnOiB0aGlzLnNlbGVjdGVkU2l6ZXMsICdnZW5kZXInOiB0aGlzLnNlbGVjdGVkR2VuZGVyLFxyXG4gICAgICAnZ2FybWVudFR5cGUnOiB0aGlzLnNlbGVjdGVkVHlwZXN9XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJHYXJtZW50c09uVXNlcih1c2VySWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5nYXJtZW50RmlsdGVyID0ge3VzZXJJZDogW3VzZXJJZF19O1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGdhcm1lbnRJZDogbnVtYmVyLCBpbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbWFnZVNlcnZpY2UuZG93bmxvYWRDb21wcmVzc2VkSW1hZ2UoZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBkb3dubG9hZEltYWdlOicgKyBtc2cpO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgfVxyXG5cclxuICAgdG9HYXJtZW50RGV0YWlsKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICAgaWYgKHRoaXMuc3dhcFJlcXVlc3QpIHtcclxuICAgICAgIHRoaXMuc3dhcFJlcXVlc3QgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCk7XHJcbiAgICAgICB0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJblJldHVybklkID0gZ2FybWVudElkO1xyXG4gICAgICAgdGhpcy5kYXRhU2VydmljZS5zZXRTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudC8nLCBnYXJtZW50SWRdKVxyXG4gICB9XHJcblxyXG59XHJcbiJdfQ==
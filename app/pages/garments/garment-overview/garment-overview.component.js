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
        this.allSizes = ['XS', 'S', 'M', 'L', 'XL'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUEyQkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTFCMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsZUFBVSxHQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLGFBQVEsR0FBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxrQkFBYSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsbUJBQWMsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNDLGtCQUFhLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQU14Qyw4REFBOEQ7UUFDOUQsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFJMUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFLSixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQUdnQixDQUFDO0lBRS9ELDJDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIs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b0MsZ0NBQWMsRUFBd0IsNEJBQVk7WUFDcEUsZUFBTSxFQUF1QiwwQkFBVztPQTVCL0Msd0JBQXdCLENBbUlwQztJQUFELCtCQUFDO0NBQUEsQUFuSUQsSUFtSUM7QUFuSVksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCdcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWdhcm1lbnQtb3ZlcnZpZXdcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGdhcm1lbnRzOiBHYXJtZW50W10gPSBuZXcgQXJyYXk7XHJcbiAgcHJvbWlzZXM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk7XHJcbiAgYWxsU2l6ZXM6IFN0cmluZ1tdID0gWydYUycsICdTJywgJ00nLCAnTCcsICdYTCddO1xyXG4gIGFsbEdlbmRlcnM6IFN0cmluZ1tdID0gWydNQU4nLCAnV09NQU4nXTtcclxuICBhbGxUeXBlczogU3RyaW5nW10gPSBbJ1NISVJUJywgJ1BBTlQnXTtcclxuICBzZWxlY3RlZFNpemVzOiBTdHJpbmdbXSA9IHRoaXMuYWxsU2l6ZXM7XHJcbiAgc2VsZWN0ZWRHZW5kZXI6IFN0cmluZ1tdID0gdGhpcy5hbGxHZW5kZXJzO1xyXG4gIHNlbGVjdGVkVHlwZXM6IFN0cmluZ1tdID0gdGhpcy5hbGxUeXBlcztcclxuICBsYXN0U2VsZWN0ZWRHZW5kZXI6IHN0cmluZztcclxuICBsYXN0U2VsZWN0ZWRTaXplOiBzdHJpbmc7XHJcbiAgbGFzdFNlbGVjdGVkVHlwZTogc3RyaW5nO1xyXG5cclxuICBpbWFnZVNyYzogYW55O1xyXG4gIC8vUHJldmlld1NpemUgbWFnaWNhbGx5IG1ha2VzIHNwaW5uZXIgb24gaXRlbSBzdG9wIHdoZW4gbG9hZGVkXHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDEyMDtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIHByb2Nlc3Npbmc6IGJvb2xlYW47XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgZ2FybWVudEZpbHRlcjogYW55ID0ge307XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0O1xyXG5cclxuXHJcbiAgQElucHV0KCdnYXJtZW50c1VybCcpIGdhcm1lbnRzVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdnYXJtZW50SWQnKSBzd2FwR2FybWVudElkOiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMudXNlcklkID0gMTtcclxuICAgdGhpcy5nZXRBbGxHYXJtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsR2FybWVudHMoKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cyh0aGlzLmdhcm1lbnRzVXJsLCB0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5nYXJtZW50cyA9IGRhdGE7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbnQgaW4gdGhpcy5nYXJtZW50cykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAraW50O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZXMucHVzaCh0aGlzLnNlYXJjaCh0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdLmlkLCB0aGlzLmNvdW50KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFByb21pc2UuYWxsKHRoaXMucHJvbWlzZXMpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHM6JyArIGVycm9yKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSlcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHMoMik6JyArIGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyR2FybWVudHNPblNpemUoc2l6ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlckdhcm1lbnRzKHNpemUsICdzaXplJywgdGhpcy5zZWxlY3RlZFNpemVzLCB0aGlzLmFsbFNpemVzLCB0aGlzLmxhc3RTZWxlY3RlZFNpemUpO1xyXG4gIH1cclxuICBmaWx0ZXJHYXJtZW50c09uR2VuZGVyKGdlbmRlcjogc3RyaW5nKSB7XHJcbiAgICBnZW5kZXIgPSBnZW5kZXIudG9VcHBlckNhc2UoKTtcclxuICAgIHRoaXMuZmlsdGVyR2FybWVudHMoZ2VuZGVyLCAnZ2VuZGVyJywgdGhpcy5zZWxlY3RlZEdlbmRlciwgdGhpcy5hbGxHZW5kZXJzLCB0aGlzLmxhc3RTZWxlY3RlZEdlbmRlcik7XHJcbiAgfVxyXG4gIGZpbHRlckdhcm1lbnRzT25UeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXJHYXJtZW50cyh0eXBlLCAnZ2FybWVudFR5cGUnLCB0aGlzLnNlbGVjdGVkVHlwZXMsIHRoaXMuYWxsVHlwZXMsIHRoaXMubGFzdFNlbGVjdGVkVHlwZSk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJHYXJtZW50cyhmaWx0ZXJLZXk6IHN0cmluZywgZmlsdGVyT246IHN0cmluZywgc2VsZWN0ZWRMaXN0OiBBcnJheTxTdHJpbmc+LFxyXG4gICAgYWxsTGlzdDogQXJyYXk8U3RyaW5nPiwgbGFzdFNlbGVjdGVkOiBzdHJpbmcpIHtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCA9PSBhbGxMaXN0Lmxlbmd0aCAmJiAhbGFzdFNlbGVjdGVkKSB7XHJcbiAgICAgIHNlbGVjdGVkTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkTGlzdC5pbmNsdWRlcyhmaWx0ZXJLZXkpKSB7XHJcbiAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5maWx0ZXIob2JqID0+IG9iaiAhPT0gZmlsdGVyS2V5KTtcclxuICAgICAgaWYgKHNlbGVjdGVkTGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IGFsbExpc3Q7XHJcbiAgICAgICAgbGFzdFNlbGVjdGVkID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNlbGVjdGVkTGlzdC5wdXNoKGZpbHRlcktleSk7XHJcbiAgICAgIGxhc3RTZWxlY3RlZCA9IGZpbHRlcktleTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmaWx0ZXJPbiA9PSAnc2l6ZScpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFNpemVzID0gc2VsZWN0ZWRMaXN0O1xyXG4gICAgICB0aGlzLmxhc3RTZWxlY3RlZFNpemUgPSBsYXN0U2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICBpZihmaWx0ZXJPbiA9PSAnZ2VuZGVyJykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkR2VuZGVyID0gc2VsZWN0ZWRMaXN0O1xyXG4gICAgICB0aGlzLmxhc3RTZWxlY3RlZEdlbmRlciA9IGxhc3RTZWxlY3RlZDtcclxuICAgIH1cclxuICAgIGlmKGZpbHRlck9uID09ICdnYXJtZW50VHlwZScpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFR5cGVzID0gc2VsZWN0ZWRMaXN0O1xyXG4gICAgICB0aGlzLmxhc3RTZWxlY3RlZFR5cGUgPSBsYXN0U2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nYXJtZW50RmlsdGVyID0geydzaXplJzogdGhpcy5zZWxlY3RlZFNpemVzLCAnZ2VuZGVyJzogdGhpcy5zZWxlY3RlZEdlbmRlcixcclxuICAgICAgJ2dhcm1lbnRUeXBlJzogdGhpcy5zZWxlY3RlZFR5cGVzfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyR2FybWVudHNPblVzZXIodXNlcklkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZ2FybWVudEZpbHRlciA9IHt1c2VySWQ6IFt1c2VySWRdfTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChnYXJtZW50SWQ6IG51bWJlciwgaW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBkb3dubG9hZEltYWdlOicgKyBtc2cpO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgfVxyXG5cclxuICAgdG9HYXJtZW50RGV0YWlsKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICAgaWYgKHRoaXMuc3dhcFJlcXVlc3QpIHtcclxuICAgICAgIHRoaXMuc3dhcFJlcXVlc3QgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCk7XHJcbiAgICAgICB0aGlzLnN3YXBSZXF1ZXN0Lmdhcm1lbnRJblJldHVybklkID0gZ2FybWVudElkO1xyXG4gICAgICAgdGhpcy5kYXRhU2VydmljZS5zZXRTd2FwUmVxdWVzdCh0aGlzLnN3YXBSZXF1ZXN0KTtcclxuICAgICB9XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudC8nLCBnYXJtZW50SWRdKVxyXG4gICB9XHJcblxyXG59XHJcbiJdfQ==
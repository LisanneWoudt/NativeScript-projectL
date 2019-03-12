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
        this.selectedGender = new Array;
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
    GarmentOverviewComponent.prototype.filterGarmentsOnGender = function (gender) {
        gender = gender.toUpperCase();
        if (!gender || this.selectedGender.includes(gender)) {
            this.selectedGender = this.selectedGender.filter(function (obj) { return obj !== gender; });
            if (this.selectedGender.length == 0) {
                this.garmentFilter = {};
            }
            else {
                this.garmentFilter = { gender: this.selectedGender };
            }
        }
        else {
            this.selectedGender.push(gender);
            this.garmentFilter = { gender: this.selectedGender };
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUdoRiw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLHNFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUFvQkUsa0NBQW9CLGNBQThCLEVBQVUsWUFBMEIsRUFDNUUsTUFBYyxFQUFVLFdBQXdCO1FBRHRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQW5CMUQsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUNqQyxrQkFBYSxHQUFhLElBQUksS0FBSyxDQUFDO1FBQ3BDLG1CQUFjLEdBQWEsSUFBSSxLQUFLLENBQUM7UUFHckMsd0VBQXdFO1FBQ3hFLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFJMUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFJSixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQUdnQixDQUFDO0lBRS9ELDJDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlEQUFjLEdBQWQ7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM5RSxPQUFPLENBQUMsR0FB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Q0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUExRm9CO1FBQXJCLFlBQUssQ0FBQyxhQUFhLENBQUM7O2lFQUFxQjtJQUN0QjtRQUFuQixZQUFLLENBQUMsV0FBVyxDQUFDOzttRUFBMkI7SUFsQm5DLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztTQUNuRCxDQUFDO3lDQXNCb0MsZ0NBQWMsRUFBd0IsNEJBQVk7WUFDcEUsZUFBTSxFQUF1QiwwQkFBVztPQXJCL0Msd0JBQXdCLENBNkdwQztJQUFELCtCQUFDO0NBQUEsQUE3R0QsSUE2R0M7QUE3R1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCdcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWdhcm1lbnQtb3ZlcnZpZXdcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGdhcm1lbnRzOiBHYXJtZW50W10gPSBuZXcgQXJyYXk7XHJcbiAgcHJvbWlzZXM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk7XHJcbiAgc2VsZWN0ZWRTaXplczogU3RyaW5nW10gPSBuZXcgQXJyYXk7XHJcbiAgc2VsZWN0ZWRHZW5kZXI6IFN0cmluZ1tdID0gbmV3IEFycmF5O1xyXG5cclxuICBpbWFnZVNyYzogYW55O1xyXG4gIC8vVGh1bWJzaXplL3ByZXZpZXdTaXplIG1hZ2ljYWxseSBtYWtlcyBzcGlubmVyIG9uIGl0ZW0gc3RvcCB3aGVuIGxvYWRlZFxyXG4gIHRodW1iU2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMjA7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBwcm9jZXNzaW5nOiBib29sZWFuO1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIGdhcm1lbnRGaWx0ZXI6IGFueSA9IHt9O1xyXG4gIHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdDtcclxuXHJcbiAgQElucHV0KCdnYXJtZW50c1VybCcpIGdhcm1lbnRzVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdnYXJtZW50SWQnKSBzd2FwR2FybWVudElkOiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMudXNlcklkID0gMTtcclxuICAgdGhpcy5nZXRBbGxHYXJtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsR2FybWVudHMoKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cyh0aGlzLmdhcm1lbnRzVXJsLCB0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5nYXJtZW50cyA9IGRhdGE7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbnQgaW4gdGhpcy5nYXJtZW50cykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAraW50O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZXMucHVzaCh0aGlzLnNlYXJjaCh0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdLmlkLCB0aGlzLmNvdW50KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFByb21pc2UuYWxsKHRoaXMucHJvbWlzZXMpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHM6JyArIGVycm9yKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgICAgfSlcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZ2V0QWxsR2FybWVudHMoMik6JyArIGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyR2FybWVudHNPblNpemUoc2l6ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXNpemUgfHwgdGhpcy5zZWxlY3RlZFNpemVzLmluY2x1ZGVzKHNpemUpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaXplcyA9IHRoaXMuc2VsZWN0ZWRTaXplcy5maWx0ZXIob2JqID0+IG9iaiAhPT0gc2l6ZSk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2l6ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgIHRoaXMuZ2FybWVudEZpbHRlciA9IHtzaXplOiB0aGlzLnNlbGVjdGVkU2l6ZXN9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFNpemVzLnB1c2goc2l6ZSk7XHJcbiAgICAgIHRoaXMuZ2FybWVudEZpbHRlciA9IHtzaXplOiB0aGlzLnNlbGVjdGVkU2l6ZXN9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyR2FybWVudHNPbkdlbmRlcihnZW5kZXI6IHN0cmluZykge1xyXG4gICAgZ2VuZGVyID0gZ2VuZGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBpZiAoIWdlbmRlciB8fCB0aGlzLnNlbGVjdGVkR2VuZGVyLmluY2x1ZGVzKGdlbmRlcikpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEdlbmRlciA9IHRoaXMuc2VsZWN0ZWRHZW5kZXIuZmlsdGVyKG9iaiA9PiBvYmogIT09IGdlbmRlcik7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkR2VuZGVyLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50RmlsdGVyID0ge307XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7Z2VuZGVyOiB0aGlzLnNlbGVjdGVkR2VuZGVyfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRHZW5kZXIucHVzaChnZW5kZXIpO1xyXG4gICAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7Z2VuZGVyOiB0aGlzLnNlbGVjdGVkR2VuZGVyfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlckdhcm1lbnRzT25Vc2VyKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRGaWx0ZXIgPSB7dXNlcklkOiBbdXNlcklkXX07XHJcbiAgfVxyXG5cclxuICBzZWFyY2goZ2FybWVudElkOiBudW1iZXIsIGludDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmltYWdlU2VydmljZS5kb3dubG9hZEltYWdlKGdhcm1lbnRJZCkudGhlbihcclxuICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nYXJtZW50c1tpbnRdLmltYWdlID0gcmVzO1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVNyYyA9IHJlcztcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtc2cgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZG93bmxvYWRJbWFnZTonICsgbXNnKTtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgIH1cclxuXHJcbiAgIHRvR2FybWVudERldGFpbChnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgIHRoaXMuc3dhcFJlcXVlc3QgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFN3YXBSZXF1ZXN0KCk7XHJcbiAgICAgdGhpcy5zd2FwUmVxdWVzdC5nYXJtZW50SW5SZXR1cm5JZCA9IGdhcm1lbnRJZDtcclxuICAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldFN3YXBSZXF1ZXN0KHRoaXMuc3dhcFJlcXVlc3QpO1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dhcm1lbnQvJywgZ2FybWVudElkXSlcclxuICAgfVxyXG5cclxufVxyXG4iXX0=
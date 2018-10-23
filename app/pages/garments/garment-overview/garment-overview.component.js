"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var GarmentOverviewComponent = /** @class */ (function () {
    function GarmentOverviewComponent(garmentService, imageService) {
        this.garmentService = garmentService;
        this.imageService = imageService;
        this.garments = new Array;
        this.promises = new Array;
        this.thumbSize = 120;
        this.previewSize = 120;
    }
    GarmentOverviewComponent.prototype.ngOnInit = function () {
        this.getAllGarments();
    };
    GarmentOverviewComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.processing = true;
        this.garmentService.getAllGarments().subscribe(function (data) {
            console.log(data);
            _this.garments = data;
            for (var int in _this.garments) {
                _this.count = +int;
                _this.promises.push(_this.search(_this.garments[_this.count].id, _this.count));
            }
            Promise.all(_this.promises)
                .then(function (res) {
                console.log('All promises returned');
                //  this.processing = false;
            }, function (error) {
                console.log('Error');
            });
        }, function (errorResponse) {
            console.error(errorResponse);
            //  this.router.navigate(['/error']);
        });
    };
    GarmentOverviewComponent.prototype.search = function (garmentId, int) {
        var _this = this;
        console.log("searching with garmentID = " + garmentId);
        this.imageService.downloadImage(garmentId).then(function (res) {
            console.log('success');
            _this.garments[int].image = res;
            _this.imageSrc = res;
            return res;
        }, function (msg) {
            console.log("error!");
        });
    };
    GarmentOverviewComponent = __decorate([
        core_1.Component({
            selector: "app-garment-overview",
            moduleId: module.id,
            templateUrl: "./garment-overview.component.html",
            styleUrls: ["../../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, image_service_1.ImageService])
    ], GarmentOverviewComponent);
    return GarmentOverviewComponent;
}());
exports.GarmentOverviewComponent = GarmentOverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBU3BFO0lBV0Usa0NBQW9CLGNBQThCLEVBQVUsWUFBMEI7UUFBbEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFUdEYsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUdqQyxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO0lBSWdFLENBQUM7SUFFM0YsMkNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaURBQWMsR0FBZDtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUUsQ0FBQztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ3ZDLDRCQUE0QjtZQUM1QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixxQ0FBcUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsR0FBVztRQUFyQyxpQkFjRTtRQWJBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUMzQyxVQUFBLEdBQUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ1gsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUNGLENBQUE7SUFDSixDQUFDO0lBeERTLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQWFvQyxnQ0FBYyxFQUF3Qiw0QkFBWTtPQVgzRSx3QkFBd0IsQ0F5RHBDO0lBQUQsK0JBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1nYXJtZW50LW92ZXJ2aWV3XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4uLy4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuICBwcm9taXNlczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTtcclxuXHJcbiAgaW1hZ2VTcmM6IGFueTtcclxuICB0aHVtYlNpemU6IG51bWJlciA9IDEyMDtcclxuICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTIwO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJvY2Vzc2luZzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy5nZXRBbGxHYXJtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsR2FybWVudHMoKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cygpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gK2ludDtcclxuICAgICAgICB0aGlzLnByb21pc2VzLnB1c2godGhpcy5zZWFyY2godGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XS5pZCwgdGhpcy5jb3VudCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBQcm9taXNlLmFsbCh0aGlzLnByb21pc2VzKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgcHJvbWlzZXMgcmV0dXJuZWQnKTtcclxuICAgICAgLy8gIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XHJcbiAgICAvLyAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChnYXJtZW50SWQ6IG51bWJlciwgaW50OiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIHdpdGggZ2FybWVudElEID0gXCIgKyBnYXJtZW50SWQpO1xyXG5cclxuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNyYyA9IHJlcztcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgfVxyXG59XHJcbiJdfQ==
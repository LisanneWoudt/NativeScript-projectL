"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var router_1 = require("@angular/router");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(garmentService, router, imageService) {
        this.garmentService = garmentService;
        this.router = router;
        this.imageService = imageService;
        this.garments = new Array;
        this.promises = new Array;
        // Thumbsize/previewSize magically makes spinner on item stop when loaded
        this.thumbSize = 120;
        this.previewSize = 120;
    }
    AllGarmentsComponent.prototype.ngOnInit = function () {
        // this.getAllGarments();
    };
    AllGarmentsComponent.prototype.getAllGarments = function () {
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
    AllGarmentsComponent.prototype.search = function (garmentId, int) {
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
    AllGarmentsComponent.prototype.navigateToSendSwap = function (garmentId) {
        console.log('garmentId = ' + garmentId);
        this.router.navigate(['/swap-request', garmentId]);
    };
    AllGarmentsComponent = __decorate([
        core_1.Component({
            selector: "app-all-garments",
            moduleId: module.id,
            templateUrl: "./all-garments.component.html",
            styleUrls: ["../../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, router_1.Router,
            image_service_1.ImageService])
    ], AllGarmentsComponent);
    return AllGarmentsComponent;
}());
exports.AllGarmentsComponent = AllGarmentsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsNEVBQXdFO0FBQ3hFLHdFQUFvRTtBQUNwRSwwQ0FBdUM7QUFTdkM7SUFZRSw4QkFBb0IsY0FBOEIsRUFBVSxNQUFjLEVBQ2hFLFlBQTBCO1FBRGhCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFYckMsYUFBUSxHQUFjLElBQUksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBZSxJQUFJLEtBQUssQ0FBQztRQUdqQyx5RUFBeUU7UUFDekUsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUtlLENBQUM7SUFFekMsdUNBQVEsR0FBUjtRQUNBLHlCQUF5QjtJQUN6QixDQUFDO0lBRUQsNkNBQWMsR0FBZDtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUUsQ0FBQztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ3ZDLDRCQUE0QjtZQUM1QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixxQ0FBcUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsR0FBVztRQUFyQyxpQkFjRTtRQWJBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUMzQyxVQUFBLEdBQUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ1gsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUNGLENBQUE7SUFDSixDQUFDO0lBR0YsaURBQWtCLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQWhFVSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0Fjb0MsZ0NBQWMsRUFBa0IsZUFBTTtZQUNsRCw0QkFBWTtPQWJ6QixvQkFBb0IsQ0FrRWhDO0lBQUQsMkJBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtYWxsLWdhcm1lbnRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hbGwtZ2FybWVudHMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi4vLi4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGxHYXJtZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuIHByb21pc2VzOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5O1xyXG5cclxuIGltYWdlU3JjOiBhbnk7XHJcbiAvLyBUaHVtYnNpemUvcHJldmlld1NpemUgbWFnaWNhbGx5IG1ha2VzIHNwaW5uZXIgb24gaXRlbSBzdG9wIHdoZW4gbG9hZGVkXHJcbiB0aHVtYlNpemU6IG51bWJlciA9IDEyMDtcclxuIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMjA7XHJcbiBjb3VudDogbnVtYmVyO1xyXG4gcHJvY2Vzc2luZzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgLy8gdGhpcy5nZXRBbGxHYXJtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsR2FybWVudHMoKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cygpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gK2ludDtcclxuICAgICAgICB0aGlzLnByb21pc2VzLnB1c2godGhpcy5zZWFyY2godGhpcy5nYXJtZW50c1t0aGlzLmNvdW50XS5pZCwgdGhpcy5jb3VudCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBQcm9taXNlLmFsbCh0aGlzLnByb21pc2VzKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgcHJvbWlzZXMgcmV0dXJuZWQnKTtcclxuICAgICAgLy8gIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XHJcbiAgICAvLyAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChnYXJtZW50SWQ6IG51bWJlciwgaW50OiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIHdpdGggZ2FybWVudElEID0gXCIgKyBnYXJtZW50SWQpO1xyXG5cclxuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNyYyA9IHJlcztcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgfVxyXG5cclxuXHJcbiAgbmF2aWdhdGVUb1NlbmRTd2FwKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2FybWVudElkID0gJyArIGdhcm1lbnRJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3QnLCBnYXJtZW50SWRdKVxyXG4gIH1cclxuXHJcbn1cclxuIl19
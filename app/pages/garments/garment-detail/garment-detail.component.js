"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_service_1 = require("../../../shared/services/garment.service");
var image_service_1 = require("../../../shared/services/image.service");
var GarmentDetailComponent = /** @class */ (function () {
    function GarmentDetailComponent(router, route, garmentService, imageService) {
        this.router = router;
        this.route = route;
        this.garmentService = garmentService;
        this.imageService = imageService;
        //Thumbsize/previewSize magically makes spinner on item stop when loaded
        this.thumbSize = 200;
        this.previewSize = 200;
    }
    GarmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.garmentId = +params['garmentId']; // (+) converts string 'id' to a number
            _this.garmentSwapId = +params['garmentSwapId'];
            console.log('garmentId = ' + _this.garmentId + ' and garmentSwapId = ' + _this.garmentSwapId);
        });
        this.garmentService.getGarment(this.garmentId).subscribe(function (data) {
            console.log(data);
            _this.garment = data;
            _this.checkSize();
            _this.imageService.downloadImage(_this.garmentId).then(function (res) {
                console.log('success');
                _this.garment.image = res;
                _this.imageSrc = res;
                return res;
            }, function (msg) {
                console.log("error!");
            });
        });
    };
    GarmentDetailComponent.prototype.checkSize = function () {
        if (!this.garment.size) {
            if (this.garment.pantLength) {
                this.garment.size = this.garment.pantWaist + '-' + this.garment.pantLength;
            }
            else {
                this.garment.size = this.garment.pantWaist;
            }
        }
    };
    GarmentDetailComponent.prototype.toSwapRequest = function (garmentId) {
        this.router.navigate(['/swap-request/', garmentId]);
    };
    GarmentDetailComponent.prototype.toSwapReturnRequest = function (garmentId) {
        this.router.navigate(['/swap-return-request', this.garmentSwapId, garmentId]);
    };
    GarmentDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    GarmentDetailComponent = __decorate([
        core_1.Component({
            selector: "app-garment-detail",
            moduleId: module.id,
            templateUrl: "./garment-detail.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            garment_service_1.GarmentService, image_service_1.ImageService])
    ], GarmentDetailComponent);
    return GarmentDetailComponent;
}());
exports.GarmentDetailComponent = GarmentDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUF1RDtBQUN2RCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBUXBFO0lBWUUsZ0NBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUN2RCxjQUE4QixFQUFVLFlBQTBCO1FBRHhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN2RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUw1RSx3RUFBd0U7UUFDeEUsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUdzRCxDQUFDO0lBRWpGLHlDQUFRLEdBQVI7UUFBQSxpQkF5QkM7UUF2QkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDOUUsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLHVCQUF1QixHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWpCLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ2hELFVBQUEsR0FBRztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3ZCLENBQUMsQ0FDRixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBRUQsMENBQVMsR0FBVDtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQzdFLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUM3QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxvREFBbUIsR0FBbkIsVUFBb0IsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDL0UsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQS9EVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDakQsQ0FBQzt5Q0FjNEIsZUFBTSxFQUFpQix1QkFBYztZQUN2QyxnQ0FBYyxFQUF3Qiw0QkFBWTtPQWJqRSxzQkFBc0IsQ0FpRWxDO0lBQUQsNkJBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWdhcm1lbnQtZGV0YWlsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nYXJtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgZ2FybWVudDogR2FybWVudDtcclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuICBnYXJtZW50U3dhcElkOiBudW1iZXI7XHJcblxyXG4gIGltYWdlU3JjOiBhbnk7XHJcbiAgLy9UaHVtYnNpemUvcHJldmlld1NpemUgbWFnaWNhbGx5IG1ha2VzIHNwaW5uZXIgb24gaXRlbSBzdG9wIHdoZW4gbG9hZGVkXHJcbiAgdGh1bWJTaXplOiBudW1iZXIgPSAyMDA7XHJcbiAgcHJldmlld1NpemU6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB0aGlzLmdhcm1lbnRJZCA9ICtwYXJhbXNbJ2dhcm1lbnRJZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgIHRoaXMuZ2FybWVudFN3YXBJZCA9ICtwYXJhbXNbJ2dhcm1lbnRTd2FwSWQnXVxyXG4gICAgICAgY29uc29sZS5sb2coJ2dhcm1lbnRJZCA9ICcgKyB0aGlzLmdhcm1lbnRJZCArICcgYW5kIGdhcm1lbnRTd2FwSWQgPSAnICsgdGhpcy5nYXJtZW50U3dhcElkKTtcclxuICAgICB9KTtcclxuXHJcbiAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50KHRoaXMuZ2FybWVudElkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgIHRoaXMuZ2FybWVudCA9IGRhdGE7XHJcbiAgICAgICB0aGlzLmNoZWNrU2l6ZSgpO1xyXG5cclxuICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UodGhpcy5nYXJtZW50SWQpLnRoZW4oXHJcbiAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICB0aGlzLmdhcm1lbnQuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgICB0aGlzLmltYWdlU3JjID0gcmVzO1xyXG4gICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIG1zZyA9PiB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIVwiKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgKVxyXG4gICAgIH0pXHJcbiAgfVxyXG5cclxuICBjaGVja1NpemUoKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2FybWVudC5zaXplKSB7XHJcbiAgICAgIGlmKHRoaXMuZ2FybWVudC5wYW50TGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50LnNpemUgPSB0aGlzLmdhcm1lbnQucGFudFdhaXN0ICsgJy0nICsgdGhpcy5nYXJtZW50LnBhbnRMZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50LnNpemUgPSB0aGlzLmdhcm1lbnQucGFudFdhaXN0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b1N3YXBSZXF1ZXN0KGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3QvJywgZ2FybWVudElkXSk7XHJcbiAgfVxyXG5cclxuICB0b1N3YXBSZXR1cm5SZXF1ZXN0KGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJldHVybi1yZXF1ZXN0JywgdGhpcy5nYXJtZW50U3dhcElkLCBnYXJtZW50SWRdKVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
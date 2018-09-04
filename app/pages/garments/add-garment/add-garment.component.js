"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../../dto/garment");
var garment_service_1 = require("../../../shared/services/garment.service");
var router_1 = require("@angular/router");
var AddGarmentComponent = /** @class */ (function () {
    function AddGarmentComponent(garmentService, router) {
        this.garmentService = garmentService;
        this.router = router;
        this.garmentToAdd = new garment_1.Garment();
    }
    AddGarmentComponent.prototype.ngOnInit = function () {
    };
    AddGarmentComponent.prototype.addGarment = function (garment) {
        var _this = this;
        this.garmentToAdd = garment;
        this.garmentService.addGarment(this.garmentToAdd).subscribe(function (data) {
            console.log(data);
        }, function (errorResponse) {
            console.error(errorResponse);
            _this.router.navigate(['/error']);
        });
    };
    AddGarmentComponent = __decorate([
        core_1.Component({
            selector: "app-add-garment",
            moduleId: module.id,
            templateUrl: "./add-garment.component.html"
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService,
            router_1.Router])
    ], AddGarmentComponent);
    return AddGarmentComponent;
}());
exports.AddGarmentComponent = AddGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdEQUE2QztBQUM3Qyw0RUFBd0U7QUFDeEUsMENBQXVDO0FBUXZDO0lBSUUsNkJBQW9CLGNBQThCLEVBQ3hDLE1BQWM7UUFESixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUh6QixpQkFBWSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBR1QsQ0FBQztJQUU3QixzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUEzQixpQkFRQztRQVBDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFFLFVBQUEsYUFBYTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWxCVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FNb0MsZ0NBQWM7WUFDaEMsZUFBTTtPQUxiLG1CQUFtQixDQW1CL0I7SUFBRCwwQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1hZGQtZ2FybWVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWRkLWdhcm1lbnQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZEdhcm1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuIGdhcm1lbnRUb0FkZDogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgYWRkR2FybWVudChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICB0aGlzLmdhcm1lbnRUb0FkZCA9IGdhcm1lbnQ7XHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmFkZEdhcm1lbnQodGhpcy5nYXJtZW50VG9BZGQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
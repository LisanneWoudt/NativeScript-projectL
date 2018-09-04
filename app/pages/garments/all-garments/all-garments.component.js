"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var router_1 = require("@angular/router");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(garmentService, router) {
        this.garmentService = garmentService;
        this.router = router;
        this.garments = new Array;
    }
    AllGarmentsComponent.prototype.ngOnInit = function () {
        this.getAllGarments();
    };
    AllGarmentsComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.garmentService.getAllGarments().subscribe(function (data) {
            console.log(data);
            _this.garments = data;
        }, function (errorResponse) {
            console.error(errorResponse);
            _this.router.navigate(['/error']);
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
        __metadata("design:paramtypes", [garment_service_1.GarmentService, router_1.Router])
    ], AllGarmentsComponent);
    return AllGarmentsComponent;
}());
exports.AllGarmentsComponent = AllGarmentsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFakQsNEVBQXdFO0FBQ3pFLDBDQUF1QztBQVN2QztJQUlFLDhCQUFvQixjQUE4QixFQUFVLE1BQWM7UUFBdEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUYzRSxhQUFRLEdBQWMsSUFBSSxLQUFLLENBQUM7SUFFK0MsQ0FBQztJQUUvRSx1Q0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2Q0FBYyxHQUFkO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWtCLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQXZCVSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FNb0MsZ0NBQWMsRUFBa0IsZUFBTTtPQUovRCxvQkFBb0IsQ0F3QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuIGltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWFsbC1nYXJtZW50c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4uLy4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxsR2FybWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuIGdhcm1lbnRzOiBHYXJtZW50W10gPSBuZXcgQXJyYXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMuZ2V0QWxsR2FybWVudHMoKTtcclxuICB9XHJcblxyXG4gIGdldEFsbEdhcm1lbnRzKCkge1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cygpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB0aGlzLmdhcm1lbnRzID0gZGF0YTtcclxuICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb1NlbmRTd2FwKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2FybWVudElkID0gJyArIGdhcm1lbnRJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3QnLCBnYXJtZW50SWRdKVxyXG4gIH1cclxufVxyXG4iXX0=
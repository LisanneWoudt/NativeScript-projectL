"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(router) {
        this.router = router;
    }
    AllGarmentsComponent.prototype.ngOnInit = function () { };
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
        __metadata("design:paramtypes", [router_1.Router])
    ], AllGarmentsComponent);
    return AllGarmentsComponent;
}());
exports.AllGarmentsComponent = AllGarmentsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXVDO0FBU3ZDO0lBRUUsOEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2Qyx1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLGlEQUFrQixHQUFsQixVQUFtQixTQUFpQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFUVSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FJNEIsZUFBTTtPQUZ2QixvQkFBb0IsQ0FXaEM7SUFBRCwyQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWFsbC1nYXJtZW50c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4uLy4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxsR2FybWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuYXZpZ2F0ZVRvU2VuZFN3YXAoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnYXJtZW50SWQgPSAnICsgZ2FybWVudElkKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N3YXAtcmVxdWVzdCcsIGdhcm1lbnRJZF0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
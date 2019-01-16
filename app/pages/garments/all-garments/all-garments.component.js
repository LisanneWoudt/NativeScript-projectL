"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(router) {
        this.router = router;
        this.garmentsUrl = 'all/';
        this.sizes = ["XS", "S", "M", "L", "XL"];
        this.genders = ["Woman", "Man"];
    }
    AllGarmentsComponent.prototype.ngOnInit = function () { };
    AllGarmentsComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    AllGarmentsComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    AllGarmentsComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild('garmentOverview'),
        __metadata("design:type", Object)
    ], AllGarmentsComponent.prototype, "child", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AllGarmentsComponent.prototype, "drawerComponent", void 0);
    AllGarmentsComponent = __decorate([
        core_1.Component({
            selector: "app-all-garments",
            moduleId: module.id,
            templateUrl: "./all-garments.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AllGarmentsComponent);
    return AllGarmentsComponent;
}());
exports.AllGarmentsComponent = AllGarmentsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFFNUUsMENBQXVDO0FBQ3ZDLDhEQUE0RTtBQVM1RTtJQVVFLDhCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpsQyxnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRVcsQ0FBQztJQUV2Qyx1Q0FBUSxHQUFSLGNBQVcsQ0FBQztJQUVaLDhDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSwyQ0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBdEI2QjtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzt1REFBTztJQUNEO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjtpRUFBQztJQUh2RSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FZNEIsZUFBTTtPQVZ2QixvQkFBb0IsQ0EwQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1hbGwtZ2FybWVudHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FsbC1nYXJtZW50cy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxsR2FybWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdnYXJtZW50T3ZlcnZpZXcnKSBjaGlsZDtcclxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICBnYXJtZW50c1VybDogc3RyaW5nID0gJ2FsbC8nO1xyXG4gIHNpemVzID0gW1wiWFNcIiwgXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiXTtcclxuICBnZW5kZXJzID0gW1wiV29tYW5cIiwgXCJNYW5cIl07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpe31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
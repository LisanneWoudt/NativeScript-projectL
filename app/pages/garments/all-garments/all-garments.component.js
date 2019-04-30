"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(router) {
        this.router = router;
        this.garmentsUrl = 'all/';
    }
    AllGarmentsComponent.prototype.ngOnInit = function () { };
    AllGarmentsComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.sizes = this.child.allSizes;
        this.sizes.sort();
        this.types = this.child.allTypes;
        this.sizeLengths = this.child.allLengths;
    };
    AllGarmentsComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    AllGarmentsComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFFNUUsMENBQXVDO0FBQ3ZDLDhEQUE0RTtBQVM1RTtJQVdFLDhCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxsQyxnQkFBVyxHQUFXLE1BQU0sQ0FBQztJQUtTLENBQUM7SUFFdkMsdUNBQVEsR0FBUixjQUFXLENBQUM7SUFFWiw4Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzdDLENBQUM7SUFFTSwyQ0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBM0I2QjtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzt1REFBTztJQUNEO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjtpRUFBQztJQUh2RSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FhNEIsZUFBTTtPQVh2QixvQkFBb0IsQ0ErQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1hbGwtZ2FybWVudHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FsbC1nYXJtZW50cy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxsR2FybWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdnYXJtZW50T3ZlcnZpZXcnKSBjaGlsZDtcclxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICBnYXJtZW50c1VybDogc3RyaW5nID0gJ2FsbC8nO1xyXG4gIHNpemVzOiBzdHJpbmdbXTtcclxuICB0eXBlczogc3RyaW5nW107XHJcbiAgc2l6ZUxlbmd0aHM6IG51bWJlcltdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKXt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICB0aGlzLnNpemVzID0gdGhpcy5jaGlsZC5hbGxTaXplcztcclxuICAgICAgdGhpcy5zaXplcy5zb3J0KCk7XHJcbiAgICAgIHRoaXMudHlwZXMgPSB0aGlzLmNoaWxkLmFsbFR5cGVzO1xyXG4gICAgICB0aGlzLnNpemVMZW5ndGhzID0gdGhpcy5jaGlsZC5hbGxMZW5ndGhzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
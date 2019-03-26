"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(router) {
        this.router = router;
        this.garmentsUrl = 'all/';
        this.sizes = ['XS', 'S', 'M', 'L', 'XL', '27', '28', '30'];
        this.genders = ["Woman", "Man"];
        this.types = ["SHIRT", "PANT"];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFFNUUsMENBQXVDO0FBQ3ZDLDhEQUE0RTtBQVM1RTtJQVdFLDhCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxsQyxnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLFVBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVZLENBQUM7SUFFdkMsdUNBQVEsR0FBUixjQUFXLENBQUM7SUFFWiw4Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sMkNBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQXZCNkI7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzs7dURBQU87SUFDRDtRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7aUVBQUM7SUFIdkUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBYTRCLGVBQU07T0FYdkIsb0JBQW9CLENBMkJoQztJQUFELDJCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtYWxsLWdhcm1lbnRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hbGwtZ2FybWVudHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFsbEdhcm1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZ2FybWVudE92ZXJ2aWV3JykgY2hpbGQ7XHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgZ2FybWVudHNVcmw6IHN0cmluZyA9ICdhbGwvJztcclxuICBzaXplcyA9IFsnWFMnLCAnUycsICdNJywgJ0wnLCAnWEwnLCAnMjcnLCAnMjgnLCAnMzAnXTtcclxuICBnZW5kZXJzID0gW1wiV29tYW5cIiwgXCJNYW5cIl07XHJcbiAgdHlwZXMgPSBbXCJTSElSVFwiLCBcIlBBTlRcIl07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpe31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
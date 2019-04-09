"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var AddGarmentComponent = /** @class */ (function () {
    function AddGarmentComponent(router) {
        this.router = router;
    }
    AddGarmentComponent.prototype.responseSuccess = function () {
        var _this = this;
        dialogs.alert({
            title: "Garment added",
            message: "You have successfully added a garment to your collection!",
            okButtonText: "OK"
        }).then(function () {
            _this.router.navigate(['/home/']);
        });
    };
    AddGarmentComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
    };
    AddGarmentComponent = __decorate([
        core_1.Component({
            selector: "app-add-garment",
            moduleId: module.id,
            templateUrl: "./add-garment.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AddGarmentComponent);
    return AddGarmentComponent;
}());
exports.AddGarmentComponent = AddGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxxREFBdUQ7QUFRdkQ7SUFFRSw2QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFBQSxpQkFRQztRQVBDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUsZUFBZTtZQUN0QixPQUFPLEVBQUUsMkRBQTJEO1lBQ3BFLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBakJVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUk0QixlQUFNO09BRnZCLG1CQUFtQixDQW1CL0I7SUFBRCwwQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWFkZC1nYXJtZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGQtZ2FybWVudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkR2FybWVudENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcblxyXG4gIHJlc3BvbnNlU3VjY2VzcygpIHtcclxuICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIkdhcm1lbnQgYWRkZWRcIixcclxuICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBhZGRlZCBhIGdhcm1lbnQgdG8geW91ciBjb2xsZWN0aW9uIVwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS8nXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
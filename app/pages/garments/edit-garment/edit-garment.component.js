"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var garment_1 = require("../../../dto/garment");
var data_service_1 = require("../../../shared/services/data.service");
var dialogs = require("tns-core-modules/ui/dialogs");
var EditGarmentComponent = /** @class */ (function () {
    function EditGarmentComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    EditGarmentComponent.prototype.responseSuccess = function () {
        var _this = this;
        this.dataService.setGarment(new garment_1.Garment());
        dialogs.alert({
            title: "Garment added",
            message: "You have successfully edited your garment!",
            okButtonText: "OK"
        }).then(function () {
            _this.router.navigate(['/home/']);
        });
    };
    EditGarmentComponent.prototype.navigateBack = function () {
        this.dataService.setGarment(new garment_1.Garment());
        this.router.navigate(['/home']);
    };
    EditGarmentComponent = __decorate([
        core_1.Component({
            selector: "app-edit-garment",
            moduleId: module.id,
            templateUrl: "./edit-garment.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService])
    ], EditGarmentComponent);
    return EditGarmentComponent;
}());
exports.EditGarmentComponent = EditGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1nYXJtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtZ2FybWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdEQUErQztBQUMvQyxzRUFBbUU7QUFDbkUscURBQXVEO0FBUXZEO0lBRUUsOEJBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDcEUsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksaUJBQU8sRUFBRSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE9BQU8sRUFBRSw0Q0FBNEM7WUFDckQsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxpQkFBTyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQW5CVSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FJNEIsZUFBTSxFQUF1QiwwQkFBVztPQUZ6RCxvQkFBb0IsQ0FxQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWVkaXQtZ2FybWVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZWRpdC1nYXJtZW50LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0R2FybWVudENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZVN1Y2Nlc3MoKSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldEdhcm1lbnQobmV3IEdhcm1lbnQoKSk7XHJcbiAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJHYXJtZW50IGFkZGVkXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHlvdXIgZ2FybWVudCFcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldEdhcm1lbnQobmV3IEdhcm1lbnQoKSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
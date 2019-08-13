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
            title: "Garment edited",
            message: "You have successfully edited your garment!",
            okButtonText: "OK"
        }).then(function () {
            _this.router.navigate(['/home/']);
        });
    };
    EditGarmentComponent.prototype.navigateBack = function () {
        this.garmentId = this.dataService.getGarment().id;
        this.router.navigate(['/garment/' + this.garmentId]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1nYXJtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtZ2FybWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdEQUErQztBQUMvQyxzRUFBbUU7QUFDbkUscURBQXVEO0FBUXZEO0lBSUUsOEJBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDcEUsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksaUJBQU8sRUFBRSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLDRDQUE0QztZQUNyRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFyQlUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBTTRCLGVBQU0sRUFBdUIsMEJBQVc7T0FKekQsb0JBQW9CLENBdUJoQztJQUFELDJCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1lZGl0LWdhcm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2VkaXQtZ2FybWVudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdEdhcm1lbnRDb21wb25lbnQge1xyXG5cclxuICBnYXJtZW50SWQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHJlc3BvbnNlU3VjY2VzcygpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0R2FybWVudChuZXcgR2FybWVudCgpKTtcclxuICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIkdhcm1lbnQgZWRpdGVkXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHlvdXIgZ2FybWVudCFcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLmdhcm1lbnRJZCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0R2FybWVudCgpLmlkO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudC8nICsgdGhpcy5nYXJtZW50SWRdKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
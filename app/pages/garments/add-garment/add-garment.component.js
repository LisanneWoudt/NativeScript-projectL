"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../../dto/garment");
var pant_1 = require("../../../dto/pant");
var user_1 = require("../../../dto/user");
var shirt_1 = require("../../../dto/shirt");
var garment_service_1 = require("../../../shared/services/garment.service");
var data_service_1 = require("../../../shared/services/data.service");
var router_1 = require("@angular/router");
var AddGarmentComponent = /** @class */ (function () {
    function AddGarmentComponent(garmentService, dataService, router) {
        this.garmentService = garmentService;
        this.dataService = dataService;
        this.router = router;
        this.garment = new garment_1.Garment();
        this.pant = new pant_1.Pant();
        this.shirt = new shirt_1.Shirt();
        this.currentUser = new user_1.User();
        this.categories = ["Pant", "Shirt"];
        this.categorySelected = false;
        this.pantSelected = false;
        this.shirtSelected = false;
    }
    AddGarmentComponent.prototype.ngOnInit = function () {
    };
    AddGarmentComponent.prototype.onchange = function (args) {
        this.categorySelected = true;
        if (args.newIndex == 0) {
            this.pantSelected = true;
            this.shirtSelected = false;
        }
        if (args.newIndex == 1) {
            this.shirtSelected = true;
            this.pantSelected = false;
        }
        if (args.newIndex == null) {
            this.shirtSelected = true;
            this.pantSelected = true;
        }
    };
    AddGarmentComponent.prototype.addGarment = function (garment, pant, shirt) {
        var _this = this;
        if (!this.shirtSelected && !this.pantSelected) {
            alert({ title: "Type missing",
                message: "Please select a garment type",
                okButtonText: "Ok" });
            return;
        }
        if (!this.checkFormFilled(garment, pant, shirt)) {
            alert({ title: "Field(s) empty",
                message: "Please fill all input fields",
                okButtonText: "Ok" });
            return;
        }
        this.currentUser = this.dataService.getMockUser();
        if (this.pantSelected == true) {
            this.pant.name = garment.name;
            this.pant.brand = garment.brand;
            this.pant.userId = this.currentUser.id;
            this.pant.waistSize = pant.waistSize;
            this.pant.waistLength = pant.waistLength;
            console.log(this.pant);
            this.garmentService.addPant(this.pant).subscribe(function (data) {
                _this.responseSuccess();
            }, function (errorResponse) {
                _this.responseError();
            });
        }
        else if (this.shirtSelected) {
            this.shirt.name = garment.name;
            this.shirt.brand = garment.brand;
            this.shirt.userId = this.currentUser.id;
            this.shirt.size = shirt.size;
            console.log(this.shirt);
            this.garmentService.addShirt(this.shirt).subscribe(function (data) {
                _this.responseSuccess();
            }, function (errorResponse) {
                _this.responseError();
            });
        }
    };
    AddGarmentComponent.prototype.checkFormFilled = function (garment, pant, shirt) {
        console.log(garment);
        console.log(pant);
        console.log(shirt);
        if (!garment.name || !garment.brand) {
            return false;
        }
        if (this.shirtSelected) {
            if (!shirt.size) {
                console.log(shirt);
                return false;
            }
        }
        else if (this.pantSelected) {
            if (!pant.waistSize || !pant.waistLength) {
                return false;
            }
        }
        return true;
    };
    AddGarmentComponent.prototype.responseSuccess = function () {
        this.result = 1;
        this.router.navigate(['/home/' + this.result]);
    };
    AddGarmentComponent.prototype.responseError = function () {
        console.log('Something went wrong');
    };
    __decorate([
        core_1.ViewChild('dd'),
        __metadata("design:type", core_1.ElementRef)
    ], AddGarmentComponent.prototype, "dropDown", void 0);
    AddGarmentComponent = __decorate([
        core_1.Component({
            selector: "app-add-garment",
            moduleId: module.id,
            templateUrl: "./add-garment.component.html"
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, data_service_1.DataService,
            router_1.Router])
    ], AddGarmentComponent);
    return AddGarmentComponent;
}());
exports.AddGarmentComponent = AddGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdEQUE2QztBQUM3QywwQ0FBdUM7QUFDdkMsMENBQXlDO0FBQ3pDLDRDQUEyQztBQUMzQyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLDBDQUF1QztBQVN2QztJQWVFLDZCQUFvQixjQUE4QixFQUFVLFdBQXdCLEVBQzFFLE1BQWM7UUFESixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZHpCLFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNqQyxTQUFJLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFFL0IsZUFBVSxHQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztJQU85QixDQUFDO0lBRUQsc0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxzQ0FBUSxHQUFmLFVBQWdCLElBQW1DO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJ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SSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQW5HZTtRQUFoQixnQkFBUyxDQUFDLElBQUksQ0FBQztrQ0FBVyxpQkFBVTt5REFBQztJQWIxQixtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FpQm9DLGdDQUFjLEVBQXVCLDBCQUFXO1lBQ2xFLGVBQU07T0FoQmIsbUJBQW1CLENBaUgvQjtJQUFELDBCQUFDO0NBQUEsQUFqSEQsSUFpSEM7QUFqSFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtQYW50fSBmcm9tICcuLi8uLi8uLi9kdG8vcGFudCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7IFNoaXJ0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3NoaXJ0JztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtYWRkLWdhcm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FkZC1nYXJtZW50LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRHYXJtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuIHBhbnQ6IFBhbnQgPSBuZXcgUGFudCgpO1xyXG4gc2hpcnQ6IFNoaXJ0ID0gbmV3IFNoaXJ0KCk7XHJcbiBjdXJyZW50VXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XHJcbiBzZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiBjYXRlZ29yaWVzOiBTdHJpbmdbXSA9IFtcIlBhbnRcIiwgXCJTaGlydFwiXTtcclxuIGNhdGVnb3J5U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHBhbnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gc2hpcnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gcmVzdWx0OiBudW1iZXI7XHJcblxyXG4gQFZpZXdDaGlsZCgnZGQnKSBkcm9wRG93bjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZCA9IHRydWU7XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMSkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQsIHBhbnQ6IFBhbnQsIHNoaXJ0OiBTaGlydCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXJ0U2VsZWN0ZWQgJiYgIXRoaXMucGFudFNlbGVjdGVkKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJUeXBlIG1pc3NpbmdcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgYSBnYXJtZW50IHR5cGVcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQsIHBhbnQsIHNoaXJ0KSkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiRmllbGQocykgZW1wdHlcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dCBmaWVsZHNcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYW50U2VsZWN0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnBhbnQubmFtZSA9IGdhcm1lbnQubmFtZTtcclxuICAgICAgdGhpcy5wYW50LmJyYW5kID0gZ2FybWVudC5icmFuZDtcclxuICAgICAgdGhpcy5wYW50LnVzZXJJZCA9IHRoaXMuY3VycmVudFVzZXIuaWQ7XHJcbiAgICAgIHRoaXMucGFudC53YWlzdFNpemUgPSBwYW50LndhaXN0U2l6ZTtcclxuICAgICAgdGhpcy5wYW50LndhaXN0TGVuZ3RoID0gcGFudC53YWlzdExlbmd0aDtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wYW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5nYXJtZW50U2VydmljZS5hZGRQYW50KHRoaXMucGFudCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXNwb25zZVN1Y2Nlc3MoKTtcclxuICAgICAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAodGhpcy5zaGlydFNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuc2hpcnQubmFtZSA9IGdhcm1lbnQubmFtZTtcclxuICAgICAgdGhpcy5zaGlydC5icmFuZCA9IGdhcm1lbnQuYnJhbmQ7XHJcbiAgICAgIHRoaXMuc2hpcnQudXNlcklkID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgICAgdGhpcy5zaGlydC5zaXplID0gc2hpcnQuc2l6ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zaGlydCk7XHJcblxyXG4gICAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmFkZFNoaXJ0KHRoaXMuc2hpcnQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlU3VjY2VzcygpO1xyXG4gICAgICB9LCBlcnJvclJlc3BvbnNlID0+IHtcclxuICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0Zvcm1GaWxsZWQoZ2FybWVudDogR2FybWVudCwgcGFudDogUGFudCwgc2hpcnQ6IFNoaXJ0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhnYXJtZW50KTtcclxuICAgIGNvbnNvbGUubG9nKHBhbnQpO1xyXG4gICAgY29uc29sZS5sb2coc2hpcnQpO1xyXG4gICAgaWYgKCFnYXJtZW50Lm5hbWUgfHwgIWdhcm1lbnQuYnJhbmQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hpcnRTZWxlY3RlZCkge1xyXG4gICAgICBpZiAoIXNoaXJ0LnNpemUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaGlydCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBpZiAoIXBhbnQud2Fpc3RTaXplIHx8ICFwYW50LndhaXN0TGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlc3BvbnNlU3VjY2VzcygpIHtcclxuICAgIHRoaXMucmVzdWx0ID0gMTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvJyArIHRoaXMucmVzdWx0XSk7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZUVycm9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
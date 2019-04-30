"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../../dto/garment");
var garment_service_1 = require("../../../shared/services/garment.service");
var data_service_1 = require("../../../shared/services/data.service");
var image_service_1 = require("../../../shared/services/image.service");
var router_1 = require("@angular/router");
var imagepicker = require("nativescript-imagepicker");
var fs = require("file-system");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
//let imagepicker = require("nativescript-imagepicker")
var GarmentInputFieldsComponent = /** @class */ (function () {
    function GarmentInputFieldsComponent(garmentService, dataService, imageService, router) {
        this.garmentService = garmentService;
        this.dataService = dataService;
        this.imageService = imageService;
        this.router = router;
        this.garment = new garment_1.Garment();
        this.selectedIndex = 1;
        this.categorySelected = false;
        this.pantSelected = false;
        this.shirtSelected = false;
        this.categories = new Array();
        this.previewSize = 300;
        this.busy = true;
        this.processing = false;
        this.showSuccessDialog = new core_1.EventEmitter();
    }
    GarmentInputFieldsComponent.prototype.ngOnInit = function () {
        this.garment = this.dataService.getGarment();
        this.getGarmentTypes();
    };
    GarmentInputFieldsComponent.prototype.getGarmentTypes = function () {
        var _this = this;
        this.garmentService.getGarmentTypes().subscribe(function (data) {
            _this.categories = data;
        }, function (error) {
            console.log("error while getting garmentTypes:" + error);
        });
    };
    GarmentInputFieldsComponent.prototype.getImage = function () {
        var milliseconds = (new Date).getTime();
        var that = this;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    GarmentInputFieldsComponent.prototype.startSelection = function (context) {
        var _this = this;
        var that = this;
        context
            .authorize()
            .then(function () {
            that.imageSrc = null;
            return context.present();
        })
            .then(function (selection) {
            _this.imageString = selection[0]._android;
            that.imageSrc = selection.length > 0 ? selection[0] : null;
            selection.forEach(function (element) {
                element.options.width = that.previewSize;
                element.options.height = that.previewSize;
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    GarmentInputFieldsComponent.prototype.onchange = function (args) {
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
    GarmentInputFieldsComponent.prototype.addGarment = function (garment) {
        var _this = this;
        if (!this.validateGarment(garment)) {
            return;
        }
        ;
        this.garment = garment;
        if (this.pantSelected) {
            this.garment.garmentType = 'PANT';
        }
        else {
            this.garment.garmentType = 'SHIRT';
        }
        this.processing = true;
        this.garmentService.saveGarment(this.garment, this.urlString)
            .subscribe(function (data) {
            if (_this.imageString) {
                var task = void 0;
                task = _this.imageService.multipartUpload(data.id.toString(), _this.imageString);
                task.on("complete", function (data) {
                    _this.processing = false;
                    _this.responseSuccess();
                });
                task.on("error", function (data) {
                    _this.processing = false;
                    _this.responseError();
                });
            }
            else {
                _this.responseSuccess();
            }
        });
    };
    GarmentInputFieldsComponent.prototype.validateGarment = function (garment) {
        if (!this.shirtSelected && !this.pantSelected) {
            alert({ title: "Type missing",
                message: "Please select a garment type",
                okButtonText: "Ok" });
            return false;
        }
        if (!this.checkFormFilled(garment)) {
            alert({ title: "Field(s) empty",
                message: "Please fill all input fields",
                okButtonText: "Ok" });
            return false;
        }
        return true;
    };
    GarmentInputFieldsComponent.prototype.checkFormFilled = function (garment) {
        if (!garment.name || !garment.brand || (!this.imageString &&
            !this.garment.image) || !garment.size) {
            return false;
        }
        if (this.pantSelected) {
            if (!garment.lengthSize) {
                return false;
            }
        }
        return true;
    };
    GarmentInputFieldsComponent.prototype.responseSuccess = function () {
        this.showSuccessDialog.emit();
    };
    GarmentInputFieldsComponent.prototype.responseError = function () {
        console.log('Something went wrong');
        this.router.navigate(['/error']);
    };
    __decorate([
        core_1.ViewChild('dd'),
        __metadata("design:type", core_1.ElementRef)
    ], GarmentInputFieldsComponent.prototype, "dropDown", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GarmentInputFieldsComponent.prototype, "showSuccessDialog", void 0);
    __decorate([
        core_1.Input('urlString'),
        __metadata("design:type", String)
    ], GarmentInputFieldsComponent.prototype, "urlString", void 0);
    GarmentInputFieldsComponent = __decorate([
        core_1.Component({
            selector: "app-garment-input-fields",
            moduleId: module.id,
            templateUrl: "./garment-input-fields.component.html"
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, data_service_1.DataService,
            image_service_1.ImageService, router_1.Router])
    ], GarmentInputFieldsComponent);
    return GarmentInputFieldsComponent;
}());
exports.GarmentInputFieldsComponent = GarmentInputFieldsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNHO0FBQ3RHLGdEQUE2QztBQUM3Qyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLHdFQUFvRTtBQUNwRSwwQ0FBdUM7QUFJdkMsc0RBQXdEO0FBQ3hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVoQyxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU3Qyx1REFBdUQ7QUFPdkQ7SUFvQkUscUNBQW9CLGNBQThCLEVBQVUsV0FBd0IsRUFDMUUsWUFBMEIsRUFBVSxNQUFjO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQW5CN0QsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFBO1FBQ2hDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixlQUFVLEdBQWEsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUduQyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHbEIsc0JBQWlCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFLaEQsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMs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QyxDQUFDO2dCQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHFEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELG1EQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUEzSWU7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQVcsaUJBQVU7aUVBQUM7SUFDNUI7UUFBVCxhQUFNLEVBQUU7OzBFQUF3QztJQUM3QjtRQUFuQixZQUFLLENBQUMsV0FBVyxDQUFDO2tDQUFZLE1BQU07a0VBQUM7SUFsQjFCLDJCQUEyQjtRQU52QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVDQUF1QztTQUN2RCxDQUFDO3lDQXNCb0MsZ0NBQWMsRUFBdUIsMEJBQVc7WUFDNUQsNEJBQVksRUFBa0IsZUFBTTtPQXJCakQsMkJBQTJCLENBNkp2QztJQUFELGtDQUFDO0NBQUEsQUE3SkQsSUE2SkM7QUE3Slksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbnZhciBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxuaW1wb3J0IHtJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21SZXNvdXJjZSwgZnJvbUJhc2U2NH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiO1xyXG52YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xyXG5cclxuLy9sZXQgaW1hZ2VwaWNrZXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCIpXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWdhcm1lbnQtaW5wdXQtZmllbGRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nYXJtZW50LWlucHV0LWZpZWxkcy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudElucHV0RmllbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKVxyXG4gc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMTtcclxuXHJcbiBjYXRlZ29yeVNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiBwYW50U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHNoaXJ0U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIGNhdGVnb3JpZXM6IFN0cmluZ1tdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gaW1hZ2VTcmM6IGFueTtcclxuIHByZXZpZXdTaXplOiBudW1iZXIgPSAzMDA7XHJcbiBpbWFnZVN0cmluZzogc3RyaW5nO1xyXG4gYnVzeTogYm9vbGVhbiA9IHRydWU7XHJcbiBwcm9jZXNzaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gQFZpZXdDaGlsZCgnZGQnKSBkcm9wRG93bjogRWxlbWVudFJlZjtcclxuIEBPdXRwdXQoKSBzaG93U3VjY2Vzc0RpYWxvZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuIEBJbnB1dCgndXJsU3RyaW5nJykgdXJsU3RyaW5nOiBTdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nYXJtZW50ID0gdGhpcy5kYXRhU2VydmljZS5nZXRHYXJtZW50KCk7XHJcbiAgICB0aGlzLmdldEdhcm1lbnRUeXBlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R2FybWVudFR5cGVzKCkge1xyXG4gICAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLmdldEdhcm1lbnRUeXBlcygpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGRhdGE7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSBnZXR0aW5nIGdhcm1lbnRUeXBlczpcIiArIGVycm9yKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldEltYWdlKCkge1xyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgY29udGV4dFxyXG4gICAgICAuYXV0aG9yaXplKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5pbWFnZVNyYyA9IG51bGw7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTdHJpbmcgPSBzZWxlY3Rpb25bMF0uX2FuZHJvaWQ7XHJcbiAgICAgICAgICB0aGF0LmltYWdlU3JjID0gc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xyXG5cclxuICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLndpZHRoID0gdGhhdC5wcmV2aWV3U2l6ZTtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMuaGVpZ2h0ID0gdGhhdC5wcmV2aWV3U2l6ZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMCkge1xyXG4gICAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IDEpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IG51bGwpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkR2FybWVudChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVHYXJtZW50KGdhcm1lbnQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nYXJtZW50ID0gZ2FybWVudDtcclxuICAgIGlmICh0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmdhcm1lbnQuZ2FybWVudFR5cGUgPSAnUEFOVCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5nYXJtZW50Lmdhcm1lbnRUeXBlID0gJ1NISVJUJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2Uuc2F2ZUdhcm1lbnQodGhpcy5nYXJtZW50LCB0aGlzLnVybFN0cmluZylcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVN0cmluZykge1xyXG4gICAgICAgICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgICAgICAgdGFzayA9IHRoaXMuaW1hZ2VTZXJ2aWNlLm11bHRpcGFydFVwbG9hZChkYXRhLmlkLnRvU3RyaW5nKCksIHRoaXMuaW1hZ2VTdHJpbmcpO1xyXG4gICAgICAgICAgdGFzay5vbihcImNvbXBsZXRlXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZVN1Y2Nlc3MoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGFzay5vbihcImVycm9yXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvcigpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2VTdWNjZXNzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGlmICghdGhpcy5zaGlydFNlbGVjdGVkICYmICF0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiVHlwZSBtaXNzaW5nXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgZ2FybWVudCB0eXBlXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJ9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmNoZWNrRm9ybUZpbGxlZChnYXJtZW50KSkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiRmllbGQocykgZW1wdHlcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dCBmaWVsZHNcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9ybUZpbGxlZChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICBpZiAoIWdhcm1lbnQubmFtZSB8fCAhZ2FybWVudC5icmFuZCB8fCAoIXRoaXMuaW1hZ2VTdHJpbmcgJiZcclxuICAgICAgIXRoaXMuZ2FybWVudC5pbWFnZSkgfHwgIWdhcm1lbnQuc2l6ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYW50U2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKCFnYXJtZW50Lmxlbmd0aFNpemUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VTdWNjZXNzKCkge1xyXG4gICAgdGhpcy5zaG93U3VjY2Vzc0RpYWxvZy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZUVycm9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
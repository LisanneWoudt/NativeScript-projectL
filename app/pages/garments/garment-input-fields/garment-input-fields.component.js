"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../../dto/garment");
var user_1 = require("../../../dto/user");
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
        this.currentUser = new user_1.User();
        this.categories = ["Pant", "Shirt"];
        this.categorySelected = false;
        this.pantSelected = false;
        this.shirtSelected = false;
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
        this.busy = true;
        this.processing = false;
        this.showSuccessDialog = new core_1.EventEmitter();
    }
    GarmentInputFieldsComponent.prototype.ngOnInit = function () {
        this.garment = this.dataService.getGarment();
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
            that.imageAssets = [];
            that.imageSrc = null;
            return context.present();
        })
            .then(function (selection) {
            _this.imageString = selection[0]._android;
            that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;
            // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
            selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
            });
            that.imageAssets = selection;
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
        this.currentUser = this.dataService.getMockUser();
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
            if (!garment.length_size) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNHO0FBQ3RHLGdEQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsNEVBQXdFO0FBQ3hFLHNFQUFrRTtBQUNsRSx3RUFBb0U7QUFDcEUsMENBQXVDO0FBR3ZDLHNEQUF3RDtBQUN4RCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFaEMscURBQXVEO0FBQ3ZELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFN0MsdURBQXVEO0FBT3ZEO0lBeUJFLHFDQUFvQixjQUE4QixFQUFVLFdBQXdCLEVBQzFFLFlBQTBCLEVBQVUsTUFBYztRQUR4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF4QjdELFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQTtRQUNoQyxnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFFL0IsZUFBVSxHQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUkvQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRTFCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsZUFBVSxHQUFZLEtBQUssQ0FB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O1lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxxREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtREFBYSxHQUFiO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdkllO1FBQWhCLGdCQUFTLENBQUMsSUFBSSxDQUFDO2tDQUFXLGlCQUFVO2lFQUFDO0lBQzVCO1FBQVQsYUFBTSxFQUFFOzswRUFBd0M7SUFDN0I7UUFBbkIsWUFBSyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxNQUFNO2tFQUFDO0lBdkIxQiwyQkFBMkI7UUFOdkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1Q0FBdUM7U0FDdkQsQ0FBQzt5Q0EyQm9DLGdDQUFjLEVBQXVCLDBCQUFXO1lBQzVELDRCQUFZLEVBQWtCLGVBQU07T0ExQmpELDJCQUEyQixDQThKdkM7SUFBRCxrQ0FBQztDQUFBLEFBOUpELElBOEpDO0FBOUpZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2R0by91c2VyJztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG52YXIgZnMgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuXHJcbi8vbGV0IGltYWdlcGlja2VyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1nYXJtZW50LWlucHV0LWZpZWxkc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRJbnB1dEZpZWxkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gZ2FybWVudDogR2FybWVudCA9IG5ldyBHYXJtZW50KClcclxuIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcclxuIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuIGNhdGVnb3JpZXM6IFN0cmluZ1tdID0gW1wiUGFudFwiLCBcIlNoaXJ0XCJdO1xyXG4gY2F0ZWdvcnlTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gcGFudFNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiBzaGlydFNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiByZXN1bHQ6IG51bWJlcjtcclxuIHVwbG9hZGVkSW1hZ2U6IGFueTtcclxuXHJcbiBpbWFnZUFzc2V0cyA9IFtdO1xyXG4gaW1hZ2VTcmM6IGFueTtcclxuIGlzU2luZ2xlTW9kZTogYm9vbGVhbiA9IHRydWU7XHJcbiB0aHVtYlNpemU6IG51bWJlciA9IDgwO1xyXG4gcHJldmlld1NpemU6IG51bWJlciA9IDMwMDtcclxuIGltYWdlU3RyaW5nOiBzdHJpbmc7XHJcbiBidXN5OiBib29sZWFuID0gdHJ1ZTtcclxuIHByb2Nlc3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiBAVmlld0NoaWxkKCdkZCcpIGRyb3BEb3duOiBFbGVtZW50UmVmO1xyXG4gQE91dHB1dCgpIHNob3dTdWNjZXNzRGlhbG9nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gQElucHV0KCd1cmxTdHJpbmcnKSB1cmxTdHJpbmc6IFN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdhcm1lbnQgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldEdhcm1lbnQoKTtcclxuICB9XHJcblxyXG4gIGdldEltYWdlKCkge1xyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgY29udGV4dFxyXG4gICAgICAuYXV0aG9yaXplKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5pbWFnZUFzc2V0cyA9IFtdO1xyXG4gICAgICAgICAgdGhhdC5pbWFnZVNyYyA9IG51bGw7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTdHJpbmcgPSBzZWxlY3Rpb25bMF0uX2FuZHJvaWQ7XHJcbiAgICAgICAgICB0aGF0LmltYWdlU3JjID0gdGhhdC5pc1NpbmdsZU1vZGUgJiYgc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xyXG5cclxuICAgICAgICAgIC8vIHNldCB0aGUgaW1hZ2VzIHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBhc3NldHMgd2l0aCBvcHRpbWFsIHNpemVzIChvcHRpbWl6ZSBtZW1vcnkgdXNhZ2UpXHJcbiAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy53aWR0aCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHRoYXQuaW1hZ2VBc3NldHMgPSBzZWxlY3Rpb247XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZCA9IHRydWU7XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMSkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUdhcm1lbnQoZ2FybWVudCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XHJcblxyXG4gICAgdGhpcy5nYXJtZW50ID0gZ2FybWVudDtcclxuICAgIGlmICh0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmdhcm1lbnQuZ2FybWVudFR5cGUgPSAnUEFOVCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5nYXJtZW50Lmdhcm1lbnRUeXBlID0gJ1NISVJUJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2Uuc2F2ZUdhcm1lbnQodGhpcy5nYXJtZW50LCB0aGlzLnVybFN0cmluZylcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVN0cmluZykge1xyXG4gICAgICAgICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgICAgICAgdGFzayA9IHRoaXMuaW1hZ2VTZXJ2aWNlLm11bHRpcGFydFVwbG9hZChkYXRhLmlkLnRvU3RyaW5nKCksIHRoaXMuaW1hZ2VTdHJpbmcpO1xyXG4gICAgICAgICAgdGFzay5vbihcImNvbXBsZXRlXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZVN1Y2Nlc3MoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGFzay5vbihcImVycm9yXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvcigpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2VTdWNjZXNzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGlmICghdGhpcy5zaGlydFNlbGVjdGVkICYmICF0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiVHlwZSBtaXNzaW5nXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgZ2FybWVudCB0eXBlXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJ9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmNoZWNrRm9ybUZpbGxlZChnYXJtZW50KSkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiRmllbGQocykgZW1wdHlcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dCBmaWVsZHNcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9ybUZpbGxlZChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICBpZiAoIWdhcm1lbnQubmFtZSB8fCAhZ2FybWVudC5icmFuZCB8fCAoIXRoaXMuaW1hZ2VTdHJpbmcgJiZcclxuICAgICAgIXRoaXMuZ2FybWVudC5pbWFnZSkgfHwgIWdhcm1lbnQuc2l6ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYW50U2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKCFnYXJtZW50Lmxlbmd0aF9zaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlc3BvbnNlU3VjY2VzcygpIHtcclxuICAgIHRoaXMuc2hvd1N1Y2Nlc3NEaWFsb2cuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VFcnJvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
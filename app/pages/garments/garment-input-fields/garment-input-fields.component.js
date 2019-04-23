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
        this.categories = ["Pant", "Shirt", "Other"];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNHO0FBQ3RHLGdEQUE2QztBQUM3Qyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLHdFQUFvRTtBQUNwRSwwQ0FBdUM7QUFJdkMsc0RBQXdEO0FBQ3hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVoQyxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU3Qyx1REFBdUQ7QUFPdkQ7SUFvQkUscUNBQW9CLGNBQThCLEVBQVUsV0FBd0IsRUFDMUUsWUFBMEIsRUFBVSxNQUFjO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQW5CN0QsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFBO1FBQ2hDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixlQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBR3ZDLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRTFCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUdsQixzQkFBaUIsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUtoRCxDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcs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QUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFsSWU7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQVcsaUJBQVU7aUVBQUM7SUFDNUI7UUFBVCxhQUFNLEVBQUU7OzBFQUF3QztJQUM3QjtRQUFuQixZQUFLLENBQUMsV0FBVyxDQUFDO2tDQUFZLE1BQU07a0VBQUM7SUFsQjFCLDJCQUEyQjtRQU52QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVDQUF1QztTQUN2RCxDQUFDO3lDQXNCb0MsZ0NBQWMsRUFBdUIsMEJBQVc7WUFDNUQsNEJBQVksRUFBa0IsZUFBTTtPQXJCakQsMkJBQTJCLENBb0p2QztJQUFELGtDQUFDO0NBQUEsQUFwSkQsSUFvSkM7QUFwSlksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbnZhciBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxuaW1wb3J0IHtJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21SZXNvdXJjZSwgZnJvbUJhc2U2NH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiO1xyXG52YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xyXG5cclxuLy9sZXQgaW1hZ2VwaWNrZXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCIpXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWdhcm1lbnQtaW5wdXQtZmllbGRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nYXJtZW50LWlucHV0LWZpZWxkcy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FybWVudElucHV0RmllbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKVxyXG4gc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMTtcclxuXHJcbiBjYXRlZ29yeVNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiBwYW50U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHNoaXJ0U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIGNhdGVnb3JpZXMgPSBbXCJQYW50XCIsIFwiU2hpcnRcIiwgXCJPdGhlclwiXVxyXG5cclxuIGltYWdlU3JjOiBhbnk7XHJcbiBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMzAwO1xyXG4gaW1hZ2VTdHJpbmc6IHN0cmluZztcclxuIGJ1c3k6IGJvb2xlYW4gPSB0cnVlO1xyXG4gcHJvY2Vzc2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuIEBWaWV3Q2hpbGQoJ2RkJykgZHJvcERvd246IEVsZW1lbnRSZWY7XHJcbiBAT3V0cHV0KCkgc2hvd1N1Y2Nlc3NEaWFsb2cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiBASW5wdXQoJ3VybFN0cmluZycpIHVybFN0cmluZzogU3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2FybWVudCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0R2FybWVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoKSB7XHJcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICBjb250ZXh0XHJcbiAgICAgIC5hdXRob3JpemUoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LmltYWdlU3JjID0gbnVsbDtcclxuICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVN0cmluZyA9IHNlbGVjdGlvblswXS5fYW5kcm9pZDtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VTcmMgPSBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMud2lkdGggPSB0aGF0LnByZXZpZXdTaXplO1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LnByZXZpZXdTaXplO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZCA9IHRydWU7XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMSkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUdhcm1lbnQoZ2FybWVudCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhcm1lbnQgPSBnYXJtZW50O1xyXG4gICAgaWYgKHRoaXMucGFudFNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuZ2FybWVudC5nYXJtZW50VHlwZSA9ICdQQU5UJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmdhcm1lbnQuZ2FybWVudFR5cGUgPSAnU0hJUlQnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5zYXZlR2FybWVudCh0aGlzLmdhcm1lbnQsIHRoaXMudXJsU3RyaW5nKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgICBsZXQgdGFzazogYmdodHRwLlRhc2s7XHJcbiAgICAgICAgICB0YXNrID0gdGhpcy5pbWFnZVNlcnZpY2UubXVsdGlwYXJ0VXBsb2FkKGRhdGEuaWQudG9TdHJpbmcoKSwgdGhpcy5pbWFnZVN0cmluZyk7XHJcbiAgICAgICAgICB0YXNrLm9uKFwiY29tcGxldGVcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlU3VjY2VzcygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0YXNrLm9uKFwiZXJyb3JcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yKCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZVN1Y2Nlc3MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUdhcm1lbnQoZ2FybWVudDogR2FybWVudCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXJ0U2VsZWN0ZWQgJiYgIXRoaXMucGFudFNlbGVjdGVkKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJUeXBlIG1pc3NpbmdcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgYSBnYXJtZW50IHR5cGVcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQpKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJGaWVsZChzKSBlbXB0eVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0IGZpZWxkc1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wifSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGlmICghZ2FybWVudC5uYW1lIHx8ICFnYXJtZW50LmJyYW5kIHx8ICghdGhpcy5pbWFnZVN0cmluZyAmJlxyXG4gICAgICAhdGhpcy5nYXJtZW50LmltYWdlKSB8fCAhZ2FybWVudC5zaXplKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBpZiAoIWdhcm1lbnQubGVuZ3RoX3NpemUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VTdWNjZXNzKCkge1xyXG4gICAgdGhpcy5zaG93U3VjY2Vzc0RpYWxvZy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZUVycm9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
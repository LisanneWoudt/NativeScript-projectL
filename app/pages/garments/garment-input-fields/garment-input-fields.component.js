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
        this.selectedIndex = "Pant";
        this.categorySelected = false;
        this.pantSelected = false;
        this.shirtSelected = false;
        this.categories = new Array();
        this.categoryKeys = new Array();
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
            _this.categoryMap = data;
            for (var cat in _this.categoryMap) {
                _this.categoryKeys.push(parseInt(cat));
                _this.categories.push(_this.categoryMap[cat]);
            }
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
        console.log(garment);
        if (!this.validateGarment(garment)) {
            return;
        }
        ;
        this.garment = garment;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNHO0FBQ3RHLGdEQUE2QztBQUM3Qyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLHdFQUFvRTtBQUNwRSwwQ0FBdUM7QUFJdkMsc0RBQXdEO0FBQ3hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVoQyxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU3Qyx1REFBdUQ7QUFPdkQ7SUFzQkUscUNBQW9CLGNBQThCLEVBQVUsV0FBd0IsRUFDMUUsWUFBMEIsRUFBVSxNQUFjO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXJCN0QsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFBO1FBRWhDLGtCQUFhLEdBQVcsTUFBTSxDQUFDO1FBQy9CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixlQUFVLEdBQWEsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFhLElBQUksS0FBSyxFQUFFLENBQUM7UUFHckMsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFFMUIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBR2xCLHNCQUFpQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBS2hELENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0UsSUFB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LENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxxREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtREFBYSxHQUFiO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBekllO1FBQWhCLGdCQUFTLENBQUMsSUFBSSxDQUFDO2tDQUFXLGlCQUFVO2lFQUFDO0lBQzVCO1FBQVQsYUFBTSxFQUFFOzswRUFBd0M7SUFDN0I7UUFBbkIsWUFBSyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxNQUFNO2tFQUFDO0lBcEIxQiwyQkFBMkI7UUFOdkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1Q0FBdUM7U0FDdkQsQ0FBQzt5Q0F3Qm9DLGdDQUFjLEVBQXVCLDBCQUFXO1lBQzVELDRCQUFZLEVBQWtCLGVBQU07T0F2QmpELDJCQUEyQixDQTZKdkM7SUFBRCxrQ0FBQztDQUFBLEFBN0pELElBNkpDO0FBN0pZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBWYWx1ZUxpc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG52YXIgZnMgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuXHJcbi8vbGV0IGltYWdlcGlja2VyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1nYXJtZW50LWlucHV0LWZpZWxkc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRJbnB1dEZpZWxkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gZ2FybWVudDogR2FybWVudCA9IG5ldyBHYXJtZW50KClcclxuXHJcbiBzZWxlY3RlZEluZGV4OiBTdHJpbmcgPSBcIlBhbnRcIjtcclxuIGNhdGVnb3J5U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHBhbnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gc2hpcnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gY2F0ZWdvcnlNYXA6IE1hcDxudW1iZXIsIHN0cmluZz47XHJcbiBjYXRlZ29yaWVzOiBTdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xyXG4gY2F0ZWdvcnlLZXlzOiBudW1iZXJbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuIGltYWdlU3JjOiBhbnk7XHJcbiBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMzAwO1xyXG4gaW1hZ2VTdHJpbmc6IHN0cmluZztcclxuIGJ1c3k6IGJvb2xlYW4gPSB0cnVlO1xyXG4gcHJvY2Vzc2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuIEBWaWV3Q2hpbGQoJ2RkJykgZHJvcERvd246IEVsZW1lbnRSZWY7XHJcbiBAT3V0cHV0KCkgc2hvd1N1Y2Nlc3NEaWFsb2cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiBASW5wdXQoJ3VybFN0cmluZycpIHVybFN0cmluZzogU3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2FybWVudCA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0R2FybWVudCgpO1xyXG4gICAgdGhpcy5nZXRHYXJtZW50VHlwZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEdhcm1lbnRUeXBlcygpIHtcclxuICAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRHYXJtZW50VHlwZXMoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeU1hcCA9IGRhdGE7XHJcbiAgICAgICAgZm9yIChsZXQgY2F0IGluIHRoaXMuY2F0ZWdvcnlNYXApIHtcclxuICAgICAgICAgIHRoaXMuY2F0ZWdvcnlLZXlzLnB1c2gocGFyc2VJbnQoY2F0KSk7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCh0aGlzLmNhdGVnb3J5TWFwW2NhdF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGdldHRpbmcgZ2FybWVudFR5cGVzOlwiICsgZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoKSB7XHJcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICBjb250ZXh0XHJcbiAgICAgIC5hdXRob3JpemUoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LmltYWdlU3JjID0gbnVsbDtcclxuICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVN0cmluZyA9IHNlbGVjdGlvblswXS5fYW5kcm9pZDtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VTcmMgPSBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMud2lkdGggPSB0aGF0LnByZXZpZXdTaXplO1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LnByZXZpZXdTaXplO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZCA9IHRydWU7XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMSkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGdhcm1lbnQpO1xyXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlR2FybWVudChnYXJtZW50KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2FybWVudCA9IGdhcm1lbnQ7XHJcbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2Uuc2F2ZUdhcm1lbnQodGhpcy5nYXJtZW50LCB0aGlzLnVybFN0cmluZylcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVN0cmluZykge1xyXG4gICAgICAgICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgICAgICAgdGFzayA9IHRoaXMuaW1hZ2VTZXJ2aWNlLm11bHRpcGFydFVwbG9hZChkYXRhLmlkLnRvU3RyaW5nKCksIHRoaXMuaW1hZ2VTdHJpbmcpO1xyXG4gICAgICAgICAgdGFzay5vbihcImNvbXBsZXRlXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZVN1Y2Nlc3MoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGFzay5vbihcImVycm9yXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvcigpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2VTdWNjZXNzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGlmICghdGhpcy5zaGlydFNlbGVjdGVkICYmICF0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiVHlwZSBtaXNzaW5nXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgZ2FybWVudCB0eXBlXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJ9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmNoZWNrRm9ybUZpbGxlZChnYXJtZW50KSkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiRmllbGQocykgZW1wdHlcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dCBmaWVsZHNcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9ybUZpbGxlZChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICBpZiAoIWdhcm1lbnQubmFtZSB8fCAhZ2FybWVudC5icmFuZCB8fCAoIXRoaXMuaW1hZ2VTdHJpbmcgJiZcclxuICAgICAgIXRoaXMuZ2FybWVudC5pbWFnZSkgfHwgIWdhcm1lbnQuc2l6ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYW50U2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKCFnYXJtZW50Lmxlbmd0aFNpemUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VTdWNjZXNzKCkge1xyXG4gICAgdGhpcy5zaG93U3VjY2Vzc0RpYWxvZy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZUVycm9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lcnJvciddKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
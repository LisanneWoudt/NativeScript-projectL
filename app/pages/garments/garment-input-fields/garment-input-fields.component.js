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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC1pbnB1dC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNHO0FBQ3RHLGdEQUE2QztBQUM3Qyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLHdFQUFvRTtBQUNwRSwwQ0FBdUM7QUFJdkMsc0RBQXdEO0FBQ3hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVoQyxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU3Qyx1REFBdUQ7QUFPdkQ7SUFzQkUscUNBQW9CLGNBQThCLEVBQVUsV0FBd0IsRUFDMUUsWUFBMEIsRUFBVSxNQUFjO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXJCN0QsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFBO1FBRWhDLGtCQUFhLEdBQVcsTUFBTSxDQUFDO1FBQy9CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixlQUFVLEdBQWEsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFhLElBQUksS0FBSyxFQUFFLENBQUM7UUFHckMsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFFMUIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBR2xCLHNCQUFpQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBS2hELENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0UsSUFB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Q0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQscURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbURBQWEsR0FBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXhJZTtRQUFoQixnQkFBUyxDQUFDLElBQUksQ0FBQztrQ0FBVyxpQkFBVTtpRUFBQztJQUM1QjtRQUFULGFBQU0sRUFBRTs7MEVBQXdDO0lBQzdCO1FBQW5CLFlBQUssQ0FBQyxXQUFXLENBQUM7a0NBQVksTUFBTTtrRUFBQztJQXBCMUIsMkJBQTJCO1FBTnZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUNBQXVDO1NBQ3ZELENBQUM7eUNBd0JvQyxnQ0FBYyxFQUF1QiwwQkFBVztZQUM1RCw0QkFBWSxFQUFrQixlQUFNO09BdkJqRCwyQkFBMkIsQ0E0SnZDO0lBQUQsa0NBQUM7Q0FBQSxBQTVKRCxJQTRKQztBQTVKWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgVmFsdWVMaXN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5pbXBvcnQge0ltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbnZhciBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XHJcblxyXG4vL2xldCBpbWFnZXBpY2tlciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIilcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZ2FybWVudC1pbnB1dC1maWVsZHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhcm1lbnQtaW5wdXQtZmllbGRzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50SW5wdXRGaWVsZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuIGdhcm1lbnQ6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpXHJcblxyXG4gc2VsZWN0ZWRJbmRleDogU3RyaW5nID0gXCJQYW50XCI7XHJcbiBjYXRlZ29yeVNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiBwYW50U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHNoaXJ0U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIGNhdGVnb3J5TWFwOiBNYXA8bnVtYmVyLCBzdHJpbmc+O1xyXG4gY2F0ZWdvcmllczogU3RyaW5nW10gPSBuZXcgQXJyYXkoKTtcclxuIGNhdGVnb3J5S2V5czogbnVtYmVyW10gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiBpbWFnZVNyYzogYW55O1xyXG4gcHJldmlld1NpemU6IG51bWJlciA9IDMwMDtcclxuIGltYWdlU3RyaW5nOiBzdHJpbmc7XHJcbiBidXN5OiBib29sZWFuID0gdHJ1ZTtcclxuIHByb2Nlc3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiBAVmlld0NoaWxkKCdkZCcpIGRyb3BEb3duOiBFbGVtZW50UmVmO1xyXG4gQE91dHB1dCgpIHNob3dTdWNjZXNzRGlhbG9nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gQElucHV0KCd1cmxTdHJpbmcnKSB1cmxTdHJpbmc6IFN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdhcm1lbnQgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldEdhcm1lbnQoKTtcclxuICAgIHRoaXMuZ2V0R2FybWVudFR5cGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRHYXJtZW50VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMuZ2FybWVudFNlcnZpY2UuZ2V0R2FybWVudFR5cGVzKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlNYXAgPSBkYXRhO1xyXG4gICAgICAgIGZvciAobGV0IGNhdCBpbiB0aGlzLmNhdGVnb3J5TWFwKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5S2V5cy5wdXNoKHBhcnNlSW50KGNhdCkpO1xyXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2godGhpcy5jYXRlZ29yeU1hcFtjYXRdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSBnZXR0aW5nIGdhcm1lbnRUeXBlczpcIiArIGVycm9yKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldEltYWdlKCkge1xyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgY29udGV4dFxyXG4gICAgICAuYXV0aG9yaXplKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5pbWFnZVNyYyA9IG51bGw7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTdHJpbmcgPSBzZWxlY3Rpb25bMF0uX2FuZHJvaWQ7XHJcbiAgICAgICAgICB0aGF0LmltYWdlU3JjID0gc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xyXG5cclxuICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLndpZHRoID0gdGhhdC5wcmV2aWV3U2l6ZTtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMuaGVpZ2h0ID0gdGhhdC5wcmV2aWV3U2l6ZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMCkge1xyXG4gICAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IDEpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IG51bGwpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkR2FybWVudChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVHYXJtZW50KGdhcm1lbnQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nYXJtZW50ID0gZ2FybWVudDtcclxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5zYXZlR2FybWVudCh0aGlzLmdhcm1lbnQsIHRoaXMudXJsU3RyaW5nKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgICBsZXQgdGFzazogYmdodHRwLlRhc2s7XHJcbiAgICAgICAgICB0YXNrID0gdGhpcy5pbWFnZVNlcnZpY2UubXVsdGlwYXJ0VXBsb2FkKGRhdGEuaWQudG9TdHJpbmcoKSwgdGhpcy5pbWFnZVN0cmluZyk7XHJcbiAgICAgICAgICB0YXNrLm9uKFwiY29tcGxldGVcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlU3VjY2VzcygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0YXNrLm9uKFwiZXJyb3JcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yKCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZVN1Y2Nlc3MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUdhcm1lbnQoZ2FybWVudDogR2FybWVudCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXJ0U2VsZWN0ZWQgJiYgIXRoaXMucGFudFNlbGVjdGVkKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJUeXBlIG1pc3NpbmdcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgYSBnYXJtZW50IHR5cGVcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQpKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJGaWVsZChzKSBlbXB0eVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0IGZpZWxkc1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wifSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQ6IEdhcm1lbnQpIHtcclxuICAgIGlmICghZ2FybWVudC5uYW1lIHx8ICFnYXJtZW50LmJyYW5kIHx8ICghdGhpcy5pbWFnZVN0cmluZyAmJlxyXG4gICAgICAhdGhpcy5nYXJtZW50LmltYWdlKSB8fCAhZ2FybWVudC5zaXplKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBpZiAoIWdhcm1lbnQubGVuZ3RoU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZVN1Y2Nlc3MoKSB7XHJcbiAgICB0aGlzLnNob3dTdWNjZXNzRGlhbG9nLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHJlc3BvbnNlRXJyb3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
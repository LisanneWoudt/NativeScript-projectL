"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../../dto/garment");
var pant_1 = require("../../../dto/pant");
var user_1 = require("../../../dto/user");
var shirt_1 = require("../../../dto/shirt");
var garment_service_1 = require("../../../shared/services/garment.service");
var data_service_1 = require("../../../shared/services/data.service");
var image_service_1 = require("../../../shared/services/image.service");
var router_1 = require("@angular/router");
var imagepicker = require("nativescript-imagepicker");
var fs = require("file-system");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var dialogs = require("tns-core-modules/ui/dialogs");
//let imagepicker = require("nativescript-imagepicker")
var AddGarmentComponent = /** @class */ (function () {
    function AddGarmentComponent(garmentService, dataService, imageService, router) {
        this.garmentService = garmentService;
        this.dataService = dataService;
        this.imageService = imageService;
        this.router = router;
        this.garment = new garment_1.Garment();
        this.pant = new pant_1.Pant();
        this.shirt = new shirt_1.Shirt();
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
    }
    AddGarmentComponent.prototype.ngOnInit = function () {
        this.getMockPant();
    };
    AddGarmentComponent.prototype.getMockPant = function () {
        this.categorySelected = true;
        this.pantSelected = true;
        this.selectedIndex = 0;
        this.garment.name = "nieuwe broek";
        this.garment.brand = "Vero Moda";
        this.garment.userId = 1;
        this.pant.waistSize = 27;
        this.pant.waistLength = 34;
    };
    AddGarmentComponent.prototype.getImage = function () {
        this.isSingleMode = true;
        var milliseconds = (new Date).getTime();
        var that = this;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    AddGarmentComponent.prototype.startSelection = function (context) {
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
        }
        else if (this.shirtSelected) {
            this.shirt.name = garment.name;
            this.shirt.brand = garment.brand;
            this.shirt.userId = this.currentUser.id;
            this.shirt.size = shirt.size;
            console.log(this.shirt);
        }
        this.processing = true;
        this.garmentService.saveGarment(this.pant, this.shirt)
            .subscribe(function (data) {
            var task;
            task = _this.imageService.multipartUpload(data.toString(), _this.imageString);
            task.on("complete", function (data) {
                _this.processing = false;
                _this.responseSuccess();
            });
            task.on("error", function (data) {
                _this.processing = false;
                _this.responseError();
            });
        });
    };
    AddGarmentComponent.prototype.checkFormFilled = function (garment, pant, shirt) {
        if (!garment.name || !garment.brand || !this.imageString) {
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
        var _this = this;
        dialogs.alert({
            title: "Garment added",
            message: "You have successfully added a garment to your collection!",
            okButtonText: "OK"
        }).then(function () {
            _this.router.navigate(['/home/']);
        });
    };
    AddGarmentComponent.prototype.responseError = function () {
        console.log('Something went wrong');
        this.router.navigate(['/error']);
    };
    AddGarmentComponent.prototype.navigateBack = function () {
        this.router.navigate(['/home']);
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
            image_service_1.ImageService, router_1.Router])
    ], AddGarmentComponent);
    return AddGarmentComponent;
}());
exports.AddGarmentComponent = AddGarmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdEQUE2QztBQUM3QywwQ0FBdUM7QUFDdkMsMENBQXlDO0FBQ3pDLDRDQUEyQztBQUMzQyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLHdFQUFvRTtBQUNwRSwwQ0FBdUM7QUFHdkMsc0RBQXdEO0FBQ3hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVoQyxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM3QyxxREFBdUQ7QUFFdkQsdURBQXVEO0FBT3ZEO0lBeUJFLDZCQUFvQixjQUE4QixFQUFVLFdBQXdCLEVBQzFFLFlBQTBCLEVBQVUsTUFBYztRQUR4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF4QjdELFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNqQyxTQUFJLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFFL0IsZUFBVSxHQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUkvQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixjQUFT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TEM7QUF2TFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtQYW50fSBmcm9tICcuLi8uLi8uLi9kdG8vcGFudCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7IFNoaXJ0IH0gZnJvbSAnLi4vLi4vLi4vZHRvL3NoaXJ0JztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG52YXIgZnMgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG4vL2xldCBpbWFnZXBpY2tlciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIilcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtYWRkLWdhcm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FkZC1nYXJtZW50LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRHYXJtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuIHBhbnQ6IFBhbnQgPSBuZXcgUGFudCgpO1xyXG4gc2hpcnQ6IFNoaXJ0ID0gbmV3IFNoaXJ0KCk7XHJcbiBjdXJyZW50VXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XHJcbiBzZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiBjYXRlZ29yaWVzOiBTdHJpbmdbXSA9IFtcIlBhbnRcIiwgXCJTaGlydFwiXTtcclxuIGNhdGVnb3J5U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHBhbnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gc2hpcnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gcmVzdWx0OiBudW1iZXI7XHJcbiB1cGxvYWRlZEltYWdlOiBhbnk7XHJcblxyXG4gaW1hZ2VBc3NldHMgPSBbXTtcclxuIGltYWdlU3JjOiBhbnk7XHJcbiBpc1NpbmdsZU1vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcclxuIHByZXZpZXdTaXplOiBudW1iZXIgPSAzMDA7XHJcbiBpbWFnZVN0cmluZzogc3RyaW5nO1xyXG4gYnVzeTogYm9vbGVhbiA9IHRydWU7XHJcbiBwcm9jZXNzaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gQFZpZXdDaGlsZCgnZGQnKSBkcm9wRG93bjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldE1vY2tQYW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb2NrUGFudCgpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgdGhpcy5nYXJtZW50Lm5hbWUgPSBcIm5pZXV3ZSBicm9la1wiO1xyXG4gICAgdGhpcy5nYXJtZW50LmJyYW5kID1cIlZlcm8gTW9kYVwiO1xyXG4gICAgdGhpcy5nYXJtZW50LnVzZXJJZCA9IDE7XHJcbiAgICB0aGlzLnBhbnQud2Fpc3RTaXplID0gMjc7XHJcbiAgICB0aGlzLnBhbnQud2Fpc3RMZW5ndGggPSAzNDtcclxuICB9XHJcblxyXG4gIGdldEltYWdlKCkge1xyXG4gICAgdGhpcy5pc1NpbmdsZU1vZGUgPSB0cnVlO1xyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgY29udGV4dFxyXG4gICAgICAuYXV0aG9yaXplKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5pbWFnZUFzc2V0cyA9IFtdO1xyXG4gICAgICAgICAgdGhhdC5pbWFnZVNyYyA9IG51bGw7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTdHJpbmcgPSBzZWxlY3Rpb25bMF0uX2FuZHJvaWQ7XHJcbiAgICAgICAgICB0aGF0LmltYWdlU3JjID0gdGhhdC5pc1NpbmdsZU1vZGUgJiYgc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xyXG5cclxuICAgICAgICAgIC8vIHNldCB0aGUgaW1hZ2VzIHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBhc3NldHMgd2l0aCBvcHRpbWFsIHNpemVzIChvcHRpbWl6ZSBtZW1vcnkgdXNhZ2UpXHJcbiAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy53aWR0aCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHRoYXQuaW1hZ2VBc3NldHMgPSBzZWxlY3Rpb247XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZCA9IHRydWU7XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMSkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQsIHBhbnQ6IFBhbnQsIHNoaXJ0OiBTaGlydCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXJ0U2VsZWN0ZWQgJiYgIXRoaXMucGFudFNlbGVjdGVkKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJUeXBlIG1pc3NpbmdcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgYSBnYXJtZW50IHR5cGVcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQsIHBhbnQsIHNoaXJ0KSkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiRmllbGQocykgZW1wdHlcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dCBmaWVsZHNcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYW50U2VsZWN0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnBhbnQubmFtZSA9IGdhcm1lbnQubmFtZTtcclxuICAgICAgdGhpcy5wYW50LmJyYW5kID0gZ2FybWVudC5icmFuZDtcclxuICAgICAgdGhpcy5wYW50LnVzZXJJZCA9IHRoaXMuY3VycmVudFVzZXIuaWQ7XHJcbiAgICAgIHRoaXMucGFudC53YWlzdFNpemUgPSBwYW50LndhaXN0U2l6ZTtcclxuICAgICAgdGhpcy5wYW50LndhaXN0TGVuZ3RoID0gcGFudC53YWlzdExlbmd0aDtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wYW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc2hpcnRTZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuc2hpcnQubmFtZSA9IGdhcm1lbnQubmFtZTtcclxuICAgICAgICB0aGlzLnNoaXJ0LmJyYW5kID0gZ2FybWVudC5icmFuZDtcclxuICAgICAgICB0aGlzLnNoaXJ0LnVzZXJJZCA9IHRoaXMuY3VycmVudFVzZXIuaWQ7XHJcbiAgICAgICAgdGhpcy5zaGlydC5zaXplID0gc2hpcnQuc2l6ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXJ0KTtcclxuICAgIH1cclxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5zYXZlR2FybWVudCh0aGlzLnBhbnQsIHRoaXMuc2hpcnQpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrOiBiZ2h0dHAuVGFzaztcclxuICAgICAgICB0YXNrID0gdGhpcy5pbWFnZVNlcnZpY2UubXVsdGlwYXJ0VXBsb2FkKGRhdGEudG9TdHJpbmcoKSwgdGhpcy5pbWFnZVN0cmluZyk7XHJcbiAgICAgICAgdGFzay5vbihcImNvbXBsZXRlXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlU3VjY2VzcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhc2sub24oXCJlcnJvclwiLCBkYXRhID0+IHtcclxuICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvcigpO1xyXG4gICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0Zvcm1GaWxsZWQoZ2FybWVudDogR2FybWVudCwgcGFudDogUGFudCwgc2hpcnQ6IFNoaXJ0KSB7XHJcbiAgICBpZiAoIWdhcm1lbnQubmFtZSB8fCAhZ2FybWVudC5icmFuZCB8fCAhdGhpcy5pbWFnZVN0cmluZykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaGlydFNlbGVjdGVkKSB7XHJcbiAgICAgIGlmICghc2hpcnQuc2l6ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXJ0KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMucGFudFNlbGVjdGVkKSB7XHJcbiAgICAgIGlmICghcGFudC53YWlzdFNpemUgfHwgIXBhbnQud2Fpc3RMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VTdWNjZXNzKCkge1xyXG4gICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgdGl0bGU6IFwiR2FybWVudCBhZGRlZFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFkZGVkIGEgZ2FybWVudCB0byB5b3VyIGNvbGxlY3Rpb24hXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lLyddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VFcnJvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
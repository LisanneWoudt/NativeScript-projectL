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
                console.log("rEADY YA");
                console.log(data);
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
        this.result = 1;
        this.router.navigate(['/home/' + this.result]);
    };
    AddGarmentComponent.prototype.responseError = function () {
        console.log('Something went wrong');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdEQUE2QztBQUM3QywwQ0FBdUM7QUFDdkMsMENBQXlDO0FBQ3pDLDRDQUEyQztBQUMzQyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLHdFQUFvRTtBQUNwRSwwQ0FBdUM7QUFHdkMsc0RBQXdEO0FBQ3hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVoQyxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU3Qyx1REFBdUQ7QUFPdkQ7SUF5QkUsNkJBQW9CLGNBQThCLEVBQVUsV0FBd0IsRUFDMUUsWUFBMEIsRUFBVSxNQUFjO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXhCN0QsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2pDLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUUvQixlQUFVLEdBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBSS9CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBVyxFQUFFLENB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Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7UGFudH0gZnJvbSAnLi4vLi4vLi4vZHRvL3BhbnQnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQgeyBTaGlydCB9IGZyb20gJy4uLy4uLy4uL2R0by9zaGlydCc7XHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5pbXBvcnQge0ltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbnZhciBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XHJcblxyXG4vL2xldCBpbWFnZXBpY2tlciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIilcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtYWRkLWdhcm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FkZC1nYXJtZW50LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRHYXJtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcclxuIHBhbnQ6IFBhbnQgPSBuZXcgUGFudCgpO1xyXG4gc2hpcnQ6IFNoaXJ0ID0gbmV3IFNoaXJ0KCk7XHJcbiBjdXJyZW50VXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XHJcbiBzZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiBjYXRlZ29yaWVzOiBTdHJpbmdbXSA9IFtcIlBhbnRcIiwgXCJTaGlydFwiXTtcclxuIGNhdGVnb3J5U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHBhbnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gc2hpcnRTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gcmVzdWx0OiBudW1iZXI7XHJcbiB1cGxvYWRlZEltYWdlOiBhbnk7XHJcblxyXG4gaW1hZ2VBc3NldHMgPSBbXTtcclxuIGltYWdlU3JjOiBhbnk7XHJcbiBpc1NpbmdsZU1vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcclxuIHByZXZpZXdTaXplOiBudW1iZXIgPSAzMDA7XHJcbiBpbWFnZVN0cmluZzogc3RyaW5nO1xyXG4gYnVzeTogYm9vbGVhbiA9IHRydWU7XHJcbiBwcm9jZXNzaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gQFZpZXdDaGlsZCgnZGQnKSBkcm9wRG93bjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRNb2NrUGFudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja1BhbnQoKSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIHRoaXMuZ2FybWVudC5uYW1lID0gXCJuaWV1d2UgYnJvZWtcIjtcclxuICAgIHRoaXMuZ2FybWVudC5icmFuZCA9XCJWZXJvIE1vZGFcIjtcclxuICAgIHRoaXMuZ2FybWVudC51c2VySWQgPSAxO1xyXG4gICAgdGhpcy5wYW50LndhaXN0U2l6ZSA9IDI3O1xyXG4gICAgdGhpcy5wYW50LndhaXN0TGVuZ3RoID0gMzQ7XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZSgpIHtcclxuICAgIHRoaXMuaXNTaW5nbGVNb2RlID0gdHJ1ZTtcclxuICAgIHZhciBtaWxsaXNlY29uZHMgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIGNvbnRleHRcclxuICAgICAgLmF1dGhvcml6ZSgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VBc3NldHMgPSBbXTtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VTcmMgPSBudWxsO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltYWdlU3RyaW5nID0gc2VsZWN0aW9uWzBdLl9hbmRyb2lkO1xyXG4gICAgICAgICAgdGhhdC5pbWFnZVNyYyA9IHRoYXQuaXNTaW5nbGVNb2RlICYmIHNlbGVjdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0aW9uWzBdIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAvLyBzZXQgdGhlIGltYWdlcyB0byBiZSBsb2FkZWQgZnJvbSB0aGUgYXNzZXRzIHdpdGggb3B0aW1hbCBzaXplcyAob3B0aW1pemUgbWVtb3J5IHVzYWdlKVxyXG4gICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMud2lkdGggPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMuaGVpZ2h0ID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGF0LmltYWdlQXNzZXRzID0gc2VsZWN0aW9uO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMCkge1xyXG4gICAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IDEpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IG51bGwpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkR2FybWVudChnYXJtZW50OiBHYXJtZW50LCBwYW50OiBQYW50LCBzaGlydDogU2hpcnQpIHtcclxuICAgIGlmICghdGhpcy5zaGlydFNlbGVjdGVkICYmICF0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiVHlwZSBtaXNzaW5nXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgZ2FybWVudCB0eXBlXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJ9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmNoZWNrRm9ybUZpbGxlZChnYXJtZW50LCBwYW50LCBzaGlydCkpIHtcclxuICAgICAgYWxlcnQoe3RpdGxlOiBcIkZpZWxkKHMpIGVtcHR5XCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXQgZmllbGRzXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJ9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFudFNlbGVjdGVkID09IHRydWUpIHtcclxuICAgICAgdGhpcy5wYW50Lm5hbWUgPSBnYXJtZW50Lm5hbWU7XHJcbiAgICAgIHRoaXMucGFudC5icmFuZCA9IGdhcm1lbnQuYnJhbmQ7XHJcbiAgICAgIHRoaXMucGFudC51c2VySWQgPSB0aGlzLmN1cnJlbnRVc2VyLmlkO1xyXG4gICAgICB0aGlzLnBhbnQud2Fpc3RTaXplID0gcGFudC53YWlzdFNpemU7XHJcbiAgICAgIHRoaXMucGFudC53YWlzdExlbmd0aCA9IHBhbnQud2Fpc3RMZW5ndGg7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnNoaXJ0U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnNoaXJ0Lm5hbWUgPSBnYXJtZW50Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5zaGlydC5icmFuZCA9IGdhcm1lbnQuYnJhbmQ7XHJcbiAgICAgICAgdGhpcy5zaGlydC51c2VySWQgPSB0aGlzLmN1cnJlbnRVc2VyLmlkO1xyXG4gICAgICAgIHRoaXMuc2hpcnQuc2l6ZSA9IHNoaXJ0LnNpemU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlydCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLnNhdmVHYXJtZW50KHRoaXMucGFudCwgdGhpcy5zaGlydClcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgICAgIHRhc2sgPSB0aGlzLmltYWdlU2VydmljZS5tdWx0aXBhcnRVcGxvYWQoZGF0YS50b1N0cmluZygpLCB0aGlzLmltYWdlU3RyaW5nKTtcclxuICAgICAgICB0YXNrLm9uKFwiY29tcGxldGVcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwickVBRFkgWUFcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMucmVzcG9uc2VTdWNjZXNzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFzay5vbihcImVycm9yXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yKCk7XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9ybUZpbGxlZChnYXJtZW50OiBHYXJtZW50LCBwYW50OiBQYW50LCBzaGlydDogU2hpcnQpIHtcclxuICAgIGlmICghZ2FybWVudC5uYW1lIHx8ICFnYXJtZW50LmJyYW5kIHx8ICF0aGlzLmltYWdlU3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoaXJ0U2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKCFzaGlydC5zaXplKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2hpcnQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5wYW50U2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKCFwYW50LndhaXN0U2l6ZSB8fCAhcGFudC53YWlzdExlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZVN1Y2Nlc3MoKSB7XHJcbiAgICB0aGlzLnJlc3VsdCA9IDE7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lLycgKyB0aGlzLnJlc3VsdF0pO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VFcnJvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xyXG4gIH1cclxuICBcclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
var imagepicker = require("nativescript-imagepicker");
var fs = require("file-system");
//let imagepicker = require("nativescript-imagepicker")
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
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
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
            console.log("Selection done: " + JSON.stringify(selection));
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
        this.garmentService.saveGarment(this.pant, this.shirt)
            .subscribe(function (data) {
            console.log(data);
            _this.garmentService.multipartUpload(data.toString(), _this.imageString);
        }, function (errorResponse) {
            _this.responseError();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdEQUE2QztBQUM3QywwQ0FBdUM7QUFDdkMsMENBQXlDO0FBQ3pDLDRDQUEyQztBQUMzQyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLDBDQUF1QztBQUd2QyxzREFBd0Q7QUFDeEQsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRWhDLHVEQUF1RDtBQU92RDtJQXVCRSw2QkFBb0IsY0FBOEIsRUFBVSxXQUF3QixFQUMxRSxNQUFjO1FBREosbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDMUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCekIsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2pDLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUUvQixlQUFVLEdBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBSS9CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFPekIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJ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RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTVJZTtRQUFoQixnQkFBUyxDQUFDLElBQUksQ0FBQztrQ0FBVyxpQkFBVTt5REFBQztJQXJCMUIsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBeUJvQyxnQ0FBYyxFQUF1QiwwQkFBVztZQUNsRSxlQUFNO09BeEJiLG1CQUFtQixDQW1LL0I7SUFBRCwwQkFBQztDQUFBLEFBbktELElBbUtDO0FBbktZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7UGFudH0gZnJvbSAnLi4vLi4vLi4vZHRvL3BhbnQnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQgeyBTaGlydCB9IGZyb20gJy4uLy4uLy4uL2R0by9zaGlydCc7XHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5cclxuLy9sZXQgaW1hZ2VwaWNrZXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCIpXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWFkZC1nYXJtZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGQtZ2FybWVudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkR2FybWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gZ2FybWVudDogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XHJcbiBwYW50OiBQYW50ID0gbmV3IFBhbnQoKTtcclxuIHNoaXJ0OiBTaGlydCA9IG5ldyBTaGlydCgpO1xyXG4gY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xyXG4gc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gY2F0ZWdvcmllczogU3RyaW5nW10gPSBbXCJQYW50XCIsIFwiU2hpcnRcIl07XHJcbiBjYXRlZ29yeVNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiBwYW50U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHNoaXJ0U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHJlc3VsdDogbnVtYmVyO1xyXG4gdXBsb2FkZWRJbWFnZTogYW55O1xyXG5cclxuIGltYWdlQXNzZXRzID0gW107XHJcbiBpbWFnZVNyYzogYW55O1xyXG4gaXNTaW5nbGVNb2RlOiBib29sZWFuID0gdHJ1ZTtcclxuIHRodW1iU2l6ZTogbnVtYmVyID0gODA7XHJcbiBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMzAwO1xyXG4gaW1hZ2VTdHJpbmc6IHN0cmluZztcclxuXHJcbiBAVmlld0NoaWxkKCdkZCcpIGRyb3BEb3duOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhcm1lbnRTZXJ2aWNlOiBHYXJtZW50U2VydmljZSwgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0TW9ja1BhbnQoKTtcclxuICB9XHJcblxyXG4gIGdldE1vY2tQYW50KCkge1xyXG4gICAgdGhpcy5jYXRlZ29yeVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMucGFudFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICB0aGlzLmdhcm1lbnQubmFtZSA9IFwibmlldXdlIGJyb2VrXCI7XHJcbiAgICB0aGlzLmdhcm1lbnQuYnJhbmQgPVwiVmVybyBNb2RhXCI7XHJcbiAgICB0aGlzLmdhcm1lbnQudXNlcklkID0gMTtcclxuICAgIHRoaXMucGFudC53YWlzdFNpemUgPSAyNztcclxuICAgIHRoaXMucGFudC53YWlzdExlbmd0aCA9IDM0O1xyXG4gIH1cclxuICBnZXRJbWFnZSgpIHtcclxuICAgIHRoaXMuaXNTaW5nbGVNb2RlID0gdHJ1ZTtcclxuICAgIHZhciBtaWxsaXNlY29uZHMgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIGNvbnRleHRcclxuICAgICAgLmF1dGhvcml6ZSgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VBc3NldHMgPSBbXTtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VTcmMgPSBudWxsO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGlvbiBkb25lOiBcIiArIEpTT04uc3RyaW5naWZ5KHNlbGVjdGlvbikpO1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVN0cmluZyA9IHNlbGVjdGlvblswXS5fYW5kcm9pZDtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VTcmMgPSB0aGF0LmlzU2luZ2xlTW9kZSAmJiBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gc2V0IHRoZSBpbWFnZXMgdG8gYmUgbG9hZGVkIGZyb20gdGhlIGFzc2V0cyB3aXRoIG9wdGltYWwgc2l6ZXMgKG9wdGltaXplIG1lbW9yeSB1c2FnZSlcclxuICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLndpZHRoID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLmhlaWdodCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdGhhdC5pbWFnZUFzc2V0cyA9IHNlbGVjdGlvbjtcclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgdGhpcy5jYXRlZ29yeVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IDApIHtcclxuICAgICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAxKSB7XHJcbiAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEdhcm1lbnQoZ2FybWVudDogR2FybWVudCwgcGFudDogUGFudCwgc2hpcnQ6IFNoaXJ0KSB7XHJcbiAgICBpZiAoIXRoaXMuc2hpcnRTZWxlY3RlZCAmJiAhdGhpcy5wYW50U2VsZWN0ZWQpIHtcclxuICAgICAgYWxlcnQoe3RpdGxlOiBcIlR5cGUgbWlzc2luZ1wiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIHNlbGVjdCBhIGdhcm1lbnQgdHlwZVwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wifSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5jaGVja0Zvcm1GaWxsZWQoZ2FybWVudCwgcGFudCwgc2hpcnQpKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJGaWVsZChzKSBlbXB0eVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0IGZpZWxkc1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wifSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5kYXRhU2VydmljZS5nZXRNb2NrVXNlcigpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhbnRTZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMucGFudC5uYW1lID0gZ2FybWVudC5uYW1lO1xyXG4gICAgICB0aGlzLnBhbnQuYnJhbmQgPSBnYXJtZW50LmJyYW5kO1xyXG4gICAgICB0aGlzLnBhbnQudXNlcklkID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgICAgdGhpcy5wYW50LndhaXN0U2l6ZSA9IHBhbnQud2Fpc3RTaXplO1xyXG4gICAgICB0aGlzLnBhbnQud2Fpc3RMZW5ndGggPSBwYW50LndhaXN0TGVuZ3RoO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBhbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zaGlydFNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zaGlydC5uYW1lID0gZ2FybWVudC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2hpcnQuYnJhbmQgPSBnYXJtZW50LmJyYW5kO1xyXG4gICAgICAgIHRoaXMuc2hpcnQudXNlcklkID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgICAgICB0aGlzLnNoaXJ0LnNpemUgPSBzaGlydC5zaXplO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2FybWVudFNlcnZpY2Uuc2F2ZUdhcm1lbnQodGhpcy5wYW50LCB0aGlzLnNoaXJ0KVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FybWVudFNlcnZpY2UubXVsdGlwYXJ0VXBsb2FkKGRhdGEudG9TdHJpbmcoKSwgdGhpcy5pbWFnZVN0cmluZyk7XHJcbiAgICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gIGNoZWNrRm9ybUZpbGxlZChnYXJtZW50OiBHYXJtZW50LCBwYW50OiBQYW50LCBzaGlydDogU2hpcnQpIHtcclxuICAgIGlmICghZ2FybWVudC5uYW1lIHx8ICFnYXJtZW50LmJyYW5kIHx8ICF0aGlzLmltYWdlU3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoaXJ0U2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKCFzaGlydC5zaXplKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2hpcnQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5wYW50U2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKCFwYW50LndhaXN0U2l6ZSB8fCAhcGFudC53YWlzdExlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZVN1Y2Nlc3MoKSB7XHJcbiAgICB0aGlzLnJlc3VsdCA9IDE7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lLycgKyB0aGlzLnJlc3VsdF0pO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VFcnJvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
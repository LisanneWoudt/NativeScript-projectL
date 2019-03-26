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
var dialogs = require("tns-core-modules/ui/dialogs");
//let imagepicker = require("nativescript-imagepicker")
var AddGarmentComponent = /** @class */ (function () {
    function AddGarmentComponent(garmentService, dataService, imageService, router) {
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
    }
    AddGarmentComponent.prototype.ngOnInit = function () {
        this.getMockGarment();
    };
    AddGarmentComponent.prototype.getMockGarment = function () {
        this.categorySelected = true;
        this.pantSelected = true;
        this.selectedIndex = 0;
        this.garment.name = "nieuwe broek";
        this.garment.brand = "Vero Moda";
        this.garment.userId = 1;
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
    AddGarmentComponent.prototype.addGarment = function (garment) {
        var _this = this;
        if (!this.shirtSelected && !this.pantSelected) {
            alert({ title: "Type missing",
                message: "Please select a garment type",
                okButtonText: "Ok" });
            return;
        }
        if (!this.checkFormFilled(garment)) {
            alert({ title: "Field(s) empty",
                message: "Please fill all input fields",
                okButtonText: "Ok" });
            return;
        }
        this.currentUser = this.dataService.getMockUser();
        this.garment = garment;
        if (this.pantSelected) {
            this.garment.garmentType = 'PANT';
        }
        else {
            this.garment.garmentType = 'SHIRT';
        }
        this.processing = true;
        this.garmentService.saveGarment(this.garment)
            .subscribe(function (data) {
            var task;
            task = _this.imageService.multipartUpload(data.id.toString(), _this.imageString);
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
    AddGarmentComponent.prototype.checkFormFilled = function (garment) {
        if (!garment.name || !garment.brand || !this.imageString || !garment.size) {
            return false;
        }
        if (this.pantSelected) {
            if (!garment.length_size) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdEQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsNEVBQXdFO0FBQ3hFLHNFQUFrRTtBQUNsRSx3RUFBb0U7QUFDcEUsMENBQXVDO0FBR3ZDLHNEQUF3RDtBQUN4RCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFaEMscURBQXVEO0FBQ3ZELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0MscURBQXVEO0FBRXZELHVEQUF1RDtBQU92RDtJQXVCRSw2QkFBb0IsY0FBOEIsRUFBVSxXQUF3QixFQUMxRSxZQUEwQixFQUFVLE1BQWM7UUFEeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDMUUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEI3RCxZQUFPLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUE7UUFDaEMsZ0JBQVcsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBRS9CLGVBQVUsR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFJL0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFN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TSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBUUM7UUFQQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLGVBQWU7WUFDdEIsT0FBTyxFQUFFLDJEQUEyRDtZQUNwRSxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUEvSWU7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQVcsaUJBQVU7eURBQUM7SUFyQjFCLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQXlCb0MsZ0NBQWMsRUFBdUIsMEJBQVc7WUFDNUQsNEJBQVksRUFBa0IsZUFBTTtPQXhCakQsbUJBQW1CLENBc0svQjtJQUFELDBCQUFDO0NBQUEsQUF0S0QsSUFzS0M7QUF0S1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2R0by91c2VyJztcclxuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG52YXIgZnMgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG4vL2xldCBpbWFnZXBpY2tlciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIilcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtYWRkLWdhcm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FkZC1nYXJtZW50LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRHYXJtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiBnYXJtZW50OiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKVxyXG4gY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xyXG4gc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gY2F0ZWdvcmllczogU3RyaW5nW10gPSBbXCJQYW50XCIsIFwiU2hpcnRcIl07XHJcbiBjYXRlZ29yeVNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiBwYW50U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHNoaXJ0U2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuIHJlc3VsdDogbnVtYmVyO1xyXG4gdXBsb2FkZWRJbWFnZTogYW55O1xyXG5cclxuIGltYWdlQXNzZXRzID0gW107XHJcbiBpbWFnZVNyYzogYW55O1xyXG4gaXNTaW5nbGVNb2RlOiBib29sZWFuID0gdHJ1ZTtcclxuIHRodW1iU2l6ZTogbnVtYmVyID0gODA7XHJcbiBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMzAwO1xyXG4gaW1hZ2VTdHJpbmc6IHN0cmluZztcclxuIGJ1c3k6IGJvb2xlYW4gPSB0cnVlO1xyXG4gcHJvY2Vzc2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuIEBWaWV3Q2hpbGQoJ2RkJykgZHJvcERvd246IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRNb2NrR2FybWVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja0dhcm1lbnQoKSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIHRoaXMuZ2FybWVudC5uYW1lID0gXCJuaWV1d2UgYnJvZWtcIjtcclxuICAgIHRoaXMuZ2FybWVudC5icmFuZCA9XCJWZXJvIE1vZGFcIjtcclxuICAgIHRoaXMuZ2FybWVudC51c2VySWQgPSAxO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoKSB7XHJcbiAgICB0aGlzLmlzU2luZ2xlTW9kZSA9IHRydWU7XHJcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICBjb250ZXh0XHJcbiAgICAgIC5hdXRob3JpemUoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LmltYWdlQXNzZXRzID0gW107XHJcbiAgICAgICAgICB0aGF0LmltYWdlU3JjID0gbnVsbDtcclxuICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVN0cmluZyA9IHNlbGVjdGlvblswXS5fYW5kcm9pZDtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VTcmMgPSB0aGF0LmlzU2luZ2xlTW9kZSAmJiBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gc2V0IHRoZSBpbWFnZXMgdG8gYmUgbG9hZGVkIGZyb20gdGhlIGFzc2V0cyB3aXRoIG9wdGltYWwgc2l6ZXMgKG9wdGltaXplIG1lbW9yeSB1c2FnZSlcclxuICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLndpZHRoID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLmhlaWdodCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdGhhdC5pbWFnZUFzc2V0cyA9IHNlbGVjdGlvbjtcclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgdGhpcy5jYXRlZ29yeVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IDApIHtcclxuICAgICAgICB0aGlzLnBhbnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAxKSB7XHJcbiAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJncy5uZXdJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2hpcnRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEdhcm1lbnQoZ2FybWVudDogR2FybWVudCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXJ0U2VsZWN0ZWQgJiYgIXRoaXMucGFudFNlbGVjdGVkKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJUeXBlIG1pc3NpbmdcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgYSBnYXJtZW50IHR5cGVcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIn0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQpKSB7XHJcbiAgICAgIGFsZXJ0KHt0aXRsZTogXCJGaWVsZChzKSBlbXB0eVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0IGZpZWxkc1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wifSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5kYXRhU2VydmljZS5nZXRNb2NrVXNlcigpO1xyXG5cclxuICAgIHRoaXMuZ2FybWVudCA9IGdhcm1lbnQ7XHJcbiAgICBpZiAodGhpcy5wYW50U2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5nYXJtZW50Lmdhcm1lbnRUeXBlID0gJ1BBTlQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2FybWVudC5nYXJtZW50VHlwZSA9ICdTSElSVCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmdhcm1lbnRTZXJ2aWNlLnNhdmVHYXJtZW50KHRoaXMuZ2FybWVudClcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgICAgIHRhc2sgPSB0aGlzLmltYWdlU2VydmljZS5tdWx0aXBhcnRVcGxvYWQoZGF0YS5pZC50b1N0cmluZygpLCB0aGlzLmltYWdlU3RyaW5nKTtcclxuICAgICAgICB0YXNrLm9uKFwiY29tcGxldGVcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucmVzcG9uc2VTdWNjZXNzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFzay5vbihcImVycm9yXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yKCk7XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9ybUZpbGxlZChnYXJtZW50OiBHYXJtZW50KSB7XHJcbiAgICBpZiAoIWdhcm1lbnQubmFtZSB8fCAhZ2FybWVudC5icmFuZCB8fCAhdGhpcy5pbWFnZVN0cmluZyB8fCAhZ2FybWVudC5zaXplKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBpZiAoIWdhcm1lbnQubGVuZ3RoX3NpemUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VTdWNjZXNzKCkge1xyXG4gICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgdGl0bGU6IFwiR2FybWVudCBhZGRlZFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFkZGVkIGEgZ2FybWVudCB0byB5b3VyIGNvbGxlY3Rpb24hXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lLyddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VFcnJvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
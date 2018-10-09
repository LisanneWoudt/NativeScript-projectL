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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdhcm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWdhcm1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdEQUE2QztBQUM3QywwQ0FBdUM7QUFDdkMsMENBQXlDO0FBQ3pDLDRDQUEyQztBQUMzQyw0RUFBd0U7QUFDeEUsc0VBQWtFO0FBQ2xFLDBDQUF1QztBQUd2QyxzREFBd0Q7QUFDeEQsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR2hDLHVEQUF1RDtBQU92RDtJQXVCRSw2QkFBb0IsY0FBOEIsRUFBVSxXQUF3QixFQUMxRSxNQUFjO1FBREosbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDMUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCekIsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2pDLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUUvQixlQUFVLEdBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBSS9CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFPekIsQ0FBQztJQUdELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRSxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyw0Q0FBYyxHQUF0QixVQUF1QixPQUFPO1FBQTlCLGlCQXlCQztRQXhCRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsT0FBTzthQUNOLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsU0FBUztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRWhGLHlGQUF5RjtZQUN6RixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztnQkFDL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDOUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuRixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBUSxHQUFmLFVBQWdCLElBQW1DO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxPQUFnQixFQUFFLElBQVUsRUFBRSxLQUFZO1FBQXJELGlCQXdDRztRQXZDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYztnQkFDMUIsT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCO2dCQUM1QixPQUFPLEVBQUUsOEJBQThCO2dCQUN2QyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWxELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuRCxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsRUFBRSxVQUFBLGFBQWE7WUFDWixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBRUgsNkNBQWUsR0FBZixVQUFnQixPQUFnQixFQUFFLElBQVUsRUFBRSxLQUFZO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTlJZTtRQUFoQixnQkFBUyxDQUFDLElBQUksQ0FBQztrQ0FBVyxpQkFBVTt5REFBQztJQXJCMUIsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBeUJvQyxnQ0FBYyxFQUF1QiwwQkFBVztZQUNsRSxlQUFNO09BeEJiLG1CQUFtQixDQXFLL0I7SUFBRCwwQkFBQztDQUFBLEFBcktELElBcUtDO0FBcktZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7UGFudH0gZnJvbSAnLi4vLi4vLi4vZHRvL3BhbnQnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQgeyBTaGlydCB9IGZyb20gJy4uLy4uLy4uL2R0by9zaGlydCc7XHJcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5pbXBvcnQge0ltYWdlU291cmNlLCBmcm9tRmlsZSwgZnJvbVJlc291cmNlLCBmcm9tQmFzZTY0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuXHJcbi8vbGV0IGltYWdlcGlja2VyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1hZGQtZ2FybWVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWRkLWdhcm1lbnQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZEdhcm1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuIGdhcm1lbnQ6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xyXG4gcGFudDogUGFudCA9IG5ldyBQYW50KCk7XHJcbiBzaGlydDogU2hpcnQgPSBuZXcgU2hpcnQoKTtcclxuIGN1cnJlbnRVc2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcclxuIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuIGNhdGVnb3JpZXM6IFN0cmluZ1tdID0gW1wiUGFudFwiLCBcIlNoaXJ0XCJdO1xyXG4gY2F0ZWdvcnlTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gcGFudFNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiBzaGlydFNlbGVjdGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiByZXN1bHQ6IG51bWJlcjtcclxuIHVwbG9hZGVkSW1hZ2U6IGFueTtcclxuXHJcbiBpbWFnZUFzc2V0cyA9IFtdO1xyXG4gaW1hZ2VTcmM6IGFueTtcclxuIGlzU2luZ2xlTW9kZTogYm9vbGVhbiA9IHRydWU7XHJcbiB0aHVtYlNpemU6IG51bWJlciA9IDgwO1xyXG4gcHJldmlld1NpemU6IG51bWJlciA9IDMwMDtcclxuIGltYWdlU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gQFZpZXdDaGlsZCgnZGQnKSBkcm9wRG93bjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYXJtZW50U2VydmljZTogR2FybWVudFNlcnZpY2UsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRNb2NrUGFudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja1BhbnQoKSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIHRoaXMuZ2FybWVudC5uYW1lID0gXCJuaWV1d2UgYnJvZWtcIjtcclxuICAgIHRoaXMuZ2FybWVudC5icmFuZCA9XCJWZXJvIE1vZGFcIjtcclxuICAgIHRoaXMuZ2FybWVudC51c2VySWQgPSAxO1xyXG4gICAgdGhpcy5wYW50LndhaXN0U2l6ZSA9IDI3O1xyXG4gICAgdGhpcy5wYW50LndhaXN0TGVuZ3RoID0gMzQ7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEltYWdlKCkge1xyXG4gICAgdGhpcy5pc1NpbmdsZU1vZGUgPSB0cnVlO1xyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgY29udGV4dFxyXG4gICAgICAuYXV0aG9yaXplKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5pbWFnZUFzc2V0cyA9IFtdO1xyXG4gICAgICAgICAgdGhhdC5pbWFnZVNyYyA9IG51bGw7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0aW9uIGRvbmU6IFwiICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0aW9uKSk7XHJcbiAgICAgICAgICB0aGlzLmltYWdlU3RyaW5nID0gc2VsZWN0aW9uWzBdLl9hbmRyb2lkO1xyXG4gICAgICAgICAgdGhhdC5pbWFnZVNyYyA9IHRoYXQuaXNTaW5nbGVNb2RlICYmIHNlbGVjdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0aW9uWzBdIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAvLyBzZXQgdGhlIGltYWdlcyB0byBiZSBsb2FkZWQgZnJvbSB0aGUgYXNzZXRzIHdpdGggb3B0aW1hbCBzaXplcyAob3B0aW1pemUgbWVtb3J5IHVzYWdlKVxyXG4gICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMud2lkdGggPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMuaGVpZ2h0ID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGF0LmltYWdlQXNzZXRzID0gc2VsZWN0aW9uO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgaWYgKGFyZ3MubmV3SW5kZXggPT0gMCkge1xyXG4gICAgICAgIHRoaXMucGFudFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoaXJ0U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IDEpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLm5ld0luZGV4ID09IG51bGwpIHtcclxuICAgICAgdGhpcy5zaGlydFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYW50U2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkR2FybWVudChnYXJtZW50OiBHYXJtZW50LCBwYW50OiBQYW50LCBzaGlydDogU2hpcnQpIHtcclxuICAgIGlmICghdGhpcy5zaGlydFNlbGVjdGVkICYmICF0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBhbGVydCh7dGl0bGU6IFwiVHlwZSBtaXNzaW5nXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgZ2FybWVudCB0eXBlXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJ9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmNoZWNrRm9ybUZpbGxlZChnYXJtZW50LCBwYW50LCBzaGlydCkpIHtcclxuICAgICAgYWxlcnQoe3RpdGxlOiBcIkZpZWxkKHMpIGVtcHR5XCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXQgZmllbGRzXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJ9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1vY2tVc2VyKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFudFNlbGVjdGVkID09IHRydWUpIHtcclxuICAgICAgdGhpcy5wYW50Lm5hbWUgPSBnYXJtZW50Lm5hbWU7XHJcbiAgICAgIHRoaXMucGFudC5icmFuZCA9IGdhcm1lbnQuYnJhbmQ7XHJcbiAgICAgIHRoaXMucGFudC51c2VySWQgPSB0aGlzLmN1cnJlbnRVc2VyLmlkO1xyXG4gICAgICB0aGlzLnBhbnQud2Fpc3RTaXplID0gcGFudC53YWlzdFNpemU7XHJcbiAgICAgIHRoaXMucGFudC53YWlzdExlbmd0aCA9IHBhbnQud2Fpc3RMZW5ndGg7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnNoaXJ0U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnNoaXJ0Lm5hbWUgPSBnYXJtZW50Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5zaGlydC5icmFuZCA9IGdhcm1lbnQuYnJhbmQ7XHJcbiAgICAgICAgdGhpcy5zaGlydC51c2VySWQgPSB0aGlzLmN1cnJlbnRVc2VyLmlkO1xyXG4gICAgICAgIHRoaXMuc2hpcnQuc2l6ZSA9IHNoaXJ0LnNpemU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlydCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5zYXZlR2FybWVudCh0aGlzLnBhbnQsIHRoaXMuc2hpcnQpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nYXJtZW50U2VydmljZS5tdWx0aXBhcnRVcGxvYWQoZGF0YS50b1N0cmluZygpLCB0aGlzLmltYWdlU3RyaW5nKTtcclxuICAgICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgY2hlY2tGb3JtRmlsbGVkKGdhcm1lbnQ6IEdhcm1lbnQsIHBhbnQ6IFBhbnQsIHNoaXJ0OiBTaGlydCkge1xyXG4gICAgaWYgKCFnYXJtZW50Lm5hbWUgfHwgIWdhcm1lbnQuYnJhbmQgfHwgIXRoaXMuaW1hZ2VTdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hpcnRTZWxlY3RlZCkge1xyXG4gICAgICBpZiAoIXNoaXJ0LnNpemUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaGlydCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnBhbnRTZWxlY3RlZCkge1xyXG4gICAgICBpZiAoIXBhbnQud2Fpc3RTaXplIHx8ICFwYW50LndhaXN0TGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlc3BvbnNlU3VjY2VzcygpIHtcclxuICAgIHRoaXMucmVzdWx0ID0gMTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvJyArIHRoaXMucmVzdWx0XSk7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZUVycm9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
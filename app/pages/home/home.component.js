"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_1 = require("../../dto/garment");
var user_1 = require("../../dto/user");
var data_service_1 = require("../../shared/services/data.service");
var garment_service_1 = require("../../shared/services/garment.service");
var image_service_1 = require("../../shared/services/image.service");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, route, garmentService, imageService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.garmentService = garmentService;
        this.imageService = imageService;
        this.garments = new Array();
        this.promises = new Array();
        this.currentUser = new user_1.User();
        this.garment1 = new garment_1.Garment();
        this.garment2 = new garment_1.Garment();
        this.success = 0;
        this.thumbSize = 120;
        this.previewSize = 120;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.success = +params['success']; // (+) converts string 'id' to a number
        });
        this.currentUser = this.dataService.getMockUser();
        this.getAllGarments();
    };
    HomeComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.processing = true;
        this.garmentService.getAllGarments().subscribe(function (data) {
            _this.garments = data;
            // Get image of garment one by one
            for (var int in _this.garments) {
                _this.count = +int;
                _this.promises.push(_this.search(_this.garments[_this.count].id, _this.count));
            }
            Promise.all(_this.promises)
                .then(function (res) {
                console.log('All promises returned');
                //  this.processing = false;
            }, function (error) {
                console.log('Error');
            });
        }, function (errorResponse) {
            console.error(errorResponse);
        });
    };
    HomeComponent.prototype.search = function (garmentId, int) {
        var _this = this;
        console.log("searching with garmentID = " + garmentId);
        this.imageService.downloadImage(garmentId).then(function (res) {
            console.log('success');
            _this.garments[int].image = res;
            _this.imageSrc = res;
            return res;
        }, function (msg) {
            console.log("error!");
        });
    };
    HomeComponent.prototype.getMockGarments = function () {
        this.garment1.name = 'GARMENT1';
        this.garment1.brand = 'H&M';
        this.garment1.size = 'XS';
        this.garment2.name = 'GARMENT2';
        this.garment2.brand = 'Zara';
        this.garment2.size = 'M';
        this.garments.push(this.garment1);
        this.garments.push(this.garment2);
    };
    HomeComponent.prototype.navigateToAddGarment = function () {
        this.success = 0;
        this.router.navigate(['/garments/add']);
    };
    HomeComponent.prototype.navigateToGarments = function () {
        this.success = 0;
        this.router.navigate(['/garments/all']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router, router_1.ActivatedRoute,
            garment_service_1.GarmentService, image_service_1.ImageService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUscUVBQWtFO0FBQ2xFLDBDQUF5RDtBQVF6RDtJQWdCSSx1QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsS0FBcUIsRUFDekYsY0FBOEIsRUFBVSxZQUEwQjtRQUR4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN6RixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWQ1RSxhQUFRLEdBQWMsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQWUsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUVsQyxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBR3BCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFLMUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQU5ELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENB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QUVELDBDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBekZRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBaUJtQywwQkFBVyxFQUFrQixlQUFNLEVBQWlCLHVCQUFjO1lBQ3pFLGdDQUFjLEVBQXdCLDRCQUFZO09BakJuRSxhQUFhLENBMEZ6QjtJQUFELG9CQUFDO0NBQUEsQUExRkQsSUEwRkM7QUExRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHYXJtZW50IH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2R0by91c2VyJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheSgpO1xuICAgIHByb21pc2VzOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5KCk7XG4gICAgY3VycmVudFVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuICAgIGdhcm1lbnQxOiBHYXJtZW50ID0gbmV3IEdhcm1lbnQoKTtcbiAgICBnYXJtZW50MjogR2FybWVudCA9IG5ldyBHYXJtZW50KCk7XG4gICAgaWNvbjogYW55O1xuICAgIHN1Y2Nlc3M6IG51bWJlciA9IDA7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBpbWFnZVNyYzogYW55O1xuICAgIHRodW1iU2l6ZTogbnVtYmVyID0gMTIwO1xuICAgIHByZXZpZXdTaXplOiBudW1iZXIgPSAxMjA7XG4gICAgcHJvY2Vzc2luZzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgIHRoaXMuc3VjY2VzcyA9ICtwYXJhbXNbJ3N1Y2Nlc3MnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgIH0pO1xuXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0TW9ja1VzZXIoKTtcbiAgICB0aGlzLmdldEFsbEdhcm1lbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsR2FybWVudHMoKSB7XG4gICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cygpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nYXJtZW50cyA9IGRhdGE7XG5cbiAgICAgICAgLy8gR2V0IGltYWdlIG9mIGdhcm1lbnQgb25lIGJ5IG9uZVxuICAgICAgICBmb3IgKGxldCBpbnQgaW4gdGhpcy5nYXJtZW50cykge1xuICAgICAgICAgIHRoaXMuY291bnQgPSAraW50O1xuICAgICAgICAgIHRoaXMucHJvbWlzZXMucHVzaCh0aGlzLnNlYXJjaCh0aGlzLmdhcm1lbnRzW3RoaXMuY291bnRdLmlkLCB0aGlzLmNvdW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnByb21pc2VzKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGwgcHJvbWlzZXMgcmV0dXJuZWQnKTtcbiAgICAgICAgLy8gIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgICAgIH0pXG5cbiAgICAgIH0sIGVycm9yUmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VhcmNoKGdhcm1lbnRJZDogbnVtYmVyLCBpbnQ6IG51bWJlcikge1xuICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgd2l0aCBnYXJtZW50SUQgPSBcIiArIGdhcm1lbnRJZCk7XG5cbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRvd25sb2FkSW1hZ2UoZ2FybWVudElkKS50aGVuKFxuICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XG4gICAgICAgICAgdGhpcy5pbWFnZVNyYyA9IHJlcztcbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbXNnID0+IHtcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgfVxuXG4gICAgZ2V0TW9ja0dhcm1lbnRzKCkge1xuICAgICB0aGlzLmdhcm1lbnQxLm5hbWUgPSAnR0FSTUVOVDEnO1xuICAgICB0aGlzLmdhcm1lbnQxLmJyYW5kID0gJ0gmTSc7XG4gICAgIHRoaXMuZ2FybWVudDEuc2l6ZSA9ICdYUyc7XG4gICAgIHRoaXMuZ2FybWVudDIubmFtZSA9ICdHQVJNRU5UMic7XG4gICAgIHRoaXMuZ2FybWVudDIuYnJhbmQgPSAnWmFyYSc7XG4gICAgIHRoaXMuZ2FybWVudDIuc2l6ZSA9ICdNJztcbiAgICAgdGhpcy5nYXJtZW50cy5wdXNoKHRoaXMuZ2FybWVudDEpO1xuICAgICB0aGlzLmdhcm1lbnRzLnB1c2godGhpcy5nYXJtZW50Mik7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0FkZEdhcm1lbnQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3MgPSAwO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ2FybWVudHMvYWRkJ10pO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG9HYXJtZW50cygpIHtcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDA7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nYXJtZW50cy9hbGwnXSk7XG4gICAgfVxufVxuIl19
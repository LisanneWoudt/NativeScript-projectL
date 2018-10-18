"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var garment_service_1 = require("../../../shared/services/garment.service");
var router_1 = require("@angular/router");
var AllGarmentsComponent = /** @class */ (function () {
    function AllGarmentsComponent(garmentService, router) {
        this.garmentService = garmentService;
        this.router = router;
        this.garments = new Array;
        this.garmentsFinal = new Array;
        this.previewSize = 100;
        this.isBusy = true;
    }
    AllGarmentsComponent.prototype.ngOnInit = function () {
        this.getAllGarments();
    };
    AllGarmentsComponent.prototype.getAllGarments = function () {
        var _this = this;
        this.garmentService.getAllGarments().subscribe(function (data) {
            console.log(data);
            _this.garments = data;
            for (var int in _this.garments) {
                _this.count = +int;
                console.log(_this.count);
                console.log(_this.count + 1);
                _this.search(_this.garments[_this.count].id, _this.count, _this.garments.length);
            }
            _this.isBusy = false;
        }, function (errorResponse) {
            console.error(errorResponse);
            //  this.router.navigate(['/error']);
        });
    };
    AllGarmentsComponent.prototype.search = function (garmentId, int, length) {
        var _this = this;
        console.log("searching with garmentID = " + garmentId);
        var httpModule = require("http");
        httpModule.getImage("http://192.168.178.18:8080/images/download/" + garmentId).then(function (res) {
            console.log('success');
            _this.garments[int].image = res;
            _this.imageSrc = res;
            if (int == length) {
                _this.isBusy = false;
            }
            return res;
        }, function (msg) {
            console.log("error!");
        });
    };
    AllGarmentsComponent.prototype.navigateToSendSwap = function (garmentId) {
        console.log('garmentId = ' + garmentId);
        this.router.navigate(['/swap-request', garmentId]);
    };
    AllGarmentsComponent = __decorate([
        core_1.Component({
            selector: "app-all-garments",
            moduleId: module.id,
            templateUrl: "./all-garments.component.html",
            styleUrls: ["../../home/home.component.css"]
        }),
        __metadata("design:paramtypes", [garment_service_1.GarmentService, router_1.Router])
    ], AllGarmentsComponent);
    return AllGarmentsComponent;
}());
exports.AllGarmentsComponent = AllGarmentsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWdhcm1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbC1nYXJtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFakQsNEVBQXdFO0FBQ3pFLDBDQUF1QztBQVN2QztJQVNFLDhCQUFvQixjQUE4QixFQUFVLE1BQWM7UUFBdEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVAzRSxhQUFRLEdBQWMsSUFBSSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBYyxJQUFJLEtBQUssQ0FBQztRQUVyQyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixXQUFNLEdBQVksSUFBSSxDQUFDO0lBRXdELENBQUM7SUFFL0UsdUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNkNBQWMsR0FBZDtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFFOUIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlFLENBQUM7WUFDRCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUUsVUFBQSxhQUFhO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixxQ0FBcUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QscUNBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsR0FBVyxFQUFFLE1BQWM7UUFBckQsaUJBa0JFO1FBakJBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxRQUFRLENBQUMsNkNBQTZDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUMvRSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUVuQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDWixDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQ0YsQ0FBQTtJQUNKLENBQUM7SUFHRixpREFBa0IsR0FBbEIsVUFBbUIsU0FBaUI7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBM0RVLG9CQUFvQjtRQVBoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQVdvQyxnQ0FBYyxFQUFrQixlQUFNO09BVC9ELG9CQUFvQixDQTZEaEM7SUFBRCwyQkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG4gaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtYWxsLWdhcm1lbnRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hbGwtZ2FybWVudHMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi4vLi4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGxHYXJtZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gZ2FybWVudHM6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuIGdhcm1lbnRzRmluYWw6IEdhcm1lbnRbXSA9IG5ldyBBcnJheTtcclxuIGltYWdlU3JjOiBhbnk7XHJcbiBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMTAwO1xyXG4gY291bnQ6IG51bWJlcjtcclxuIGlzQnVzeTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FybWVudFNlcnZpY2U6IEdhcm1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMuZ2V0QWxsR2FybWVudHMoKTtcclxuICB9XHJcblxyXG4gIGdldEFsbEdhcm1lbnRzKCkge1xyXG4gICAgdGhpcy5nYXJtZW50U2VydmljZS5nZXRBbGxHYXJtZW50cygpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuZ2FybWVudHMgPSBkYXRhO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW50IGluIHRoaXMuZ2FybWVudHMpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCA9ICtpbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3VudCArIDEpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoKHRoaXMuZ2FybWVudHNbdGhpcy5jb3VudF0uaWQsIHRoaXMuY291bnQsIHRoaXMuZ2FybWVudHMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xyXG4gICAgfSwgZXJyb3JSZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XHJcbiAgICAvLyAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBzZWFyY2goZ2FybWVudElkOiBudW1iZXIsIGludDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgd2l0aCBnYXJtZW50SUQgPSBcIiArIGdhcm1lbnRJZCk7XHJcbiAgICBjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcImh0dHBcIik7XHJcbiAgICBodHRwTW9kdWxlLmdldEltYWdlKFwiaHR0cDovLzE5Mi4xNjguMTc4LjE4OjgwODAvaW1hZ2VzL2Rvd25sb2FkL1wiICsgZ2FybWVudElkKS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7IC8vIFN1Y2Nlc3NcclxuICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB0aGlzLmdhcm1lbnRzW2ludF0uaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNyYyA9IHJlcztcclxuXHJcbiAgICAgICAgIGlmIChpbnQgPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNnID0+IHsgLy8gRXJyb3JcclxuICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciFcIilcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgfVxyXG5cclxuXHJcbiAgbmF2aWdhdGVUb1NlbmRTd2FwKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2FybWVudElkID0gJyArIGdhcm1lbnRJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zd2FwLXJlcXVlc3QnLCBnYXJtZW50SWRdKVxyXG4gIH1cclxuXHJcbn1cclxuIl19
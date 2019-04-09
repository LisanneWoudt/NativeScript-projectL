"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var garment_1 = require("../../dto/garment");
var DataService = /** @class */ (function () {
    function DataService() {
        this.garment = new garment_1.Garment();
    }
    DataService.prototype.getUser = function () {
        return this.user;
    };
    DataService.prototype.getMockUser = function () {
        this.user = new user_1.User();
        this.user.id = 1;
        return this.user;
    };
    DataService.prototype.getMockUserId = function () {
        return 1;
    };
    DataService.prototype.setUser = function (user) {
        this.user = user;
    };
    DataService.prototype.getSwapRequest = function () {
        return this.swapRequest;
    };
    DataService.prototype.setSwapRequest = function (swapRequest) {
        this.swapRequest = swapRequest;
    };
    DataService.prototype.getGarment = function () {
        return this.garment;
    };
    DataService.prototype.setGarment = function (garment) {
        this.garment = garment;
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVDQUFzQztBQUV0Qyw2Q0FBNEM7QUFHNUM7SUFNRTtRQUZBLFlBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUdqQyxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLElBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFdBQXdCO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBMUNVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBNEN2QjtJQUFELGtCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi9kdG8vZ2FybWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0O1xyXG4gIGdhcm1lbnQ6IEdhcm1lbnQgPSBuZXcgR2FybWVudCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja1VzZXIoKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmlkID0gMTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy51c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja1VzZXJJZCgpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih1c2VyOiBVc2VyKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3dhcFJlcXVlc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zd2FwUmVxdWVzdDtcclxuICB9XHJcblxyXG4gIHNldFN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCkge1xyXG4gICAgdGhpcy5zd2FwUmVxdWVzdCA9IHN3YXBSZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0R2FybWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZ2FybWVudDtcclxuICB9XHJcblxyXG4gIHNldEdhcm1lbnQoZ2FybWVudDogR2FybWVudCkge1xyXG4gICAgdGhpcy5nYXJtZW50ID0gZ2FybWVudDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
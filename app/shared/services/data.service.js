"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var DataService = /** @class */ (function () {
    function DataService() {
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
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVDQUFzQztBQUl0QztJQUtFO0lBQ0EsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxXQUF3QjtRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBakNVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBbUN2QjtJQUFELGtCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7IFN3YXBSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja1VzZXIoKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmlkID0gMTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy51c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja1VzZXJJZCgpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih1c2VyOiBVc2VyKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3dhcFJlcXVlc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zd2FwUmVxdWVzdDtcclxuICB9XHJcblxyXG4gIHNldFN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCkge1xyXG4gICAgdGhpcy5zd2FwUmVxdWVzdCA9IHN3YXBSZXF1ZXN0O1xyXG4gIH1cclxuXHJcbn1cclxuIl19
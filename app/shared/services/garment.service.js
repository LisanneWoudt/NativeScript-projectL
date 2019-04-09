"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.21:8080/garments/';
    }
    GarmentService.prototype.getAllGarments = function (urlpart, userId) {
        return this.http.get(this.baseUrl + urlpart + userId);
    };
    GarmentService.prototype.getGarment = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    GarmentService.prototype.saveGarment = function (garment, urlString) {
        return this.http.post(this.baseUrl + urlString, garment);
    };
    GarmentService.prototype.deleteGarment = function (id) {
        return this.http.delete(this.baseUrl + 'delete/' + id);
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUFnRDtBQUloRDtJQUlJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyxvQ0FBb0MsQ0FBQztJQUVoQixDQUFDO0lBRXhDLHVDQUFjLEdBQWQsVUFBZSxPQUFlLEVBQUUsTUFBYztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBZ0IsRUFBRSxTQUFpQjtRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxFQUFVO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBcEJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2FybWVudFNlcnZpY2Uge1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vMTkyLjE2OC4yLjIxOjgwODAvZ2FybWVudHMvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgZ2V0QWxsR2FybWVudHModXJscGFydDogc3RyaW5nLCB1c2VySWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIHVybHBhcnQgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhcm1lbnQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlR2FybWVudChnYXJtZW50OiBHYXJtZW50LCB1cmxTdHJpbmc6IFN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyB1cmxTdHJpbmcsIGdhcm1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUdhcm1lbnQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYmFzZVVybCArICdkZWxldGUvJyArIGlkKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
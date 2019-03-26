"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.180:8080/garments/';
    }
    GarmentService.prototype.getAllGarments = function (urlpart, userId) {
        return this.http.get(this.baseUrl + urlpart + userId);
    };
    GarmentService.prototype.getGarment = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    GarmentService.prototype.saveGarment = function (garment) {
        return this.http.post(this.baseUrl + 'add', garment);
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUFnRDtBQUloRDtJQUlJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyxxQ0FBcUMsQ0FBQztJQUVqQixDQUFDO0lBRXhDLHVDQUFjLEdBQWQsVUFBZSxPQUFlLEVBQUUsTUFBYztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBZ0I7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFoQlEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUtpQixpQkFBVTtPQUozQixjQUFjLENBaUIxQjtJQUFELHFCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi9kdG8vZ2FybWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50U2VydmljZSB7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly8xOTIuMTY4LjIuMTgwOjgwODAvZ2FybWVudHMvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgZ2V0QWxsR2FybWVudHModXJscGFydDogc3RyaW5nLCB1c2VySWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIHVybHBhcnQgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhcm1lbnQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlR2FybWVudChnYXJtZW50OiBHYXJtZW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhZGQnLCBnYXJtZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=
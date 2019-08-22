"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environment");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
        this.baseUrl = 'garments/';
    }
    GarmentService.prototype.getAllGarments = function (urlpart, userIdLimit) {
        return this.http.get(environment_1.environment.host + this.baseUrl + urlpart + userIdLimit);
    };
    GarmentService.prototype.getGarment = function (id) {
        return this.http.get(environment_1.environment.host + this.baseUrl + id);
    };
    GarmentService.prototype.saveGarment = function (garment, urlString) {
        return this.http.post(environment_1.environment.host + this.baseUrl + urlString, garment);
    };
    GarmentService.prototype.deleteGarment = function (id) {
        return this.http.delete(environment_1.environment.host + this.baseUrl + 'delete/' + id);
    };
    GarmentService.prototype.getGarmentTypes = function () {
        return this.http.get(environment_1.environment.host + this.baseUrl + 'garmentTypes');
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUFnRDtBQUVoRCxpREFBZ0Q7QUFHaEQ7SUFJSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxZQUFPLEdBQVcsV0FBVyxDQUFDO0lBRVMsQ0FBQztJQUV4Qyx1Q0FBYyxHQUFkLFVBQWUsT0FBZSxFQUFFLFdBQW1CO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFnQixFQUFFLFNBQWlCO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEVBQVU7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXhCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLGNBQWMsQ0F5QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50U2VydmljZSB7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJ2dhcm1lbnRzLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIGdldEFsbEdhcm1lbnRzKHVybHBhcnQ6IHN0cmluZywgdXNlcklkTGltaXQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGVudmlyb25tZW50Lmhvc3QgKyB0aGlzLmJhc2VVcmwgKyB1cmxwYXJ0ICsgdXNlcklkTGltaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhcm1lbnQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGVudmlyb25tZW50Lmhvc3QgKyB0aGlzLmJhc2VVcmwgKyBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUdhcm1lbnQoZ2FybWVudDogR2FybWVudCwgdXJsU3RyaW5nOiBTdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoZW52aXJvbm1lbnQuaG9zdCArIHRoaXMuYmFzZVVybCArIHVybFN0cmluZywgZ2FybWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlR2FybWVudChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoZW52aXJvbm1lbnQuaG9zdCArIHRoaXMuYmFzZVVybCArICdkZWxldGUvJyArIGlkKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEdhcm1lbnRUeXBlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChlbnZpcm9ubWVudC5ob3N0ICsgdGhpcy5iYXNlVXJsICsgJ2dhcm1lbnRUeXBlcycpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
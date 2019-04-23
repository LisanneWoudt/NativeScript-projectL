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
    GarmentService.prototype.getAllGarments = function (urlpart, userId) {
        return this.http.get(environment_1.environment.host + this.baseUrl + urlpart + userId);
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
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUFnRDtBQUVoRCxpREFBZ0Q7QUFHaEQ7SUFJSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxZQUFPLEdBQVcsV0FBVyxDQUFDO0lBRVMsQ0FBQztJQUV4Qyx1Q0FBYyxHQUFkLFVBQWUsT0FBZSxFQUFFLE1BQWM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBaUI7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsRUFBVTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQXBCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLGNBQWMsQ0FxQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50U2VydmljZSB7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJ2dhcm1lbnRzLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIGdldEFsbEdhcm1lbnRzKHVybHBhcnQ6IHN0cmluZywgdXNlcklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChlbnZpcm9ubWVudC5ob3N0ICsgdGhpcy5iYXNlVXJsICsgdXJscGFydCArIHVzZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FybWVudChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZW52aXJvbm1lbnQuaG9zdCArIHRoaXMuYmFzZVVybCArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlR2FybWVudChnYXJtZW50OiBHYXJtZW50LCB1cmxTdHJpbmc6IFN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChlbnZpcm9ubWVudC5ob3N0ICsgdGhpcy5iYXNlVXJsICsgdXJsU3RyaW5nLCBnYXJtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVHYXJtZW50KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShlbnZpcm9ubWVudC5ob3N0ICsgdGhpcy5iYXNlVXJsICsgJ2RlbGV0ZS8nICsgaWQpXHJcbiAgICB9XHJcbn1cclxuIl19
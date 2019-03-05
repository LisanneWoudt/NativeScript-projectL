"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.78:8080/garments/';
    }
    GarmentService.prototype.getAllGarments = function (urlpart, userId) {
        return this.http.get(this.baseUrl + urlpart + userId);
    };
    GarmentService.prototype.getGarment = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    GarmentService.prototype.saveGarment = function (pant, shirt) {
        if (pant != null) {
            return this.http.post(this.baseUrl + 'add/pant', pant);
        }
        else {
            return this.http.post(this.baseUrl + 'add/shirt', shirt);
        }
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUFnRDtBQU1oRDtJQUlJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyxvQ0FBb0MsQ0FBQztJQUVoQixDQUFDO0lBRXhDLHVDQUFjLEdBQWQsVUFBZSxPQUFlLEVBQUUsTUFBYztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBVSxFQUFFLEtBQVk7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0gsQ0FBQztJQXJCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcclxuaW1wb3J0IHtQYW50fSBmcm9tICcuLi8uLi9kdG8vcGFudCc7XHJcbmltcG9ydCB7U2hpcnR9IGZyb20gJy4uLy4uL2R0by9zaGlydCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHYXJtZW50U2VydmljZSB7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly8xOTIuMTY4LjIuNzg6ODA4MC9nYXJtZW50cy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBnZXRBbGxHYXJtZW50cyh1cmxwYXJ0OiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgdXJscGFydCArIHVzZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FybWVudChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVHYXJtZW50KHBhbnQ6IFBhbnQsIHNoaXJ0OiBTaGlydCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIGlmIChwYW50ICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ2FkZC9wYW50JywgcGFudCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhZGQvc2hpcnQnLCBzaGlydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
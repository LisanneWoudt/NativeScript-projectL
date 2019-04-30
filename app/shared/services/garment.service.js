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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUFnRDtBQUVoRCxpREFBZ0Q7QUFHaEQ7SUFJSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxZQUFPLEdBQVcsV0FBVyxDQUFDO0lBRVMsQ0FBQztJQUV4Qyx1Q0FBYyxHQUFkLFVBQWUsT0FBZSxFQUFFLE1BQWM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBaUI7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsRUFBVTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBeEJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnZ2FybWVudHMvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgZ2V0QWxsR2FybWVudHModXJscGFydDogc3RyaW5nLCB1c2VySWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGVudmlyb25tZW50Lmhvc3QgKyB0aGlzLmJhc2VVcmwgKyB1cmxwYXJ0ICsgdXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHYXJtZW50KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChlbnZpcm9ubWVudC5ob3N0ICsgdGhpcy5iYXNlVXJsICsgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQsIHVybFN0cmluZzogU3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGVudmlyb25tZW50Lmhvc3QgKyB0aGlzLmJhc2VVcmwgKyB1cmxTdHJpbmcsIGdhcm1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUdhcm1lbnQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGVudmlyb25tZW50Lmhvc3QgKyB0aGlzLmJhc2VVcmwgKyAnZGVsZXRlLycgKyBpZClcclxuICAgIH1cclxuXHJcbiAgICBnZXRHYXJtZW50VHlwZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZW52aXJvbm1lbnQuaG9zdCArIHRoaXMuYmFzZVVybCArICdnYXJtZW50VHlwZXMnKTtcclxuICAgIH1cclxufVxyXG4iXX0=
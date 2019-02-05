"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SwapService = /** @class */ (function () {
    function SwapService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.178.19:8080/swaprequests/';
    }
    SwapService.prototype.sendSwapRequest = function (swapRequest) {
        return this.http.post(this.baseUrl + 'save', swapRequest);
    };
    SwapService.prototype.getUserSwapRequests = function (swapUrl, userId) {
        return this.http.get(this.baseUrl + 'user/' + swapUrl + userId);
    };
    SwapService.prototype.updateSwapRequest = function (swapRequest) {
        return this.http.post(this.baseUrl + 'update', swapRequest);
    };
    SwapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SwapService);
    return SwapService;
}());
exports.SwapService = SwapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3dhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVywwQ0FBMEMsQ0FBQztJQUV0QixDQUFDO0lBRXhDLHFDQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZSxFQUFFLE1BQWM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLFdBQXdCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBaEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsV0FBVyxDQWlCdkI7SUFBRCxrQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1N3YXBSZXF1ZXN0fSBmcm9tICcuLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN3YXBTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMTc4LjE5OjgwODAvc3dhcHJlcXVlc3RzLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIHNlbmRTd2FwUmVxdWVzdChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ3NhdmUnLCBzd2FwUmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlclN3YXBSZXF1ZXN0cyhzd2FwVXJsOiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ3VzZXIvJyArIHN3YXBVcmwgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAndXBkYXRlJywgc3dhcFJlcXVlc3QpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
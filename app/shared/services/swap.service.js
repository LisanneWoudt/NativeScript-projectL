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
    SwapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SwapService);
    return SwapService;
}());
exports.SwapService = SwapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3dhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVywwQ0FBMEMsQ0FBQztJQUV0QixDQUFDO0lBRXhDLHFDQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZSxFQUFFLE1BQWM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBWlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUtpQixpQkFBVTtPQUozQixXQUFXLENBYXZCO0lBQUQsa0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtTd2FwUmVxdWVzdH0gZnJvbSAnLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTd2FwU2VydmljZSB7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly8xOTIuMTY4LjE3OC4xOTo4MDgwL3N3YXByZXF1ZXN0cy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBzZW5kU3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdzYXZlJywgc3dhcFJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJTd2FwUmVxdWVzdHMoc3dhcFVybDogc3RyaW5nLCB1c2VySWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICd1c2VyLycgKyBzd2FwVXJsICsgdXNlcklkKTtcclxuICAgIH1cclxufVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SwapService = /** @class */ (function () {
    function SwapService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.154:8080/swaprequests/';
    }
    SwapService.prototype.sendSwapRequest = function (swapRequest) {
        return this.http.post(this.baseUrl + 'save', swapRequest);
    };
    SwapService.prototype.getUserSwapRequests = function (userId) {
        return this.http.get(this.baseUrl + 'all');
    };
    SwapService.prototype.updateSwapRequest = function (swapRequest) {
        return this.http.post(this.baseUrl + 'update', swapRequest);
    };
    SwapService.prototype.updateSwapRequestStatusBool = function (swapRequestId) {
        return this.http.get(this.baseUrl + 'update-statusbool/' + swapRequestId);
    };
    SwapService.prototype.countSwapRequests = function (userId) {
        return this.http.get(this.baseUrl + 'count/' + userId);
    };
    SwapService.prototype.countNewSwapRequests = function (userId) {
        return this.http.get(this.baseUrl + 'count/new/' + userId);
    };
    SwapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SwapService);
    return SwapService;
}());
exports.SwapService = SwapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3dhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyx5Q0FBeUMsQ0FBQztJQUVyQixDQUFDO0lBRXhDLHFDQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsTUFBYztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLFdBQXdCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsaURBQTJCLEdBQTNCLFVBQTRCLGFBQXFCO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsTUFBYztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVELDBDQUFvQixHQUFwQixVQUFxQixNQUFjO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBM0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsV0FBVyxDQTRCdkI7SUFBRCxrQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1N3YXBSZXF1ZXN0fSBmcm9tICcuLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN3YXBTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMi4xNTQ6ODA4MC9zd2FwcmVxdWVzdHMvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgc2VuZFN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnc2F2ZScsIHN3YXBSZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyU3dhcFJlcXVlc3RzKHVzZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2FsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAndXBkYXRlJywgc3dhcFJlcXVlc3QpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU3dhcFJlcXVlc3RTdGF0dXNCb29sKHN3YXBSZXF1ZXN0SWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICd1cGRhdGUtc3RhdHVzYm9vbC8nICsgc3dhcFJlcXVlc3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnRTd2FwUmVxdWVzdHModXNlcklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnY291bnQvJyArIHVzZXJJZClcclxuICAgIH1cclxuXHJcbiAgICBjb3VudE5ld1N3YXBSZXF1ZXN0cyh1c2VySWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdjb3VudC9uZXcvJyArIHVzZXJJZClcclxuICAgIH1cclxufVxyXG4iXX0=
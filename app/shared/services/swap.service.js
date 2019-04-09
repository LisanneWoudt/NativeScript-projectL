"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SwapService = /** @class */ (function () {
    function SwapService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.21:8080/swaprequests/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3dhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyx3Q0FBd0MsQ0FBQztJQUVwQixDQUFDO0lBRXhDLHFDQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsTUFBYztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLFdBQXdCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsaURBQTJCLEdBQTNCLFVBQTRCLGFBQXFCO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsTUFBYztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVELDBDQUFvQixHQUFwQixVQUFxQixNQUFjO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBM0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsV0FBVyxDQTRCdkI7SUFBRCxrQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1N3YXBSZXF1ZXN0fSBmcm9tICcuLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN3YXBTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMi4yMTo4MDgwL3N3YXByZXF1ZXN0cy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBzZW5kU3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdzYXZlJywgc3dhcFJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJTd2FwUmVxdWVzdHModXNlcklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnYWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3dhcFJlcXVlc3Qoc3dhcFJlcXVlc3Q6IFN3YXBSZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICd1cGRhdGUnLCBzd2FwUmVxdWVzdCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTd2FwUmVxdWVzdFN0YXR1c0Jvb2woc3dhcFJlcXVlc3RJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ3VwZGF0ZS1zdGF0dXNib29sLycgKyBzd2FwUmVxdWVzdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudFN3YXBSZXF1ZXN0cyh1c2VySWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdjb3VudC8nICsgdXNlcklkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50TmV3U3dhcFJlcXVlc3RzKHVzZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2NvdW50L25ldy8nICsgdXNlcklkKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
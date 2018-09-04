"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SwapService = /** @class */ (function () {
    function SwapService(http) {
        this.http = http;
    }
    SwapService.prototype.sendSwapRequest = function (swapRequest) {
        return this.http.post('http://192.168.178.18:8080/swap/request', swapRequest);
    };
    SwapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SwapService);
    return SwapService;
}());
exports.SwapService = SwapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3dhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUVJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QyxxQ0FBZSxHQUFmLFVBQWdCLFdBQXdCO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBTlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixXQUFXLENBT3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtTd2FwUmVxdWVzdH0gZnJvbSAnLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTd2FwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIHNlbmRTd2FwUmVxdWVzdChzd2FwUmVxdWVzdDogU3dhcFJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL3N3YXAvcmVxdWVzdCcsIHN3YXBSZXF1ZXN0KTtcclxuICAgIH1cclxufVxyXG4iXX0=
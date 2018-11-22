"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SwapService = /** @class */ (function () {
    function SwapService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.178.18:8080/swaprequest/';
    }
    SwapService.prototype.sendSwapRequest = function (swapRequest) {
        return this.http.post(this.baseUrl + 'send', swapRequest);
    };
    SwapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SwapService);
    return SwapService;
}());
exports.SwapService = SwapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3dhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyx5Q0FBeUMsQ0FBQztJQUVyQixDQUFDO0lBRXhDLHFDQUFlLEdBQWYsVUFBZ0IsV0FBd0I7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFSUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLFdBQVcsQ0FVdkI7SUFBRCxrQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1N3YXBSZXF1ZXN0fSBmcm9tICcuLi8uLi9kdG8vc3dhcC1yZXF1ZXN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN3YXBTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMTc4LjE4OjgwODAvc3dhcHJlcXVlc3QvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgc2VuZFN3YXBSZXF1ZXN0KHN3YXBSZXF1ZXN0OiBTd2FwUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnc2VuZCcsIHN3YXBSZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
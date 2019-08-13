"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environment");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (user) {
        return this.http.post(environment_1.environment.host + "users/login", user, httpOptions);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsNkNBQTZEO0FBQzdELGlEQUFnRDtBQUVoRCxJQUFNLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakUsQ0FBQztBQUdGO0lBRUUsc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXhDLDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQU5VLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FHZSxpQkFBVTtPQUZ6QixZQUFZLENBT3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9kdG8vdXNlcic7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudCc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGxvZ2luKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGVudmlyb25tZW50Lmhvc3QgKyBcInVzZXJzL2xvZ2luXCIsIHVzZXIsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19
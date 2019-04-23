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
        console.log(user);
        return this.http.post(environment_1.environment.host + "user/login", user, httpOptions);
        //
        //    return this.http.get(this.url + '/user/login', httpOptions);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsNkNBQTZEO0FBQzdELGlEQUFnRDtBQUVoRCxJQUFNLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakUsQ0FBQztBQUdGO0lBRUUsc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXhDLDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQVcsQ0FBQyxJQUFJLEdBQUcsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxRSxFQUFFO1FBQ04sa0VBQWtFO0lBQ2hFLENBQUM7SUFUVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBR2UsaUJBQVU7T0FGekIsWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnQnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBsb2dpbih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGVudmlyb25tZW50Lmhvc3QgKyBcInVzZXIvbG9naW5cIiwgdXNlciwgaHR0cE9wdGlvbnMpO1xyXG4gICAgLy9cclxuLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyAnL3VzZXIvbG9naW4nLCBodHRwT3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
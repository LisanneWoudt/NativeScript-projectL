"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (user) {
        console.log(user);
        return this.http.post("http://192.168.178.19:8080/user/login", user, httpOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsNkNBQTZEO0FBRTdELElBQU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRSxDQUFDO0FBR0Y7SUFFRSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsNEJBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEYsRUFBRTtRQUNOLGtFQUFrRTtJQUNoRSxDQUFDO0lBVFUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUdlLGlCQUFVO09BRnpCLFlBQVksQ0FVeEI7SUFBRCxtQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL2R0by91c2VyJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBsb2dpbih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMTc4LjE5OjgwODAvdXNlci9sb2dpblwiLCB1c2VyLCBodHRwT3B0aW9ucyk7XHJcbiAgICAvL1xyXG4vLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArICcvdXNlci9sb2dpbicsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19
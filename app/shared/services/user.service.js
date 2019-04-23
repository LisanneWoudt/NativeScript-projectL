"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environment");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (userId) {
        return this.http.get(environment_1.environment.host + "users/" + userId);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUU3RCxpREFBZ0Q7QUFHaEQ7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsNkJBQU8sR0FBUCxVQUFRLE1BQWM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBTlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixXQUFXLENBUXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtTd2FwUmVxdWVzdH0gZnJvbSAnLi4vLi4vZHRvL3N3YXAtcmVxdWVzdCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBnZXRVc2VyKHVzZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZW52aXJvbm1lbnQuaG9zdCArIFwidXNlcnMvXCIgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
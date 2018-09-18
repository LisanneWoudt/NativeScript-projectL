"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.178.18:8080/garments/';
    }
    GarmentService.prototype.getAllGarments = function () {
        return this.http.get(this.baseUrl + 'all');
        //    return this.http.get(this.baseUrl + 'garments');
    };
    GarmentService.prototype.getGarment = function (id) {
        //      return this.http.get(this.baseUrl + 'garments/' + id);
        return this.http.get(this.baseUrl + id);
    };
    GarmentService.prototype.addPant = function (pant) {
        return this.http.post(this.baseUrl + 'add/pant', pant);
    };
    GarmentService.prototype.addShirt = function (shirt) {
        return this.http.post(this.baseUrl + 'add/shirt', shirt);
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQU03RDtJQUlJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyxzQ0FBc0MsQ0FBQztJQUVsQixDQUFDO0lBRXhDLHVDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMvQyxzREFBc0Q7SUFDcEQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ3JCLDhEQUE4RDtRQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLElBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBWTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXRCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLGNBQWMsQ0F1QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7UGFudH0gZnJvbSAnLi4vLi4vZHRvL3BhbnQnO1xyXG5pbXBvcnQge1NoaXJ0fSBmcm9tICcuLi8uLi9kdG8vc2hpcnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2FybWVudFNlcnZpY2Uge1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vMTkyLjE2OC4xNzguMTg6ODA4MC9nYXJtZW50cy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBnZXRBbGxHYXJtZW50cygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnYWxsJyk7XHJcbiAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2dhcm1lbnRzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FybWVudChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2dhcm1lbnRzLycgKyBpZCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYW50KHBhbnQ6IFBhbnQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ2FkZC9wYW50JywgcGFudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2hpcnQoc2hpcnQ6IFNoaXJ0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhZGQvc2hpcnQnLCBzaGlydCk7XHJcbiAgICB9XHJcbn1cclxuIl19
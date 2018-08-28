"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
    }
    GarmentService.prototype.getAllGarments = function () {
        return this.http.get('/garments');
        //    return this.http.get(this.url + '/user/login', httpOptions);
    };
    GarmentService.prototype.addGarment = function (garment) {
        return this.http.post('/garments/add', garment);
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUVJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4Qyx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLGtFQUFrRTtJQUNoRSxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVhRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsY0FBYyxDQVkxQjtJQUFELHFCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2FybWVudFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBnZXRBbGxHYXJtZW50cygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2dhcm1lbnRzJyk7XHJcbiAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyAnL3VzZXIvbG9naW4nLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR2FybWVudChnYXJtZW50OiBHYXJtZW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvZ2FybWVudHMvYWRkJywgZ2FybWVudCk7XHJcbiAgICB9XHJcbn1cclxuIl19
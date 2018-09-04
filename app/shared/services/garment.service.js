"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
    }
    GarmentService.prototype.getAllGarments = function () {
        return this.http.get('http://192.168.178.18:8080/garments');
        //    return this.http.get(this.url + '/user/login', httpOptions);
    };
    GarmentService.prototype.getGarment = function (id) {
        return this.http.get('http://192.168.178.18:8080/garment/' + id);
    };
    GarmentService.prototype.addGarment = function (garment) {
        return this.http.post('http://192.168.178.18:8080/garments/add', garment);
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RDtJQUVJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4Qyx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDaEUsa0VBQWtFO0lBQ2hFLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMseUNBQXlDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQWZRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsY0FBYyxDQWdCMUI7SUFBRCxxQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0dhcm1lbnR9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgZ2V0QWxsR2FybWVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2dhcm1lbnRzJyk7XHJcbiAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyAnL3VzZXIvbG9naW4nLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FybWVudChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2dhcm1lbnQvJyArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRHYXJtZW50KGdhcm1lbnQ6IEdhcm1lbnQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2dhcm1lbnRzL2FkZCcsIGdhcm1lbnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
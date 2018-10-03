"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var GarmentService = /** @class */ (function () {
    function GarmentService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.178.18:8080/garments/';
    }
    GarmentService.prototype.getAllGarments = function () {
        return this.http.get(this.baseUrl + 'all');
    };
    GarmentService.prototype.getGarment = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    GarmentService.prototype.saveGarment = function (pant, shirt) {
        if (pant != null) {
            return this.http.post(this.baseUrl + 'add/pant', pant);
        }
        else {
            return this.http.post(this.baseUrl + 'add/shirt', shirt);
        }
    };
    GarmentService.prototype.multipartUpload = function (filename, file) {
        var request = {
            url: this.baseUrl + 'upload',
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
                "File-Name": file
            },
            description: "description"
        };
        var params = [
            { name: "name", value: filename },
            { name: "file", filename: file, mimeType: 'image/jpeg' }
        ];
        var task;
        task = session.multipartUpload(params, request);
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZDQUE2RDtBQUk3RCxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUc3QztJQUlJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyxzQ0FBc0MsQ0FBQztJQUVsQixDQUFDO0lBRXhDLHVDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFVLEVBQUUsS0FBWTtRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLElBQVk7UUFDNUMsSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSwwQkFBMEI7Z0JBQzFDLFdBQVcsRUFBRSxJQUFJO2FBQ3BCO1lBQ0QsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHO1lBQ0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDaEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtTQUMzRCxDQUFDO1FBRVosSUFBSSxJQUFpQixDQUFDO1FBQ3RCLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBekNRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsY0FBYyxDQTJDMUI7SUFBRCxxQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBmb3JrSm9pbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtHYXJtZW50fSBmcm9tICcuLi8uLi9kdG8vZ2FybWVudCc7XHJcbmltcG9ydCB7UGFudH0gZnJvbSAnLi4vLi4vZHRvL3BhbnQnO1xyXG5pbXBvcnQge1NoaXJ0fSBmcm9tICcuLi8uLi9kdG8vc2hpcnQnO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMTc4LjE4OjgwODAvZ2FybWVudHMvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgZ2V0QWxsR2FybWVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2FsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhcm1lbnQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlR2FybWVudChwYW50OiBQYW50LCBzaGlydDogU2hpcnQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICBpZiAocGFudCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhZGQvcGFudCcsIHBhbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnYWRkL3NoaXJ0Jywgc2hpcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwYXJ0VXBsb2FkKGZpbGVuYW1lOiBzdHJpbmcsIGZpbGU6IHN0cmluZykge1xyXG4gICAgICB2YXIgcmVxdWVzdCA9IHtcclxuICAgICAgICAgIHVybDogdGhpcy5iYXNlVXJsICsgJ3VwbG9hZCcsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxlLU5hbWVcIjogZmlsZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCJcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIm5hbWVcIiwgdmFsdWU6IGZpbGVuYW1lfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiZmlsZVwiLCBmaWxlbmFtZTogZmlsZSwgbWltZVR5cGU6ICdpbWFnZS9qcGVnJyB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgICB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
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
            url: this.baseUrl + 'images/upload',
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
    GarmentService.prototype.downloadImage = function (name) {
        var httpModule = require("http");
        console.log('so far so good');
        // normal http.get with {responseType: 'blob'} doesn't work for http module.
        return httpModule.getImage("http://192.168.178.18:8080/images/download/" + name);
        // return this.http.get("http://192.168.178.18:8080/images/download/" + name, { headers: new HttpHeaders({
        // 'Content-Type': 'application/octet-stream',
        // }), responseType: 'blob'})
        // const httpModule = require("http");
        //
    };
    GarmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GarmentService);
    return GarmentService;
}());
exports.GarmentService = GarmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FybWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLDZDQUEyRTtBQUkzRSxxREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUk3QztJQUlJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyxzQ0FBc0MsQ0FBQztJQUVsQixDQUFDO0lBRXhDLHVDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFVLEVBQUUsS0FBWTtRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLElBQVk7UUFDNUMsSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlO1lBQ25DLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSwwQkFBMEI7Z0JBQzFDLFdBQVcsRUFBRSxJQUFJO2FBQ3BCO1lBQ0QsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHO1lBQ0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDaEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtTQUMzRCxDQUFDO1FBRVosSUFBSSxJQUFpQixDQUFDO1FBQ3RCLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLElBQVk7UUFFeEIsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5Qiw0RUFBNEU7UUFDNUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsNkNBQTZDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakYsMEdBQTBHO1FBQzFHLDhDQUE4QztRQUM5Qyw2QkFBNkI7UUFFN0Isc0NBQXNDO1FBQ3RDLEVBQUU7SUFFSixDQUFDO0lBeERRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBmb3JrSm9pbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJlc3BvbnNlQ29udGVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2FybWVudH0gZnJvbSAnLi4vLi4vZHRvL2dhcm1lbnQnO1xyXG5pbXBvcnQge1BhbnR9IGZyb20gJy4uLy4uL2R0by9wYW50JztcclxuaW1wb3J0IHtTaGlydH0gZnJvbSAnLi4vLi4vZHRvL3NoaXJ0JztcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbnZhciBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XHJcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2FybWVudFNlcnZpY2Uge1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vMTkyLjE2OC4xNzguMTg6ODA4MC9nYXJtZW50cy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBnZXRBbGxHYXJtZW50cygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnYWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FybWVudChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVHYXJtZW50KHBhbnQ6IFBhbnQsIHNoaXJ0OiBTaGlydCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIGlmIChwYW50ICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ2FkZC9wYW50JywgcGFudCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhZGQvc2hpcnQnLCBzaGlydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBhcnRVcGxvYWQoZmlsZW5hbWU6IHN0cmluZywgZmlsZTogc3RyaW5nKSB7XHJcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgdXJsOiB0aGlzLmJhc2VVcmwgKyAnaW1hZ2VzL3VwbG9hZCcsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxlLU5hbWVcIjogZmlsZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCJcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIm5hbWVcIiwgdmFsdWU6IGZpbGVuYW1lfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiZmlsZVwiLCBmaWxlbmFtZTogZmlsZSwgbWltZVR5cGU6ICdpbWFnZS9qcGVnJyB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgICB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEltYWdlKG5hbWU6IHN0cmluZykge1xyXG5cclxuICAgICAgY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZygnc28gZmFyIHNvIGdvb2QnKTtcclxuICAgICAgLy8gbm9ybWFsIGh0dHAuZ2V0IHdpdGgge3Jlc3BvbnNlVHlwZTogJ2Jsb2InfSBkb2Vzbid0IHdvcmsgZm9yIGh0dHAgbW9kdWxlLlxyXG4gICAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRJbWFnZShcImh0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2ltYWdlcy9kb3dubG9hZC9cIiArIG5hbWUpO1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2ltYWdlcy9kb3dubG9hZC9cIiArIG5hbWUsIHsgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxyXG4gICAgICAvLyB9KSwgcmVzcG9uc2VUeXBlOiAnYmxvYid9KVxyXG5cclxuICAgICAgLy8gY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4gICAgICAvL1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
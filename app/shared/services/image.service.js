"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.178.18:8080/images/';
    }
    ImageService.prototype.multipartUpload = function (filename, file) {
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
        return task;
    };
    ImageService.prototype.downloadImage = function (garmentId) {
        var httpModule = require("http");
        return httpModule.getImage("http://192.168.178.18:8080/images/download/" + garmentId);
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkNBQWdEO0FBQ2hELHFEQUF1RDtBQUN2RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRzdDO0lBSUksc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsWUFBTyxHQUFXLG9DQUFvQyxDQUFDO0lBRWhCLENBQUM7SUFHMUMsc0NBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLElBQVk7UUFDNUMsSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSwwQkFBMEI7Z0JBQzFDLFdBQVcsRUFBRSxJQUFJO2FBQ3BCO1lBQ0QsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHO1lBQ0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDaEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtTQUMzRCxDQUFDO1FBRVosSUFBSSxJQUFpQixDQUFDO1FBQ3RCLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUM3QixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsNkNBQTZDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQS9CVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLFlBQVksQ0FnQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlU2VydmljZSB7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2ltYWdlcy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcblxyXG4gIG11bHRpcGFydFVwbG9hZChmaWxlbmFtZTogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBiZ2h0dHAuVGFzayB7XHJcbiAgICB2YXIgcmVxdWVzdCA9IHtcclxuICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCArICd1cGxvYWQnLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgICAgICAgICBcIkZpbGUtTmFtZVwiOiBmaWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwYXJhbXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJuYW1lXCIsIHZhbHVlOiBmaWxlbmFtZX0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJmaWxlXCIsIGZpbGVuYW1lOiBmaWxlLCBtaW1lVHlwZTogJ2ltYWdlL2pwZWcnIH1cclxuICAgICAgICAgICAgICBdO1xyXG5cclxuICAgIGxldCB0YXNrOiBiZ2h0dHAuVGFzaztcclxuICAgIHRhc2sgPSBzZXNzaW9uLm11bHRpcGFydFVwbG9hZChwYXJhbXMsIHJlcXVlc3QpO1xyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEltYWdlKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcImh0dHBcIik7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRJbWFnZShcImh0dHA6Ly8xOTIuMTY4LjE3OC4xODo4MDgwL2ltYWdlcy9kb3dubG9hZC9cIiArIGdhcm1lbnRJZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
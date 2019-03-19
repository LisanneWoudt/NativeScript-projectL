"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.154:8080/images/';
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
        return httpModule.getImage(this.baseUrl + "download/compressed/" + garmentId);
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkNBQWdEO0FBQ2hELHFEQUF1RDtBQUN2RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRzdDO0lBSUksc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsWUFBTyxHQUFXLG1DQUFtQyxDQUFDO0lBRWYsQ0FBQztJQUcxQyxzQ0FBZSxHQUFmLFVBQWdCLFFBQWdCLEVBQUUsSUFBWTtRQUM1QyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVE7WUFDNUIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLDBCQUEwQjtnQkFDMUMsV0FBVyxFQUFFLElBQUk7YUFDcEI7WUFDRCxXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUc7WUFDQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO1NBQzNELENBQUM7UUFFWixJQUFJLElBQWlCLENBQUM7UUFDdEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzdCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUEvQlUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUtpQixpQkFBVTtPQUozQixZQUFZLENBZ0N4QjtJQUFELG1CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbnZhciBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vMTkyLjE2OC4yLjE1NDo4MDgwL2ltYWdlcy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcblxyXG4gIG11bHRpcGFydFVwbG9hZChmaWxlbmFtZTogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBiZ2h0dHAuVGFzayB7XHJcbiAgICB2YXIgcmVxdWVzdCA9IHtcclxuICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCArICd1cGxvYWQnLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgICAgICAgICBcIkZpbGUtTmFtZVwiOiBmaWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwYXJhbXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJuYW1lXCIsIHZhbHVlOiBmaWxlbmFtZX0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJmaWxlXCIsIGZpbGVuYW1lOiBmaWxlLCBtaW1lVHlwZTogJ2ltYWdlL2pwZWcnIH1cclxuICAgICAgICAgICAgICBdO1xyXG5cclxuICAgIGxldCB0YXNrOiBiZ2h0dHAuVGFzaztcclxuICAgIHRhc2sgPSBzZXNzaW9uLm11bHRpcGFydFVwbG9hZChwYXJhbXMsIHJlcXVlc3QpO1xyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEltYWdlKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcImh0dHBcIik7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRJbWFnZSh0aGlzLmJhc2VVcmwgKyBcImRvd25sb2FkL2NvbXByZXNzZWQvXCIgKyBnYXJtZW50SWQpO1xyXG4gIH1cclxufVxyXG4iXX0=
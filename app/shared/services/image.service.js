"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.78:8080/images/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkNBQWdEO0FBQ2hELHFEQUF1RDtBQUN2RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRzdDO0lBSUksc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsWUFBTyxHQUFXLGtDQUFrQyxDQUFDO0lBRWQsQ0FBQztJQUcxQyxzQ0FBZSxHQUFmLFVBQWdCLFFBQWdCLEVBQUUsSUFBWTtRQUM1QyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVE7WUFDNUIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLDBCQUEwQjtnQkFDMUMsV0FBVyxFQUFFLElBQUk7YUFDcEI7WUFDRCxXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUc7WUFDQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO1NBQzNELENBQUM7UUFFWixJQUFJLElBQWlCLENBQUM7UUFDdEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzdCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUEvQlUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUtpQixpQkFBVTtPQUozQixZQUFZLENBZ0N4QjtJQUFELG1CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbnZhciBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vMTkyLjE2OC4yLjc4OjgwODAvaW1hZ2VzLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuXHJcbiAgbXVsdGlwYXJ0VXBsb2FkKGZpbGVuYW1lOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IGJnaHR0cC5UYXNrIHtcclxuICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgIHVybDogdGhpcy5iYXNlVXJsICsgJ3VwbG9hZCcsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICAgICAgICAgIFwiRmlsZS1OYW1lXCI6IGZpbGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIm5hbWVcIiwgdmFsdWU6IGZpbGVuYW1lfSxcclxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcImZpbGVcIiwgZmlsZW5hbWU6IGZpbGUsIG1pbWVUeXBlOiAnaW1hZ2UvanBlZycgfVxyXG4gICAgICAgICAgICAgIF07XHJcblxyXG4gICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgdGFzayA9IHNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG4gIGRvd25sb2FkSW1hZ2UoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLmdldEltYWdlKHRoaXMuYmFzZVVybCArIFwiZG93bmxvYWQvY29tcHJlc3NlZC9cIiArIGdhcm1lbnRJZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
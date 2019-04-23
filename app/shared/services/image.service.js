"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var httpModule = require("http");
var environment_1 = require("../../environment");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.baseUrl = 'images/';
    }
    ImageService.prototype.multipartUpload = function (filename, file) {
        var request = {
            url: environment_1.environment.host + this.baseUrl + 'upload',
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
        return httpModule.getImage(environment_1.environment.host + this.baseUrl + "download/" + garmentId);
    };
    ImageService.prototype.downloadCompressedImage = function (garmentId) {
        return httpModule.getImage(environment_1.environment.host + this.baseUrl + "download/compressed/" + garmentId);
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkNBQWdEO0FBQ2hELHFEQUF1RDtBQUN2RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzdDLGlDQUFvQztBQUNwQyxpREFBOEM7QUFHOUM7SUFJRSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxZQUFPLEdBQVcsU0FBUyxDQUFDO0lBRVcsQ0FBQztJQUV4QyxzQ0FBZSxHQUFmLFVBQWdCLFFBQWdCLEVBQUUsSUFBWTtRQUM1QyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBRSx5QkFBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVE7WUFDL0MsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLDBCQUEwQjtnQkFDMUMsV0FBVyxFQUFFLElBQUk7YUFDcEI7WUFDRCxXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUc7WUFDQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUNoQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO1NBQzNELENBQUM7UUFFWixJQUFJLElBQWlCLENBQUM7UUFDdEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRCw4Q0FBdUIsR0FBdkIsVUFBd0IsU0FBaUI7UUFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMseUJBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsQ0FBQTtJQUNsRyxDQUFDO0lBakNVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVTtPQUp6QixZQUFZLENBa0N4QjtJQUFELG1CQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbnZhciBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XHJcbmltcG9ydCBodHRwTW9kdWxlID0gcmVxdWlyZShcImh0dHBcIik7XHJcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlU2VydmljZSB7XHJcblxyXG4gIGJhc2VVcmw6IHN0cmluZyA9ICdpbWFnZXMvJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBtdWx0aXBhcnRVcGxvYWQoZmlsZW5hbWU6IHN0cmluZywgZmlsZTogc3RyaW5nKTogYmdodHRwLlRhc2sge1xyXG4gICAgdmFyIHJlcXVlc3QgPSB7XHJcbiAgICAgICAgdXJsOiBlbnZpcm9ubWVudC5ob3N0ICsgdGhpcy5iYXNlVXJsICsgJ3VwbG9hZCcsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICAgICAgICAgIFwiRmlsZS1OYW1lXCI6IGZpbGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIm5hbWVcIiwgdmFsdWU6IGZpbGVuYW1lfSxcclxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcImZpbGVcIiwgZmlsZW5hbWU6IGZpbGUsIG1pbWVUeXBlOiAnaW1hZ2UvanBlZycgfVxyXG4gICAgICAgICAgICAgIF07XHJcblxyXG4gICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgdGFzayA9IHNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG4gIGRvd25sb2FkSW1hZ2UoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLmdldEltYWdlKGVudmlyb25tZW50Lmhvc3QgKyB0aGlzLmJhc2VVcmwgKyBcImRvd25sb2FkL1wiICsgZ2FybWVudElkKTtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkQ29tcHJlc3NlZEltYWdlKGdhcm1lbnRJZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRJbWFnZShlbnZpcm9ubWVudC5ob3N0ICsgdGhpcy5iYXNlVXJsICsgXCJkb3dubG9hZC9jb21wcmVzc2VkL1wiICsgZ2FybWVudElkKVxyXG4gIH1cclxufVxyXG4iXX0=
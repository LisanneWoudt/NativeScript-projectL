"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.178.19:8080/images/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkNBQWdEO0FBQ2hELHFEQUF1RDtBQUN2RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRzdDO0lBSUksc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsWUFBTyxHQUFXLG9DQUFvQyxDQUFDO0lBRWhCLENBQUM7SUFHMUMsc0NBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLElBQVk7UUFDNUMsSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSwwQkFBMEI7Z0JBQzFDLFdBQVcsRUFBRSxJQUFJO2FBQ3BCO1lBQ0QsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHO1lBQ0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDaEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtTQUMzRCxDQUFDO1FBRVosSUFBSSxJQUFpQixDQUFDO1FBQ3RCLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUM3QixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBL0JVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsWUFBWSxDQWdDeEI7SUFBRCxtQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiO1xyXG52YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMTc4LjE5OjgwODAvaW1hZ2VzLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuXHJcbiAgbXVsdGlwYXJ0VXBsb2FkKGZpbGVuYW1lOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IGJnaHR0cC5UYXNrIHtcclxuICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgIHVybDogdGhpcy5iYXNlVXJsICsgJ3VwbG9hZCcsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICAgICAgICAgIFwiRmlsZS1OYW1lXCI6IGZpbGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIm5hbWVcIiwgdmFsdWU6IGZpbGVuYW1lfSxcclxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcImZpbGVcIiwgZmlsZW5hbWU6IGZpbGUsIG1pbWVUeXBlOiAnaW1hZ2UvanBlZycgfVxyXG4gICAgICAgICAgICAgIF07XHJcblxyXG4gICAgbGV0IHRhc2s6IGJnaHR0cC5UYXNrO1xyXG4gICAgdGFzayA9IHNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG4gIGRvd25sb2FkSW1hZ2UoZ2FybWVudElkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLmdldEltYWdlKHRoaXMuYmFzZVVybCArIFwiZG93bmxvYWQvY29tcHJlc3NlZC9cIiArIGdhcm1lbnRJZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var httpModule = require("http");
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.2.180:8080/images/';
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
        return httpModule.getImage(this.baseUrl + "download/" + garmentId);
    };
    ImageService.prototype.downloadCompressedImage = function (garmentId) {
        return httpModule.getImage(this.baseUrl + "download/compressed/" + garmentId);
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkNBQWdEO0FBQ2hELHFEQUF1RDtBQUN2RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzdDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUduQztJQUlJLHNCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBVyxtQ0FBbUMsQ0FBQztJQUVmLENBQUM7SUFHMUMsc0NBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLElBQVk7UUFDNUMsSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSwwQkFBMEI7Z0JBQzFDLFdBQVcsRUFBRSxJQUFJO2FBQ3BCO1lBQ0QsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHO1lBQ0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDaEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtTQUMzRCxDQUFDO1FBRVosSUFBSSxJQUFpQixDQUFDO1FBQ3RCLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUM3QixNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsOENBQXVCLEdBQXZCLFVBQXdCLFNBQWlCO1FBQ3ZDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLEdBQUcsU0FBUyxDQUFDLENBQUE7SUFDL0UsQ0FBQztJQWxDVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLFlBQVksQ0FtQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMi4xODA6ODA4MC9pbWFnZXMvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG5cclxuICBtdWx0aXBhcnRVcGxvYWQoZmlsZW5hbWU6IHN0cmluZywgZmlsZTogc3RyaW5nKTogYmdodHRwLlRhc2sge1xyXG4gICAgdmFyIHJlcXVlc3QgPSB7XHJcbiAgICAgICAgdXJsOiB0aGlzLmJhc2VVcmwgKyAndXBsb2FkJyxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcclxuICAgICAgICAgICAgXCJGaWxlLU5hbWVcIjogZmlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb25cIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6IFwibmFtZVwiLCB2YWx1ZTogZmlsZW5hbWV9LFxyXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiZmlsZVwiLCBmaWxlbmFtZTogZmlsZSwgbWltZVR5cGU6ICdpbWFnZS9qcGVnJyB9XHJcbiAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICBsZXQgdGFzazogYmdodHRwLlRhc2s7XHJcbiAgICB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcclxuICAgIHJldHVybiB0YXNrO1xyXG4gIH1cclxuXHJcbiAgZG93bmxvYWRJbWFnZShnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SW1hZ2UodGhpcy5iYXNlVXJsICsgXCJkb3dubG9hZC9cIiArIGdhcm1lbnRJZCk7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZENvbXByZXNzZWRJbWFnZShnYXJtZW50SWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SW1hZ2UodGhpcy5iYXNlVXJsICsgXCJkb3dubG9hZC9jb21wcmVzc2VkL1wiICsgZ2FybWVudElkKVxyXG4gIH1cclxufVxyXG4iXX0=
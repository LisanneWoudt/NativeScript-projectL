"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../dto/user");
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getUser = function () {
        return this.user;
    };
    DataService.prototype.getMockUser = function () {
        this.user = new user_1.User();
        this.user.id = 1;
        return this.user;
    };
    DataService.prototype.setUser = function (user) {
        this.user = user;
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHVDQUFvQztBQUdwQztJQUlFO0lBQ0EsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFuQlUsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FvQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vZHRvL3VzZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICB1c2VyOiBVc2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9ja1VzZXIoKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmlkID0gMTtcclxuICAgIHJldHVybiB0aGlzLnVzZXI7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyKHVzZXI6IFVzZXIpIHtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==
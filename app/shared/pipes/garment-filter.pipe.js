"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GarmentFilterPipe = /** @class */ (function () {
    function GarmentFilterPipe() {
    }
    GarmentFilterPipe.prototype.transform = function (garments, filter) {
        return garments.filter(function (item) {
            var notMatchingField = Object.keys(filter)
                .find(function (key) {
                return !filter[key].includes(item[key]);
            });
            return !notMatchingField; // true if matches all fields
        });
    };
    GarmentFilterPipe = __decorate([
        core_1.Pipe({ name: 'garmentAttributeFilter' })
    ], GarmentFilterPipe);
    return GarmentFilterPipe;
}());
exports.GarmentFilterPipe = GarmentFilterPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhcm1lbnQtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFJcEQ7SUFBQTtJQVdBLENBQUM7SUFWQyxxQ0FBUyxHQUFULFVBQVUsUUFBbUIsRUFBRSxNQUF1QztRQUVsRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7WUFDeEIsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDWixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNOLE9BQUEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFoQyxDQUFnQyxDQUNsQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsNkJBQTZCO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVZRLGlCQUFpQjtRQUQ3QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztPQUMxQixpQkFBaUIsQ0FXN0I7SUFBRCx3QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcclxuXHJcbkBQaXBlKHtuYW1lOiAnZ2FybWVudEF0dHJpYnV0ZUZpbHRlcid9KVxyXG5leHBvcnQgY2xhc3MgR2FybWVudEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oZ2FybWVudHM6IEdhcm1lbnRbXSwgZmlsdGVyOiB7W2tleTogc3RyaW5nXTogQXJyYXk8U3RyaW5nPiB9KSB7XHJcblxyXG4gICAgICByZXR1cm4gZ2FybWVudHMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICBsZXQgbm90TWF0Y2hpbmdGaWVsZCA9IE9iamVjdC5rZXlzKGZpbHRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChrZXkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZmlsdGVyW2tleV0uaW5jbHVkZXMoaXRlbVtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgIHJldHVybiAhbm90TWF0Y2hpbmdGaWVsZDsgLy8gdHJ1ZSBpZiBtYXRjaGVzIGFsbCBmaWVsZHNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
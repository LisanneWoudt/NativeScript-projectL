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
                return item[key] !== filter[key];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhcm1lbnQtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFJcEQ7SUFBQTtJQVVBLENBQUM7SUFUQyxxQ0FBUyxHQUFULFVBQVUsUUFBbUIsRUFBRSxNQUE2QjtRQUV4RCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7WUFDeEIsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDWixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNQLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsNkJBQTZCO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVRRLGlCQUFpQjtRQUQ3QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztPQUMxQixpQkFBaUIsQ0FVN0I7SUFBRCx3QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcclxuXHJcbkBQaXBlKHtuYW1lOiAnZ2FybWVudEF0dHJpYnV0ZUZpbHRlcid9KVxyXG5leHBvcnQgY2xhc3MgR2FybWVudEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oZ2FybWVudHM6IEdhcm1lbnRbXSwgZmlsdGVyOiB7W2tleTogc3RyaW5nXTogYW55IH0pIHtcclxuXHJcbiAgICAgIHJldHVybiBnYXJtZW50cy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgIGxldCBub3RNYXRjaGluZ0ZpZWxkID0gT2JqZWN0LmtleXMoZmlsdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKGtleSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtrZXldICE9PSBmaWx0ZXJba2V5XSk7XHJcbiAgICAgICAgIHJldHVybiAhbm90TWF0Y2hpbmdGaWVsZDsgLy8gdHJ1ZSBpZiBtYXRjaGVzIGFsbCBmaWVsZHNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
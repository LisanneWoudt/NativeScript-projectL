"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GarmentFilterPipe = /** @class */ (function () {
    function GarmentFilterPipe() {
    }
    GarmentFilterPipe.prototype.transform = function (garments, filter) {
        console.log('in transform: ');
        console.log(garments);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhcm1lbnQtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFJcEQ7SUFBQTtJQVlBLENBQUM7SUFYQyxxQ0FBUyxHQUFULFVBQVUsUUFBbUIsRUFBRSxNQUF1QztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7WUFDeEIsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDWixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNOLE9BQUEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFoQyxDQUFnQyxDQUNsQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsNkJBQTZCO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVhRLGlCQUFpQjtRQUQ3QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztPQUMxQixpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FybWVudCB9IGZyb20gJy4uLy4uL2R0by9nYXJtZW50JztcclxuXHJcbkBQaXBlKHtuYW1lOiAnZ2FybWVudEF0dHJpYnV0ZUZpbHRlcid9KVxyXG5leHBvcnQgY2xhc3MgR2FybWVudEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oZ2FybWVudHM6IEdhcm1lbnRbXSwgZmlsdGVyOiB7W2tleTogc3RyaW5nXTogQXJyYXk8U3RyaW5nPiB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbiB0cmFuc2Zvcm06ICcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhnYXJtZW50cyk7XHJcbiAgICAgIHJldHVybiBnYXJtZW50cy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgIGxldCBub3RNYXRjaGluZ0ZpZWxkID0gT2JqZWN0LmtleXMoZmlsdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKGtleSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmaWx0ZXJba2V5XS5pbmNsdWRlcyhpdGVtW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgcmV0dXJuICFub3RNYXRjaGluZ0ZpZWxkOyAvLyB0cnVlIGlmIG1hdGNoZXMgYWxsIGZpZWxkc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GarmentFilterPipe = /** @class */ (function () {
    function GarmentFilterPipe() {
    }
    GarmentFilterPipe.prototype.transform = function (garments, filter) {
        // filter = {gender: this.selectedGender, size: this.selectedSizes}
        // key = gender
        // filter[key] =  this.selectedGender []
        // item[key] = gender of garment
        console.log(filter);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FybWVudC1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhcm1lbnQtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFJcEQ7SUFBQTtJQWtCQSxDQUFDO0lBakJDLHFDQUFTLEdBQVQsVUFBVSxRQUFtQixFQUFFLE1BQXVDO1FBRWxFLG1FQUFtRTtRQUNuRSxlQUFlO1FBQ2Ysd0NBQXdDO1FBQ3hDLGdDQUFnQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtZQUN4QixJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUNaLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBQSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQWhDLENBQWdDLENBQ2xDLENBQUM7WUFDL0IsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyw2QkFBNkI7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBakJRLGlCQUFpQjtRQUQ3QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztPQUMxQixpQkFBaUIsQ0FrQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhcm1lbnQgfSBmcm9tICcuLi8uLi9kdG8vZ2FybWVudCc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2dhcm1lbnRBdHRyaWJ1dGVGaWx0ZXInfSlcclxuZXhwb3J0IGNsYXNzIEdhcm1lbnRGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGdhcm1lbnRzOiBHYXJtZW50W10sIGZpbHRlcjoge1trZXk6IHN0cmluZ106IEFycmF5PFN0cmluZz4gfSkge1xyXG5cclxuICAgICAgLy8gZmlsdGVyID0ge2dlbmRlcjogdGhpcy5zZWxlY3RlZEdlbmRlciwgc2l6ZTogdGhpcy5zZWxlY3RlZFNpemVzfVxyXG4gICAgICAvLyBrZXkgPSBnZW5kZXJcclxuICAgICAgLy8gZmlsdGVyW2tleV0gPSAgdGhpcy5zZWxlY3RlZEdlbmRlciBbXVxyXG4gICAgICAvLyBpdGVtW2tleV0gPSBnZW5kZXIgb2YgZ2FybWVudFxyXG4gICAgICBjb25zb2xlLmxvZyhmaWx0ZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIGdhcm1lbnRzLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgbGV0IG5vdE1hdGNoaW5nRmllbGQgPSBPYmplY3Qua2V5cyhmaWx0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoa2V5ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZpbHRlcltrZXldLmluY2x1ZGVzKGl0ZW1ba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICByZXR1cm4gIW5vdE1hdGNoaW5nRmllbGQ7IC8vIHRydWUgaWYgbWF0Y2hlcyBhbGwgZmllbGRzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
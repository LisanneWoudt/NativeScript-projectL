"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var OpenRequestsComponent = /** @class */ (function () {
    function OpenRequestsComponent(router) {
        this.router = router;
        this.showHistory = false;
    }
    OpenRequestsComponent.prototype.ngOnInit = function () { };
    OpenRequestsComponent.prototype.navigateToHome = function () {
        this.child.navigateToHome();
    };
    __decorate([
        core_1.ViewChild('appRequests'),
        __metadata("design:type", Object)
    ], OpenRequestsComponent.prototype, "child", void 0);
    OpenRequestsComponent = __decorate([
        core_1.Component({
            selector: "app-open-requests",
            moduleId: module.id,
            templateUrl: "./open-requests.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], OpenRequestsComponent);
    return OpenRequestsComponent;
}());
exports.OpenRequestsComponent = OpenRequestsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1yZXF1ZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVuLXJlcXVlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUM7QUFRekM7SUFNRSwrQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFFUyxDQUFDO0lBRXZDLHdDQUFRLEdBQVIsY0FBVyxDQUFDO0lBRVosOENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQVZ5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzs7d0RBQU87SUFGckIscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBUTRCLGVBQU07T0FOdkIscUJBQXFCLENBY2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1vcGVuLXJlcXVlc3RzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9vcGVuLXJlcXVlc3RzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPcGVuUmVxdWVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdhcHBSZXF1ZXN0cycpIGNoaWxkO1xyXG5cclxuICBzaG93SGlzdG9yeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKXt9XHJcblxyXG4gIG5hdmlnYXRlVG9Ib21lKCkge1xyXG4gICAgdGhpcy5jaGlsZC5uYXZpZ2F0ZVRvSG9tZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
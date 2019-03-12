"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var OpenRequestsComponent = /** @class */ (function () {
    function OpenRequestsComponent(router) {
        this.router = router;
        this.showHistory = false;
    }
    OpenRequestsComponent.prototype.ngOnInit = function () {
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1yZXF1ZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVuLXJlcXVlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUM7QUFRekM7SUFNRSwrQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFFUyxDQUFDO0lBRXZDLHdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsOENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQVp5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzs7d0RBQU87SUFGckIscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBUTRCLGVBQU07T0FOdkIscUJBQXFCLENBZ0JqQztJQUFELDRCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtb3Blbi1yZXF1ZXN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb3Blbi1yZXF1ZXN0cy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3BlblJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYXBwUmVxdWVzdHMnKSBjaGlsZDtcclxuXHJcbiAgc2hvd0hpc3Rvcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcblxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0hvbWUoKSB7XHJcbiAgICB0aGlzLmNoaWxkLm5hdmlnYXRlVG9Ib21lKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var error_component_1 = require("./pages/error/error.component");
var home_component_1 = require("./pages/home/home.component");
var login_component_1 = require("./pages/login/login.component");
var add_garment_component_1 = require("./pages/garments/add-garment/add-garment.component");
var all_garments_component_1 = require("./pages/garments/all-garments/all-garments.component");
var request_swap_component_1 = require("./pages/swap/request-swap/request-swap.component");
var garment_detail_component_1 = require("./pages/garments/garment-detail/garment-detail.component");
var inbox_component_1 = require("./pages/inbox/inbox.component");
var received_requests_component_1 = require("./pages/swap/received-requests/received-requests.component");
var send_requests_component_1 = require("./pages/swap/send-requests/send-requests.component");
var pick_swap_return_garment_component_1 = require("./pages/swap/pick-swap-return-garment/pick-swap-return-garment.component");
var request_return_swap_component_1 = require("./pages/swap/request-return-swap/request-return-swap.component");
var routes = [
    { path: "", redirectTo: "/swap-requests/send/2", pathMatch: "full" },
    { path: "error", component: error_component_1.ErrorComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "home/:success", component: home_component_1.HomeComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "garments/add", component: add_garment_component_1.AddGarmentComponent },
    { path: "garments/all", component: all_garments_component_1.AllGarmentsComponent },
    { path: "swap-request/:id", component: request_swap_component_1.RequestSwapComponent },
    { path: "swap-return-request", component: request_return_swap_component_1.RequestReturnSwapComponent },
    { path: "swap-requests/received/:userid", component: received_requests_component_1.ReceivedRequestsComponent },
    { path: "swap-requests/send/:userid", component: send_requests_component_1.SendRequestsComponent },
    { path: "swap-requests/return-garment/:userid", component: pick_swap_return_garment_component_1.PickSwapReturnGarmentComponent },
    { path: "garment/:garmentId", component: garment_detail_component_1.GarmentDetailComponent },
    { path: "inbox", component: inbox_component_1.InboxComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxpRUFBK0Q7QUFDL0QsOERBQTREO0FBQzVELGlFQUErRDtBQUMvRCw0RkFBeUY7QUFDekYsK0ZBQTRGO0FBQzVGLDJGQUF3RjtBQUN4RixxR0FBaUc7QUFDakcsaUVBQStEO0FBQy9ELDBHQUF1RztBQUN2Ryw4RkFBMkY7QUFDM0YsK0hBQTBIO0FBQzFILGdIQUE0RztBQUU1RyxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQzNDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDbkQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7SUFDdkQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQztJQUN4RCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUM7SUFDNUQsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLDBEQUEwQixFQUFDO0lBQ3JFLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLFNBQVMsRUFBRSx1REFBeUIsRUFBQztJQUMvRSxFQUFFLElBQUksRUFBRSw0QkFBNEIsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUM7SUFDdkUsRUFBRSxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxFQUFFLG1FQUE4QixFQUFDO0lBQzFGLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBQztJQUNoRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7Q0FDOUMsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkR2FybWVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FkZC1nYXJtZW50L2FkZC1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWxsR2FybWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9hbGwtZ2FybWVudHMvYWxsLWdhcm1lbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3Qtc3dhcC9yZXF1ZXN0LXN3YXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LWRldGFpbC9nYXJtZW50LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEluYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaW5ib3gvaW5ib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWNlaXZlZFJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZWNlaXZlZC1yZXF1ZXN0cy9yZWNlaXZlZC1yZXF1ZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbmRSZXF1ZXN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvc2VuZC1yZXF1ZXN0cy9zZW5kLXJlcXVlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGlja1N3YXBSZXR1cm5HYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnQvcGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFJldHVyblN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3QtcmV0dXJuLXN3YXAvcmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9zd2FwLXJlcXVlc3RzL3NlbmQvMlwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImVycm9yXCIsIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJob21lLzpzdWNjZXNzXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImdhcm1lbnRzL2FkZFwiLCBjb21wb25lbnQ6IEFkZEdhcm1lbnRDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJnYXJtZW50cy9hbGxcIiwgY29tcG9uZW50OiBBbGxHYXJtZW50c0NvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInN3YXAtcmVxdWVzdC86aWRcIiwgY29tcG9uZW50OiBSZXF1ZXN0U3dhcENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInN3YXAtcmV0dXJuLXJlcXVlc3RcIiwgY29tcG9uZW50OiBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInN3YXAtcmVxdWVzdHMvcmVjZWl2ZWQvOnVzZXJpZFwiLCBjb21wb25lbnQ6IFJlY2VpdmVkUmVxdWVzdHNDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJzd2FwLXJlcXVlc3RzL3NlbmQvOnVzZXJpZFwiLCBjb21wb25lbnQ6IFNlbmRSZXF1ZXN0c0NvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInN3YXAtcmVxdWVzdHMvcmV0dXJuLWdhcm1lbnQvOnVzZXJpZFwiLCBjb21wb25lbnQ6IFBpY2tTd2FwUmV0dXJuR2FybWVudENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImdhcm1lbnQvOmdhcm1lbnRJZFwiLCBjb21wb25lbnQ6IEdhcm1lbnREZXRhaWxDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJpbmJveFwiLCBjb21wb25lbnQ6IEluYm94Q29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
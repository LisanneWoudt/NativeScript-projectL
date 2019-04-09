"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var error_component_1 = require("./pages/error/error.component");
var home_component_1 = require("./pages/home/home.component");
var login_component_1 = require("./pages/login/login.component");
var add_garment_component_1 = require("./pages/garments/add-garment/add-garment.component");
var edit_garment_component_1 = require("./pages/garments/edit-garment/edit-garment.component");
var all_garments_component_1 = require("./pages/garments/all-garments/all-garments.component");
var request_swap_component_1 = require("./pages/swap/request-swap/request-swap.component");
var garment_detail_component_1 = require("./pages/garments/garment-detail/garment-detail.component");
var inbox_component_1 = require("./pages/inbox/inbox.component");
var pick_swap_return_garment_component_1 = require("./pages/swap/pick-swap-return-garment/pick-swap-return-garment.component");
var request_return_swap_component_1 = require("./pages/swap/request-return-swap/request-return-swap.component");
var open_requests_component_1 = require("./pages/swap/open-requests/open-requests.component");
var history_component_1 = require("./pages/swap/history/history.component");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "error", component: error_component_1.ErrorComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "garments/add", component: add_garment_component_1.AddGarmentComponent },
    { path: "garments/edit", component: edit_garment_component_1.EditGarmentComponent },
    { path: "garments/all", component: all_garments_component_1.AllGarmentsComponent },
    { path: "swap-request/:id", component: request_swap_component_1.RequestSwapComponent },
    { path: "swap-return-request", component: request_return_swap_component_1.RequestReturnSwapComponent },
    { path: "swap-requests/open/:userid", component: open_requests_component_1.OpenRequestsComponent },
    { path: "swap-requests/history/:userid", component: history_component_1.HistoryComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxpRUFBK0Q7QUFDL0QsOERBQTREO0FBQzVELGlFQUErRDtBQUMvRCw0RkFBeUY7QUFDekYsK0ZBQTRGO0FBQzVGLCtGQUE0RjtBQUM1RiwyRkFBd0Y7QUFDeEYscUdBQWlHO0FBQ2pHLGlFQUErRDtBQUMvRCwrSEFBMEg7QUFDMUgsZ0hBQTRHO0FBQzVHLDhGQUEyRjtBQUMzRiw0RUFBMEU7QUFFMUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDM0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUM7SUFDekQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQztJQUN4RCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUM7SUFDNUQsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLDBEQUEwQixFQUFDO0lBQ3JFLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQztJQUN2RSxFQUFFLElBQUksRUFBRSwrQkFBK0IsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7SUFDckUsRUFBRSxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxFQUFFLG1FQUE4QixFQUFDO0lBQzFGLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBQztJQUNoRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7Q0FDOUMsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkR2FybWVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FkZC1nYXJtZW50L2FkZC1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRWRpdEdhcm1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9lZGl0LWdhcm1lbnQvZWRpdC1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWxsR2FybWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9hbGwtZ2FybWVudHMvYWxsLWdhcm1lbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3Qtc3dhcC9yZXF1ZXN0LXN3YXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LWRldGFpbC9nYXJtZW50LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEluYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaW5ib3gvaW5ib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaWNrU3dhcFJldHVybkdhcm1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3BpY2stc3dhcC1yZXR1cm4tZ2FybWVudC9waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcmVxdWVzdC1yZXR1cm4tc3dhcC9yZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3BlblJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9vcGVuLXJlcXVlc3RzL29wZW4tcmVxdWVzdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImVycm9yXCIsIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImdhcm1lbnRzL2FkZFwiLCBjb21wb25lbnQ6IEFkZEdhcm1lbnRDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJnYXJtZW50cy9lZGl0XCIsIGNvbXBvbmVudDogRWRpdEdhcm1lbnRDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJnYXJtZW50cy9hbGxcIiwgY29tcG9uZW50OiBBbGxHYXJtZW50c0NvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInN3YXAtcmVxdWVzdC86aWRcIiwgY29tcG9uZW50OiBSZXF1ZXN0U3dhcENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInN3YXAtcmV0dXJuLXJlcXVlc3RcIiwgY29tcG9uZW50OiBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInN3YXAtcmVxdWVzdHMvb3Blbi86dXNlcmlkXCIsIGNvbXBvbmVudDogT3BlblJlcXVlc3RzQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwic3dhcC1yZXF1ZXN0cy9oaXN0b3J5Lzp1c2VyaWRcIiwgY29tcG9uZW50OiBIaXN0b3J5Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwic3dhcC1yZXF1ZXN0cy9yZXR1cm4tZ2FybWVudC86dXNlcmlkXCIsIGNvbXBvbmVudDogUGlja1N3YXBSZXR1cm5HYXJtZW50Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiZ2FybWVudC86Z2FybWVudElkXCIsIGNvbXBvbmVudDogR2FybWVudERldGFpbENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImluYm94XCIsIGNvbXBvbmVudDogSW5ib3hDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19
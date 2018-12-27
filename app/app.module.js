"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var angular_1 = require("nativescript-drop-down/angular");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
//Components
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require("./pages/home/home.component");
var all_garments_component_1 = require("./pages/garments/all-garments/all-garments.component");
var add_garment_component_1 = require("./pages/garments/add-garment/add-garment.component");
var request_swap_component_1 = require("./pages/swap/request-swap/request-swap.component");
var add_garment_success_component_1 = require("./pages/garments/success/add-garment-success.component");
var garment_overview_component_1 = require("./pages/garments/garment-overview/garment-overview.component");
var garment_detail_component_1 = require("./pages/garments/garment-detail/garment-detail.component");
var inbox_component_1 = require("./pages/inbox/inbox.component");
var received_requests_component_1 = require("./pages/swap/received-requests/received-requests.component");
var send_requests_component_1 = require("./pages/swap/send-requests/send-requests.component");
var requests_component_1 = require("./pages/swap/requests/requests.component");
//Services
var login_service_1 = require("./shared/services/login.service");
var data_service_1 = require("./shared/services/data.service");
var garment_service_1 = require("./shared/services/garment.service");
var image_service_1 = require("./shared/services/image.service");
var swap_service_1 = require("./shared/services/swap.service");
var user_service_1 = require("./shared/services/user.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                //      RouterModule.forRoot(appRoutes, {enableTracing: false}),
                http_1.HttpClientModule,
                forms_1.NativeScriptFormsModule,
                angular_1.DropDownModule,
                angular_2.NativeScriptUISideDrawerModule
            ],
            providers: [
                login_service_1.LoginService,
                data_service_1.DataService,
                garment_service_1.GarmentService,
                image_service_1.ImageService,
                swap_service_1.SwapService,
                user_service_1.UserService
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                all_garments_component_1.AllGarmentsComponent,
                add_garment_component_1.AddGarmentComponent,
                request_swap_component_1.RequestSwapComponent,
                add_garment_success_component_1.AddGarmentSuccessComponent,
                garment_overview_component_1.GarmentOverviewComponent,
                garment_detail_component_1.GarmentDetailComponent,
                inbox_component_1.InboxComponent,
                received_requests_component_1.ReceivedRequestsComponent,
                send_requests_component_1.SendRequestsComponent,
                requests_component_1.RequestsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELDBEQUFnRTtBQUNoRSw4REFBbUY7QUFFbkYsWUFBWTtBQUNaLGlEQUErQztBQUMvQyxpRUFBOEQ7QUFDOUQsOERBQTREO0FBQzVELCtGQUEyRjtBQUMzRiw0RkFBeUY7QUFDekYsMkZBQXdGO0FBQ3hGLHdHQUFvRztBQUNwRywyR0FBd0c7QUFDeEcscUdBQWtHO0FBQ2xHLGlFQUE4RDtBQUM5RCwwR0FBdUc7QUFDdkcsOEZBQTJGO0FBQzNGLCtFQUE2RTtBQUU3RSxVQUFVO0FBQ1YsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCxxRUFBaUU7QUFDakUsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCwrREFBMkQ7QUE0QzNEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF4Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUN0QixnRUFBZ0U7Z0JBQzFELHVCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix3QkFBYztnQkFDZCx3Q0FBOEI7YUFDakM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsMEJBQVc7YUFDWjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQiwwREFBMEI7Z0JBQzFCLHFEQUF3QjtnQkFDeEIsaURBQXNCO2dCQUN0QixnQ0FBYztnQkFDZCx1REFBeUI7Z0JBQ3pCLCtDQUFxQjtnQkFDckIsc0NBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJ1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBbGxHYXJtZW50c0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvYWxsLWdhcm1lbnRzL2FsbC1nYXJtZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEdhcm1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9hZGQtZ2FybWVudC9hZGQtZ2FybWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcXVlc3RTd2FwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZXF1ZXN0LXN3YXAvcmVxdWVzdC1zd2FwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkR2FybWVudFN1Y2Nlc3NDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9zdWNjZXNzL2FkZC1nYXJtZW50LXN1Y2Nlc3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50T3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LW92ZXJ2aWV3L2dhcm1lbnQtb3ZlcnZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvZ2FybWVudC1kZXRhaWwvZ2FybWVudC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbmJveENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvaW5ib3gvaW5ib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWNlaXZlZFJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZWNlaXZlZC1yZXF1ZXN0cy9yZWNlaXZlZC1yZXF1ZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbmRSZXF1ZXN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvc2VuZC1yZXF1ZXN0cy9zZW5kLXJlcXVlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3RzL3JlcXVlc3RzLmNvbXBvbmVudFwiO1xuXG4vL1NlcnZpY2VzXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTd2FwU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgLy8gICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMsIHtlbmFibGVUcmFjaW5nOiBmYWxzZX0pLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBMb2dpblNlcnZpY2UsXG4gICAgICBEYXRhU2VydmljZSxcbiAgICAgIEdhcm1lbnRTZXJ2aWNlLFxuICAgICAgSW1hZ2VTZXJ2aWNlLFxuICAgICAgU3dhcFNlcnZpY2UsXG4gICAgICBVc2VyU2VydmljZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIEFsbEdhcm1lbnRzQ29tcG9uZW50LFxuICAgICAgICBBZGRHYXJtZW50Q29tcG9uZW50LFxuICAgICAgICBSZXF1ZXN0U3dhcENvbXBvbmVudCxcbiAgICAgICAgQWRkR2FybWVudFN1Y2Nlc3NDb21wb25lbnQsXG4gICAgICAgIEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudERldGFpbENvbXBvbmVudCxcbiAgICAgICAgSW5ib3hDb21wb25lbnQsXG4gICAgICAgIFJlY2VpdmVkUmVxdWVzdHNDb21wb25lbnQsXG4gICAgICAgIFNlbmRSZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgUmVxdWVzdHNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
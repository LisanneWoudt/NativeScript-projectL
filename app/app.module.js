"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
//Plugins
var angular_1 = require("nativescript-drop-down/angular");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var angular_3 = require("nativescript-checkbox/angular");
//Components
var app_component_1 = require("./app.component");
var error_component_1 = require("./pages/error/error.component");
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
//Pipes
var garment_filter_pipe_1 = require("./shared/pipes/garment-filter.pipe");
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
                http_1.HttpClientModule,
                forms_1.NativeScriptFormsModule,
                angular_1.DropDownModule,
                angular_2.NativeScriptUISideDrawerModule,
                angular_3.TNSCheckBoxModule
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
                error_component_1.ErrorComponent,
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
                requests_component_1.RequestsComponent,
                garment_filter_pipe_1.GarmentFilterPipe
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELFNBQVM7QUFDVCwwREFBZ0U7QUFDaEUsOERBQW9GO0FBQ3BGLHlEQUFrRTtBQUVsRSxZQUFZO0FBQ1osaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCxpRUFBOEQ7QUFDOUQsOERBQTREO0FBQzVELCtGQUEyRjtBQUMzRiw0RkFBeUY7QUFDekYsMkZBQXdGO0FBQ3hGLHdHQUFvRztBQUNwRywyR0FBd0c7QUFDeEcscUdBQWtHO0FBQ2xHLGlFQUE4RDtBQUM5RCwwR0FBdUc7QUFDdkcsOEZBQTJGO0FBQzNGLCtFQUE2RTtBQUU3RSxVQUFVO0FBQ1YsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCxxRUFBaUU7QUFDakUsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCwrREFBMkQ7QUFFM0QsT0FBTztBQUNQLDBFQUFxRTtBQTZDckU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTFDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLHVCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix3QkFBYztnQkFDZCx3Q0FBOEI7Z0JBQzlCLDJCQUFpQjthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDVCw0QkFBWTtnQkFDWiwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCw0QkFBWTtnQkFDWiwwQkFBVztnQkFDWCwwQkFBVzthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLDZDQUFvQjtnQkFDcEIsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7Z0JBQ3BCLDBEQUEwQjtnQkFDMUIscURBQXdCO2dCQUN4QixpREFBc0I7Z0JBQ3RCLGdDQUFjO2dCQUNkLHVEQUF5QjtnQkFDekIsK0NBQXFCO2dCQUNyQixzQ0FBaUI7Z0JBQ2pCLHVDQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbi8vUGx1Z2luc1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWxsR2FybWVudHNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FsbC1nYXJtZW50cy9hbGwtZ2FybWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRHYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvYWRkLWdhcm1lbnQvYWRkLWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXF1ZXN0U3dhcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcmVxdWVzdC1zd2FwL3JlcXVlc3Qtc3dhcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEdhcm1lbnRTdWNjZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvc3VjY2Vzcy9hZGQtZ2FybWVudC1zdWNjZXNzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvZ2FybWVudC1vdmVydmlldy9nYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FybWVudERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2dhcm1lbnQtZGV0YWlsL2dhcm1lbnQtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5ib3hDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2luYm94L2luYm94LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVjZWl2ZWRSZXF1ZXN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcmVjZWl2ZWQtcmVxdWVzdHMvcmVjZWl2ZWQtcmVxdWVzdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZW5kUmVxdWVzdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3NlbmQtcmVxdWVzdHMvc2VuZC1yZXF1ZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZXF1ZXN0cy9yZXF1ZXN0cy5jb21wb25lbnRcIjtcblxuLy9TZXJ2aWNlc1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3dhcFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcblxuLy9QaXBlc1xuaW1wb3J0IHtHYXJtZW50RmlsdGVyUGlwZX0gZnJvbSBcIi4vc2hhcmVkL3BpcGVzL2dhcm1lbnQtZmlsdGVyLnBpcGVcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgRGF0YVNlcnZpY2UsXG4gICAgICBHYXJtZW50U2VydmljZSxcbiAgICAgIEltYWdlU2VydmljZSxcbiAgICAgIFN3YXBTZXJ2aWNlLFxuICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEVycm9yQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgQWxsR2FybWVudHNDb21wb25lbnQsXG4gICAgICAgIEFkZEdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIFJlcXVlc3RTd2FwQ29tcG9uZW50LFxuICAgICAgICBBZGRHYXJtZW50U3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBJbmJveENvbXBvbmVudCxcbiAgICAgICAgUmVjZWl2ZWRSZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgU2VuZFJlcXVlc3RzQ29tcG9uZW50LFxuICAgICAgICBSZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudEZpbHRlclBpcGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
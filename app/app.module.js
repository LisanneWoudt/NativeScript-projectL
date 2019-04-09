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
var edit_garment_component_1 = require("./pages/garments/edit-garment/edit-garment.component");
var garment_input_fields_component_1 = require("./pages/garments/garment-input-fields/garment-input-fields.component");
var request_swap_component_1 = require("./pages/swap/request-swap/request-swap.component");
var garment_overview_component_1 = require("./pages/garments/garment-overview/garment-overview.component");
var garment_detail_component_1 = require("./pages/garments/garment-detail/garment-detail.component");
var inbox_component_1 = require("./pages/inbox/inbox.component");
var requests_component_1 = require("./pages/swap/requests/requests.component");
var pick_swap_return_garment_component_1 = require("./pages/swap/pick-swap-return-garment/pick-swap-return-garment.component");
var request_return_swap_component_1 = require("./pages/swap/request-return-swap/request-return-swap.component");
var open_requests_component_1 = require("./pages/swap/open-requests/open-requests.component");
var history_component_1 = require("./pages/swap/history/history.component");
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
                edit_garment_component_1.EditGarmentComponent,
                garment_input_fields_component_1.GarmentInputFieldsComponent,
                request_swap_component_1.RequestSwapComponent,
                garment_overview_component_1.GarmentOverviewComponent,
                garment_detail_component_1.GarmentDetailComponent,
                inbox_component_1.InboxComponent,
                requests_component_1.RequestsComponent,
                pick_swap_return_garment_component_1.PickSwapReturnGarmentComponent,
                request_return_swap_component_1.RequestReturnSwapComponent,
                open_requests_component_1.OpenRequestsComponent,
                history_component_1.HistoryComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELFNBQVM7QUFDVCwwREFBZ0U7QUFDaEUsOERBQW9GO0FBQ3BGLHlEQUFrRTtBQUVsRSxZQUFZO0FBQ1osaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCxpRUFBOEQ7QUFDOUQsOERBQTREO0FBQzVELCtGQUEyRjtBQUMzRiw0RkFBeUY7QUFDekYsK0ZBQTRGO0FBQzVGLHVIQUFtSDtBQUNuSCwyRkFBd0Y7QUFDeEYsMkdBQXdHO0FBQ3hHLHFHQUFrRztBQUNsRyxpRUFBOEQ7QUFDOUQsK0VBQTZFO0FBQzdFLCtIQUEwSDtBQUMxSCxnSEFBNEc7QUFDNUcsOEZBQTJGO0FBQzNGLDRFQUEwRTtBQUMxRSxVQUFVO0FBQ1YsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCxxRUFBaUU7QUFDakUsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCwrREFBMkQ7QUFFM0QsT0FBTztBQUNQLDBFQUFxRTtBQWdEckU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTdDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLHVCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix3QkFBYztnQkFDZCx3Q0FBOEI7Z0JBQzlCLDJCQUFpQjthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDVCw0QkFBWTtnQkFDWiwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCw0QkFBWTtnQkFDWiwwQkFBVztnQkFDWCwwQkFBVzthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLDZDQUFvQjtnQkFDcEIsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7Z0JBQ3BCLDREQUEyQjtnQkFDM0IsNkNBQW9CO2dCQUNwQixxREFBd0I7Z0JBQ3hCLGlEQUFzQjtnQkFDdEIsZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixtRUFBOEI7Z0JBQzlCLDBEQUEwQjtnQkFDMUIsK0NBQXFCO2dCQUNyQixvQ0FBZ0I7Z0JBQ2hCLHVDQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbi8vUGx1Z2luc1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWxsR2FybWVudHNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FsbC1nYXJtZW50cy9hbGwtZ2FybWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRHYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvYWRkLWdhcm1lbnQvYWRkLWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFZGl0R2FybWVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2VkaXQtZ2FybWVudC9lZGl0LWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50SW5wdXRGaWVsZHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LWlucHV0LWZpZWxkcy9nYXJtZW50LWlucHV0LWZpZWxkcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcXVlc3RTd2FwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZXF1ZXN0LXN3YXAvcmVxdWVzdC1zd2FwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvZ2FybWVudC1vdmVydmlldy9nYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FybWVudERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2dhcm1lbnQtZGV0YWlsL2dhcm1lbnQtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5ib3hDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2luYm94L2luYm94LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3RzL3JlcXVlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGlja1N3YXBSZXR1cm5HYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnQvcGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFJldHVyblN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3QtcmV0dXJuLXN3YXAvcmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9wZW5SZXF1ZXN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvb3Blbi1yZXF1ZXN0cy9vcGVuLXJlcXVlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudFwiO1xuLy9TZXJ2aWNlc1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3dhcFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcblxuLy9QaXBlc1xuaW1wb3J0IHtHYXJtZW50RmlsdGVyUGlwZX0gZnJvbSBcIi4vc2hhcmVkL3BpcGVzL2dhcm1lbnQtZmlsdGVyLnBpcGVcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgRGF0YVNlcnZpY2UsXG4gICAgICBHYXJtZW50U2VydmljZSxcbiAgICAgIEltYWdlU2VydmljZSxcbiAgICAgIFN3YXBTZXJ2aWNlLFxuICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEVycm9yQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgQWxsR2FybWVudHNDb21wb25lbnQsXG4gICAgICAgIEFkZEdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIEVkaXRHYXJtZW50Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50SW5wdXRGaWVsZHNDb21wb25lbnQsXG4gICAgICAgIFJlcXVlc3RTd2FwQ29tcG9uZW50LFxuICAgICAgICBHYXJtZW50T3ZlcnZpZXdDb21wb25lbnQsXG4gICAgICAgIEdhcm1lbnREZXRhaWxDb21wb25lbnQsXG4gICAgICAgIEluYm94Q29tcG9uZW50LFxuICAgICAgICBSZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgUGlja1N3YXBSZXR1cm5HYXJtZW50Q29tcG9uZW50LFxuICAgICAgICBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudCxcbiAgICAgICAgT3BlblJlcXVlc3RzQ29tcG9uZW50LFxuICAgICAgICBIaXN0b3J5Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50RmlsdGVyUGlwZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
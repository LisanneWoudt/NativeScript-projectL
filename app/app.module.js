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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELFNBQVM7QUFDVCwwREFBZ0U7QUFDaEUsOERBQW9GO0FBQ3BGLHlEQUFrRTtBQUVsRSxZQUFZO0FBQ1osaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCxpRUFBOEQ7QUFDOUQsOERBQTREO0FBQzVELCtGQUEyRjtBQUMzRiw0RkFBeUY7QUFDekYsMkZBQXdGO0FBQ3hGLDJHQUF3RztBQUN4RyxxR0FBa0c7QUFDbEcsaUVBQThEO0FBQzlELCtFQUE2RTtBQUM3RSwrSEFBMEg7QUFDMUgsZ0hBQTRHO0FBQzVHLDhGQUEyRjtBQUMzRiw0RUFBMEU7QUFDMUUsVUFBVTtBQUNWLGlFQUE2RDtBQUM3RCwrREFBMkQ7QUFDM0QscUVBQWlFO0FBQ2pFLGlFQUE2RDtBQUM3RCwrREFBMkQ7QUFDM0QsK0RBQTJEO0FBRTNELE9BQU87QUFDUCwwRUFBcUU7QUE4Q3JFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUEzQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQix1QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsd0JBQWM7Z0JBQ2Qsd0NBQThCO2dCQUM5QiwyQkFBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsMEJBQVc7YUFDWjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQixxREFBd0I7Z0JBQ3hCLGlEQUFzQjtnQkFDdEIsZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixtRUFBOEI7Z0JBQzlCLDBEQUEwQjtnQkFDMUIsK0NBQXFCO2dCQUNyQixvQ0FBZ0I7Z0JBQ2hCLHVDQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbi8vUGx1Z2luc1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWxsR2FybWVudHNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FsbC1nYXJtZW50cy9hbGwtZ2FybWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRHYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvYWRkLWdhcm1lbnQvYWRkLWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXF1ZXN0U3dhcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcmVxdWVzdC1zd2FwL3JlcXVlc3Qtc3dhcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2dhcm1lbnQtb3ZlcnZpZXcvZ2FybWVudC1vdmVydmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhcm1lbnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LWRldGFpbC9nYXJtZW50LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEluYm94Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9pbmJveC9pbmJveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZXF1ZXN0cy9yZXF1ZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBpY2tTd2FwUmV0dXJuR2FybWVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcGljay1zd2FwLXJldHVybi1nYXJtZW50L3BpY2stc3dhcC1yZXR1cm4tZ2FybWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcXVlc3RSZXR1cm5Td2FwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZXF1ZXN0LXJldHVybi1zd2FwL3JlcXVlc3QtcmV0dXJuLXN3YXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcGVuUmVxdWVzdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL29wZW4tcmVxdWVzdHMvb3Blbi1yZXF1ZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnRcIjtcbi8vU2VydmljZXNcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N3YXBTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5cbi8vUGlwZXNcbmltcG9ydCB7R2FybWVudEZpbHRlclBpcGV9IGZyb20gXCIuL3NoYXJlZC9waXBlcy9nYXJtZW50LWZpbHRlci5waXBlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIExvZ2luU2VydmljZSxcbiAgICAgIERhdGFTZXJ2aWNlLFxuICAgICAgR2FybWVudFNlcnZpY2UsXG4gICAgICBJbWFnZVNlcnZpY2UsXG4gICAgICBTd2FwU2VydmljZSxcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIEFsbEdhcm1lbnRzQ29tcG9uZW50LFxuICAgICAgICBBZGRHYXJtZW50Q29tcG9uZW50LFxuICAgICAgICBSZXF1ZXN0U3dhcENvbXBvbmVudCxcbiAgICAgICAgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBJbmJveENvbXBvbmVudCxcbiAgICAgICAgUmVxdWVzdHNDb21wb25lbnQsXG4gICAgICAgIFBpY2tTd2FwUmV0dXJuR2FybWVudENvbXBvbmVudCxcbiAgICAgICAgUmVxdWVzdFJldHVyblN3YXBDb21wb25lbnQsXG4gICAgICAgIE9wZW5SZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgSGlzdG9yeUNvbXBvbmVudCxcbiAgICAgICAgR2FybWVudEZpbHRlclBpcGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
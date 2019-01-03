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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELFNBQVM7QUFDVCwwREFBZ0U7QUFDaEUsOERBQW9GO0FBQ3BGLHlEQUFrRTtBQUVsRSxZQUFZO0FBQ1osaURBQStDO0FBQy9DLGlFQUE4RDtBQUM5RCw4REFBNEQ7QUFDNUQsK0ZBQTJGO0FBQzNGLDRGQUF5RjtBQUN6RiwyRkFBd0Y7QUFDeEYsd0dBQW9HO0FBQ3BHLDJHQUF3RztBQUN4RyxxR0FBa0c7QUFDbEcsaUVBQThEO0FBQzlELDBHQUF1RztBQUN2Ryw4RkFBMkY7QUFDM0YsK0VBQTZFO0FBRTdFLFVBQVU7QUFDVixpRUFBNkQ7QUFDN0QsK0RBQTJEO0FBQzNELHFFQUFpRTtBQUNqRSxpRUFBNkQ7QUFDN0QsK0RBQTJEO0FBQzNELCtEQUEyRDtBQUUzRCxPQUFPO0FBQ1AsMEVBQXFFO0FBNENyRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBekNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLHdCQUFjO2dCQUNkLHdDQUE4QjtnQkFDOUIsMkJBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDRCQUFZO2dCQUNaLDBCQUFXO2dCQUNYLGdDQUFjO2dCQUNkLDRCQUFZO2dCQUNaLDBCQUFXO2dCQUNYLDBCQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsNkNBQW9CO2dCQUNwQiwyQ0FBbUI7Z0JBQ25CLDZDQUFvQjtnQkFDcEIsMERBQTBCO2dCQUMxQixxREFBd0I7Z0JBQ3hCLGlEQUFzQjtnQkFDdEIsZ0NBQWM7Z0JBQ2QsdURBQXlCO2dCQUN6QiwrQ0FBcUI7Z0JBQ3JCLHNDQUFpQjtnQkFDakIsdUNBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuLy9QbHVnaW5zXG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFsbEdhcm1lbnRzQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9hbGwtZ2FybWVudHMvYWxsLWdhcm1lbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkR2FybWVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FkZC1nYXJtZW50L2FkZC1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3Qtc3dhcC9yZXF1ZXN0LXN3YXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRHYXJtZW50U3VjY2Vzc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL3N1Y2Nlc3MvYWRkLWdhcm1lbnQtc3VjY2Vzcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2dhcm1lbnQtb3ZlcnZpZXcvZ2FybWVudC1vdmVydmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhcm1lbnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LWRldGFpbC9nYXJtZW50LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEluYm94Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9pbmJveC9pbmJveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlY2VpdmVkUmVxdWVzdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlY2VpdmVkLXJlcXVlc3RzL3JlY2VpdmVkLXJlcXVlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VuZFJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9zZW5kLXJlcXVlc3RzL3NlbmQtcmVxdWVzdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXF1ZXN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50XCI7XG5cbi8vU2VydmljZXNcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N3YXBTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5cbi8vUGlwZXNcbmltcG9ydCB7R2FybWVudEZpbHRlclBpcGV9IGZyb20gXCIuL3NoYXJlZC9waXBlcy9nYXJtZW50LWZpbHRlci5waXBlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIExvZ2luU2VydmljZSxcbiAgICAgIERhdGFTZXJ2aWNlLFxuICAgICAgR2FybWVudFNlcnZpY2UsXG4gICAgICBJbWFnZVNlcnZpY2UsXG4gICAgICBTd2FwU2VydmljZSxcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgQWxsR2FybWVudHNDb21wb25lbnQsXG4gICAgICAgIEFkZEdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIFJlcXVlc3RTd2FwQ29tcG9uZW50LFxuICAgICAgICBBZGRHYXJtZW50U3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBJbmJveENvbXBvbmVudCxcbiAgICAgICAgUmVjZWl2ZWRSZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgU2VuZFJlcXVlc3RzQ29tcG9uZW50LFxuICAgICAgICBSZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudEZpbHRlclBpcGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
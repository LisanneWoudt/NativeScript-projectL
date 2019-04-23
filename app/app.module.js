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
//Garment components
var all_garments_component_1 = require("./pages/garments/all-garments/all-garments.component");
var add_garment_component_1 = require("./pages/garments/add-garment/add-garment.component");
var edit_garment_component_1 = require("./pages/garments/edit-garment/edit-garment.component");
var garment_input_fields_component_1 = require("./pages/garments/garment-input-fields/garment-input-fields.component");
var garment_overview_component_1 = require("./pages/garments/garment-overview/garment-overview.component");
var garment_detail_component_1 = require("./pages/garments/garment-detail/garment-detail.component");
//Swap request components
var requests_component_1 = require("./pages/swap/requests/requests.component");
var request_swap_component_1 = require("./pages/swap/request-swap/request-swap.component");
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
                garment_overview_component_1.GarmentOverviewComponent,
                garment_detail_component_1.GarmentDetailComponent,
                requests_component_1.RequestsComponent,
                request_swap_component_1.RequestSwapComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELFNBQVM7QUFDVCwwREFBZ0U7QUFDaEUsOERBQW9GO0FBQ3BGLHlEQUFrRTtBQUVsRSxZQUFZO0FBQ1osaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCxpRUFBOEQ7QUFDOUQsOERBQTREO0FBQzVELG9CQUFvQjtBQUNwQiwrRkFBMkY7QUFDM0YsNEZBQXlGO0FBQ3pGLCtGQUE0RjtBQUM1Rix1SEFBbUg7QUFDbkgsMkdBQXdHO0FBQ3hHLHFHQUFrRztBQUNsRyx5QkFBeUI7QUFDekIsK0VBQTZFO0FBQzdFLDJGQUF3RjtBQUN4RiwrSEFBMEg7QUFDMUgsZ0hBQTRHO0FBQzVHLDhGQUEyRjtBQUMzRiw0RUFBMEU7QUFDMUUsVUFBVTtBQUNWLGlFQUE2RDtBQUM3RCwrREFBMkQ7QUFDM0QscUVBQWlFO0FBQ2pFLGlFQUE2RDtBQUM3RCwrREFBMkQ7QUFDM0QsK0RBQTJEO0FBQzNELE9BQU87QUFDUCwwRUFBcUU7QUErQ3JFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE1Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQix1QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsd0JBQWM7Z0JBQ2Qsd0NBQThCO2dCQUM5QiwyQkFBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsMEJBQVc7YUFDWjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQiw0REFBMkI7Z0JBQzNCLHFEQUF3QjtnQkFDeEIsaURBQXNCO2dCQUN0QixzQ0FBaUI7Z0JBQ2pCLDZDQUFvQjtnQkFDcEIsbUVBQThCO2dCQUM5QiwwREFBMEI7Z0JBQzFCLCtDQUFxQjtnQkFDckIsb0NBQWdCO2dCQUNoQix1Q0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG4vL1BsdWdpbnNcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcblxuLy9Db21wb25lbnRzXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbi8vR2FybWVudCBjb21wb25lbnRzXG5pbXBvcnQgeyBBbGxHYXJtZW50c0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvYWxsLWdhcm1lbnRzL2FsbC1nYXJtZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEdhcm1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9hZGQtZ2FybWVudC9hZGQtZ2FybWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVkaXRHYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvZWRpdC1nYXJtZW50L2VkaXQtZ2FybWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhcm1lbnRJbnB1dEZpZWxkc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2dhcm1lbnQtaW5wdXQtZmllbGRzL2dhcm1lbnQtaW5wdXQtZmllbGRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvZ2FybWVudC1vdmVydmlldy9nYXJtZW50LW92ZXJ2aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FybWVudERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2dhcm1lbnQtZGV0YWlsL2dhcm1lbnQtZGV0YWlsLmNvbXBvbmVudFwiO1xuLy9Td2FwIHJlcXVlc3QgY29tcG9uZW50c1xuaW1wb3J0IHsgUmVxdWVzdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3RzL3JlcXVlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3Qtc3dhcC9yZXF1ZXN0LXN3YXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaWNrU3dhcFJldHVybkdhcm1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3BpY2stc3dhcC1yZXR1cm4tZ2FybWVudC9waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXF1ZXN0UmV0dXJuU3dhcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcmVxdWVzdC1yZXR1cm4tc3dhcC9yZXF1ZXN0LXJldHVybi1zd2FwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3BlblJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9vcGVuLXJlcXVlc3RzL29wZW4tcmVxdWVzdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50XCI7XG4vL1NlcnZpY2VzXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7R2FybWVudFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvaW1hZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTd2FwU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3N3YXAuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuLy9QaXBlc1xuaW1wb3J0IHtHYXJtZW50RmlsdGVyUGlwZX0gZnJvbSBcIi4vc2hhcmVkL3BpcGVzL2dhcm1lbnQtZmlsdGVyLnBpcGVcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgRGF0YVNlcnZpY2UsXG4gICAgICBHYXJtZW50U2VydmljZSxcbiAgICAgIEltYWdlU2VydmljZSxcbiAgICAgIFN3YXBTZXJ2aWNlLFxuICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEVycm9yQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgQWxsR2FybWVudHNDb21wb25lbnQsXG4gICAgICAgIEFkZEdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIEVkaXRHYXJtZW50Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50SW5wdXRGaWVsZHNDb21wb25lbnQsXG4gICAgICAgIEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudERldGFpbENvbXBvbmVudCxcbiAgICAgICAgUmVxdWVzdHNDb21wb25lbnQsXG4gICAgICAgIFJlcXVlc3RTd2FwQ29tcG9uZW50LFxuICAgICAgICBQaWNrU3dhcFJldHVybkdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIFJlcXVlc3RSZXR1cm5Td2FwQ29tcG9uZW50LFxuICAgICAgICBPcGVuUmVxdWVzdHNDb21wb25lbnQsXG4gICAgICAgIEhpc3RvcnlDb21wb25lbnQsXG4gICAgICAgIEdhcm1lbnRGaWx0ZXJQaXBlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
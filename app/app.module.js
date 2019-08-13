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
var user_profile_component_1 = require("./pages/user/user-profile.component");
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
                user_profile_component_1.UserProfileComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELFNBQVM7QUFDVCwwREFBZ0U7QUFDaEUsOERBQW9GO0FBQ3BGLHlEQUFrRTtBQUVsRSxZQUFZO0FBQ1osaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCxpRUFBOEQ7QUFDOUQsOEVBQTJFO0FBQzNFLDhEQUE0RDtBQUM1RCxvQkFBb0I7QUFDcEIsK0ZBQTJGO0FBQzNGLDRGQUF5RjtBQUN6RiwrRkFBNEY7QUFDNUYsdUhBQW1IO0FBQ25ILDJHQUF3RztBQUN4RyxxR0FBa0c7QUFDbEcseUJBQXlCO0FBQ3pCLCtFQUE2RTtBQUM3RSwyRkFBd0Y7QUFDeEYsK0hBQTBIO0FBQzFILGdIQUE0RztBQUM1Ryw4RkFBMkY7QUFDM0YsNEVBQTBFO0FBQzFFLFVBQVU7QUFDVixpRUFBNkQ7QUFDN0QsK0RBQTJEO0FBQzNELHFFQUFpRTtBQUNqRSxpRUFBNkQ7QUFDN0QsK0RBQTJEO0FBQzNELCtEQUEyRDtBQUMzRCxPQUFPO0FBQ1AsMEVBQXFFO0FBZ0RyRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0NyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLHdCQUFjO2dCQUNkLHdDQUE4QjtnQkFDOUIsMkJBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDRCQUFZO2dCQUNaLDBCQUFXO2dCQUNYLGdDQUFjO2dCQUNkLDRCQUFZO2dCQUNaLDBCQUFXO2dCQUNYLDBCQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQiw0REFBMkI7Z0JBQzNCLHFEQUF3QjtnQkFDeEIsaURBQXNCO2dCQUN0QixzQ0FBaUI7Z0JBQ2pCLDZDQUFvQjtnQkFDcEIsbUVBQThCO2dCQUM5QiwwREFBMEI7Z0JBQzFCLCtDQUFxQjtnQkFDckIsb0NBQWdCO2dCQUNoQix1Q0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG4vL1BsdWdpbnNcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcblxuLy9Db21wb25lbnRzXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy91c2VyL3VzZXItcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG4vL0dhcm1lbnQgY29tcG9uZW50c1xuaW1wb3J0IHsgQWxsR2FybWVudHNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FsbC1nYXJtZW50cy9hbGwtZ2FybWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRHYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvYWRkLWdhcm1lbnQvYWRkLWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFZGl0R2FybWVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2VkaXQtZ2FybWVudC9lZGl0LWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50SW5wdXRGaWVsZHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LWlucHV0LWZpZWxkcy9nYXJtZW50LWlucHV0LWZpZWxkcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhcm1lbnRPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2dhcm1lbnQtb3ZlcnZpZXcvZ2FybWVudC1vdmVydmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhcm1lbnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LWRldGFpbC9nYXJtZW50LWRldGFpbC5jb21wb25lbnRcIjtcbi8vU3dhcCByZXF1ZXN0IGNvbXBvbmVudHNcbmltcG9ydCB7IFJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZXF1ZXN0cy9yZXF1ZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcXVlc3RTd2FwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9yZXF1ZXN0LXN3YXAvcmVxdWVzdC1zd2FwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGlja1N3YXBSZXR1cm5HYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3dhcC9waWNrLXN3YXAtcmV0dXJuLWdhcm1lbnQvcGljay1zd2FwLXJldHVybi1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFJldHVyblN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3QtcmV0dXJuLXN3YXAvcmVxdWVzdC1yZXR1cm4tc3dhcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9wZW5SZXF1ZXN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvb3Blbi1yZXF1ZXN0cy9vcGVuLXJlcXVlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudFwiO1xuLy9TZXJ2aWNlc1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3dhcFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9zd2FwLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbi8vUGlwZXNcbmltcG9ydCB7R2FybWVudEZpbHRlclBpcGV9IGZyb20gXCIuL3NoYXJlZC9waXBlcy9nYXJtZW50LWZpbHRlci5waXBlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIExvZ2luU2VydmljZSxcbiAgICAgIERhdGFTZXJ2aWNlLFxuICAgICAgR2FybWVudFNlcnZpY2UsXG4gICAgICBJbWFnZVNlcnZpY2UsXG4gICAgICBTd2FwU2VydmljZSxcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFVzZXJQcm9maWxlQ29tcG9uZW50LFxuICAgICAgICBBbGxHYXJtZW50c0NvbXBvbmVudCxcbiAgICAgICAgQWRkR2FybWVudENvbXBvbmVudCxcbiAgICAgICAgRWRpdEdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIEdhcm1lbnRJbnB1dEZpZWxkc0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBSZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgUmVxdWVzdFN3YXBDb21wb25lbnQsXG4gICAgICAgIFBpY2tTd2FwUmV0dXJuR2FybWVudENvbXBvbmVudCxcbiAgICAgICAgUmVxdWVzdFJldHVyblN3YXBDb21wb25lbnQsXG4gICAgICAgIE9wZW5SZXF1ZXN0c0NvbXBvbmVudCxcbiAgICAgICAgSGlzdG9yeUNvbXBvbmVudCxcbiAgICAgICAgR2FybWVudEZpbHRlclBpcGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
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
var request_swap_component_1 = require("./pages/swap/request-swap.component");
var add_garment_success_component_1 = require("./pages/garments/success/add-garment-success.component");
var garment_overview_component_1 = require("./pages/garments/garment-overview/garment-overview.component");
var garment_detail_component_1 = require("./pages/garments/garment-detail/garment-detail.component");
var inbox_component_1 = require("./pages/inbox/inbox.component");
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
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBQ3hELDBEQUFnRTtBQUNoRSw4REFBbUY7QUFFbkYsWUFBWTtBQUNaLGlEQUErQztBQUMvQyxpRUFBOEQ7QUFDOUQsOERBQTREO0FBQzVELCtGQUEyRjtBQUMzRiw0RkFBeUY7QUFDekYsOEVBQTJFO0FBQzNFLHdHQUFvRztBQUNwRywyR0FBd0c7QUFDeEcscUdBQWtHO0FBQ2xHLGlFQUE4RDtBQUU5RCxVQUFVO0FBQ1YsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCxxRUFBaUU7QUFDakUsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCwrREFBMkQ7QUF5QzNEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFyQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUN0QixnRUFBZ0U7Z0JBQzFELHVCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix3QkFBYztnQkFDZCx3Q0FBOEI7YUFDakM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsMEJBQVc7YUFDWjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQiwwREFBMEI7Z0JBQzFCLHFEQUF3QjtnQkFDeEIsaURBQXNCO2dCQUN0QixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcidcblxuLy9Db21wb25lbnRzXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWxsR2FybWVudHNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FsbC1nYXJtZW50cy9hbGwtZ2FybWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRHYXJtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvYWRkLWdhcm1lbnQvYWRkLWdhcm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXF1ZXN0U3dhcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N3YXAvcmVxdWVzdC1zd2FwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkR2FybWVudFN1Y2Nlc3NDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9zdWNjZXNzL2FkZC1nYXJtZW50LXN1Y2Nlc3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50T3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9nYXJtZW50LW92ZXJ2aWV3L2dhcm1lbnQtb3ZlcnZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYXJtZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZ2FybWVudHMvZ2FybWVudC1kZXRhaWwvZ2FybWVudC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbmJveENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvaW5ib3gvaW5ib3guY29tcG9uZW50XCI7XG5cbi8vU2VydmljZXNcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHtHYXJtZW50U2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2dhcm1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N3YXBTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAvLyAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcywge2VuYWJsZVRyYWNpbmc6IGZhbHNlfSksXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBEcm9wRG93bk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIExvZ2luU2VydmljZSxcbiAgICAgIERhdGFTZXJ2aWNlLFxuICAgICAgR2FybWVudFNlcnZpY2UsXG4gICAgICBJbWFnZVNlcnZpY2UsXG4gICAgICBTd2FwU2VydmljZSxcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgQWxsR2FybWVudHNDb21wb25lbnQsXG4gICAgICAgIEFkZEdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIFJlcXVlc3RTd2FwQ29tcG9uZW50LFxuICAgICAgICBBZGRHYXJtZW50U3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgR2FybWVudE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICBHYXJtZW50RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBJbmJveENvbXBvbmVudCxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
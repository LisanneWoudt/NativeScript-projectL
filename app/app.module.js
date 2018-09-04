"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
//Components
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require("./pages/home/home.component");
var all_garments_component_1 = require("./pages/garments/all-garments/all-garments.component");
var add_garment_component_1 = require("./pages/garments/add-garment/add-garment.component");
var request_swap_component_1 = require("./pages/swap/request-swap.component");
//Services
var login_service_1 = require("./shared/services/login.service");
var data_service_1 = require("./shared/services/data.service");
var garment_service_1 = require("./shared/services/garment.service");
var swap_service_1 = require("./shared/services/swap.service");
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
                forms_1.NativeScriptFormsModule
            ],
            providers: [
                login_service_1.LoginService,
                data_service_1.DataService,
                garment_service_1.GarmentService,
                swap_service_1.SwapService
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                all_garments_component_1.AllGarmentsComponent,
                add_garment_component_1.AddGarmentComponent,
                request_swap_component_1.RequestSwapComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw2Q0FBc0Q7QUFHdEQsMkRBQXdEO0FBRXhELFlBQVk7QUFDWixpREFBK0M7QUFDL0MsaUVBQThEO0FBQzlELDhEQUE0RDtBQUM1RCwrRkFBMkY7QUFDM0YsNEZBQXlGO0FBQ3pGLDhFQUEyRTtBQUUzRSxVQUFVO0FBQ1YsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUMzRCxxRUFBaUU7QUFDakUsK0RBQTJEO0FBK0IzRDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDdEIsZ0VBQWdFO2dCQUMxRCx1QkFBZ0I7Z0JBQ2hCLCtCQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDVCw0QkFBWTtnQkFDWiwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCwwQkFBVzthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLDZDQUFvQjtnQkFDcEIsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFsbEdhcm1lbnRzQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9nYXJtZW50cy9hbGwtZ2FybWVudHMvYWxsLWdhcm1lbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkR2FybWVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2dhcm1lbnRzL2FkZC1nYXJtZW50L2FkZC1nYXJtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVxdWVzdFN3YXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zd2FwL3JlcXVlc3Qtc3dhcC5jb21wb25lbnRcIjtcblxuLy9TZXJ2aWNlc1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQge0dhcm1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N3YXBTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvc3dhcC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gIC8vICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzLCB7ZW5hYmxlVHJhY2luZzogZmFsc2V9KSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgRGF0YVNlcnZpY2UsXG4gICAgICBHYXJtZW50U2VydmljZSxcbiAgICAgIFN3YXBTZXJ2aWNlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgQWxsR2FybWVudHNDb21wb25lbnQsXG4gICAgICAgIEFkZEdhcm1lbnRDb21wb25lbnQsXG4gICAgICAgIFJlcXVlc3RTd2FwQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
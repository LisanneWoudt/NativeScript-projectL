import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from "./app-routing.module";

//Components
import { AppComponent } from "./app.component";
import { LoginComponent} from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { AddGarmentComponent } from "./pages/garments/add-garment.component";

//Services
import {LoginService} from "./shared/services/login.service";
import {DataService} from "./shared/services/data.service";
import {GarmentService} from "./shared/services/garment.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
  //      RouterModule.forRoot(appRoutes, {enableTracing: false}),
        HttpClientModule,
        NativeScriptFormsModule
    ],
    providers: [
      LoginService,
      DataService,
      GarmentService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AddGarmentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

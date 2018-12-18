import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from "./app-routing.module";
import { DropDownModule } from "nativescript-drop-down/angular";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

//Components
import { AppComponent } from "./app.component";
import { LoginComponent} from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { AllGarmentsComponent} from "./pages/garments/all-garments/all-garments.component";
import { AddGarmentComponent } from "./pages/garments/add-garment/add-garment.component";
import { RequestSwapComponent } from "./pages/swap/request-swap/request-swap.component";
import { AddGarmentSuccessComponent } from "./pages/garments/success/add-garment-success.component";
import { GarmentOverviewComponent } from "./pages/garments/garment-overview/garment-overview.component";
import { GarmentDetailComponent } from "./pages/garments/garment-detail/garment-detail.component";
import { InboxComponent} from "./pages/inbox/inbox.component";
import { ReceivedRequestsComponent } from "./pages/swap/received-requests/received-requests.component"

//Services
import {LoginService} from "./shared/services/login.service";
import {DataService} from "./shared/services/data.service";
import {GarmentService} from "./shared/services/garment.service";
import {ImageService} from "./shared/services/image.service";
import {SwapService} from "./shared/services/swap.service";
import {UserService} from "./shared/services/user.service";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
  //      RouterModule.forRoot(appRoutes, {enableTracing: false}),
        HttpClientModule,
        NativeScriptFormsModule,
        DropDownModule,
        NativeScriptUISideDrawerModule
    ],
    providers: [
      LoginService,
      DataService,
      GarmentService,
      ImageService,
      SwapService,
      UserService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AllGarmentsComponent,
        AddGarmentComponent,
        RequestSwapComponent,
        AddGarmentSuccessComponent,
        GarmentOverviewComponent,
        GarmentDetailComponent,
        InboxComponent,
        ReceivedRequestsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from "./app-routing.module";
//Plugins
import { DropDownModule } from "nativescript-drop-down/angular";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

//Components
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./pages/error/error.component";
import { LoginComponent} from "./pages/login/login.component";
import { UserProfileComponent } from "./pages/user/user-profile.component";
import { HomeComponent } from "./pages/home/home.component";
//Garment components
import { AllGarmentsComponent} from "./pages/garments/all-garments/all-garments.component";
import { AddGarmentComponent } from "./pages/garments/add-garment/add-garment.component";
import { EditGarmentComponent } from "./pages/garments/edit-garment/edit-garment.component";
import { GarmentInputFieldsComponent } from "./pages/garments/garment-input-fields/garment-input-fields.component";
import { GarmentOverviewComponent } from "./pages/garments/garment-overview/garment-overview.component";
import { GarmentDetailComponent } from "./pages/garments/garment-detail/garment-detail.component";
//Swap request components
import { RequestsComponent } from "./pages/swap/requests/requests.component";
import { RequestSwapComponent } from "./pages/swap/request-swap/request-swap.component";
import { PickSwapReturnGarmentComponent } from "./pages/swap/pick-swap-return-garment/pick-swap-return-garment.component";
import { RequestReturnSwapComponent } from "./pages/swap/request-return-swap/request-return-swap.component";
import { OpenRequestsComponent } from "./pages/swap/open-requests/open-requests.component";
import { HistoryComponent } from "./pages/swap/history/history.component";
//Services
import {LoginService} from "./shared/services/login.service";
import {DataService} from "./shared/services/data.service";
import {GarmentService} from "./shared/services/garment.service";
import {ImageService} from "./shared/services/image.service";
import {SwapService} from "./shared/services/swap.service";
import {UserService} from "./shared/services/user.service";
//Pipes
import {GarmentFilterPipe} from "./shared/pipes/garment-filter.pipe";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptFormsModule,
        DropDownModule,
        NativeScriptUISideDrawerModule,
        TNSCheckBoxModule
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
        ErrorComponent,
        HomeComponent,
        LoginComponent,
        UserProfileComponent,
        AllGarmentsComponent,
        AddGarmentComponent,
        EditGarmentComponent,
        GarmentInputFieldsComponent,
        GarmentOverviewComponent,
        GarmentDetailComponent,
        RequestsComponent,
        RequestSwapComponent,
        PickSwapReturnGarmentComponent,
        RequestReturnSwapComponent,
        OpenRequestsComponent,
        HistoryComponent,
        GarmentFilterPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./pages/error/error.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AddGarmentComponent } from "./pages/garments/add-garment/add-garment.component";
import { AllGarmentsComponent } from "./pages/garments/all-garments/all-garments.component";
import { RequestSwapComponent } from "./pages/swap/request-swap/request-swap.component";
import { GarmentDetailComponent} from "./pages/garments/garment-detail/garment-detail.component";
import { InboxComponent } from "./pages/inbox/inbox.component";
import { ReceivedRequestsComponent } from "./pages/swap/received-requests/received-requests.component";
import { SendRequestsComponent } from "./pages/swap/send-requests/send-requests.component";
import { PickSwapReturnGarmentComponent } from "./pages/swap/pick-swap-return-garment/pick-swap-return-garment.component";
import { RequestReturnSwapComponent } from "./pages/swap/request-return-swap/request-return-swap.component";

const routes: Routes = [
    { path: "", redirectTo: "/swap-return-request/2/4", pathMatch: "full" },
    { path: "error", component: ErrorComponent},
    { path: "home", component: HomeComponent },
    { path: "home/:success", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "garments/add", component: AddGarmentComponent},
    { path: "garments/all", component: AllGarmentsComponent},
    { path: "swap-request/:id", component: RequestSwapComponent},
    { path: "swap-return-request/:garmentId/:garmentInReturnId", component: RequestReturnSwapComponent},
    { path: "swap-requests/received/:userid", component: ReceivedRequestsComponent},
    { path: "swap-requests/send/:userid", component: SendRequestsComponent},
    { path: "swap-requests/return-garment/:userid/:garmentId", component: PickSwapReturnGarmentComponent},
    { path: "garment/:garmentId/:garmentSwapId", component: GarmentDetailComponent},
    { path: "inbox", component: InboxComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

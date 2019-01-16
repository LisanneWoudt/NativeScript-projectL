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

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "error", component: ErrorComponent},
    { path: "home", component: HomeComponent },
    { path: "home/:success", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "garments/add", component: AddGarmentComponent},
    { path: "garments/all", component: AllGarmentsComponent},
    { path: "swap-request/:id", component: RequestSwapComponent},
    { path: "swap-requests/received/:userid", component: ReceivedRequestsComponent},
    { path: "swap-requests/send/:userid", component: SendRequestsComponent},
    { path: "garment/:id", component: GarmentDetailComponent},
    { path: "inbox", component: InboxComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

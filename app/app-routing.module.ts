import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./pages/error/error.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { UserProfileComponent } from "./pages/user/user-profile.component";
import { AddGarmentComponent } from "./pages/garments/add-garment/add-garment.component";
import { EditGarmentComponent } from "./pages/garments/edit-garment/edit-garment.component";
import { AllGarmentsComponent } from "./pages/garments/all-garments/all-garments.component";
import { RequestSwapComponent } from "./pages/swap/request-swap/request-swap.component";
import { GarmentDetailComponent} from "./pages/garments/garment-detail/garment-detail.component";
import { PickSwapReturnGarmentComponent } from "./pages/swap/pick-swap-return-garment/pick-swap-return-garment.component";
import { RequestReturnSwapComponent } from "./pages/swap/request-return-swap/request-return-swap.component";
import { OpenRequestsComponent } from "./pages/swap/open-requests/open-requests.component";
import { HistoryComponent } from "./pages/swap/history/history.component";
import { WelcomeComponent } from "./pages/home/welcome/welcome.component";
import { InboxComponent } from "./pages/inbox/inbox.component";
import { ChatComponent } from "./pages/inbox/chat/chat.component";

const routes: Routes = [
    { path: "", redirectTo: "/inbox", pathMatch: "full" },
    { path: "error", component: ErrorComponent},
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "profile", component: UserProfileComponent },
    { path: "inbox", component: InboxComponent },
    { path: "inbox/chat", component: ChatComponent },
    { path: "garments/add", component: AddGarmentComponent},
    { path: "garments/edit", component: EditGarmentComponent},
    { path: "garments/all", component: AllGarmentsComponent},
    { path: "swap-request/:id", component: RequestSwapComponent},
    { path: "swap-return-request", component: RequestReturnSwapComponent},
    { path: "swap-requests/open/:userid", component: OpenRequestsComponent},
    { path: "swap-requests/history/:userid", component: HistoryComponent},
    { path: "swap-requests/return-garment/:userid", component: PickSwapReturnGarmentComponent},
    { path: "garment/:garmentId", component: GarmentDetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

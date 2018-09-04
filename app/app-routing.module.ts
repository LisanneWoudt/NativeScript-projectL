import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AddGarmentComponent } from "./pages/garments/add-garment/add-garment.component";
import { AllGarmentsComponent } from "./pages/garments/all-garments/all-garments.component";
import { RequestSwapComponent } from "./pages/swap/request-swap.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "garments/add", component: AddGarmentComponent},
    { path: "garments/all", component: AllGarmentsComponent},
    { path: "swap-request/:id", component: RequestSwapComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

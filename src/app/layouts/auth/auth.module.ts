import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule
    ],
    exports: [LoginComponent]
})

export class AuthModule {}
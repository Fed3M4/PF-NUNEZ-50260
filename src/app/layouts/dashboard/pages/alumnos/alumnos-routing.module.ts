import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlumnosComponent } from "./alumnos.component";
import { UserDetailComponent } from "./pages/user-detail/user-detail.component";

const routes: Routes = [
    {path: '', component: AlumnosComponent},
    {path: ':id', component: UserDetailComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AlumnosRoutingModule {}
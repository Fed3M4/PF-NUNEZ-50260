import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { adminGuard } from "../../core/guards/admin.guard";
import { profesorGuard } from "../../core/guards/profesor.guard";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: '',
        children: [
            {path: 'home', 
            loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)},
            {path: 'alumnos',
            loadChildren: () => import('./pages/alumnos/alumnos.module').then((m)=> m.AlumnosModule)},
            {path: 'alumnos/:id',
            loadChildren: () => import('./pages/alumnos/alumnos.module').then((m)=> m.AlumnosModule)},
            {path: 'nosotros',
            loadChildren: () => import('./pages/nosotros/nosotros.module').then((m)=> m.NosotrosModule)},
            {path: 'profesores', canActivate: [adminGuard, profesorGuard],
            loadChildren: () => import('./pages/profesores/profesores.module').then((m) => m.ProfesoresModule)},
            {path: 'cursos',
            loadChildren: () => import('./pages/cursos/cursos.module').then((m)=> m.CursosModule)},
            {path: 'inscripciones', canActivate: [adminGuard],
            loadChildren: () => import('./pages/inscripciones/inscripciones.module').then((m)=> m.InscripcionesModule)},
        ]
    },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}
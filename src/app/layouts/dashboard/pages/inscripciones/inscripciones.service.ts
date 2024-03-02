import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "../../../../../environments/environment.prod";
import { Inscripcion } from "../../../../shared/models/interfaces";

@Injectable({providedIn: 'root'})

export class InscripcionesService {
    constructor(
        private http: HttpClient
    ) {}

    getInscriptions() {
        return this.http.get<Inscripcion[]>(`${enviroment.apiURL}/inscriptions?_embed=user&_embed=course`)
    }
}
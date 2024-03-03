import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "../../../../../environments/environment.prod";
import { Inscripcion } from "../../../../shared/models/interfaces";
import { LoadingService } from "../../../../core/services/loading.service";
import { delay, finalize } from "rxjs";

@Injectable({providedIn: 'root'})

export class InscripcionesService {
    constructor(
        private http: HttpClient,
        private loadingService: LoadingService
    ) {}

    getInscriptions() {
        this.loadingService.setIsLoading(true)
        return this.http.get<Inscripcion[]>(
            `${enviroment.apiURL}/inscriptions?_embed=user&_embed=course`
            )
            .pipe(
                delay(1000),
                finalize(() => this.loadingService.setIsLoading(false))
            )
    }
}
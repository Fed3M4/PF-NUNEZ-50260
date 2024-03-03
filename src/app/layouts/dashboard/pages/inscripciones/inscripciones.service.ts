import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inscripcion } from "../../../../shared/models/interfaces";
import { LoadingService } from "../../../../core/services/loading.service";
import { Observable, catchError, delay, finalize, of } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { AlertService } from "../../../../core/services/alerts.service";

@Injectable({providedIn: 'root'})

export class InscripcionesService {
    constructor(
        private http: HttpClient,
        private loadingService: LoadingService,
        private alertService: AlertService
    ) {}

    getInscriptions() {
        this.loadingService.setIsLoading(true)
        return this.http.get<Inscripcion[]>(
            `${environment.apiURL}/inscriptions?_embed=user&_embed=course`
            )
            .pipe(
                delay(1000),
                finalize(() => this.loadingService.setIsLoading(false))
            )
    }
    deleteUser(inscriptionID: string): Observable<Inscripcion[]> {
        this.loadingService.setIsLoading(true)
        return this.http
          .delete<Inscripcion[]>(`${environment.apiURL}/inscriptions/${inscriptionID}`)
          .pipe(
            delay(1000),
            catchError((error) => {
              this.alertService.showError(`Error al eliminar usuario`);
              return of(error);
            }),
            finalize(() => this.loadingService.setIsLoading(false))
          );
      }
}
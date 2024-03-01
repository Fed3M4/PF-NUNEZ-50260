import { Injectable } from '@angular/core';
import { Curso } from '../../shared/models/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoadingService } from './loading.service';
import { delay, finalize } from 'rxjs';

let CURSOS_DB: Curso[] = [
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(private httpClient: HttpClient, private loadingService: LoadingService) { }

  getCursos() {
    this.loadingService.setIsLoading(true)
    return this.httpClient.get<Curso[]>(`${environment.apiURL}/courses`).pipe(delay(1000)).pipe(finalize(()=> this.loadingService.setIsLoading(false)))
  }
}

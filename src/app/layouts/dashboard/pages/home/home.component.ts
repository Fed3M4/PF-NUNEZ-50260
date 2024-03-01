import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private loadingService: LoadingService) {
    this.cargarPantalla()
  }

  cargarPantalla():void {
    const obs = new Observable((suscriber)=> {
      setTimeout(() => {
        suscriber.next('Pantalla de inicio cargada'),
        suscriber.complete()
      }, 2000);
    })

    this.loadingService.setIsLoading(true);

    obs.subscribe({
      next: (msg)=> {
        console.log(msg)
      },
      complete: () => this.loadingService.setIsLoading(false)
    })
  }
}

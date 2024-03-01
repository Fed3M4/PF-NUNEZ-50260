import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  constructor(private loadingService: LoadingService) {
    this.cargarPantalla()
  }

  cargarPantalla():void {
    const obs = new Observable((suscriber)=> {
      setTimeout(() => {
        suscriber.next('Pantalla de inicio cargada'),
        suscriber.complete()
      }, 3000);
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

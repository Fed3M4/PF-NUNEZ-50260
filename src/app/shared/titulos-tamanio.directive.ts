import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulosTamanio]'
})
export class TitulosTamanioDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = '20px'
   }

}

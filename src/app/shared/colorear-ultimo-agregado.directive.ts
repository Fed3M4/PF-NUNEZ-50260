import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorearUltimoAgregado]'
})
export class ColorearUltimoAgregadoDirective {
  @Input() set appColorearUltimoAgregado(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#98c3ed');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
  }
}

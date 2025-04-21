import { Directive, ElementRef, isStandalone, Renderer2 } from '@angular/core';
import { flush } from '@angular/core/testing';

@Directive({
  selector: '[appTituloGrande]',
  standalone: false,
})

export class TituloGrandeDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-size', '20px');
  }
}


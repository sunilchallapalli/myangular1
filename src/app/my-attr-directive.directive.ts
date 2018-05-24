import { Directive, ElementRef, Input , SimpleChanges, OnChanges, OnInit,
         Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

import { Product } from './product.model';

@Directive({
  selector: '[appMyAttrDirective]'
})
export class MyAttrDirectiveDirective implements OnInit, OnChanges {

  /*constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener('click', e => {
      if (this.product !== null) {
        this.click.emit(this.product.category);
      }
    });
  //  this.element.nativeElement.classList.add(this.highlightColor || 'bg-info');
  } */

  @Input() bgClass: string;
  @Input('pa-Product') product: Product;
  @Output('pa-category') click = new EventEmitter<string>();
  @Input('appMyAttrDirective')
  @HostBinding('class')
  highlightColor: string;
  @HostListener('click')
  triggerCustomEvent() {
    if (this.product !== null) {
      this.click.emit(this.product.category);
    }
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  //  this.element.nativeElement.classList.add(this.highlightColor || 'bg-info');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
   /*let change = changes['highlightColor'];
  // let classList = this.element.nativeElement.classList;
  // if (!change.isFirstChange() && classList.contains(change.previousValue) ) {
  //   classList.remove(change.previousValue);
   }
   if (!classList.contains(change.currentValue)) {
     classList.add(change.currentValue);
   }
   // highlightColor,firstChange */

  }

}

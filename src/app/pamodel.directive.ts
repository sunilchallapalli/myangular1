import { Input, Output, EventEmitter, Directive,
  HostBinding, HostListener, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appPamodel]'
})
export class PamodelDirective implements OnChanges {

  constructor() { }

  @Input('appPamodel')
  modelProperty: string;
  @HostBinding('value')
  fieldValue: string = '';
  @Output('appPamodelChange')
  update = new EventEmitter<string>();
  @HostListener('input', ['$event.target.value'])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(this.fieldValue);
  }
  ngOnChanges (changes: SimpleChanges): void {
  let change = changes['modelProperty'];
  if (change.currentValue !== this.fieldValue) {
  this.fieldValue = changes['modelProperty'].currentValue || null;
  }
  }


}

import { Directive, TemplateRef, ViewContainerRef, Input, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStructure]'
})
export class StructureDirective implements OnChanges {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>) { }

  @Input('appStructure') expressionResult: boolean;

 ngOnChanges(changes: SimpleChanges): void {
let change = changes['expressionResult'];
if (!change.isFirstChange() && !change.currentValue) {
  this.container.clear();
} else if (change.currentValue) {
  this.container.createEmbeddedView(this.template);
}
 }
}

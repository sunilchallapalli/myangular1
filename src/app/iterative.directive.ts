import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChanges, OnInit, NgIterable,
         IterableDiffers, IterableDiffer, ViewRef, ChangeDetectorRef, CollectionChangeRecord, DoCheck} from '@angular/core';

@Directive({
  selector: '[appIterativeOf]'
})
export class IterativeDirective implements OnInit, DoCheck {
  private differ: IterableDiffer<any>;
  private items: any;
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
              private differs: IterableDiffers,
              private changeDetector: ChangeDetectorRef ) { }

  /*@Input('appIterativeOf')
  dataSource: any;*/
  @Input('appIterativeOf') set dataSource(items) {
    this.items = items;
     if (this.items && !this.differ) {
     this.differ = this.differs.find(items).create();
     }
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
   /* this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++ ) {
      this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i],
        i, this.dataSource.length));
    }*/
  }

  ngDoCheck() {
// Called every time that the input properties of a component or a directive are checked.
// Use it to extend change detection by performing a custom check.
// Add 'implements DoCheck' to the class.
if (this.differ) {
   const changes = this.differ.diff(this.items);
   if (changes) {

   changes.forEachAddedItem((change) => {
   const view = this.container.createEmbeddedView(
   this.template,
   {'$implicit': change.item});
   this.views.set(change.item, view);
   });
   changes.forEachRemovedItem((change) => {
   const view = this.views.get(change.item);
   const idx = this.container.indexOf(view);
   this.container.remove(idx);
   this.views.delete(change.item);
   });
   }
   }
  }
}

 /* class PaIteratorContext {
    odd: boolean;
    even: boolean;
    first: boolean;
    last: boolean;

    constructor( public $implicit: any,
                public index: number, total: number) {
                  this.odd = index % 2 === 1;
                  this.even = !this.odd;
                  this.first = index === 0;
                  this.last = index === total - 1;

                /*  setInterval(() => {
                    this.odd = !this.odd; this.even = !this.even;
                    this.$implicit.price++;
                    }, 2000);*/

  //  }

  // }



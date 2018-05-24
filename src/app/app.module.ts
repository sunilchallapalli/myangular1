import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { MyAttrDirectiveDirective } from './my-attr-directive.directive';
import { PamodelDirective } from './pamodel.directive';
import { StructureDirective } from './structure.directive';
import { IterativeDirective } from './iterative.directive';
import { ProductFormComponent } from './product-form/product-form.component';
import { DisplayMultipleComponent } from './display-multiple/display-multiple.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    MyAttrDirectiveDirective,
    PamodelDirective,
    StructureDirective,
    IterativeDirective,
    ProductFormComponent,
    DisplayMultipleComponent,
    ToggleViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

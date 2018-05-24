import { Component } from '@angular/core';
import { Model } from './repository.model';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  showTable: boolean = true;
  newproduct = new Product();
  title = 'app';
  formSubmitted: boolean = false;
  get diagnostic() {
    if (this.newproduct) {
    return JSON.stringify(this.newproduct);
  }
}
  addProduct(p: Product) {
   this.model.saveProduct(p);
  }

  deleteProduct(id: number) {
    this.model.deleteProduct(id);
  }
  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
    this.addProduct(this.newproduct);
    this.newproduct = new Product();
    this.formSubmitted = false;
    form.reset();
    }
  }
  }


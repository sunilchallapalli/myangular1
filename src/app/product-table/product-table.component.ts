import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../repository.model';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-table',
 /* template: `<div class='bg-info p-1'>
             There are {{getProducts().length}} items in the model
            </div>`,*/
   templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  private showTable: boolean = true;

  constructor() { }

  @Input('model') dataModel: Model;

  ngOnInit() {
  }

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
    }
    getProducts(): Product[] {
    return this.dataModel.getProducts();
    }
    deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
    }




}

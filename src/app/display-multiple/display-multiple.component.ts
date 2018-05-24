import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../repository.model';

@Component({
  selector: 'app-display-multiple',
  templateUrl: './display-multiple.component.html',
  styleUrls: ['./display-multiple.component.css']
})
export class DisplayMultipleComponent implements OnInit {

 model: Model;
 @Input('model1') data: Model;
  constructor() { }

  ngOnInit() {
    this.model = this.data;
  }

}

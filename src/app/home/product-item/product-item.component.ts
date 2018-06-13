import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()product:Product;
  @Input()index:number;
  constructor(private router :Router) {
   }

  ngOnInit() {
  }
  select(){
    this.router.navigate([]);
  }

}

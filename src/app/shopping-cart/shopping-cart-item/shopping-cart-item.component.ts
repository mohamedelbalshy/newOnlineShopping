import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { AuthServiceService } from '../../auth-service.service';


@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input()arrayProduct: Product;
  @Input()index:number;
  
  products:Product[];
  subTotal:number;
  quantity: number=1;
  value=1;
  constructor(private prodService: ProductService) {
    
    
   }

  ngOnInit() {
    
    
    
    }
    
    
    remove(){
      this.prodService.removeProduct(this.index);
    }

    addProduct(){
      this.value++;
    }
    removeProduct(){
      this.value--;
      if(this.value<1)
        this.value=1;
        
    }
    



    
  }


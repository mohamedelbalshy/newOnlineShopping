import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Product } from '../models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { AuthServiceService } from '../auth-service.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output()cartProd = new EventEmitter<Product>();
  product:Product;
  id:number;
  value=1;
  
  constructor(private router:Router, private shoppintCartService: ShoppingCartService, private route:ActivatedRoute,private ProdService : ProductService) {
      this.route.params.subscribe(
        (params:Params) =>{
          this.id = +params['id'];
          this.product = ProdService.getProductInHome(this.id);
        }
      )
      
      
   }

  
  ngOnInit() {
    
    
  }
  addProduct(){
    this.value++;
  }
  removeProduct(){
    this.value--;
    if(this.value<1)
      this.value=1;
      
  }

  addToCart(){
    
    this.product.quantity = this.value;
    this.ProdService.addProductToDatabase(this.product);
    
    
    
  }
}

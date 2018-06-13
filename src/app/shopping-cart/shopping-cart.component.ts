import { Component, OnInit, Input, AfterViewChecked, OnChanges } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthServiceService } from '../auth-service.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnChanges {

  
  products:any;
  productsArray : Product[];
  sum:number = 0;
  user: Observable<firebase.User>;
  count: number;
  
  constructor(private authService: AuthServiceService, private ProdService: ProductService, private afAuth: AngularFireAuth) {
    
    
   }

  ngOnInit() {
    setTimeout(()=>{
      this.products = this.ProdService.getProducts();
    
    
        this.products.subscribe(
          prods =>this.count = prods.length
        );
        this.products.subscribe((products) => {
          this.productsArray = products;
          this.getTotal();
        });

    },1500);
    
    
    
   
    
  }

  
  /* ngAfterContentInit(){
    this.products = this.ProdService.getProducts();
    
    
    
    this.products.subscribe((products) => {
      this.productsArray = products;
      this.getTotal();
    });
  } */
  
  
  
  
  ngOnChanges(){
    this.products = this.ProdService.getProducts();
    

    this.products.subscribe((products) => {
      this.productsArray = products;
      this.getTotal();
    });

    

  }

  getTotal(){
    this.sum = 0;
    
    
    for(let i=0; i<this.productsArray.length;i++){
      
      
     this.sum += this.productsArray[i].price * this.productsArray[i].quantity;
     
      
    }
    this.sum = this.sum + (this.productsArray.length*20);
    
    

  }
  
}



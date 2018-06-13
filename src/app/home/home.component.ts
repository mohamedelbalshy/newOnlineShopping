import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthServiceService } from '../auth-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: FirebaseListObservable<Product[]>;
  user: firebase.User;
  private subscription: Subscription;
  private searchText="";
  constructor(private prodService: ProductService,private router:Router, private afAuth: AngularFireAuth, private authService: AuthServiceService) {
    this.subscription = this.prodService.inputEvents.subscribe(
      (newVal)=>{
        this.searchText = newVal
      }
    )
   }
  ProductsHome:Product[];
  ngOnInit() {
    
     
    this.ProductsHome = this.prodService.getProductsInHome();
    
     this.afAuth.authState.subscribe(
      user =>{
        this.user = user
        console.log(firebase.auth().currentUser);
       console.log(this.user)
       
      }
    );
   
   
}

}

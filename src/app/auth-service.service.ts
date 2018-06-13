import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Product } from './models/product.model';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';


@Injectable()
export class AuthServiceService{
  user: Observable<firebase.User>;
  authState : any;
  products: FirebaseListObservable<Product[]>;
  product : Product;
  uid:string;
  
  

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private shoppingCartService: ShoppingCartService) {
       
      
       this.user = afAuth.authState;
       
      
     }
     
     authUser() {
       
      return this.user;
    }

    get currentUserId(): string {
      
      return this.authState !== null ? this.authState.uid : '';
    }

     login(email: string, password:string){
       return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
         (user) => {
            this.authState = user;
            this.router.navigate(['']);
            this.uid = this.currentUserId;
            console.log(this.uid);
            
         }
       );
      
  
     }
     logout() {
      this.afAuth.auth.signOut();
      console.log(this.afAuth.auth.currentUser.uid)
      this.router.navigate(['login']);
    }
     
     signUp(email:string, password:string){
      
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
        (user) =>{
          this.authState = user;
          this.uid = this.currentUserId;
            console.log(this.uid);
          //setUserData(email, this.products);
        }).catch(error => console.log(error.message));
     }

     /*setUserData(email: string, products:any){
      
       const path=`users/${this.currentUserId}`;
       const data ={
         email: email,
         products: products 
       };

       this.db.object(path).update(data).catch(
       error=> console.log(error));

     }*/
     



     

     

     


}



import { Injectable, EventEmitter, Output, OnInit } from "@angular/core";

import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { Product } from "./models/product.model";

import { AuthServiceService } from "./auth-service.service";

@Injectable()
export class ProductService {
    public inputEvents: EventEmitter<string> = new EventEmitter();

    products: FirebaseListObservable<Product[]>;
    user : firebase.User;
    users : Array<any> = [];
    final_data: Array<any> = [];
    uid:string;
    prods:Product[];
   ProductsHome: Product[] = [
        new Product("Xiaomi Redmi Note4",199.99,"mobile",true,"Samsung","new Phone from Samsung","https://ak1.ostkcdn.com/images/products/8818677/Samsung-Galaxy-S4-I337-16GB-AT-T-Unlocked-GSM-Android-Cell-Phone-85e3430e-6981-4252-a984-245862302c78_600.jpg"),
        new Product("Meizu M6 note",249.99,"mobile",true,"Samsung","new Phone from Samsung","https://ak1.ostkcdn.com/images/products/8818677/Samsung-Galaxy-S4-I337-16GB-AT-T-Unlocked-GSM-Android-Cell-Phone-85e3430e-6981-4252-a984-245862302c78_600.jpg")
    ];
    
    constructor(
        private db: AngularFireDatabase,
        public afAuth: AngularFireAuth,
        private authService: AuthServiceService
        ) {
            this.afAuth.authState.subscribe(auth => {
              if (auth !== undefined && auth !== null) {
                this.user = auth;
                
                this.uid = this.user.uid;
                
              }
            });
            
            
              
        }
        public inputChanged(val: string) {
            this.inputEvents.emit(val);
          }
        
        getUser() {
            //const userId = this.afAuth.auth.currentUser.uid;
            const path = `/users/${this.uid}`;
            
            return this.db.object(path);
          }

    addProductToDatabase(product: Product){
        
        this.products = this.getProducts();
        this.products.push(product);
        
        
        
       }
       getUsers(){
           return this.db.list('users');
       }
  
       getProducts(){
         
        //const userId = this.afAuth.auth.currentUser.uid;
            
            return this.db.list(`users/${this.user.uid}/products`);
       }

       removeProduct(index:number){
        const userId = this.afAuth.auth.currentUser.uid;
        const path = `/users/${userId}/products`;
           this.products = this.getProducts();
           this.products.subscribe(
               prods=>{
                   this.prods = prods
               }
           );
           this.prods.splice(index,1);
           this.db.object(path).set(this.prods);
       }

       getProductInHome(index: number){
           return this.ProductsHome[index];
       }
       getProductsInHome()
       {
           return this.ProductsHome;
       }
       getUID(){
           return 
       }
       

    
    
    

    

}




import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthServiceService } from '../auth-service.service';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private _inputValue: string;
  user: Observable<firebase.User>;
  userEmail: string;
  count: number;
  products:Observable<Product[]>;
  constructor(private authService: AuthServiceService, private prodService: ProductService) { 

    
  }
  public get inputValue(): string {
    return this._inputValue;
  }

  public set inputValue(val: string) {
    
    this._inputValue = val;
    this.prodService.inputChanged(val);
    
  }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
        this.products = this.prodService.getProducts();
        this.products.subscribe(
          prods =>this.count = prods.length
        );
        console.log(this.userEmail, user.uid)

      }
    });
    
    
    
  }
  logout(){
    this.authService.logout();
  }
  
  
  }



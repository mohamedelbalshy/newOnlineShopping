import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { appRoutes } from './app.routes';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


import { ProductService } from './product.service';
import { ProductItemComponent } from './home/product-item/product-item.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { environment } from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './auth-service.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    
    ProductItemComponent,
    
    ShoppingCartItemComponent,
    
    SignupComponent,
    
    LoginComponent,
    
    CheckOutComponent,
    
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ProductService, ShoppingCartService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


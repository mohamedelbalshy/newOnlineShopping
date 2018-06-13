import { Routes } from '@angular/router';
import { Product } from './models/product.model';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckOutComponent } from './check-out/check-out.component';



export const appRoutes:Routes=[
    { path:'',component:HomeComponent},
    
    { path: 'product/:id', component:ProductComponent},
    { path: 'cart', component:ShoppingCartComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'checkout', component: CheckOutComponent},
    { path: '**', redirectTo:'/',  pathMatch: 'full'}
]
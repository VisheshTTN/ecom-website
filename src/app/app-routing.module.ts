import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { ProductComponent } from './products/product/product.component';
import { SearchComponent } from './search/search.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'your-cart', canActivate: [AuthGuard], component: CartComponent},
  {path: 'search-results/:search', component: SearchComponent},
  {path: 'shipping-details', component: ShippingDetailsComponent},
  {path: 'order-complete', component: OrderCompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { LoginComponent } from './login/login.component';
import { DrawerComponent } from './navbar/drawer/drawer.component';
import { ToasterComponent } from './toaster/toaster.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BackdropComponent } from './pop-up/backdrop/backdrop.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    SignupComponent,
    ProductComponent,
    CartComponent,
    SearchComponent,
    ShippingDetailsComponent,
    OrderCompleteComponent,
    LoginComponent,
    DrawerComponent,
    ToasterComponent,
    PopUpComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

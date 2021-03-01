import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { UsersService } from 'src/app/users.service';
import { Product } from '../products.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  thumbImg: string;
  loggedIn: boolean;
  showPopup = false;
  isProductInCart = false;

  constructor(
    private productsService: ProductsService, 
    private cartService: CartService, 
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productsService.getProduct(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.product = this.productsService.getProduct(+params['id']);
        this.thumbImg = this.product.img;
      }
    )

    if(this.cartService.productsInCart.filter(productInCart=> productInCart.id===this.product.id).length) {
      this.isProductInCart = true;
    }
  }

  onChangeImage(id: number) {
    let image = this.product.gallery.find(image=> image.imgId === id);
    this.thumbImg = image.imgUrl;
  }

  onAddToCart(id: number) {
    this.loggedIn = this.usersService.isAuthenticated();
    this.cartService.addProductToCart(id);
    this.isProductInCart = true;
    if(!this.loggedIn) {
      this.showPopup = true;
    }

  }

  onGoToCart() {
    if(!this.loggedIn) {
      this.showPopup = true;
    }

    else {
      this.router.navigate(['/your-cart']);
    }
  }

  closePopup() {
    this.showPopup = false;
  }

}

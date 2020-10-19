import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
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

  constructor(private productsService: ProductsService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productsService.getProduct(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.product = this.productsService.getProduct(+params['id']);
        this.thumbImg = this.product.img;
      }
    )
  }

  onChangeImage(id: number) {
    let image = this.product.gallery.find(image=> image.imgId === id);
    this.thumbImg = image.imgUrl;
  }

  onAddToCart(id: number) {
    this.cartService.addProductToCart(id);
  }

}

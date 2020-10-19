import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedProducts: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    let searchKeyword = this.route.snapshot.params['search'];
    this.searchedProducts = this.productService.getSearchedProducts(searchKeyword);
  }

  addToCart(id: number) {
    this.cartService.addProductToCart(id);
  }

}

import { Injectable } from "@angular/core";
import { Product } from '../products/products.interface';
import { ProductsService } from '../products/products.service';

@Injectable({providedIn: 'root'})
export class CartService {

    constructor(private productsService: ProductsService) {}

    productsInCart: Product[] = [];
    cartQuantity = 0;

    getProductsFromCart() {
        return this.productsInCart;
    }

    addProductToCart(id: number) {
        this.cartQuantity = this.cartQuantity + 1;
        console.log(this.cartQuantity);
        const productToBeAdded = this.productsService.getProduct(id);
        const productAlreadyEsists = this.productsInCart.find(product=> product.id===id);

        if(!productAlreadyEsists){
            productToBeAdded.quantity = productToBeAdded.quantity + 1;
            this.productsInCart.push({...productToBeAdded});
        }
        else {
            this.productsInCart.map(product=> {
                if(product.id===id) {
                    product.quantity = product.quantity + 1;
                }
            });
        }

        this.productsInCart.map(product=> {
            this.cartQuantity = this.cartQuantity + product.quantity;
        })
    }

    // getCartQuantity() {
    //     return this.cartQuantity;
        
    // }

    clearCart() {
        return this.productsInCart.splice(0, this.productsInCart.length);
    }
}
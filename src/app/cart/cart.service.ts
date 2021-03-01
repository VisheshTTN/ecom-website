import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from '../products/products.interface';
import { ProductsService } from '../products/products.service';

@Injectable({providedIn: 'root'})
export class CartService {

    constructor(private productsService: ProductsService) {}

    productsInCart: Product[] = [ ];
    cartValue = 0;

    getProductsFromCart() {
        return this.productsInCart;
    }

    getProducts = new Observable(observer => {
        observer.next(this.productsInCart);
    });

    addProductToCart(id: number) {
        const productToBeAdded = this.productsService.getProduct(id);
        this.cartValue = this.cartValue + productToBeAdded.price;
        const productAlreadyEsists = this.productsInCart.find(product=> product.id===id);

        if(!productAlreadyEsists){
            this.productsService.setProductInCart(id, true);
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
    }


    removeProductFromCart(id: number) {
        this.productsService.setProductInCart(id, false);
        this.productsInCart.splice(this.productsInCart.findIndex(product=> product.id===id), 1);
    }

    decreaseProductQuantity(id: number) {
        this.productsInCart.map(product=> {
            if(product.id===id) {
                this.cartValue = this.cartValue - product.price;
                if(product.quantity>1){
                    product.quantity = product.quantity - 1;
                }
                else {
                    this.removeProductFromCart(id);
                }
            }
            
        })
    }

    getCartValue = new Observable(observer=> {
        observer.next(this.cartValue);
    })


    clearCart() {
        return this.productsInCart.splice(0, this.productsInCart.length);
    }
}
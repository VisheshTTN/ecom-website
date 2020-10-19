import { Injectable } from "@angular/core";
import { ProductsService } from '../products/products.service';

@Injectable({providedIn: 'root'})
export class CartService {

    constructor(private productsService: ProductsService) {}

    productsInCart = [
        // {
        //     "id": 1,
        //     "name": "Camera",
        //     "price": 400,
        //     "rating": 4,
        //     "category": "electronics",
        //     "img": "https://rukminim1.flixcart.com/image/416/416/jydaqa80/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafgmjmcf2gjxfn.jpeg?q=70",
        //     "quantity": 0,
        //     "inCart": false,
        //     "discount": 30,
        //     "gallery": [
        //       {
        //         "imgId": 1,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jydaqa80/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafgmjmcf2gjxfn.jpeg?q=70"
        //       },
        //       {
        //         "imgId": 2,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jydaqa80/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafeupuktbrayfy.jpeg?q=70"
        //       },
        //       {
        //         "imgId": 3,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jxw5g280/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafg8yhgmfxpgjk.jpeg?q=70"
        //       }
        //     ]
        //   },
        //   {
        //     "id": 2,
        //     "name": "Television",
        //     "price": 200,
        //     "rating": 5,
        //     "category": "electronics",
        //     "img": "https://rukminim1.flixcart.com/image/416/416/k9u8zgw0/television/d/t/k/mi-l32m5-al-original-imafrjtbngu9hrwz.jpeg?q=70",
        //     "quantity": 0,
        //     "inCart": false,
        //     "discount": 10,
        //     "gallery": [
        //       {
        //         "imgId": 1,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k9u8zgw0/television/d/t/k/mi-l32m5-al-original-imafrjtbngu9hrwz.jpeg?q=70"
        //       },
        //       {
        //         "imgId": 2,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k98tdow0/television/d/t/k/mi-l32m5-al-original-imafr2zwk6bnbdxv.jpeg?q=70"
        //       },
        //       {
        //         "imgId": 3,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k9pynww0/television/c/m/e/mi-l43m5-an-original-imafrgdnmxch5ywp.jpeg?q=70"
        //       }
        //     ]
        //   },
        //   {
        //     "id": 3,
        //     "name": "Phone",
        //     "price": 100,
        //     "rating": 3,
        //     "category": "electronics",
        //     "img": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/g/h/c/apple-iphone-xs-mt9f2hn-a-original-imaf97f6zzfkzjcz.jpeg?q=70",
        //     "quantity": 0,
        //     "inCart": false,
        //     "discount": 0,
        //     "gallery": [
        //       {
        //         "imgId": 1,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/g/h/c/apple-iphone-xs-mt9f2hn-a-original-imaf97f6zzfkzjcz.jpeg?q=70"
        //       },
        //       {
        //         "imgId": 2,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/w/h/b/apple-iphone-xs-mt9m2hn-a-original-imaf97f6akbygkxt.jpeg?q=70"
        //       },
        //       {
        //         "imgId": 3,
        //         "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/g/h/c/apple-iphone-xs-mt9f2hn-a-original-imaf97f6n7uky9hz.jpeg?q=70"
        //       }
        //     ]
        //   }
    ];
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

    // getCartQuantity = new Observable(observer=>{
    //     let cartQuantity = 0;
    //     this.productsInCart.map(product=>{
    //         cartQuantity = cartQuantity + product.quantity;
    //     });
    //     observer.next(cartQuantity);
    //     console.log(cartQuantity);
    // })

    getCartQuantity() {
        return this.cartQuantity;
        
    }
}
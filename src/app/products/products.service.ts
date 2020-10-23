import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProductsService {
    private products = [
        {
          "id": 1,
          "name": "Camera",
          "price": 400,
          "category": "electronics",
          "img": "https://rukminim1.flixcart.com/image/416/416/jydaqa80/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafgmjmcf2gjxfn.jpeg?q=70",
          "quantity": 0,
          "inCart": false,
          "gallery": [
            {
              "imgId": 1,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jydaqa80/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafgmjmcf2gjxfn.jpeg?q=70"
            },
            {
              "imgId": 2,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jydaqa80/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafeupuktbrayfy.jpeg?q=70"
            },
            {
              "imgId": 3,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jxw5g280/dslr-camera/x/k/4/eos-eos-3000d-canon-original-imafg8yhgmfxpgjk.jpeg?q=70"
            }
          ]
        },
        {
          "id": 2,
          "name": "Television",
          "price": 200,
          "category": "electronics",
          "img": "https://rukminim1.flixcart.com/image/416/416/k9u8zgw0/television/d/t/k/mi-l32m5-al-original-imafrjtbngu9hrwz.jpeg?q=70",
          "quantity": 0,
          "inCart": false,
          "gallery": [
            {
              "imgId": 1,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k9u8zgw0/television/d/t/k/mi-l32m5-al-original-imafrjtbngu9hrwz.jpeg?q=70"
            },
            {
              "imgId": 2,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k98tdow0/television/d/t/k/mi-l32m5-al-original-imafr2zwk6bnbdxv.jpeg?q=70"
            },
            {
              "imgId": 3,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k9pynww0/television/c/m/e/mi-l43m5-an-original-imafrgdnmxch5ywp.jpeg?q=70"
            }
          ]
        },
        {
          "id": 3,
          "name": "Phone",
          "price": 100,
          "category": "electronics",
          "img": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/g/h/c/apple-iphone-xs-mt9f2hn-a-original-imaf97f6zzfkzjcz.jpeg?q=70",
          "quantity": 0,
          "inCart": false,
          "gallery": [
            {
              "imgId": 1,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/g/h/c/apple-iphone-xs-mt9f2hn-a-original-imaf97f6zzfkzjcz.jpeg?q=70"
            },
            {
              "imgId": 2,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/w/h/b/apple-iphone-xs-mt9m2hn-a-original-imaf97f6akbygkxt.jpeg?q=70"
            },
            {
              "imgId": 3,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/g/h/c/apple-iphone-xs-mt9f2hn-a-original-imaf97f6n7uky9hz.jpeg?q=70"
            }
          ]
        },
        {
          "id": 4,
          "name": "Laptop",
          "price": 500,
          "category": "electronics",
          "img": "https://rukminim1.flixcart.com/image/416/416/k7285u80/computer/x/w/m/acer-original-imafpdyeeyndtnn3.jpeg?q=70",
          "quantity": 0,
          "inCart": false,
          "gallery": [
            {
              "imgId": 1,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k7285u80/computer/x/w/m/acer-original-imafpdyeeyndtnn3.jpeg?q=70"
            },
            {
              "imgId": 2,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k7285u80/computer/x/w/m/acer-original-imafpdyepx9fzvzb.jpeg?q=70"
            },
            {
              "imgId": 3,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k7285u80/computer/x/w/m/acer-original-imafpdyenh4ttgeg.jpeg?q=70"
            }
          ]
        },
        {
          "id": 5,
          "name": "PS4",
          "price": 300,
          "category": "electronics",
          "img": "https://rukminim1.flixcart.com/image/416/416/k33c4nk0/gamingconsole/s/g/g/1-ps4-slim-sony-yes-dualshock-4-original-imafmakaeu7xvz6a.jpeg?q=70",
          "quantity": 0,
          "inCart": false,
          "gallery": [
            {
              "imgId": 1,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k33c4nk0/gamingconsole/s/g/g/1-ps4-slim-sony-yes-dualshock-4-original-imafmakaeu7xvz6a.jpeg?q=70"
            },
            {
              "imgId": 2,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k33c4nk0/gamingconsole/s/g/g/1-ps4-slim-sony-yes-dualshock-4-original-imafmakahdsqdqvh.jpeg?q=70"
            },
            {
              "imgId": 3,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k33c4nk0/gamingconsole/s/g/g/1-ps4-slim-sony-yes-dualshock-4-original-imafmakaqvyygge6.jpeg?q=70"
            }
          ]
        },
        {
          "id": 6,
          "name": "Fridge",
          "price": 100,
          "category": "electronics",
          "img": "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0/refrigerator-new/t/n/z/gl-d201abpy-5-lg-original-imafk4zzgzfdyzzf.jpeg?q=70",
          "quantity": 0,
          "inCart": false,
          "gallery": [
            {
              "imgId": 1,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0/refrigerator-new/t/n/z/gl-d201abpy-5-lg-original-imafk4zzgzfdyzzf.jpeg?q=70"
            },
            {
              "imgId": 2,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0/refrigerator-new/t/n/z/gl-d201abpy-5-lg-original-imafk4zqfbkyy73f.jpeg?q=70"
            },
            {
              "imgId": 3,
              "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0/refrigerator-new/t/n/z/gl-d201abpy-5-lg-original-imafk4zr79hugvdq.jpeg?q=70"
            }
          ]
        }
    ]

    getProducts() {
        return this.products.slice(0, this.products.length);
    }

    getProduct(id: number) {
      const product = this.products.find(p=> p.id == id);
      return {...product}
    }

    getSearchedProducts(name: string) {
      const searchedProducts = this.products.filter(product=> {
        return product.name.toLowerCase().includes(name.toLowerCase());
      });
      return searchedProducts;
    }

    setProductInCart(id: number, value: boolean) {
      this.products.map(product=> {
        if(product.id===id) {
          product.inCart = value;
        }
      })
    }
}
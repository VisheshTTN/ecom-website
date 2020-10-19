export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    img: string;
    quantity: number;
    inCart: Boolean,
    gallery: {imgId: number, imgUrl: string}[];
}
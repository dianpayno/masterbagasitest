export interface Cart {
    id:number;
    nameProduk:string;
    kategory:string;
    image:string;
    merk:string;
    price:number;
    stock:number;
    qty:number;
    berat:{
        qtyItem:number;
        beratperitem:number;
    },
    isChecked?:boolean
}
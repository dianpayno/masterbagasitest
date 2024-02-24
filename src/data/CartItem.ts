import { Cart } from "@/interface/Cart";



export const CartItems:Cart[] = [
    {
        id:1,
        nameProduk:'Sapu lidi kemasan kertas',
        kategory:'Cemilan buat rebahan',
        image:'https://www.masterbagasi.com/_next/image?url=https%3A%2F%2Fapi.masterbagasi.com%2Fstorage%2Fproduct%2F5d9e4353-8176-4799-9a97-ee3e1554c760%2FUbtjtL7SeaD7QtJv6WdGXM2eb57fdQ9h4EH1cFBq-98907241-df82-43a4-ae35-bec081025c08.jpg&w=256&q=75',
        merk:'si umang',
        price:57500,
        stock:5,
        qty:3,
        berat:{
            qtyItem:10,
            beratperitem:85
        },
        isChecked:false

    },
    {
        id:2,
        nameProduk:'Indomie - HypeAbis Ayam Geprek',
        kategory:'Mie Instan',
        image:'https://api.masterbagasi.com/storage/product/20fad426-5cb2-400b-bef9-3878fe8e0c6b/TWYgaHyXft5yDXXIERmcE7sSnuak73B8NfwNLm5a-e8d0b02a-9bec-4d57-8c4d-e681160de3e8.png',
        merk:'Indomie',
        price:68500,
        stock:10,
        qty:2,
        berat:{
            qtyItem:40,
            beratperitem:85
        },
        isChecked:false

    },
    {
        id:3,
        nameProduk:'Bamboe - Bumbu Balado',
        kategory:'Bumbu dapur',
        image:'https://api.masterbagasi.com/storage/product/bf2c470f-f005-49ab-adb7-b7b2b91bcca3/euP0Nu0qaKXCcU7K7T1Dy2GX7rszL0qLkdK8GeWP-7faf19dc-5662-4a07-ac6b-a2b989d29168.png',
        merk:'Bamboe',
        price:40700,
        stock:10,
        qty:1,
        berat:{
            qtyItem:5,
            beratperitem:24
        },
        isChecked:false

    }
]


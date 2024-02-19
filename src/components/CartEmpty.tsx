import React from 'react'

const CartEmpty = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <img className="w-[300px] object-cover"
        src="https://www.masterbagasi.com/_next/static/media/empty-cart.258fe92d.svg"/>
        <p className='text-xs'>Keranjang masih kosong, silahkan pilih produk terlebih dahulu.</p>
    </div>
  )
}

export default CartEmpty
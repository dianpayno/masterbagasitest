import React from 'react'

const Toast = () => {
  return (
    <div className="absolute top-32 right-0 left-0  flex justify-center">
          <div className="bg-black bg-opacity-55 w-[300px] justify-center items-center flex py-4 rounded-xl">
          <p className="text-xs capitalize text-white font-bold">Stock Barang tidak cukup</p>
          </div>
        </div>
  )
}

export default Toast
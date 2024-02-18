'use client';

import { formatPrice } from "@/ulits/formatPrice";
import { IoTrashOutline } from "react-icons/io5";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2";
import { useState } from "react";


const CartItem = () => {
    const [qty, setQty] = useState(1);

    const handlePlusItem = () => {
      setQty(qty + 1);
    };

    const handleMinusItem = () => {
      if (qty > 1) {
        setQty(qty - 1);
      }
    }
    
  return (
    <>
      <div className="w-full p-4 flex items-center gap-2 ">
        <div className="w-[18%] ">
          <div className="flex items-center  gap-4">
            <input
              type="checkbox"
              className="checkbox checkbox-sm border-gray-80 checked:border-blue-400 [--chkbg:theme(colors.blue.400)]"
            />
            <img
              className="w-20 h-20 object-cover rounded-xl"
              src="https://www.masterbagasi.com/_next/image?url=https%3A%2F%2Fapi.masterbagasi.com%2Fstorage%2Fproduct%2F5d9e4353-8176-4799-9a97-ee3e1554c760%2FUbtjtL7SeaD7QtJv6WdGXM2eb57fdQ9h4EH1cFBq-98907241-df82-43a4-ae35-bec081025c08.jpg&w=256&q=75"
            />
          </div>
        </div>
        <div className="w-[70%] flex flex-col">
          <span className="font-bold capitalize">
            Si Umang - Sapu Lidi Kemasan Kertas
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500  capitalize">si umang</span>
            <span className="text-xs text-gray-300  capitalize">|</span>
            <span className="text-xs text-gray-500  capitalize">
              cemilan buat rebahan
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 w-[70%] mt-3">
            <span className="font-bold text-red-500  capitalize">
              {formatPrice(58000)}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-sm">2 pcs x 130 gr</span>
              <span className="text-xs text-gray-300  capitalize">|</span>
              <span className="text-sm capitalize">0.25 Kg</span>
            </div>
          </div>
        </div>
      </div>
     {/* footer action item */}
      <div className="w-full flex justify-between items-center my-3 ps-12 pe-4">
        <span className="text-xs text-red-600 font-bold">Tambah Catatan</span>

        <div className="flex items-center gap-2">
            <span className="text-xs font-bold">Tambah ke wishlist</span>
            <span className="text-xs text-gray-300  capitalize">|</span>
            <IoTrashOutline/>

            <div className="flex items-center gap-2">
                <button
                disabled={qty === 1}
                onClick={handleMinusItem}
                >
                <HiOutlineMinusCircle className="text-xl"/>

                </button>
                <span className="text-sm">{qty}</span>
                <button
                onClick={handlePlusItem}
                >

            <HiOutlinePlusCircle className="text-xl"/>
                </button>
            </div>
            
        </div>

      </div>
    </>
  );
};

export default CartItem;

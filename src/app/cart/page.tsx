"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import CartItem from "@/components/CartItem";
import WarehouseCart from "@/components/WarehouseCart";
import { formatPrice } from "@/ulits/formatPrice";
import Button from "@/components/Button";
import Action from "@/components/Action";
import ModalAdd from "@/components/ModalAdd";
import { useState } from "react";

const Cart = () => {
    const [openModal, setOpenModal] = useState(false);
 
  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {/* left section */}
      {/* breadcrumb */}

      <div className="col-span-2">
        <div className="w-full bg-white shadow-md py-3 px-5 gap-3 rounded-lg flex items-center">
          <span className="text-sm ">Home </span>
          <MdKeyboardArrowRight className="text-sm" />
          <span className="text-sm font-semibold">Keranjang</span>
        </div>

        {/* main section */}
        <div className="w-full mt-2 bg-white shadow-md py-4 px-5 rounded-lg flex flex-col gap-3">
          {/* cart header */}
          <div className="w-full px-5 p-3 bg-gray-800 rounded-lg">
            <span className="text-white font-bold">Daftar Belanja</span>
          </div>

          {/* action */}
          <Action />

          {/* cart item section */}
          <div>
            <CartItem />
          </div>
        </div>
        {/* warehouse cart section */}

        {/* main warehouse section */}
        <div className="w-full mt-2 bg-white shadow-md py-4 px-5 rounded-lg flex flex-col gap-3">
          {/* cart header */}
          <span className="w-full px-5 pt-3 pb-1 text-xl font-bold">
            Kirim Barang ke Warehouse
          </span>
          <Button title="tambah pengiriman pribadi" type="button" action={() => setOpenModal(true)} />
          <div className="w-full p-3 bg-gray-800 rounded-lg">
            <span className="text-white font-bold">Daftar Barang Kiriman </span>
          </div>
          <Action />

          {/* cart item section */}
          <div>
            <WarehouseCart />
          </div>
        </div>
        {/* ---end left section */}
      </div>

      {/* right section */}

      <div className="fixed top-5 bottom-0 right-5 w-[30%]">
        <div className="w-full bg-white shadow-md py-3 px-5 gap-3 rounded-lg">
          <span className="text-lg font-semibold">Ringkasan belanja</span>
          <div className="flex justify-between mt-4">
            <span className="text-sm">Total belanja keranjang (2 barang)</span>
            <span className="text-sm ">{formatPrice(58000)}</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm">Total warehouse (2 barang)</span>
            <span className="text-sm ">{formatPrice(58000)}</span>
          </div>
          <div className="flex justify-between my-2 pt-2 pb-4 border-b border-b-gray-300">
            <span className="text-md font-bold">Total Belanja (2 barang)</span>
            <span className="text-md font-bold">{formatPrice(58000)}</span>
          </div>
          <Button title="checkout (2 barang)" type="button" />

          <div className="p-3 bg-gray-200 rounded-xl">
            <span className="text-xs">
              Lakukan pembayaran belanja untuk melanjutkan proses pengemasan
              kiriman
            </span>
          </div>
        </div>

        <div className="w-full bg-white shadow-md py-3 px-5 mt-3 gap-3 rounded-lg">
          <div className="w-full flex items-center gap-5 justify-between">
            <LuBadgePercent className="text-3xl text-red-500" />
            <span className="text-sm font-semibold">
              Makin hemat dengan keranjang bersama
            </span>
            <IoIosArrowDown className="text-xl" />
          </div>
        </div>
      </div>
      {
        openModal && 
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-45 flex justify-center items-center">
            <ModalAdd setOpenModal={() => setOpenModal(false)} />

        </div>
      }
    </div>
  );
};

export default Cart;

"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import CartItem from "@/components/CartItem";
import WarehouseCart from "@/components/WarehouseCart";
import Button from "@/components/Button";
import Action from "@/components/Action";
import ModalAdd from "@/components/ModalAdd";
import { useState } from "react";
import Checkout from "@/components/Checkout";
import Link from "next/link";
import CartEmpty from "@/components/CartEmpty";
import { useCartWarehouse } from "@/hooks/useCartWarehouse";
import { useCart } from "@/hooks/useCart";
import Toast from "@/components/Toast";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    cartWH,
    handleSelectedItemWH,
    handleSelectedAllItemWH,
    selectAllWH,
    deleteAllItem,
  } = useCartWarehouse();
  const {
    handlePlusQtyItem,
    cart,
    handleMinusQtyItem,
    handleSelectedItem,
    handleDeleteItem,
    handleSelectedAllItem,
    handleDeleteAllItem,
    totalSelectedItem,
    allIsChecked,
    toast,
    setToast
  } = useCart();

  

  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {/* left section */}
      {/* breadcrumb */}

      <div className="col-span-2 relative">
        <div className="w-full bg-white shadow-md py-3 px-5 gap-3 rounded-lg flex items-center">
          <Link href={"/"}>
            <span className="text-sm ">Home </span>
          </Link>
          <MdKeyboardArrowRight className="text-sm" />
          <span className="text-sm font-semibold">Keranjang</span>
        </div>
        {
          toast &&  <Toast/>
        }
      
        

        {/* main section */}
        <div className="w-full mt-2 bg-white shadow-md py-4 px-5 rounded-lg flex flex-col gap-3">
          {/* cart header */}
          <div className="w-full px-5 p-3 bg-gray-800 rounded-lg">
            <span className="text-white font-bold">Daftar Belanja</span>
          </div>

          {/* action */}
          {cart.length === 0 ? null : (
            <Action
              isChecked={allIsChecked}
              handleDeleteAll={handleDeleteAllItem}
              handleChange={handleSelectedAllItem}
            />
          )}

          {/* cart item section */}
          {cart.length === 0 ? (
            <CartEmpty />
          ) : (
            <div>
              {cart.map((item: any, index: number) => (
                <CartItem
                  key={item.id}
                  data={item}
                  index={index}
                  handleDelete={handleDeleteItem}
                  handleSelectedItem={handleSelectedItem}
                  handleMinusQtyItem={handleMinusQtyItem}
                  handlePlusQtyItem={handlePlusQtyItem}
                />
              ))}
            </div>
          )}
        </div>

        {/* warehouse cart section */}

        {/* main warehouse section */}
        <div className="w-full mt-2 bg-white shadow-md py-4 px-5 rounded-lg flex flex-col gap-3">
          {/* cart header */}
          <span className="w-full px-5 pt-3 pb-1 text-xl font-bold">
            Kirim Barang ke Warehouse
          </span>
          <Button
            title="tambah pengiriman pribadi"
            type="button"
            action={() => setOpenModal(true)}
          />
          <div className="w-full p-3 bg-gray-800 rounded-lg">
            <span className="text-white font-bold">Daftar Barang Kiriman </span>
          </div>
          {cartWH.length === 0 ? null : (
            <Action
              isChecked={selectAllWH}
              handleDeleteAll={deleteAllItem}
              handleChange={handleSelectedAllItemWH}
            />
          )}

          {/* cart item section */}
          <div>
            {cartWH.length === 0 ? (
              <CartEmpty />
            ) : (
              cartWH.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    <WarehouseCart
                      index={index}
                      handleSelectWH={handleSelectedItemWH}
                      data={item}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
        {/* ---end left section */}
      </div>

      {/* right section */}

      <div className="fixed top-5 bottom-0 right-5 w-[30%]">
        <Checkout />

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
      {openModal && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-45 flex justify-center items-center">
          <ModalAdd setOpenModal={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Cart;

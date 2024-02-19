"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import CartItem from "@/components/CartItem";
import WarehouseCart from "@/components/WarehouseCart";
import Button from "@/components/Button";
import Action from "@/components/Action";
import ModalAdd from "@/components/ModalAdd";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/libs/hooks";
import { SAVE_SELECTEDITEMS } from "@/libs/features/Cart/CheckoutSlice";
import Checkout from "@/components/Checkout";
import { CartItems } from "@/data/CartItem";
import Link from "next/link";
import CartEmpty from "@/components/CartEmpty";
import { useAppSelector } from "@/libs/hooks";
import { RootState } from "@/libs/store";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState<any>(CartItems);
  const [totalSelectedItem, setTotalSelectedItem] = useState<any>([]);
  const [allIsChecked, setAllIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const warehouseData = useAppSelector((state: RootState) => state.warehouse.warehouse);

  const handlePlusQtyItem = (index: number) => {
    const updateCart = [...cart];
    updateCart[index].qty += 1;
    setCart(updateCart);
    if(totalSelectedItem.length >0){
      setTotalSelectedItem(
        totalSelectedItem.map((i: any) => {
          if (i.id === updateCart[index].id) {
            return { ...i, qty: i.qty + 1 };
          }
          return i;
        })
      );
    }
  };

  const handleMinusQtyItem = (index: number) => {
    const updateCart = [...cart];
    updateCart[index].qty -= 1;
    setCart(updateCart);
    if(totalSelectedItem.length >0){
      setTotalSelectedItem(
        totalSelectedItem.map((i: any) => {
          if (i.id === updateCart[index].id) {
            return { ...i, qty: i.qty - 1 };
          }
          return i;
        })
      );
    }
  };

  const handleSelectedItem = (e: any, item: any, index: number) => {
    const updateCart = [...cart];
    if (e.target.checked) {
      setAllIsChecked(false);
      setTotalSelectedItem([...totalSelectedItem, item]);
      const updateItem = { ...item, isChecked: true };
      updateCart[index] = updateItem;
      setCart(updateCart);
    } else {
      if (allIsChecked) {
        setAllIsChecked(false);
      }
      setTotalSelectedItem(
        totalSelectedItem.filter((i: any) => i.id !== item.id)
      );
      const updateItem = { ...item, isChecked: false };
      updateCart[index] = updateItem;
      setCart(updateCart);
    }
  };

  const handleSelectedAllItem = (e: any) => {
    setAllIsChecked(e.target.checked);
    const updateCart = [...cart];
    if (e.target.checked) {
      updateCart.forEach((i: any, index: number) => {
      const updateItem = { ...i, isChecked: true };
      updateCart[index] = updateItem;
      })
      setTotalSelectedItem(cart);
    } else {
      updateCart.forEach((i: any, index: number) => {
        const updateItem = { ...i, isChecked: false };
        updateCart[index] = updateItem;
        })
      setTotalSelectedItem([]);
    }
    setCart(updateCart);
  };

  useEffect(() => {
    dispatch(SAVE_SELECTEDITEMS(totalSelectedItem));
    console.log(warehouseData, 'redux');
  }, [totalSelectedItem, handleSelectedAllItem, handleSelectedItem, warehouseData]);

  useEffect(() => {
    const isTrue = cart.filter((i: any) => {
      return i.isChecked;
    });
    if (isTrue.length === cart.length) {
      setAllIsChecked(true);
    }
  }, [cart]);

  const handleDeleteItem = (id: number) => {
    const updateCart = cart.filter((i: any) => i.id !== id);
    setCart(updateCart);
    setTotalSelectedItem(totalSelectedItem.filter((i: any) => i.id !== id));
  }

  const handleDeleteAllItem = () => {
    setCart([]);
    setTotalSelectedItem([]);
  }

  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {/* left section */}
      {/* breadcrumb */}

      <div className="col-span-2">
        <div className="w-full bg-white shadow-md py-3 px-5 gap-3 rounded-lg flex items-center">
          <Link href={"/"}>
            <span className="text-sm ">Home </span>
          </Link>
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
          <Action
            isChecked={allIsChecked}
            handleDeleteAll={handleDeleteAllItem}
            handleChange={handleSelectedAllItem}
          />

          {/* cart item section */}
          {
            cart.length === 0 ? <CartEmpty/> :
          <div>
            {cart.map((item: any, index: any) => (
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
          }
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

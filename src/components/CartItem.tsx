"use client";

import { formatPrice } from "@/ulits/formatPrice";
import { convertToKg } from "@/ulits/convertToKg";
import { IoTrashOutline } from "react-icons/io5";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2";
import { Cart } from "@/interface/Cart";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Modal, ModalOverlay } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";

type Props = {
  data: Cart;
  index: number;
  handleMinusQtyItem?: any;
  handlePlusQtyItem?: any;
  handleSelectedItem?: any;
  handleDelete?: any;
};

const CartItem = ({
  data,
  index,
  handleMinusQtyItem,
  handlePlusQtyItem,
  handleSelectedItem,
  handleDelete,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="w-full p-4 flex items-center gap-2 ">
        <div className="w-[18%] ">
          <div className="flex items-center  gap-4">
            <input
              checked={data.isChecked}
              onChange={(e) => {
                handleSelectedItem(e, data, index);
              }}
              type="checkbox"
              className="checkbox checkbox-sm border-gray-80 checked:border-blue-400 [--chkbg:theme(colors.blue.400)]"
            />
            <img
              className="w-20 h-20 object-cover rounded-xl"
              src={data.image}
            />
          </div>
        </div>
        <div className="w-[70%] flex flex-col">
          <span className="font-bold capitalize">{data.nameProduk}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500  capitalize">
              {data.merk}
            </span>
            <span className="text-xs text-gray-300  capitalize">|</span>
            <span className="text-xs text-gray-500  capitalize">
              {data.kategory}
            </span>

            <span className="text-xs text-gray-300  capitalize">|</span>
            <span className="text-xs text-gray-500  capitalize">
             Stock {data.stock}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 w-[70%] mt-3">
            <span className="font-bold text-red-500  capitalize">
              {formatPrice(data.price)}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-sm">
                {data.berat.qtyItem} pcs x {data.berat.beratperitem} gr
              </span>
              <span className="text-xs text-gray-300  capitalize">|</span>
              <span className="text-sm capitalize">
                {convertToKg(data.berat.qtyItem, data.berat.beratperitem)} Kg
              </span>
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
          <button
            onClick={onOpen}
          >
            <IoTrashOutline />
          </button>

          <div className="flex items-center gap-2">
            <button
              disabled={data.qty === 1}
              onClick={() => handleMinusQtyItem(index)}
            >
              <HiOutlineMinusCircle className="text-xl" />
            </button>
            <span className="text-sm">{data.qty}</span>
            <button onClick={() => handlePlusQtyItem(index)}>
              <HiOutlinePlusCircle className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <Modal onClose={onClose} size={"md"} isOpen={isOpen} isCentered>
        <ModalOverlay />
       <DeleteModal
       data={data}
       onClose={onClose}
       deleteCart={handleDelete}
       />
      </Modal>
    </>
  );
};

export default CartItem;

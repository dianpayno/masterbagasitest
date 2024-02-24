import React from 'react'
import { ModalContent, ModalBody } from "@chakra-ui/react";
import { useCartWarehouse } from '@/hooks/useCartWarehouse';

type Props = {
    data?: any
    onClose?: any,
    deleteCart:any
   
}



const DeleteModal = ({data, onClose, deleteCart}: Props) => {
  return (
    <ModalContent>
    <ModalBody>
      <div className="p-3 flex flex-col justify-center items-center">
        <h3 className="font-bold capitalize">hapus item?</h3>
        <p className="text-sm text-center text-gray-500 capitalize my-3">
          anda yakin ingin menghapus item ini dari keranjang?
        </p>
      </div>
    </ModalBody>

    <div className="flex justify-center gap-4 pb-5">
      <button
        onClick={() => deleteCart(data.id)}
        className="px-5 py-2 bg-red-500 text-xs font-semibold text-white rounded-xl"
      >
        Hapus
      </button>
      <button
        onClick={onClose}
        className="px-5 py-2 bg-slate-200 text-xs font-semibold  rounded-xl"
      >
        Batal
      </button>
    </div>
  </ModalContent>
  )
}

export default DeleteModal
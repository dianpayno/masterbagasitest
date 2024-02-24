import { WarehouseInterface } from "@/interface/Warehouse";
import { formatPrice } from "@/ulits/formatPrice";
import { IoTrashOutline } from "react-icons/io5";
import { Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import { useCartWarehouse } from "@/hooks/useCartWarehouse";

type Props = {
  data: WarehouseInterface;
  handleSelectWH: any;
  index: number;
 
};

const WarehouseCart = ({ data, handleSelectWH, index }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {deleteItem} = useCartWarehouse()
  return (
    <>
      <div>
        <div className="w-full p-4 flex items-center gap-2 ">
          <div className="w-[20%]">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={data.isChecked}
                onChange={(e) => {
                  handleSelectWH(e, data, index);
                }}
                className="checkbox checkbox-sm border-gray-80 checked:border-blue-400 [--chkbg:theme(colors.blue.400)]"
              />
              <img
                className="w-20 h-20 object-cover rounded-xl"
                src="https://img.freepik.com/free-vector/delivery-cardboard-pile-boxes_134830-856.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=sph"
              />
            </div>
          </div>
          <div className="w-[70%] flex flex-col">
            <span className="font-bold capitalize">{data.namaBarang}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">
                Harga estimasi barang
              </span>
              <span className="text-xs text-gray-500  capitalize">
                {formatPrice(Number(data.price))}
              </span>
              <span className="text-xs text-gray-500">x {data.qty}</span>
            </div>

            <div className="flex items-center justify-between gap-2 w-[70%] mt-3">
              <span className="font-bold text-red-500  capitalize">
                {formatPrice(data.price * data.qty)}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm">
                  {data.qty} pcs x {data.berat} Kg
                </span>
                <span className="text-xs text-gray-300  capitalize">|</span>
                <span className="text-sm capitalize">
                  {data.berat * data.qty} Kg
                </span>
                <button onClick={onOpen}>
                <IoTrashOutline className="text-red-600 text-lg" />
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={onClose} size={"md"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <DeleteModal data={data} onClose={onClose} deleteCart={deleteItem}/>
      </Modal>
    </>
  );
};

export default WarehouseCart;

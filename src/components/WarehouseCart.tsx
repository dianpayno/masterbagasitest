import { formatPrice } from "@/ulits/formatPrice"
import { IoTrashOutline } from "react-icons/io5";
const WarehouseCart = () => {
  return (
    <div>
        <div className="w-full p-4 flex items-center gap-2 ">
        <div className="w-[20%]">
          <div className="flex items-center gap-4">
          <input
              type="checkbox"
              className="checkbox checkbox-sm border-gray-80 checked:border-blue-400 [--chkbg:theme(colors.blue.400)]"
            />
            <img
              className="w-20 h-20 object-cover rounded-xl"
              src="https://img.freepik.com/free-vector/delivery-cardboard-pile-boxes_134830-856.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=sph"
            />
          </div>
        </div>
        <div className="w-[70%] flex flex-col">
          <span className="font-bold capitalize">
            Sepeda Listrik
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Harga estimasi barang</span>
            <span className="text-xs text-gray-500  capitalize">{formatPrice(2350000)}</span>
            <span className="text-xs text-gray-500">x 1</span>

          </div>

          <div className="flex items-center justify-between gap-2 w-[70%] mt-3">
            <span className="font-bold text-red-500  capitalize">
              {formatPrice(2350000)}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-sm">1 pcs x 1 Kg</span>
              <span className="text-xs text-gray-300  capitalize">|</span>
              <span className="text-sm capitalize">1 Kg</span>
              <IoTrashOutline className="text-red-600 text-lg" />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default WarehouseCart
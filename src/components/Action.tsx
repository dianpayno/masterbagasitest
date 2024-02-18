
import { IoTrashOutline } from "react-icons/io5";
const Action = () => {
  return (
    <div className="w-full my-3 flex justify-between items-center">
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                className="checkbox checkbox-sm border-gray-80 checked:border-blue-400 [--chkbg:theme(colors.blue.400)]"
              />
              <span className="text-sm font-semibold">Pilih Semua</span>
            </div>

            <button className="flex items-center gap-1">
              <IoTrashOutline className="text-red-600 text-md" />
              <span className="text-xs font-bold text-red-600">
                Hapus Semua
              </span>
            </button>
          </div>
  )
}

export default Action
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { formatPrice } from "@/ulits/formatPrice";

type modalProps = {
    setOpenModal: any
}

const ModalAdd = ({setOpenModal}: modalProps) => {
  const valuePrice = formatPrice(0);
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        <button 
        onClick={setOpenModal}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-semibold text-xl">
        Tambah Barang untuk dikirim ke Warehouse
      </h3>
      <form>
        <div className="grid grid-cols-2 my-4 ">
          <div className="col-span-1 p-3">
            <label>
              Nama<span className="text-red-600">*</span>
            </label>
            <Input type="text" placeholder="Masukan nama barang" />
          </div>
          <div className="col-span-1 p-3">
            <label>
              Estimasi harga barang / pcs<span className="text-red-600">*</span>
            </label>
            <Input type="text" value={valuePrice} />
          </div>
        </div>

        <div className="grid  grid-cols-4">
          <div className="col-span-1 p-3 ">
            <label>
              Estimasi berat barang / pcs<span className="text-red-600">*</span>
            </label>
            <InputGroup>
              <Input type="text" value={0} />
              <InputRightAddon>Kg</InputRightAddon>
            </InputGroup>
          </div>
          <div className="col-span-1 p-3">
          <label>
              Kuntitas<span className="text-red-600">*</span>
            </label>
            <Input type="text"  />
          </div>
          <div className="col-span-1 p-3">
          <label>
              Estimasi berat barang / pcs<span className="text-red-600">*</span>
            </label>
            <InputGroup>
              <Input type="text" value={0} />
              <InputRightAddon>Kg</InputRightAddon>
            </InputGroup>
          </div>
          <div className="col-span-1 p-3">
          <label>
              Estimasi total harga<span className="text-red-600">*</span>
            </label>
            <Input type="text"  />
          </div>
        </div>

        <div className="flex justify-end gap-3 my-5">
            <button className="px-3 py-2 bg-red-600 rounded-xl text-white font-semibold">Simpan</button>
            <button 
             onClick={setOpenModal}
            className="px-3 py-2 bg-slate-200 rounded-xl text-black font-semibold">Tutup</button>
        </div>
      </form>
    </div>
  );
};

export default ModalAdd;

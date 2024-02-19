import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { formatPrice } from "@/ulits/formatPrice";
import { useState, useEffect } from "react";
import { WarehouseCart } from "@/interface/Warehouse";
import { WarehouseItem } from "@/data/CartItem";
import { SAVE_WAREHOUSEITEMS } from "@/libs/features/Cart/WarehouseSlice";
import { useAppDispatch } from "@/libs/hooks";


type modalProps = {
  setOpenModal: any;
};

const ModalAdd = ({ setOpenModal }: modalProps) => {

  const [dataWarehouse, setDataWarehouse] = useState<WarehouseCart>({
    namaBarang: "",
    qty: 0,
    price: 0,
    berat: 0,
    isChecked: false,
  });
  const dispatch = useAppDispatch();

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setDataWarehouse({ ...dataWarehouse, [name]: value });
  }

  const submitDataItem = (e:any) => {
    e.preventDefault();
    WarehouseItem.push(dataWarehouse);
    dispatch(SAVE_WAREHOUSEITEMS(WarehouseItem));
    setOpenModal(false);
    setDataWarehouse({
      namaBarang: "",
      qty: 0,
      price: 0,
      berat: 0,
      isChecked: false,
    })
  }

 
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <form method="dialog" >
        <button
          onClick={setOpenModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
      </form >
      <h3 className="font-semibold text-xl">
        Tambah Barang untuk dikirim ke Warehouse
      </h3>
      <form onSubmit={submitDataItem}>
        <div className="grid grid-cols-2 my-4 ">
          <div className="col-span-1 p-3">
            <label>
              Nama<span className="text-red-600">*</span>
            </label>
            <Input 
            name="namaBarang"
            onChange={handleChange}
            value={dataWarehouse.namaBarang}
            type="text" placeholder="Masukan nama barang" />
          </div>
          <div className="col-span-1 p-3">
            <label>
              Estimasi harga barang / pcs<span className="text-red-600">*</span>
            </label>
            <Input 
            name="price"
            onChange={handleChange}
            type="text" value={formatPrice(dataWarehouse.price)} />
          </div>
        </div>

        <div className="grid  grid-cols-4">
          <div className="col-span-1 p-3 ">
            <label>
              Estimasi berat barang / pcs<span className="text-red-600">*</span>
            </label>
            <InputGroup>
              <Input 
              name="berat"
              onChange={handleChange}
              type="number" value={dataWarehouse.berat} />
              <InputRightAddon>Kg</InputRightAddon>
            </InputGroup>
          </div>
          <div className="col-span-1 p-3">
            <label>
              Kuntitas<span className="text-red-600">*</span>
            </label>
            <Input 
            name="qty"
            onChange={handleChange}
            type="number" />
          </div>
          <div className="col-span-1 p-3">
            <label>
              Estimasi berat barang / pcs<span className="text-red-600">*</span>
            </label>
            <InputGroup>
              <Input type="text" value={dataWarehouse.berat*dataWarehouse.qty} disabled/>
              <InputRightAddon>Kg</InputRightAddon>
            </InputGroup>
          </div>
          <div className="col-span-1 p-3">
            <label>
              Estimasi total harga<span className="text-red-600">*</span>
            </label>
            <Input type="text" value={formatPrice(dataWarehouse.price*dataWarehouse.qty)} disabled/>
          </div>
        </div>

        <div className="flex justify-end gap-3 my-5">
          <button 
        type="submit"
          className="px-3 py-2 bg-red-600 rounded-xl text-white font-semibold">
            Simpan
          </button>
          <button
            onClick={setOpenModal}
            className="px-3 py-2 bg-slate-200 rounded-xl text-black font-semibold"
          >
            Tutup
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalAdd;

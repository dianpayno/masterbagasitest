import { useState, useEffect } from "react";
import { WarehouseInterface } from "@/interface/Warehouse";
import { SAVE_WAREHOUSEITEMS } from "@/libs/features/Cart/WarehouseSlice";
import { useAppDispatch } from "@/libs/hooks";

export const useWarehouse = () => {
  const [WarehouseCart, setWarehouseCart] = useState<WarehouseInterface[]>([]);
  const [dataWarehouse, setDataWarehouse] = useState<WarehouseInterface>({
    id: 0,
    namaBarang: "",
    qty: 0,
    price: 0,
    berat: 0,
    isChecked: false,
  });
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDataWarehouse({ ...dataWarehouse,
       [name]: value,
      id: WarehouseCart.length + 1});
  };

  const submitDataItem = async (e: any) => {
    e.preventDefault();
    try {
      await setWarehouseCart((prev) => [...prev, dataWarehouse]);
      setDataWarehouse({
        id: 0,
        namaBarang: "",
        qty: 0,
        price: 0,
        berat: 0,
        isChecked: false,
      })
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    console.log(WarehouseCart, "ini warehouse");
    dispatch(SAVE_WAREHOUSEITEMS(WarehouseCart));
    
  }, [WarehouseCart]);



  return {
    dataWarehouse,
    handleChange,
    submitDataItem,
    
  };
};

import { useEffect, useState } from "react";
import { WarehouseInterface } from "../interface/Warehouse";
import { useAppSelector, useAppDispatch } from "@/libs/hooks";
import { RootState } from "@/libs/store";
import { SAVE_SELECTEDWHITEMS } from "@/libs/features/Cart/CheckoutWHslice";
import { SAVE_WAREHOUSEITEMS } from "@/libs/features/Cart/WarehouseSlice";

export const useCartWarehouse = () => {
  const [selectAllWH, setSelectAllWH] = useState(false);
  const [totalSelectedItem, setTotalSelectedItem] = useState<
    WarehouseInterface[]
  >([]);
  const dispatch = useAppDispatch();
  const CartWarehouse = useAppSelector(
    (state: RootState) => state.warehouse.warehouse
  );
  const [cartWH, setCartWH] = useState<WarehouseInterface[]>([]);
  useEffect(() => {
    setCartWH(CartWarehouse);
  }, [CartWarehouse]);

  const handleSelectedItemWH = async (e: any, item: any, index: number) => {
    const updateCart = [...cartWH];
    if (e.target.checked) {
      setTotalSelectedItem([...totalSelectedItem, item]);
      const updateItem = { ...item, isChecked: true };
      updateCart[index] = updateItem;
      await setCartWH(updateCart);
    } else {
      setTotalSelectedItem(
        totalSelectedItem.filter((i: any) => item.id !== i.id)
      );
      const updateItem = { ...item, isChecked: false };
      updateCart[index] = updateItem;
      await setCartWH(updateCart);
    }
  };
  const handleSelectedAllItemWH = (e: any) => {
    setSelectAllWH(e.target.checked);
    const updateCart = [...cartWH];
    if (e.target.checked) {
      updateCart.forEach((i: any, index: number) => {
        const updateItem = { ...i, isChecked: true };
        updateCart[index] = updateItem;
      });
      setTotalSelectedItem(cartWH);
    } else {
      updateCart.forEach((i: any, index: number) => {
        const updateItem = { ...i, isChecked: false };
        updateCart[index] = updateItem;
      });
      setTotalSelectedItem([]);
    }
    setCartWH(updateCart);
  };

  useEffect(() => {
    const isTrue = cartWH.filter((i: any) => {
      return i.isChecked;
    });
    if (isTrue.length === cartWH.length) {
      setSelectAllWH(true);
    } else {
      setSelectAllWH(false);
    }
  }, [cartWH, selectAllWH]);

  const deleteItem = async (data: any) => {
    console.log(data);
    const updateCart = cartWH.filter((i: any) => i.id !== data);
    dispatch(SAVE_WAREHOUSEITEMS(updateCart));
    setTotalSelectedItem(totalSelectedItem.filter((i: any) => i.id !== data));
  };

  const deleteAllItem = async () => {
    dispatch(SAVE_WAREHOUSEITEMS([]));
    setTotalSelectedItem([]);
  }

  useEffect(() => {
    dispatch(SAVE_SELECTEDWHITEMS(totalSelectedItem));
  }, [totalSelectedItem]);

  return {
    handleSelectedItemWH,
    handleSelectedAllItemWH,
    cartWH,
    selectAllWH,
    deleteItem,
    deleteAllItem
  };
};

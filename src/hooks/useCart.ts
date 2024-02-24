import { useState, useEffect } from "react";
import { CartItems } from "@/data/CartItem";
import { useAppDispatch } from "@/libs/hooks";
import { SAVE_SELECTEDITEMS } from "@/libs/features/Cart/CheckoutSlice";

export const useCart = () => {
  const [cart, setCart] = useState<any>(CartItems);
  const [toast, setToast] = useState<boolean>(false);
  const [totalSelectedItem, setTotalSelectedItem] = useState<any>([]);
  const [allIsChecked, setAllIsChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handlePlusQtyItem = (index: number) => {
    const updateCart = [...cart];
    if (updateCart[index].qty < updateCart[index].stock) {
      updateCart[index].qty += 1;
    } else {
      setToast(true);
    }
    setCart(updateCart);
    if (totalSelectedItem.length > 0) {
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
    if (totalSelectedItem.length > 0) {
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
      });
      setTotalSelectedItem(cart);
    } else {
      updateCart.forEach((i: any, index: number) => {
        const updateItem = { ...i, isChecked: false };
        updateCart[index] = updateItem;
      });
      setTotalSelectedItem([]);
    }
    setCart(updateCart);
  };

  useEffect(() => {
    dispatch(SAVE_SELECTEDITEMS(totalSelectedItem));
  }, [totalSelectedItem, handleSelectedAllItem, handleSelectedItem]);

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
  };

  const handleDeleteAllItem = () => {
    setCart([]);
    setTotalSelectedItem([]);
  };

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
  }, [toast]);

  return {
    handlePlusQtyItem,
    cart,
    handleMinusQtyItem,
    handleSelectedItem,
    handleDeleteItem,
    handleSelectedAllItem,
    handleDeleteAllItem,
    totalSelectedItem,
    allIsChecked,
    toast,
    setToast,
  };
};

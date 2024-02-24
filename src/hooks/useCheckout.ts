import { useAppSelector } from "@/libs/hooks";
import { RootState } from "@/libs/store";
import { convertToKg } from "@/ulits/convertToKg";

export const useCheckout = () => {
  const cart = useAppSelector((state: RootState) => state.cart.cart);
  const cartWH = useAppSelector((state: RootState) => state.cartWH.cartWH);

  const handleTotalBelanja = (item: any) => {
    if (item.length > 0) {
      return item.reduce((acc: number, item: any) => {
        return acc + Number(item.price) * Number(item.qty);
      }, 0);
    } else {
      return 0;
    }
  };

  const handleTotalItem = (item: any) => {
    if (item.length > 0) {
      return item.reduce((acc: number, item: any) => {
        return acc + Number(item.qty);
      }, 0);
    } else {
      return 0;
    }
  };

  const handleTotalBeratBelanja = (item: any) => {
    if (item.length > 0) {
      return item.reduce((acc: number, item: any) => {
        const weight = convertToKg(item.berat.beratperitem, item.berat.qtyItem);
        const round = Math.round(acc + Number(weight) * Number(item.qty));
        return round;
      }, 0);
    } else {
      return 0;
    }
  };

  const handleTotalBeratBelanjaWH = (item: any) => {
    if (item.length > 0) {
      return item.reduce((acc: number, item: any) => {
        const round = Math.round(acc + Number(item.berat) * Number(item.qty));
        return round;
      }, 0);
    } else {
      return 0;
    }
  };

  console.log(handleTotalBeratBelanja(cart), "ini cart");
  console.log(cart.length, "ini cartwh", cartWH.length);
  console.log(handleTotalBeratBelanja(cartWH), "ini cartwh");

  const totalBelanja = handleTotalBelanja(cart) + handleTotalBelanja(cartWH);
  const totalItem = handleTotalItem(cart) + handleTotalItem(cartWH);
  const biayaKirim =
    20000 * (handleTotalBeratBelanja(cart) + handleTotalBeratBelanjaWH(cartWH));

  return {
    totalBelanja,
    totalItem,
    handleTotalBelanja,
    handleTotalItem,
    handleTotalBeratBelanja,
    handleTotalBeratBelanjaWH,
    cart,
    cartWH,
    biayaKirim,
  };
};

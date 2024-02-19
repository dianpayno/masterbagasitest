import { formatPrice } from "@/ulits/formatPrice";
import Button from "./Button";
import { useAppSelector } from "@/libs/hooks";
import { RootState } from "@/libs/store";
import { useEffect, useState } from "react";


const Checkout = () => {
  const cart = useAppSelector((state: RootState) => state.cart.cart);
  const [totalBelanja, setTotalBelanja] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    handleTotalBelanja();
    handleTotalItem();
  }, [cart, totalBelanja, totalItem]);

  const handleTotalBelanja = () => {
    if (cart.length > 0) {
      setTotalBelanja(
        cart.reduce((acc: number, item: any) => {
          return acc + Number(item.price) * Number(item.qty);
        }, 0)
      );
    } else {
      setTotalBelanja(0);
    }
  };

  const handleTotalItem = () => {
    if (cart.length > 0) {
      setTotalItem(
        cart.reduce((acc: number, item: any) => {
          return acc + Number(item.qty);
        }, 0)
      );
    } else {
      setTotalItem(0);
    }
  };

  return (
    <div className="w-full bg-white shadow-md py-3 px-5 gap-3 rounded-lg">
      <span className="text-lg font-semibold">Ringkasan belanja</span>
      <div className="flex justify-between mt-4">
        <span className="text-sm">
          Total belanja keranjang ({totalItem} barang)
        </span>
        <span className="text-sm ">{formatPrice(totalBelanja)}</span>
      </div>
      <div className="flex justify-between my-2">
      <span className="text-sm">Total warehouse (2 barang)</span>
      <span className="text-sm ">{formatPrice(58000)}</span>
    </div>
      <div className="flex justify-between my-2 pt-2 pb-4 border-b border-b-gray-300">
        <span className="text-md font-bold">
          Total Belanja ({cart.length} barang)
        </span>
        <span className="text-md font-bold">{formatPrice(58000)}</span>
      </div>
      <Button title={`checkout (${cart.length} barang)`} type="button" />

      <div className="p-3 bg-gray-200 rounded-xl">
        <span className="text-xs">
          Lakukan pembayaran belanja untuk melanjutkan proses pengemasan kiriman
        </span>
      </div>

      <div className="flex justify-between mt-4">
        <span className="text-sm">
          Estimasi berat belanjaan
        </span>
        <span className="text-sm font-bold ">Kg</span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm ">
        Estimasi kiriman tambahan
        </span>
        <span className="text-sm font-bold ">Kg</span>
      </div>
      <div className="flex justify-between mt-3">
        <span className="text-sm font-bold">
          Estimasi biaya kirim
        </span>
        <span className="text-sm font-bold">{formatPrice(totalBelanja)}</span>
      </div>
      <div className="p-3 bg-gray-200 rounded-xl mt-4">
        <span className="text-xs">
        Biaya akan ditagihkan ketika barang kamu sudah siap dikirim
        </span>
      </div>
    </div>
  );
};

export default Checkout;

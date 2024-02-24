import { formatPrice } from "@/ulits/formatPrice";
import Button from "./Button";
import { useCheckout } from "@/hooks/useCheckout";

const Checkout = () => {
  const {
    totalBelanja,
    totalItem,
    handleTotalBelanja,
    handleTotalItem,
    handleTotalBeratBelanja,
    handleTotalBeratBelanjaWH,
    cart,
    cartWH,
    biayaKirim
  } = useCheckout();

  return (
    <div className="w-full bg-white shadow-md py-3 px-5 gap-3 rounded-lg">
      <span className="text-lg font-semibold">Ringkasan belanja</span>
      <div className="flex justify-between mt-4">
        <span className="text-sm">
          Total belanja keranjang ({handleTotalItem(cart)} barang)
        </span>
        <span className="text-sm ">
          {formatPrice(handleTotalBelanja(cart))}
        </span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm">
          Total warehouse ({handleTotalItem(cartWH)} barang)
        </span>
        <span className="text-sm ">
          {formatPrice(handleTotalBelanja(cartWH))}
        </span>
      </div>
      <div className="flex justify-between my-2 pt-2 pb-4 border-b border-b-gray-300">
        <span className="text-md font-bold">
          Total Belanja ({totalItem} barang)
        </span>
        <span className="text-md font-bold">{formatPrice(totalBelanja)}</span>
      </div>
      <Button title={`checkout (${totalItem} barang)`} type="button" />

      <div className="p-3 bg-gray-200 rounded-xl">
        <span className="text-xs">
          Lakukan pembayaran belanja untuk melanjutkan proses pengemasan kiriman
        </span>
      </div>

      <div className="flex justify-between mt-4">
        <span className="text-sm">Estimasi berat belanjaan</span>
        <span className="text-sm font-bold ">{handleTotalBeratBelanja(cart)} Kg</span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm ">Estimasi kiriman tambahan</span>
        <span className="text-sm font-bold ">{handleTotalBeratBelanjaWH(cartWH)} Kg</span>
      </div>
      <div className="flex justify-between mt-3">
        <div>
        <p className="text-sm font-bold">Estimasi biaya kirim</p>
        <p className="text-xs text-gray-400">Biaya kirim {formatPrice(20000)}/Kg</p>
        </div>

     
        <span className="text-sm font-bold">{formatPrice(biayaKirim)}</span>
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

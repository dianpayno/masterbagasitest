'use client';

import { useAppSelector } from "@/libs/hooks";
import { RootState } from "@/libs/store";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const cart = useAppSelector((state: RootState) => state.cart);
  useEffect(() => {
    console.log(cart);
    
  },[cart])
  return (
   <div>Haloo

    <Link href="/cart">cart</Link>
   </div>

  
  );
}

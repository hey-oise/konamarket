"use client";
import Product from "@/components/product";
import { SearchAlert, ShoppingCartIcon, ChevronLeft, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function Cart() {
  type CartItem = {
    id: number;
    name: string;
    price: number;
    imageLink: string;
  };
  const [cart, setCart] = useState<CartItem[]>([]);
  // Cookies.set("cart", JSON.stringify([{ id: 20, name: "Golden Morn", price: "Cereal Maize 450g", imageLink: "/product/milo.jpg" }] ), {expires : 30})
  async function getCart() {
    const konaCart = localStorage.getItem("kona_market_cart");
    if (konaCart) {
      try {
        setCart(JSON.parse(konaCart));

      } catch(e) {
        console.log(e)
      }
    }
  }
  function removeCart(id: number) {
    const newCart = cart.filter(item => item?.id !== id);
    setCart(newCart);
    localStorage.setItem("kona_market_cart", JSON.stringify(newCart || "[]"));
  }
  function addCart(item: { id: number, name: string, price: number, imageLink: string }) {
    const konaCart = localStorage.getItem("kona_market_cart");
    const phrasedCart = JSON.parse(konaCart || "[]");
    phrasedCart.push(item);
    localStorage.setItem("kona_market_cart", JSON.stringify(phrasedCart || "[]"));
    setCart(phrasedCart)
  }

  useEffect(() => {
    getCart();
  }, [])

  return (
    <>
      <Link href={"/"} className="flex tex-sm items-center justify-center text-amber-400 active:bg-amber-200/50  hover:bg-amber-200/40 p-1 rounded-full fixed left-3 top-3"><ChevronLeft /></Link>
      <div className="capitalize text-xl font-bold text-amber-500 mx-auto mt-30 flex gap-2 justify-center items-center mb-30"><ShoppingCartIcon /> your cart</div>

        {cart.length > 0 ?
          <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 w-fit gap-5 sm:gap-8 mb-40 mx-auto">
          {cart.map((item) => {
              return (
                <Product onAdd={() => addCart(item)} onRemove={() => removeCart(item.id)} isCart={true} key={item.id} name={item.name} price={item.price} imageLink={item.imageLink} />
              )
            })}
          </div>

          :
          <div className="flex gap-2 items-center justify-center mx-auto capitalize font-bold text-amber-400"><FolderOpen/> your cart is empty</div>
      }

      <div className="bg-black fixed bottom-0 left-0 w-full md:w-dfit z-10">
        <button onClick={() => {
          localStorage.setItem("kona_market_cart", "");
          setCart([])
        }} className="bg-red-500 w-1/2 h-10 capitalize font-bold text-amber-200 cursor-pointer">clear cart</button>
        <button onClick={() => {
          localStorage.setItem("kona_market_cart", "");
          redirect(`https://wa.me/2349077453404?text=hi, i need one ${cart.map(item => "1 " + item?.name)} calculate my cost`);
        }} className="bg-green-500 w-1/2 h-10 capitalize font-bold text-amber-200 cursor-pointer">check out</button>

      </div>
    </>
  )
}

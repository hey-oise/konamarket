"use client";
import Product from "@/components/product";
import Footer from "./footer";

import { SearchAlert, SearchIcon, ShoppingCartIcon, StoreIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { konamarketItem } from "./product";

export default function Home() {
  const [query, setQuery] = useState("");
  const products = konamarketItem;
  type CartItem = {
    id: number;
    name: string;
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
    localStorage.setItem("kona_market_cart", JSON.stringify(newCart || '[]'));
  }
  function addCart(item: { id: number, name: string, imageLink: string }) {
    const konaCart = localStorage.getItem("kona_market_cart");
    const phrasedCart = JSON.parse(konaCart || "[]");
    phrasedCart.push(item);
    localStorage.setItem("kona_market_cart", JSON.stringify(phrasedCart || '[]'));
    setCart(phrasedCart)
  }
  function checkAdded(id :number) {
    const phrasedCart = cart;
    if (phrasedCart) {
     return phrasedCart.some(item => item.id === id);

    } else {
      return false;
    }
  }
  useEffect(() => {
    getCart();
  }, [])
  const filteredProduct = products.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className=" bg-amber-100 pt-50 min-w-full min-h-full flex-1 relative">
      <div className="fixed top-0 left-0 right-0 bordder-b border-amber-300 h-16 flex items-center px-4 justify-between backdrop-blur-2xl z-30">
        <Link href={"/"} className="text-amber-400 capitalize font-bold flex gap-1 text-md items-center">
          <StoreIcon size={20}/>konaMarket</Link>
        <Link href={"/cart"} className="hover:bg-amber-200 transition-all duration-400 p-2 rounded-full"><ShoppingCartIcon size={20} className="text-amber-400"/></Link>
      </div>
      <div className="bg-amber-200 w-4/5 lg:w-1/2 h-10 flex items-center px-2 rounded-lg border border-amber-200 gap-3 m-auto"><SearchIcon className="text-amber-500" /><input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className="w-full outline-none text-amber-600 placeholder-amber-500" placeholder="what are you looking for?"></input>
        {query.length > 0 &&
          <button onClick={() => setQuery("")}><XIcon className="text-amber-500" /></button>
        }
      </div>
        {filteredProduct.length > 0 ?
        <div className="m-auto grid md:grid-cols-4 grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 w-fit gap-3 sm:gap-8 mt-40 mb-40 px-2">
          {filteredProduct.map((item) => {
            return (
              <Product onAdd={() => addCart(item)} onRemove={() => removeCart(item.id)} isCart={checkAdded(item.id)} key={item.id} name={item.name} imageLink={item.imageLink} />
            )
          } )}
      </div>
        : <p className="text-amber-600 flex gap-1 font-bold text-md m-auto capitalize items-center justify-center mt-50"><SearchAlert/> no item found!</p>
      }
      <Footer />
    </div>
  );
}

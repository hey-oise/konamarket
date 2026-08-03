"use client";
import Product from "@/components/product";
import { SearchAlert, SearchIcon, ShoppingCartIcon, StoreIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { it } from "node:test";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const products = [
    { id: 1, name: "Indomie superpack", price: "₦400", imageLink: "/product/indomie.jpg" },
    { id: 2, name: "Milo Chocolate Malt", price: "₦250", imageLink: "/product/milo.jpg" },
    { id: 3, name: "Peak Evaporated Milk", price: "₦300", imageLink: "/product/peak.jpg" },
    { id: 4, name: "Golden Penny Spaghetti", price: "₦700", imageLink: "/product/spaghetti.jpg" },
    { id: 5, name: "Garri", price: "₦500", imageLink: "/product/garri.jpg" },
    { id: 6, name: "Dangote Sugar", price: "₦1,200", imageLink: "/product/sugar.jpg" },
    { id: 7, name: "Kings Vegetable Oil", price: "₦5,000", imageLink: "/product/oil.jpg" },
    { id: 8, name: "Maggi Star Cubes", price: "₦50", imageLink: "/product/maggi.jpg" },
    { id: 9, name: "St. Louis Sugar", price: "₦3,000", imageLink: "/product/sugar.jpg" },
    { id: 10, name: "Dano Full Cream Milk", price: "400g Pouch Bag", imageLink: "/product/peak.jpg" },
    { id: 11, name: "Honeywell Semolina", price: "1kg Pack", imageLink: "/product/garri.jpg" },
    { id: 12, name: "Gino Tomato Paste", price: "70g Sachet", imageLink: "/product/milo.jpg" },
    { id: 13, name: "Knorr Beef Cubes", price: "Seasoning (50pcs)", imageLink: "/product/maggi.jpg" },
    { id: 14, name: "Sardine in Vegetable Oil", price: "Titan Brand Can", imageLink: "/product/oil.jpg" },
    { id: 15, name: "Cabin Biscuits", price: "Oxford Standard Pack", imageLink: "/product/spaghetti.jpg" },
    { id: 16, name: "Power Oil", price: "750ml Clean Bottle", imageLink: "/product/oil.jpg" },
    { id: 17, name: "Bigi Cola", price: "50cl Plastic Bottle", imageLink: "/product/milo.jpg" },
    { id: 18, name: "Malta Guinness", price: "330ml Classic Can", imageLink: "/product/peak.jpg" },
    { id: 19, name: "Nascom Cornflakes", price: "350g Box Pack", imageLink: "/product/indomie.jpg" },
    { id: 20, name: "Golden Morn", price: "Cereal Maize 450g", imageLink: "/product/milo.jpg" }
  ];
  const filteredProduct = products.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || item.price.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className=" bg-amber-100 pt-70 min-w-full min-h-full flex-1">
      <div className="fixed top-0 left-0 right-0 border-b border-amber-300 h-16 flex items-center px-4 justify-between backdrop-blur-2xl z-30">
        <Link href={"/"} className="text-amber-400 capitalize font-bold flex gap-1 text-md items-center">
          <StoreIcon size={20}/>
          konaMarket</Link>
        <Link href={"/"} className="hover:bg-amber-200 transition-all duration-400 p-2 rounded-full"><ShoppingCartIcon size={20} className="text-amber-400"/></Link>
      </div>
      <div className="bg-amber-200 w-4/5 lg:w-1/2 h-10 flex items-center px-2 rounded-lg border border-amber-400 gap-3 m-auto"><SearchIcon className="text-amber-500" /><input onChange={(e) => setQuery(e.target.value)} value={query} type="search" className="w-full outline-none text-amber-600 placeholder-amber-500" placeholder="what are you looking for?"></input>
        {query.length > 0 &&
          <button onClick={() => setQuery("")}><XIcon className="text-amber-500" /></button>
        }
      </div>
        {filteredProduct.length > 0 ?
        <div className="m-auto grid md:grid-cols-4 grid-cols-2 lg:grid-cols-7 sm:grid-cols-3 w-fit gap-5 sm:gap-7 mt-60 mb-40">
          {filteredProduct.map((item) => {
            return <Product key={item.id} name={item.name} price={item.price} imageLink={item.imageLink} />
          } )}
      </div>
        : <p className="text-amber-600 flex gap-1 font-bold text-md m-auto capitalize items-center justify-center mt-50"><SearchAlert/> no item found!</p>
        }
    </div>
  );
}

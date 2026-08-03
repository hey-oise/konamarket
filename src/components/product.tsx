import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Product({name = "", price ="", imageLink = ""}) {
  return (
    <Link target="_blank" href={`https://wa.me/2349077453404?text=hi, i need one ${name}`} className="flex flex-row gap-5 m-auto hover:scjale-101 transition-all duration-500">
      <div className="w-36 h-60 rounded-2xl overflow-hidden border border-amber-700 relative">
        <button className="absolute top-1 right-1 text-emerald-500-500 bg-amber-100/70 p-1 rounded-lg"><ShoppingBasketIcon/></button>
                <Image src={imageLink} alt={`image of ${name}`} width={700} height={1000} className="w-full h-full z-0 object-cover pointer-events-none select-none" draggable={false}></Image>
        <div className="absolute bottom-0 p-3 z-10 bg-linear-to-t from-black to-transparent w-full min-h-20 flex flex-col justify-center">
          <div className="w-full">
          <p className="text-gray-200 capitalize font-bold text-md">{name}
          </p>
            <p className="text-green-100 capitalize text-sm font-semibold">{price}</p>
          </div>
                </div>
              </div>
              </Link>
  )
}

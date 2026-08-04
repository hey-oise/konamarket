import { Minus, ShoppingBasketIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Product({name = "", imageLink = "", isCart = false, onAdd = () => {}, onRemove = () => {}}) {
  return (
    <div className="flex flex-row gap-5 m-auto hover:scjale-101 transition-all duration-500">
      <div className="w-40 h-70 rounded-2xl overflow-hidden border border-amber-700 relative">
        <button onClick={!isCart ? onAdd : onRemove} className="absolute top-1 right-1 text-emerald-500-500 cursor-pointer bg-amber-100/70 p-1 rounded-lg z-5">{isCart ? <Minus color="red" size={20} /> : <ShoppingBasketIcon />}</button>
                <Image src={imageLink} alt={`image of ${name}`} width={700} height={1000} className="w-full h-full z-0 object-cover pointer-events-none select-none" draggable={false}></Image>
        <div className="absolute bottom-0 p-3 z-10 bg-linear-to-t from-black to-transparent w-full min-h-20 flex flex-col justify-center">
          <Link target="_blank" href={`https://wa.me/2349077453404?text=hi, i need one ${name}`}  className="w-full">
          <p className="text-gray-200 capitalize font-bold text-md">{name}
          </p>
          </Link>
                </div>
              </div>
              </div>
  )
}

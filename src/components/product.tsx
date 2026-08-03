import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";

export default function Product({name = "", extra ="", imageLink = ""}) {
  return (
    <div className="flex flex-row gap-5 m-auto hover:scjale-101 transition-all duration-500">
      <div className="w-36 h-60 rounded-lg overflow-hidden border border-amber-200 relative">
        <button className="absolute top-1 right-1 text-emerald-500-500 bg-amber-100/70 p-1 rounded-lg"><ShoppingBasketIcon/></button>
                <Image src={imageLink} alt={`image of ${name}`} width={700} height={1000} className="w-full h-full z-0 object-cover pointer-events-none select-none" draggable={false}></Image>
        <div className="absolute bottom-0 p-3 z-10 bg-linear-to-t from-gray-500 to-transparent w-full min-h-20 flex flex-col justify-center">
          <div>
          <p className="text-gray-900 capitalize font-bold text-md">{name}
          </p>
            <p className="text-amber-200 capitalize text-sm font-semibold">{extra}</p>
          </div>
                </div>
              </div>
              </div>
  )
}

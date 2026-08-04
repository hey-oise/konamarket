"use client";
import { Phone } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useEffect, useState, useRef } from "react";


export default function Footer() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.4 })
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [])
  return (
    <div ref={ref} id="support" className={`scroll-mt-20 bg-amber-200 py-10 w-full p-5 lg:p-10 flex absolute bottom-0 flex-col transition-all duration-500 justify-center items-center h-20 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="text-sm md:flex justify-between w-full">
        <p className="font-bold text-amber-800">© 2026 konamarket. All rights reserved.</p>
        <a target="blank" href={"https://wa.me/2347026460387"} className="font-bold text-amber-950">Designed & Developed by Oise Okugbe</a>
      </div>
    </div>
  )
}

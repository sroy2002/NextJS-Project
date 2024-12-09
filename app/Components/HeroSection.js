"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { TfiRulerAlt } from "react-icons/tfi";
import { RxValueNone } from "react-icons/rx";
import machine from "@/public/machine.png";
import table1 from "@/public/table1.jpeg";
import table2 from "@/public/table2.jpeg";
import table3 from "@/public/table3.jpeg";
import table4 from "@/public/table4.jpeg";
import { Playfair_Display, Inter } from "next/font/google";
import localFont from 'next/font/local'


const playfair = Playfair_Display({
  display: "swap",
});
const inter = Inter({
  display: "swap",
});

const geist = localFont({
  src: '../../app/fonts/GeistVF.woff',
  display: 'swap',
})

function HeroSection() {
  const [currItem, setCurrItem] = useState("Art de la table");
  const [count, setCount] = useState(1);
  const menuItems = [
    "Art de la table",
    "Mobilier",
    "Nappage",
    "Matériel de salle",
    "Cuisine",
    "Barbecue",
    "Tente",
    "Chauffage",
    "Podium - piste de danse",
    "Son et lumière",
    "Packs",
    "Consommables",
  ];
  const imgList = [table1, table2, table3, table4];
  return (
    <div>
      <div className="flex items-center justify-evenly my-3 text-[0.9rem] font-medium text-slate-500 border-b-2 border-slate-200 mx-0 ">
        <div className="mx-6 px-6">
          <ul className="flex gap-8 items-center justify-evenly">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setCurrItem(item)}
                className={`cursor-pointer py-4 ${inter.className} ${
                  currItem === item
                    ? "font-semibold text-[#0093D0] border-b-[0.05rem] border-[#0093D0]"
                    : "hover:font-semibold hover:text-[#0093D0] hover:border-b-[0.05rem]"
                }`}
              >
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-2 items-center px-6 mx-6">
        <p>Home</p>
        <GoDotFill className="text-slate-300" />
        <p className="text-slate-400">{currItem}</p>
      </div>
      <div className="px-6 flex gap-6 my-4 mx-6">
        <div className="h-[40.74rem] w-[47.5rem]  bg-[#f7f6f4] rounded-lg">
          <div className=" h-[34.5rem] w-[34.5rem] flex justify-center items-center mx-[5rem] my-8 ">
            <Image src={machine} alt="machine-pic" />
          </div>
          <div className="relative bottom-[37rem] left-[1rem]">
            <div className="flex flex-col gap-2 w-[3rem]">
              {imgList.map((pic, index) => (
                <div
                  key={index}
                  className="bg-white flex justify-center items-center p-2 rounded-md hover:cursor-pointer"
                >
                  <Image src={pic} alt={`${pic}-pic`} height={50} width={50} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className={`${playfair.className} text-[2rem]`}>
              Cheese – appareil à raclette 1/2 roue
            </p>
            <CiHeart size={40} />
          </div>
          <div className="flex items-center">
            <span className={`${geist.className} font-semibold text-lg`}>
              39,50€
            </span>
            <span className={`${geist.className} text-slate-400 ml-1`}>
              {" "}
              / pièce
            </span>
          </div>
          <div className="w-full border-y-2 border-slate-100 my-4 py-6 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span className={`flex gap-1 items-center ${geist.className}`}>
                  <div className="flex items-center justify-center text-slate-400">
                    <TfiRulerAlt size={25} />
                  </div>
                  <div className="flex items-start">
                    <span className=" text-xl">20</span>
                    <span className="text-sm">cm</span>
                  </div>
                </span>
                <span className={`flex gap-1 items-center ${geist.className}`}>
                  <div className="flex items-center justify-center text-slate-400">
                    <RxValueNone size={25} />
                  </div>
                  <div className="flex items-start">
                    <span className=" text-xl">50</span>
                    <span className="text-sm">cm</span>
                  </div>
                </span>
              </div>
              <div className={`${geist.className} text-slate-400`}>
                <p>RÉF : VABGN5</p>
              </div>
            </div>
          </div>

          <div className={`${geist.className}`}>
            <p>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </p>
            <p>Réglable en hauteur</p>
            <p>Appareil à raclette professionnel</p>
            <p>Boîtier de chauffe horizontal réglable en hauteur</p>
            <div className="my-8">
              <p>220V</p>
              <p>900W</p>
            </div>
          </div>
          <div className="flex gap-4 mt-[13rem] py-6 border-t-2 border-slate-100">
            <div className=" flex items-center justify-around w-[9.5rem] h-[3rem] border border-slate-200 rounded-md">
              <span
                className="hover:cursor-pointer"
                onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 0))}
              >
                -
              </span>
              <span>{count}</span>
              <span
                className="hover:cursor-pointer"
                onClick={() => setCount(count + 1)}
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-center bg-[#5cd2dd] text-white w-full rounded-md hover:bg-[#50bbc5] hover:cursor-pointer">
              <p>Ajouter au panier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

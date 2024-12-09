// "use client";
// import { useState } from "react";
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
import { Playfair_Display, Inter, Geist } from "next/font/google";

const playfair = Playfair_Display({
  display: "swap",
});
const inter = Inter({
  display: "swap",
});

const geist = Geist({
  display: "swap",
});

export default function Home() {
  // const [currItem, setCurrItem] = useState("Art de la table");

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
      <main className="">
        <div className="flex items-center justify-evenly my-3 text-[0.9rem] font-medium text-slate-500 border-b-2 border-slate-200 mx-0 ">
          <div>
            <ul className="flex gap-8 items-center justify-evenly">
              {menuItems.map((item) => (
                <li
                  key={item}
                  // onClick={() => setCurrItem(item)}
                  className={`cursor-pointer py-4 text-slate-400  ${inter.className} 
                  hover:font-semibold hover:text-[#0093D0] hover:border-b-[0.09rem] 
                  border-[#0093D0]
                `}
                >
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-center px-6">
          <p>Home</p>
          <GoDotFill className="text-slate-300" />
          <p className="text-slate-400">Art de la table</p>
        </div>
        <div className="px-6 flex gap-6 my-4">
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
                    <Image
                      src={pic}
                      alt={`${pic}-pic`}
                      height={50}
                      width={50}
                    />
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
              <div className={`${geist.className} text-slate-400` }>
                <p>RÉF : VABGN5</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

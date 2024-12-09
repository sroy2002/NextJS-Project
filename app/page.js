"use client";
import { useState } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function Home() {
  const [currItem, setCurrItem] = useState("Art de la table");

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

  return (
    <div>
      <main className="">
        <div className="flex items-center justify-evenly my-3 text-[0.9rem] font-medium text-slate-500 border-b-2 border-slate-200 mx-0 ">
          <ul className="flex gap-8 items-center justify-evenly ">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setCurrItem(item)}
                className={`cursor-pointer py-4 ${
                  currItem === item
                    ? "font-semibold text-[#0093D0] border-b-[0.05rem] border-[#0093D0]"
                    : "hover:font-semibold hover:text-[#0093D0] hover:border-b-[0.05rem] border-transparent"
                }`}
              >
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 items-center px-6">
          <p>Home</p>
          <GoDotFill className="text-slate-300" />
          <p className="text-slate-300">{currItem}</p>
        </div>
      </main>
    </div>
  );
}

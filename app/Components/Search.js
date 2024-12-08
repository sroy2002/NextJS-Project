"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import {
  IoReloadOutline,
  IoSearch,
  IoGridOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";
import plate from "@/public/plate.jpg";
import cutlery from "@/public/cutlery.webp";
import fork from "@/public/fork.webp";
import table from "@/public/table.jpeg";
import CardSmall from "./CardSmall";

function Search() {
  const [isSearch, setIsSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const suggestions = [
    {
      label: "fourchettes",
      startIcon: <IoReloadOutline />,
      endIcon: <GoArrowUpLeft />,
    },
    {
      label: "fourchette grande",
      startIcon: <IoSearch />,
      endIcon: <GoArrowUpLeft />,
    },
    {
      label: "fourchette Piranha",
      startIcon: <IoSearch />,
      endIcon: <GoArrowUpLeft />,
    },
    {
      label: "fourchette",
      startIcon: <IoSearch />,
      endIcon: <GoArrowUpLeft />,
    },
    {
      label: "Fourchettes",
      startIcon: <IoGridOutline />,
      subText: "ART DE LA TABLE > FOURCHETTES",
    },
    { label: "Fourchette", startIcon: <IoPricetagOutline /> },
    { label: "Sport addict", startIcon: <IoPricetagOutline /> },
  ];

  const filteredItem = suggestions.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // search bar
    <div
      className={`bg-[#f9fafb] flex items-center rounded-md ${
        isSearch
          ? "bg-white border-2 border-[#0093D0]"
          : "bg-[#f9fafb] border border-gray-300"
      }`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="h-[50px] w-[768px] pl-[15px] bg-[#f9fafb] focus:outline-none"
        placeholder="Rechercher un produit"
        onFocus={() => {
          setIsSearch(true);
        }}
        onBlur={() => {
          setIsSearch(false);
        }}
      />
      <div
        className={` p-4 ${
          isSearch ? "bg-[#0093D0] text-white" : "bg-[#f9fafb] text-slate-500"
        } hover:cursor-pointer`}
      >
        <CiSearch size={25} className="font-bold" />
      </div>

      {/* search suggestions dropdown list w-[51.7rem]*/}

      {isSearch && searchTerm && (
        <div className="flex gap-4 absolute top-[90px]   h-auto border border-slate-300 shadow-md bg-white p-4 rounded-md">
          <div>
            <p className="text-sm text-slate-400 mb-4 ">Suggestions</p>
            <div>
              {filteredItem.length > 0 ? (
                <>
                  {filteredItem.map((item, index) => (
                    <p
                      className="flex items-center justify-between mb-4 hover:cursor-pointer"
                      key={index}
                    >
                      <div className="flex gap-2">
                        {item.startIcon && (
                          <span className="flex items-center justify-center">
                            {item.startIcon}
                          </span>
                        )}
                        <span className="font-bold">{item.label}</span>
                      </div>
                      {item.subText && (
                        <p className="relative top-4 right-[5.7rem] text-[0.6rem] text-slate-400">
                          {" "}
                          {item.subText}
                        </p>
                      )}
                      {item.endIcon && <span>{item.endIcon}</span>}
                    </p>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mx-4 flex flex-col">
            <p className="text-sm text-slate-400 mb-4 ">Produits</p>
            <div className="flex gap-6">
              <CardSmall
                photo={table}
                title={"ART DE LA TABLE"}
                subtitle={"Produit Simple"}
                price={"7€"}
                quantity={20}
                altText={"table-img"}
              />
              <CardSmall
                photo={plate}
                title={"ART DE LA TABLE"}
                subtitle={"Produit Gamme"}
                price={"2,20€"}
                quantity={20}
                altText={"plate-img"}
              />
              <CardSmall
                photo={cutlery}
                title={"ART DE LA TABLE"}
                subtitle={"Jewel Grand Couteau"}
                price={"7€"}
                quantity={20}
                altText={"cutlery-img"}
              />
              <CardSmall
                photo={fork}
                title={"ART DE LA TABLE"}
                subtitle={"Piranha Fourchette à Zakouski"}
                price={"220€"}
                quantity={20}
                altText={"fork-img"}
              />
            </div>
            <div className="w-full px-4 py-2 border border-[#c0c0c0] text-center mt-8 mb-2 rounded-sm">Voir tous les résultats</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;

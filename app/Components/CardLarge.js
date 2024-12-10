"use client";

import React, { useState } from "react";
import Image from "next/image";
import tableNormal from "@/public/table-removebg-preview.png";
import tableZoomed from "@/public/table-removebg-copy.png";
import { CiHeart } from "react-icons/ci";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  display: "swap",
});

function CardLarge({ width }) {

  const [count, setCount] = useState(1);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{ width: width }}
      className={`my-6  bg-[#f9f7f5]   h-[26.5rem] hover:cursor-pointer transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="w-full  flex flex-col rounded-md  ">
        <div className="flex items-center justify-between py-3 px-3">
          <div>
            <CiHeart size={25} />
          </div>
          <div
            className={`${
              isHover ? "flex gap-2" : "block"
            } text-[0.7rem] transition-opacity duration-300`}
          >
            <span className=" bg-white px-2 py-1 rounded-md">
              ART DE LA TABLE
            </span>
            {isHover && (
              <span className=" bg-white px-2 py-1 rounded-md">LOT</span>
            )}
          </div>
        </div>
        <div
          className={` bg-[#f9f7f5] w-full flex flex-col items-center justify-center rounded-lg`}
        >
          <div className="relative w-full h-[15rem]">
            {/* Normal Image */}
            <div
              className={`absolute inset-0 mx-6 py-4 transition-opacity duration-300 ${
                isHover ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex justify-center items-center object-cover h-full w-full">
                <Image
                  src={tableNormal}
                  alt="table-normal"
                  layout="intrinsic"
                  objectFit="cover"
                  className="rounded-md"
                  width={300}
                  height={300}
                />
              </div>
            </div>

            {/* Zoomed Image */}
            <div
              className={`absolute m-4 inset-0 transition-opacity duration-300 ${
                isHover ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex justify-center items-center h-full w-full">
                <Image
                  src={tableZoomed}
                  alt="table-zoomed"
                  layout="intrinsic"
                  objectFit="cover"
                  className="rounded-md"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              !isHover ? " opacity-0 pointer-events-none" : "opacity-100"
            } bg-white w-[90%]  py-2 px-4 mb-3 flex gap-3 items-center justify-between rounded-md transition-opacity duration-300`}
          >
            <div className="text-sm">
              <p>QTÉ</p>
            </div>
            <div className="flex items-center justify-between w-full px-4 py-[0.3rem] bg-slate-100 rounded-md">
              <span
                className="hover:cursor-pointer"
                onClick={() =>
                  setCount((preCount) => Math.max(preCount - 1, 0))
                }
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
            <div className="bg-pink-600 text-white px-4 py-[0.3rem] rounded-md text-sm hover:bg-pink-700 hover:cursor-pointer">
              Ajouter
            </div>
          </div>
        </div>
        <div className="bg-white px-3 py-3">
          <div className="flex items-center justify-between">
            <span className={`${playfair.className} text-2xl`}>Title</span>
            <div className="flex items-start">
              <span className="text-2xl font-semibold">0</span>
              <span>€</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[0.85rem] mt-2 ">
            <div className="text-slate-400">
              <span>0,35€/Pièce</span>
              <span className="text-[0.68rem]"> · RÉF : VABGN5</span>
            </div>
            <span className="bg-slate-100 px-3 py-1 rounded-2xl">
              20 pièces
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLarge;

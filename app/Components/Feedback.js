import React from "react";
import Image from "next/image";
import room from "@/public/room.jpeg";
import { Inter } from "next/font/google";
import { GoArrowRight } from "react-icons/go";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

function Feedback() {
  return (
    <div className="flex gap-4">
      <div className="w-full ">
        <Image
          src={room}
          alt="room pic"
          className="w-full rounded-2xl h-full"
        />
      </div>
      <div
        className={`${inter.className} bg-[#fff3f9] rounded-2xl w-full p-10 pb-[2rem]`}
      >
        <p className="w-full text-3xl font-bold mb-4">
          S&apos;inscrire & économiser <span className="text-[#5cd2dd]">10%</span>
        </p>
        <p className="text-[0.7rem] text-slate-400">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn&apos;t. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </p>
        <div className="w-full mt-[5rem] flex">
          <input
            type="email"
            className="w-[65%] mr-4 p-4 rounded-lg focus:outline-none focus:outline-green-600 focus:rounded-none"
            placeholder="john@doe.com"
          />
          <button className="bg-[#5cd2dd] text-white p-4 rounded-lg w-[30%] hover:bg-[#57c7d1] flex justify-evenly items-center">
            <span>S&apos;INSCRIRE</span>
            <div className="font-bold w-8 flex items-center justify-center">
              <GoArrowRight size={25}/>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

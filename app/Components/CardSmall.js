import React from "react";
import Image from "next/image";
function CardSmall({ photo, title, subtitle, price, quantity, altText }) {
  return (
    <div className="hover:cursor-pointer" >
        <div className="h-[9rem] w-[9rem] border-[#c0c0c0] border-[0.05rem]">
            <Image src={photo} alt={altText}></Image>
        </div>
      <div>
        <p className="text-[0.6rem] my-1 text-slate-400">{title}</p>
        <p className="text-[0.8rem]">{subtitle}</p>
        <span className="font-bold text-[0.91rem]">{price}</span>
        <span className="text-[0.91rem] text-slate-400"> / {quantity} pièces</span>
      </div>
    </div>
  );
}

export default CardSmall;

"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div
      className={`bg-[#f9fafb] flex items-center rounded-md ${
        isSearch
          ? "bg-white border-2 border-[#0093D0]"
          : "bg-[#f9fafb] border border-gray-300"
      }`}
    >
      <input
        type="text"
        className="h-[50px] w-[768px] pl-[15px] bg-[#f9fafb] focus:outline-none"
        placeholder="Rechercher un produit"
        onFocus={() => {
          setIsSearch(true);
        }}
        onBlur={() => {
          setIsSearch(false);
        }}
      />
      <div  className={` p-4 ${
            isSearch ? "bg-[#0093D0] text-white" : "bg-[#f9fafb] text-slate-500"
          } hover:cursor-pointer`}>
        <CiSearch
          size={25}
          className="font-bold"
        />
      </div>
    </div>
  );
}

export default Search;

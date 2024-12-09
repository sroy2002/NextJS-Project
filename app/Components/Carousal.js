"use client";
import React, { useRef } from "react";
import CardLarge from "../Components/CardLarge.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Carousal() {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, 
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-auto overflow-y-visible">
      <div  onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-200">
        <div>
          <FaArrowLeft />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden no-scrollbar"
        style={{
            scrollSnapType: "x mandatory", 
            height: "auto",
          }}
      >
        {Array(10)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="shrink-0 h-auto snap-start"
              style={{ scrollSnapAlign: "start", height:"100%" }}
            >
              <CardLarge />
            </div>
          ))}
      </div>
      <div onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-200">
        <div>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Carousal;

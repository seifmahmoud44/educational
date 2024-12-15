"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function Pagination() {
  const pages = [1, 2, 3, 4, 5, 6, 7];
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="py-8 w-fit m-auto flex items-center gap-4">
      <button
        disabled={currentPage === 1}
        className="size-12 rounded-full bg-white font-semibold border border-[#DDDDDD] text-[#DDDDDD] flex justify-center items-center group"
      >
        <ArrowLeft className="text-black group-disabled:text-[#DDDDDD]" />
      </button>
      {pages.map((_, index) => {
        return (
          <button
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            className={`${
              currentPage === index + 1
                ? "border-black bg-[#0C479A] text-white"
                : "bg-white border-[#DDDDDD]"
            } size-12 rounded-full  font-semibold border   flex justify-center items-center`}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        disabled={currentPage === pages.length}
        className="size-12 rounded-full bg-white font-semibold border border-[#DDDDDD] text-[#DDDDDD] flex justify-center items-center group"
      >
        <ArrowRight className="text-black group-disabled:text-[#DDDDDD]" />
      </button>
    </div>
  );
}

"use client";
import { GridOneIcon, GridThreeIcon } from "@/public/assets/svgs";

import React, { useState } from "react";

export default function CoursesGridToggel() {
  const [grid, setGrid] = useState(true);
  return (
    <div className="flex items-center border border-[#DDDDDD] rounded-xl overflow-hidden">
      <div
        className={`p-3 cursor-pointer ${grid ? "bg-[#F1F2F8]" : "bg-white"} `}
        onClick={() => setGrid(true)}
      >
        <GridThreeIcon color={`${grid ? "#0C479A" : "black"}`} />
      </div>
      <div
        className={`p-3 cursor-pointer ${!grid ? "bg-[#F1F2F8]" : "bg-white"} `}
        onClick={() => setGrid(false)}
      >
        <GridOneIcon color={`${!grid ? "#0C479A" : "black"}`} />
      </div>
    </div>
  );
}

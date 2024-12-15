"use client";

import FilterItem from "./FilterItem";

export default function Filters() {
  return (
    <div className="min-w-[300px] space-y-6 divide-y h-fit sticky top-10">
      <FilterItem />
      <div className="flex gap-3 ">
        <button className="py-3 px-5 bg-[#0C479A] text-white font-semibold border border-[#0C479A] rounded-lg flex-grow">
          filter
        </button>
        <button className="py-3 px-5 bg-white text-[#0C479A] font-semibold border border-[#0C479A] rounded-lg flex-grow">
          reset
        </button>
      </div>
    </div>
  );
}

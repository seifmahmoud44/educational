"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { DualRangeSlider } from "@/components/ui/DualRangeSlider";
import { useState } from "react";

export default function FilterItem() {
  const [values, setValues] = useState([0, 100]);
  return (
    <>
      <div className="space-y-4 py-5">
        <h2 className="text-xl font-semibold">Price</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="free" />
              <label htmlFor="free" className="text-[#838383] ">
                Free
              </label>
            </div>
            <p className="text-[#838383]">16</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="Paid" />
              <label htmlFor="Paid" className="text-[#838383] ">
                Paid
              </label>
            </div>
            <p className="text-[#838383]">16</p>
          </div>
          <DualRangeSlider
            className="pt-8"
            label={(value) => <span>${value}</span>}
            value={values}
            onValueChange={setValues}
            min={0}
            max={100}
            step={1}
          />
        </div>
      </div>
      <div className="space-y-4 py-5">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="free" />
              <label htmlFor="free" className="text-[#838383] ">
                Free
              </label>
            </div>
            <p className="text-[#838383]">16</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="Paid" />
              <label htmlFor="Paid" className="text-[#838383] ">
                Paid
              </label>
            </div>
            <p className="text-[#838383]">16</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-5">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="free" />
              <label htmlFor="free" className="text-[#838383] ">
                Free
              </label>
            </div>
            <p className="text-[#838383]">16</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="Paid" />
              <label htmlFor="Paid" className="text-[#838383] ">
                Paid
              </label>
            </div>
            <p className="text-[#838383]">16</p>
          </div>
        </div>
      </div>
    </>
  );
}

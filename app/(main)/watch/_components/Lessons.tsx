"use client";

import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AssignmentIcon,
  CameraIcon,
  CompletedLesson,
  UncompletedLesson,
} from "@/public/assets/svgs";
import { useState } from "react";

export default function Lessons() {
  // State to manage which accordion items are open (defaulting to "item-2")
  const [openItems, setOpenItems] = useState<string[]>(["item-1"]);

  return (
    <div className="w-[400px] bg-white main-box-shadow p-6 rounded-md space-y-3 max-md:w-full max-md:order-1">
      {/* Progress Section */}
      <div className="space-y-2">
        <p className="font-medium">Progress</p>
        <Progress value={30} />
      </div>

      {/* Accordion Section */}
      <div className="">
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={(values) => setOpenItems(values)} // Update state when toggled
          className="w-full space-y-6"
        >
          {/* map your lessons here with change icons like completed or uncompleted and assigment icon */}
          <AccordionItem value="item-1" className="p-4 main-box-shadow">
            <AccordionTrigger>
              <p className="flex items-center gap-4">
                <UncompletedLesson /> Is it accessible?
              </p>
            </AccordionTrigger>
            <AccordionContent className="p-4 m-1 main-box-shadow rounded-md hover:bg-slate-100 cursor-pointer transition-all">
              <div className="flex items-center justify-between gap-3">
                <CompletedLesson size="sm" />
                <div className="flex justify-start items-center flex-grow gap-4">
                  <CameraIcon />
                  <p className="text-base line-clamp-2 w-36">
                    This is the first lesson content.
                  </p>
                </div>
                <p className="text-lg text-gray-400">09:10</p>
              </div>
            </AccordionContent>
            <AccordionContent className="p-4 m-1 main-box-shadow rounded-md hover:bg-slate-100 cursor-pointer transition-all">
              <div className="flex items-center justify-between gap-3">
                <CompletedLesson size="sm" />
                <div className="flex justify-start items-center flex-grow gap-4">
                  <CameraIcon />
                  <p className="text-base line-clamp-2 w-36">
                    This is the first lesson content.
                  </p>
                </div>
                <p className="text-lg text-gray-400">09:10</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="p-4 main-box-shadow">
            <AccordionTrigger>
              <p className="flex items-center gap-4">
                <UncompletedLesson /> Is it accessible?
              </p>
            </AccordionTrigger>
            <AccordionContent className="p-4 m-1 main-box-shadow rounded-md hover:bg-slate-100 cursor-pointer transition-all">
              <div className="flex items-center justify-between gap-3">
                <CompletedLesson size="sm" />
                <div className="flex justify-start items-center flex-grow gap-4">
                  <AssignmentIcon />
                  <p className="text-base line-clamp-2 w-36">
                    This is the second lesson content.
                  </p>
                </div>
                <p className="text-lg text-gray-400">09:10</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="p-4 main-box-shadow">
            <AccordionTrigger>
              <p className="flex items-center gap-4">
                <UncompletedLesson /> Is it accessible?
              </p>
            </AccordionTrigger>
            <AccordionContent className="p-4 m-1 main-box-shadow rounded-md hover:bg-slate-100 cursor-pointer transition-all">
              <div className="flex items-center justify-between gap-3">
                <CompletedLesson size="sm" />
                <div className="flex justify-start items-center flex-grow gap-4">
                  <CameraIcon />
                  <p className="text-base line-clamp-2 w-36">
                    This is the second lesson content.
                  </p>
                </div>
                <p className="text-lg text-gray-400">09:10</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

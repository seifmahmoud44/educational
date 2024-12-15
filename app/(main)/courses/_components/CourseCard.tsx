import Image from "next/image";
import coursecard from "../../../../public/assets/coursecard.jpg";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  LessonsIcon,
  OfflineIcon,
  OnlineIcon,
  StarIcon,
} from "@/public/assets/svgs";
import { BellRing, Clock2, UsersRound } from "lucide-react";

export default function CourseCard() {
  return (
    <div className="flex gap-5 py-8">
      <Image
        className="w-[400px] rounded-xl"
        src={coursecard}
        alt="course card"
      />

      <div className="flex-grow space-y-2">
        <h1 className="text-2xl font-semibold  truncate    ">
          Advanced Graphic Design Diploma
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-3 items-center flex-grow">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            </Avatar>
            <p className=" text-[#838383]">William Samy</p>
          </div>
          <div className="flex gap-3 items-center">
            <LessonsIcon />
            <p className="text-sm text-[#838383]">4 Lesson</p>
          </div>
          <div className="flex gap-3 items-center">
            <Clock2 className="w-5 text-[#0C479A]" />
            <p className="text-sm text-[#838383]">2h 30m</p>
          </div>
        </div>
        <p className="text-[#838383]">
          Architecto sequi pariatur vitae repellat quos accusantium error aut
          aut. Sed atque eos ut expedita earum et sunt dolorem. Dolor sed labore
          molestiae labore accusantium.
        </p>
        <div className="flex items-center gap-3">
          <p className="text-3xl font-semibold ">$37.99</p>
          <p className="text-xl text-[#838383] line-through  ">$149.99</p>
          <p className="text-xl text-[#FF1110]  ">83% off</p>
        </div>
        <div className="bg-[#FFE1DF] py-2 px-3 rounded-md flex items-center gap-2 w-fit">
          <div className="flex items-center gap-2">
            <BellRing className="w-5 text-[#838383]" />
            <p className="text-sm  text-[#838383]">Discount end in:</p>
          </div>
          <p className="text-[#FF1110] font-medium ">00 : 05 : 36 : 12</p>
        </div>
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold text-[#FC453D] bg-[#FEEFF5] rounded-full py-1 px-2 w-fit">
              Advanced
            </p>
            <p className="flex items-center gap-2 text-sm font-semibold text-[#FC453D] bg-[#FEEFF5] rounded-full py-1 px-2 w-fit">
              <OnlineIcon /> Online
            </p>
            <p className="flex items-center gap-2 text-sm font-semibold text-[#838383] bg-[#E4E4E4] rounded-full py-1 px-2 w-fit">
              <OfflineIcon /> Offline
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#838383] text-sm font-semibold flex items-center gap-2">
              <UsersRound className="w-5" /> 120
            </p>
            <p className="text-[#838383] text-sm font-semibold flex items-center gap-2">
              <StarIcon /> 120
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

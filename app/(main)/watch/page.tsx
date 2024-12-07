import React from "react";
import Lessons from "./_components/Lessons";
import Video from "./_components/Video";

export default function page() {
  return (
    <div className="container flex gap-5 max-md:flex-col ">
      <Lessons />
      <Video />
    </div>
  );
}

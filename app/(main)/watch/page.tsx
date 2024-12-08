import React from "react";
import Lessons from "./_components/Lessons";

import Exam from "./_components/Exam";

export default function page() {
  return (
    <div className="container flex  gap-5 max-md:flex-col ">
      <Lessons />
      {/* <Video /> */}
      <Exam />
    </div>
  );
}

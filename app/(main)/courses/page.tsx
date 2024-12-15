import React from "react";
import CoursesSort from "./_components/CoursesSort";
import CoursesGridToggel from "./_components/CoursesGridToggel";
import Filters from "./_components/Filters";
import GridList from "./_components/GridList";

export default function page() {
  return (
    <div className="container space-y-10">
      <h1 className="font-medium text-5xl ">10,000 results for “design”</h1>
      <div className="flex gap-5">
        <CoursesSort />
        <CoursesGridToggel />
      </div>
      <div className="flex gap-5">
        <Filters />
        <GridList />
      </div>
    </div>
  );
}

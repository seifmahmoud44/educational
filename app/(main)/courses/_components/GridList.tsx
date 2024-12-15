import CourseCard from "./CourseCard";
import Pagination from "./Pagination";

export default function GridList() {
  return (
    <>
      <div className="flex-grow divide-y ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <Pagination />
      </div>
    </>
  );
}

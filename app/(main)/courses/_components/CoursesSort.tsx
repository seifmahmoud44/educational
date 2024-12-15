"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
function CoursesSort() {
  const [result, setResult] = useState("Newly published");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none gap-4 min-w-48 flex justify-between items-center border border-[#E2E0DB] rounded-lg py-3 px-6">
          <p className="text-[#666666]">{result}</p>{" "}
          <ChevronDown className="text-[#666666]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={result} onValueChange={setResult}>
            <DropdownMenuRadioItem value="top">
              Newly published
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default CoursesSort;

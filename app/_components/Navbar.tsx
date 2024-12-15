import Image from "next/image";
import logo from "@/public/assets/Logo.png";
import {
  AccountIcon,
  CalenderIcon,
  CartIcon,
  CertificatesIcon,
  HelpIcon,
  MessagesIcon,
  NotificationsIcon,
  PaymentIcon,
  SearchIcon,
  WishListIcon,
} from "@/public/assets/svgs";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOutIcon } from "lucide-react";
export default function Navbar() {
  return (
    <div className="border-b-2">
      <div className="container flex justify-between items-center h-20 gap-4 ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="rounded-full border py-3 px-6 flex items-center   min-w-[350px]">
          <input
            type="text"
            className="flex-grow focus-visible:outline-none text-sm text-gray-800 align-middle"
            placeholder="Search ..."
          />
          <SearchIcon />
        </div>
        <nav className="flex justify-evenly flex-grow items-center gap-4">
          <Link className="text-lg text-[#242424] " href="/courses">
            Courses
          </Link>
          <Link className="text-lg text-[#242424] " href="/Event">
            Event
          </Link>
          <Link className="text-lg text-[#242424] " href="/Blog">
            Blog
          </Link>
          <Link className="text-lg text-[#242424] " href="/Contant">
            Contant
          </Link>
          <Link
            className="bg-[#FF1110] rounded-xl py-2 px-4 text-sm font-bold text-white "
            href="/signin"
          >
            Become a tutor
          </Link>
        </nav>
        {/* language menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="border rounded-full size-10 focus-visible:outline-none">
            Aa
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Arabic</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* cart */}

        <Link href={"/cart"} className="relative">
          <CartIcon />
          <div className="absolute -top-3 -right-3 size-6 text-sm rounded-full flex justify-center items-center bg-[#0248AB] text-white">
            0
          </div>
        </Link>
        {/* avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger className="border rounded-full size-10 focus-visible:outline-none">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" divide-y divide-[#838383]  w-[300px] max-h-[80vh] overflow-y-auto">
            <DropdownMenuItem className=" p-6 flex items-center gap-4 focus:bg-transparent">
              <Avatar className="size-20">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="profile"
                />
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold truncate w-40">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  animi incidunt. Atque reprehenderit minima id aliquam culpa
                  tenetur perferendis eveniet soluta doloremque porro debitis
                  amet dignissimos esse, distinctio nam impedit.
                </h1>
                <p className="text-[#838383] truncate w-40 mt-2">
                  email@fake.com
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-6 py-8 gap-4 flex flex-col items-start focus:bg-transparent">
              <Link href={"/courses"} className="text-xl text-[#5D5D5D]">
                My courses
              </Link>
              <Link
                href={"/cart"}
                className="text-xl text-[#5D5D5D] flex items-center justify-between w-full gap-2"
              >
                <div className="flex items-center gap-2">
                  <CartIcon color="#5D5D5D" size="20" />
                  <p>My cart</p>
                </div>
                <span className="size-7 bg-[#FF1110] rounded-full justify-center items-center flex  text-white">
                  0
                </span>
              </Link>
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <WishListIcon color="#5D5D5D" />
                <p>My wishlist</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-6 py-8 gap-4 flex flex-col items-start focus:bg-transparent">
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <NotificationsIcon color="#5D5D5D" />
                <p>Notifications</p>
              </Link>

              <Link
                href={"/cart"}
                className="text-xl text-[#5D5D5D] flex items-center justify-between w-full gap-2"
              >
                <div className="flex items-center gap-2">
                  <MessagesIcon color="#5D5D5D" />
                  <p>Messages</p>
                </div>
                <span className="size-7 bg-[#FF1110] rounded-full justify-center items-center flex  text-white">
                  0
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-6 py-8 gap-4 flex flex-col items-start focus:bg-transparent">
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <AccountIcon color="#5D5D5D" />
                <p>Account Setting</p>
              </Link>
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <PaymentIcon color="#5D5D5D" />
                <p>Payment Setting</p>
              </Link>
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <CertificatesIcon color="#5D5D5D" />
                <p>Certificates</p>
              </Link>
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <CalenderIcon color="#5D5D5D" />
                <p>Calender</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-6 py-8 gap-4 flex flex-col items-start focus:bg-transparent">
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <HelpIcon color="#5D5D5D" />
                <p>Help</p>
              </Link>
              <Link
                href={"/wishlist"}
                className="text-xl text-[#5D5D5D] flex items-center  w-full gap-2"
              >
                <LogOutIcon color="#5D5D5D" />
                <p>Log out</p>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

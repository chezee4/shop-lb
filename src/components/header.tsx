"use client";
import Link from "next/link";
import Logosvg from "../../public/icons/shoply.svg";
import { Inter } from "next/font/google";

import Burger from "./ui/burger";
import Logo from "./ui/logo";

import { cn } from "@/lib/utils";
import { useBurger } from "./context/menu-context";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const isOpen = useBurger((state) => state.isOpen);
  return (
    <header className=" sticky top-0 z-40 bg-white md:static w-full h-[72px]">
      <div className=" flex justify-between max-w-[1380px] px-6 md:px-3 h-full m-auto items-center">
        <Logo src={Logosvg} alt="Shoply" />
        <nav
          className={cn(
            " fixed md:static top-[72px] z-50 -right-[110%] h-[100dvh] md:h-auto bg-slate-500 md:bg-white  p-5 md:p-0 block md:flex items-center gap-5 transition-all ease-linear duration-300",
            {
              "right-0": isOpen,
            }
          )}
        >
          <ul className="flex flex-col text-white md:text-black md:flex-row text-xl md:text-base mb-5 md:mb-0 gap-5 md:gap-9 md:items-center font-medium">
            <li className=" hover:text-custom-orange transition-all ease-linear duration-200">
              <Link href="#">Products</Link>
            </li>
            <li className=" hover:text-custom-orange transition-all ease-linear duration-200">
              <Link href="#">Sale</Link>
            </li>
            <li className=" hover:text-custom-orange transition-all ease-linear duration-200 group">
              <Link href="#" className="mr-2 flex items-center gap-3">
                Cart
                <span
                  className={cn(
                    " flex justify-center items-center w-7 h-7 text-base md:w-9 md:h-9 bg-seo-friendly-orange group-hover:bg-custom-orange text-white rounded-[36px] font-semibold transition-all ease-linear duration-200",
                    inter.className
                  )}
                >
                  0
                </span>
              </Link>
            </li>
          </ul>
          <div className=" flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className=" w-48 px-1.5 py-1.5 rounded border border-[#CED4DA] placeholder:text-placeholder-text outline-none"
            />
            <button className=" bg-seo-friendly-orange hover:bg-orange-600 font-semibold rounded  shadow-custom-shadow-md text-white px-3 py-1.5 transition-all ease-linear duration-200">
              Search
            </button>
          </div>
        </nav>
        <Burger />
      </div>
    </header>
  );
}

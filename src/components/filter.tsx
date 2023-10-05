"use client";
import { Disclosure } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { filter } from "./config/filter";
export default function Filter() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 shadow-custom-shadow-md">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cn(
                "flex w-full justify-between rounded-lg px-4 py-2 mb-0.5 text-left text-sm font-medium text-purple-900 hover:bg-[#FFE5D0] focus:outline-none focus-visible:ring focus-visible:ring-[#FFE5D0] focus-visible:ring-opacity-75 transition-all ease-linear duration-200",
                { "bg-[#FFE5D0]": open }
              )}
            >
              <span>Category</span>
              <div
                className={`${
                  open
                    ? "rotate-90 origin-[50%_67%]  transition-all ease-linear duration-200 "
                    : ""
                } h-5 w-5 text-[#bc8e67] text-[24px]`}
              >
                {">"}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className=" text-sm text-gray-500 transition-all ease-linear duration-200">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={cn(
                        "flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-[#FFE5D0] focus:outline-none focus-visible:ring focus-visible:ring-[#FFE5D0] focus-visible:ring-opacity-75 transition-all ease-linear duration-200",
                        { "bg-[#FFE5D0]": open }
                      )}
                    >
                      <span>Women</span>
                      <div
                        className={`${
                          open
                            ? "rotate-90 origin-[50%_67%] transition-all ease-linear duration-200"
                            : ""
                        } h-5 w-5 text-[#bc8e67] text-[24px]`}
                      >
                        {">"}
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 transition-all ease-linear duration-200">
                      <ul className="flex flex-col gap-2">
                        {filter.women.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-1 font-medium"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 checked:text-white checked:accent-custom-orange"
                            />{" "}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={cn(
                        "flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-[#FFE5D0] focus:outline-none focus-visible:ring focus-visible:ring-[#FFE5D0] focus-visible:ring-opacity-75 transition-all ease-linear duration-200",
                        { "bg-[#FFE5D0]": open }
                      )}
                    >
                      <span>Men</span>
                      <div
                        className={`${
                          open
                            ? "rotate-90 origin-[50%_67%] transition-all ease-linear duration-200"
                            : ""
                        } h-5 w-5 text-[#bc8e67] text-[24px]`}
                      >
                        {">"}
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 transition-all ease-linear duration-200">
                      <ul className="flex flex-col gap-2">
                        {filter.men.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-1 font-medium"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 checked:accent-custom-orange checked:text-white"
                            />{" "}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

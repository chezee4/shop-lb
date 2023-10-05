"use client";
import { Disclosure } from "@headlessui/react";

export default function Filter() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>What is your refund policy?</span>
              <div
                className={`${
                  open ? "rotate-90 origin-[50%_67%] transition-all ease-linear duration-200" : ""
                } h-5 w-5 text-purple-500 text-[24px]`}
              >
                {">"}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If youre unhappy with your purchase for any reason, email us
              within 90 days and well refund you in full, no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

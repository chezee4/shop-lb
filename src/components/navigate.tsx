import Link from "next/link";

import { navigate } from "./config/navigate";

export default function Navigate() {
  return (
    <ul className=" flex flex-col mt-8 gap-y-7 sm:flex-row sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-3 justify-items-center grid-rows-2 md:flex md:gap-8 mb-6">
      {navigate.map((item, index) => (
        <li
          key={item.id}
          className=" hover:text-custom-orange transition-all ease-linear duration-200"
        >
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

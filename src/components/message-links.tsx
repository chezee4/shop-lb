import Image from "next/image";
import Link from "next/link";

import { messageLinkt } from "./config/message-link";

export default function MessageLinks() {
  return (
    <ul className="flex gap-6 sm:justify-end">
      {messageLinkt.map((link) => (
        <li key={link.id}>
          <Link href={link.link}>
            <Image
              src={link.icon}
              alt={link.title}
              width={30}
              height={30}
              className=" hover:scale-110 hover:-translate-y-[3px] transition-all ease-linear duration-200"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

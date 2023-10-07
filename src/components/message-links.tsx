"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { messageLinkt } from "./config/message-link";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

export default function MessageLinks() {
  return (
    <ul className="flex gap-6 sm:justify-end">
      {messageLinkt.map((link, index) => (
        <motion.li
          key={link.id}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <Link href={link.link}>
            <Image
              src={link.icon}
              alt={link.title}
              width={30}
              height={30}
              className=" hover:scale-110 hover:-translate-y-[3px] transition-all ease-linear duration-200"
            />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

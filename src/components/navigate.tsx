import Link from "next/link"
import { motion} from "framer-motion"

import { navigate } from "./config/navigate"


const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  
export default function Navigate() {
  return (
    <ul className=" flex flex-col mt-8 gap-y-7 sm:flex-row sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-3 justify-items-center grid-rows-2 md:flex md:gap-8 mb-6">
    {navigate.map((item, index) => (
      <motion.li
        key={item.id}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
        className=" hover:text-custom-orange transition-all ease-linear duration-200"
      >
        <Link href={item.link}>{item.title}</Link>
      </motion.li>
    ))}
  </ul>
  )
}

"use client";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsForStatic } from "@/lib/utils";

export default function AppliedFilter() {
  return (
    <>
      <motion.div
        className="mb-10"
        variants={fadeInAnimationVariantsForStatic}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <p className="mb-3">
          Showing <span className=" font-bold leading-6 text-xl"> 9</span>{" "}
          results from total
          <span className=" font-bold leading-6 text-xl"> 50</span> for{" "}
          <span className=" font-semibold"> “shirts”</span>
        </p>
      </motion.div>
      <motion.div
        className="inline-flex flex-wrap gap-3 mb-4 items-center"
        variants={fadeInAnimationVariantsForStatic}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <span className=" w-[210px] flex-2">Applied Filters:</span>
        <div className=" flex flex-wrap gap-y-4">
          <div className=" cursor-pointer inline-flex gap-x-2 shadow-custom-shadow-md text-sm rounded-[20px] px-4 py-2.5 mr-2">
            <span>Women</span> <button aria-label="delete filter">x</button>
          </div>
          <div className=" cursor-pointer inline-flex gap-x-2 shadow-custom-shadow-md text-sm rounded-[20px] px-4 py-2.5 mr-2">
            <span>Men</span> <button aria-label="delete filter">x</button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

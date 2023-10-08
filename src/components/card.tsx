"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInAnimationVariantsDynamic } from "@/lib/utils";

type CardProps = {
  title: string;
  img: any;
  price: string;
  index: number;
};
export default function Card({ title, img, price, index }: CardProps) {
  const size = ["S", "M", "L", "XL"];
  return (
    <motion.div
      className=" rounded-md border-[0.9px] border-[#00000017] shadow-custom-shadow-md"
      variants={fadeInAnimationVariantsDynamic}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div>
        <Image src={img} alt={title} className=" object-cover w-full" />
      </div>
      <div className="py-[10px] px-2 md:p-4 ">
        <h4 className="leading-6 font-bold  text-[11px] mm:text-[16px] md:text-[20px]">
          {title}
        </h4>
        <span className="text-[15px]">${price}.00</span>
        <div className="flex gap-1 mm:gap-3 mb-5 mt-4">
          {size.map((size, index) => (
            <button
              aria-label={"розмір " + `${size}`}
              key={index}
              className=" font-medium rounded-sm border-[0.9px] border-seo-friendly-orange w-7 h-7 mm:w-8 mm:h-8 sm:w-8 sm:h-8 text-seo-friendly-orange hover:text-custom-orange text-[12px] hover:border-custom-blue-hover active::border-custom-blue-hover hover:bg-custom-blue-hover active:bg-custom-blue-hover mm:text-[14.4px] sm:text-[14.4px] md:text-base transition-all ease-linear duration-200"
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button
            aria-label="add to cart"
            aria-describedby="add to cart"
            title="add to cart"
            className=" tracking-normal mm:tracking-widest  md:tracking-widest leading-[1.2rem] px-2 mm:px-3 py-1 bg-seo-friendly-orange hover:bg-custom-blue-hover active:bg-custom-blue-hover text-white rounded-[4px] text-[11px] mm:text-[14.4px] sm:text-[14.4px] md:text-base transition-all ease-linear duration-200"
          >
            Add to Cart
          </button>
          <button
            title="add to categoty liked "
            aria-label="add to category liked "
            aria-describedby="add to category liked "
            className=" flex justify-center items-center bg-seo-friendly-orange hover:bg-[#5C636A] active:bg-[#5C636A] w-8 h-8 mm:w-9 mm:h-9 rounded-full transition-all ease-linear duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 16 15"
              fill="none"
            >
              <g clipPath="url(#clip0_316_16316)">
                <path
                  d="M7.91505 2.5481L7.26975 1.8848C5.75505 0.327803 2.97765 0.865103 1.97505 2.8226C1.50435 3.7433 1.39815 5.0726 2.25765 6.7691C3.08565 8.4026 4.80825 10.3592 7.91505 12.4904C11.0219 10.3592 12.7436 8.4026 13.5725 6.7691C14.432 5.0717 14.3267 3.7433 13.8551 2.8226C12.8525 0.865103 10.0751 0.326903 8.56035 1.8839L7.91505 2.5481ZM7.91505 13.5749C-5.88465 4.4561 3.66615 -2.6611 7.75665 1.1036C7.81065 1.1531 7.86375 1.2044 7.91505 1.2575C7.96583 1.20445 8.01867 1.15341 8.07345 1.1045C12.1631 -2.6629 21.7148 4.4552 7.91505 13.5749Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_316_16316">
                  <rect
                    width="14.4"
                    height="14.4"
                    fill="white"
                    transform="translate(0.715027 0.0749207)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

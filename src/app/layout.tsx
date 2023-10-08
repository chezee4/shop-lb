import "./globals.css";

import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import Header from "@/components/header";
import Footer from "@/components/footer";

import elipseFigure from "../../public/figur/ellipse figure.svg";
import stars from "../../public/figur/stars.svg";

import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laba 3",
  description: "Shop by cheze4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", syne.className)}>
        <Header />
        <main className=" relative max-w-[1380px] m-auto mt-[4rem] px-3">
          <div className=" absolute top-0 left-[12px] flex gap-1 font-medium">
            <Link href="#" className=" text-seo-friendly-orange ">
              Home
            </Link>
            /<Link href="#">Products</Link>
          </div>
          {children}
          <Image
            src={elipseFigure}
            alt="elipseFigure"
            className=" absolute -left-[10%] bottom-[20%] hidden sm:block scale-[0.6]  md:scale-100"
          />
          <Image
            src={stars}
            alt="stats"
            className="absolute left-[3%] -bottom-[2%] hidden sm:block  max-w-[70px]"
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}

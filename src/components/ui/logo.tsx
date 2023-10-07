import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  src: string;
  alt: string;
  className?: string;
};
export default function Logo({ src, alt, className }:LogoProps) {
  return <Image src={src} alt={alt} className={cn(className)}/>;
}

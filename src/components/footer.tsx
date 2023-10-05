import Image from "next/image";
import FooterLogo from "../../public/icons/outfit.svg";
import Link from "next/link";
import { messageLinkt } from "./config/message-link";
import { navigate } from "./config/navigate";
export default function Footer() {
  return (
    <footer className=" bg-footer-bg-color w-full mt-20 ">
      <div className="max-w-[1380px] m-auto  pt-8  px-5 sm:px-3 pb-3">
        <Image src={FooterLogo} alt="FooterLogo" className="mb-4" />
        <div className=" sm:flex justify-between mb-8">
          <div className=" sm:max-w-[250px] md:max-w-none">
            <p>
              Discover Your Distinctive Look:
              <br />
              Fashioned with Precision, Worn with Confidence
            </p>
          </div>
          <div>
            <ul className=" flex flex-col mt-8 gap-y-7 sm:flex-row sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-3 justify-items-center grid-rows-2 md:flex md:gap-8 mb-6">
              {navigate.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-6 sm:justify-end">
              {messageLinkt.map((link) => (
                <li key={link.id}>
                  <Link href={link.link}>
                    <Image
                      src={link.icon}
                      alt={link.title}
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className=" w-full border-1 border-hr-bg-color" />
        <div className=" flex mm:justify-between mt-8 flex-col mm:flex-row gap-3 mm:gap-0  ">
          <span>Privacy Policy</span>
          <span>© 2023 Mugna Technologies, Inc.</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}

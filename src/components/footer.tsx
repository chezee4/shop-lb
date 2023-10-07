import Navigate from "./navigate";
import MessageLinks from "./message-links";
import Logo from "./ui/logo";

import FooterLogo from "../../public/icons/outfit.svg";


export default function Footer() {
  return (
    <footer className=" bg-footer-bg-color w-full mt-20 ">
      <div className="max-w-[1380px] m-auto  pt-8  px-5 sm:px-3 pb-3">
        <Logo src={FooterLogo} alt="FooterLogo" className="mb-4" />
        <div className=" sm:flex justify-between mb-8">
          <div className=" sm:max-w-[250px] md:max-w-none">
            <p>
              Discover Your Distinctive Look:
              <br />
              Fashioned with Precision, Worn with Confidence
            </p>
          </div>
          <div>
           <Navigate/>
           <MessageLinks/>
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

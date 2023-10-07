import { cn } from "@/lib/utils";
import { useBurger } from "../context/menu-context";

export default function Burger() {
  const {isOpen, setIsOpen} = useBurger(); 
  return (
    <button
       aria-label="burger menu"
      className="md:hidden flex flex-col h-10 w-12 border border-black rounded justify-center items-center group"
      onClick={() => setIsOpen()}
    >
      <span
        className={cn(
          "inline-block h-[0.15rem] w-6 my-1 rounded-full bg-black transition-all ease-linear duration-200",
          {
            "rotate-45 origin-top-right": isOpen,
          }
        )}
      />
      <span
        className={cn(
          "inline-block h-[0.15rem] w-6 my-1 rounded-full bg-black "
        )}
      />
      <span
        className={cn(
          "inline-block h-[0.15rem] w-6 my-1 rounded-full bg-black "
        )}
      />
      <span className=" fixed top-0 left-0 h-full w-full bg-transparent z-10"></span>
    </button>
  );
}

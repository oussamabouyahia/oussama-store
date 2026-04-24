import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
interface HamXProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function HamX(params: HamXProps) {
  const { isOpen, setIsOpen } = params;
  const toogleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      {!isOpen && (
        <button
          onClick={toogleMenu}
          className="flex items-center gap-2 hover:text-gray-400 transition"
        >
          <Image src={assets.hamIcon} alt="Toggle" className="" />
        </button>
      )}
      {isOpen && <button onClick={toogleMenu}>X</button>}
    </div>
  );
}

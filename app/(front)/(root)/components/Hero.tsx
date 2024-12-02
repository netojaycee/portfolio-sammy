import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-[60%] mx-auto">
      <h2 className="text-center font-[400] text-[30px]">
        hi there, I&apos;m <span className="text-primary">EDEH</span>
      </h2>

      <h2 className=" font-[400] text-[65px]">USER INTERFACE</h2>
      <h2 className="text-right font-[400] text-[65px] mt-[-30px]">
        USER EXPERIENCE
      </h2>
      <h2 className="text-left px-20 text-primary font-[400] text-[65px] mt-[-30px]">
        DESIGNER
      </h2>
      <div className="h-[85px]">
        <Image
          src={"/images/hero.png"}
          alt=""
          width={250}
          height={400}
          className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

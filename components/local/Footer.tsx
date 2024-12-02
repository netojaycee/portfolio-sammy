import { Asterisk } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      {" "}
      <div className="absolute py-2 mt-2 bg-gradient-to-br text-gray-400 from-gray-500 to-gray-900 bg-opacity-65 w-full z-40 md:px-10 px-2 flex items-center">
        <div className="overflow-hidden w-full">
          <div className="flex items-center justify-between animate-scroll">
            <div className="flex items-center gap-5">
              Web Design
              <Asterisk className="" />
            </div>
            <div className="flex items-center gap-5">
              App Design
              <Asterisk className="" />
            </div>

            <div className="flex items-center gap-5">
              Prototyping
              <Asterisk className="" />
            </div>

            <div className="flex items-center gap-5">
              Wireframing
              <Asterisk className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full  bottom-0  min-h-10 z-30 text-white clip-custom relative pt-20 md:px-10 px-2">
        <div className=" w-full ">hello</div>
      </div>
    </>
  );
}

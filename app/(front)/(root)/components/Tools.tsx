import Image from "next/image";
import React from "react";

export default function Tools() {
  return (
    <div className="pt-10 px-2 md:px-10 pb-10 bg bg-gradient-to-b from-white to-[#eaeaea]">
      <h2 className="text-primary text-[30px] ">
        the <span className="text-black">tools</span> behind my design{" "}
      </h2>

      <div className="grid grid-cols-5 items-center  mt-10 gap-5 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="space-y-2 bg-[#e4e4e4] p-4">
            <div className="flex items-center justify-center">
              <Image
                src={""}
                alt=""
                width={100}
                height={90}
                className="bg-gray-400 object-center"
              />
            </div>{" "}
            <div className="">
              <h2 className="font-inter mb-2 text-center">Application Design</h2>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

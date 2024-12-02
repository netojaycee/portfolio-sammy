import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Offer() {
  return (
    <div className="pt-10 px-2 md:px-10 pb-10 bg-[#eaeaea]">
      <h2 className="text-primary text-[30px] text-center underline underline-offset-8">
        what i bring to your business
      </h2>

      <div className="flex items-center  mt-10 gap-20 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-5 bg-[#e4e4e4] p-4 rounded-lg">
            <div className="">
              <Image
                src={""}
                alt=""
                width={50}
                height={50}
                className="bg-gray-400 rounded-full"
              />
            </div>{" "}
            <div className="">
              <h2 className="font-inter font-bold mb-2">Application Design</h2>
              <p className="">
                I design websites that are not just good-looking but super easy
                to use. I mix creativity with smart layouts to make sure your
                site feels just right for your brand{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

<div className="flex items-center justify-center mt-10">
      <Button className="w-1/3">Lets Talk <ArrowRight /></Button></div>
    </div>
  );
}

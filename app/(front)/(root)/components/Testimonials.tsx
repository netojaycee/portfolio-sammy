import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Testimonials() {
  return (
    <div className="pt-10 px-2 md:px-10 pb-10 bg-[#eaeaea]">
      <h2 className="text-primary text-[30px] text-center underline underline-offset-8">
        how my <span className="text-black">clients</span> respond{" "}
      </h2>

      <div className="flex justify-between items-center mt-10 bg-black p-3">
        <p className="text-white">Are You The Next One?</p>

        <Button variant={"outline"}>Hire Me <ArrowRight /></Button>
      </div>
    </div>
  );
}

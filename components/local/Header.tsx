import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full absolute top-5 z-10">
      <div className="px-2 md:px-10 flex items-center justify-between">
        <Image
          src={"/images/ED.png"}
          alt=""
          width={82}
          height={58}
          className="bg-gray-300"
        />
        <div className=" bg-white flex  gap-10 items-center justify-center px-10 h-[58px] rounded-md">
          <Link href="#">Projects</Link>
          <Link href="#">About me</Link>
        </div>

        <Button>
          Hire Me <ArrowRight className="" />
        </Button>
      </div>
    </div>
  );
}

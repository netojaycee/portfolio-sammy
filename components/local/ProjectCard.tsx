import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectCard() {
  return (
    <div className="border p-5 space-y-3">
      <div className="">
        <Image
          src={""}
          alt=""
          width={512}
          height={281}
          className="bg-gray-400"
        />
      </div>

      <p className="">Client: NeuraFort</p>
      <p className="">Project: Chatbot Builder Platform UI/UX Design</p>
      <div className="flex w-full justify-end">
        <Button className="" variant={"outline"}>View Project
            <ArrowRight className="" />
        </Button>
      </div>
    </div>
  );
}

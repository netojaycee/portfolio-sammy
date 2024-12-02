import ProjectCard from "@/components/local/ProjectCard";
import { Asterisk } from "lucide-react";
import React from "react";

export default function Projects() {
  return (
    <>
      <div className="absolute py-2 mt-4 bg-gradient-to-br text-gray-400 from-gray-500 to-gray-900 bg-opacity-65 w-full z-40 md:px-10 px-2 flex items-center">
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
      <div className="bg-[#301A00] w-full z-30 text-white  clip-custom-sm relative pt-20 md:px-10 px-2">
        <h2 className="text-primary text-[30px]">my works</h2>

        <div className="grid grid-cols-2 gap-5 mt-[20px] pb-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

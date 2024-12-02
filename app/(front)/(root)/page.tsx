import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Offer from "./components/Offer";
import Tools from "./components/Tools";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
      <Offer />
      <Tools />
      <Testimonials />
    </div>
  );
}

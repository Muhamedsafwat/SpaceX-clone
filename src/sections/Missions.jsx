import React from "react";
import Image from "next/image";

import MissionTabs from "@/components/MissionTabs";
import Button from "@/components/Button";
import RevealOnScroll from "@/components/RevealOnScroll";

const Missions = () => {
  return (
    <section className="lg:py-20 flex flex-col-reverse lg:flex-row items-stretch lg:h-screen">
      <div className="lg:flex-1 w-screen h-[40vh] lg:h-screen relative">
        <Image
          src="/Our_Mission_01.jpg"
          alt="astronaut"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 pt-44 lg:pt-16 lg:ml-[-1rem] lg:pr-16 z-[2] flex flex-col h-screen px-4 lg:px-0">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-5">
          OUR MISSIONS
        </h2>
        <p className="text-sm leading-loose">
          All Dragon and Starship missions have the ability to conduct
          scientific research to improve life back on Earth as well as raise
          awareness to a global audience.
        </p>
        <RevealOnScroll>
          <MissionTabs />
        </RevealOnScroll>
        <Button text="join a mission" />
      </div>
    </section>
  );
};

export default Missions;

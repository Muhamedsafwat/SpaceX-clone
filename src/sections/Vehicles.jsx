import React from "react";
import Image from "next/image";

import Button from "@/components/Button";
import RevealOnScroll from "@/components/RevealOnScroll";

const Vehicles = () => {
  return (
    <section className="pt-12 lg:pt-24">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">
        THE VEHICLES
      </h2>
      <div className="flex flex-col-reverse lg:flex-row items-center relative mt-20">
        <div className="lg:w-1/3 lg:absolute px-5 lg:ml-16 z-[2]">
          <h3 className="text-4xl font-semibold">DRAGON</h3>
          <p className="my-8">
            The Dragon spacecraft is capable of carrying up to 7 passengers to
            and from Earth orbit and beyond. It is the only spacecraft currently
            flying that is capable of returning significant amounts of cargo to
            Earth, and is the first private spacecraft to take humans to the
            space station.
          </p>
          <Button text="learn more" />
        </div>
        <div className="relative h-96 lg:h-screen w-full lg:translate-x-[15%]">
          <Image
            src="/dragon_render.jpg"
            fill
            alt="dragon"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-end gap-16 relative mt-20">
        <div className="basis-1/3 px-5 z-[2]">
          <h3 className="text-4xl font-semibold">STARSHIP</h3>
          <p className="my-8">
            Starship is the fully reusable spacecraft and second stage of the
            Starship system. The vehicle offers an integrated payload section
            and is capable of carrying passengers and cargo to Earth orbit,
            planetary destinations, and between destinations on Earth.
          </p>
          <Button text="learn more" />
        </div>
        <div className="relative w-screen h-64 lg:h-[70vh] lg:basis-1/2">
          <RevealOnScroll>
            <Image
              src="/starship.webp"
              alt="starship"
              fill
              className="object-contain"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;

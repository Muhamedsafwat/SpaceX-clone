"use client";
import React, { useState } from "react";
import Image from "next/image";

import RevealOnScroll from "@/components/RevealOnScroll";

const Suit = () => {
  const circleClass =
    "rounded-full border-4 w-3 h-3 lg:w-5 lg:h-5 shadow-lg shadow-black duration-200 z-10 absolute ";

  const [activeCircle, setActiveCircle] = useState(0);

  return (
    <RevealOnScroll>
      <section className="mt-20 lg:mt-36">
        <h2 className="text-5xl text-center font-semibold">THE SUIT</h2>
        <div className="aspect-[5/8] lg:aspect-[8/5] w-screen bg-[url('/background-gradient.jpg')] bg-cover bg-center flex flex-col items-center justify-end relative">
          <Image
            className="absolute object-contain mx-auto"
            src="/the-suit-new.png"
            fill
            alt="suit"
          />
          <div className="absolute w-full h-full">
            {buttonPositions.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCircle(index)}
                className={`${circleClass + item.position} ${
                  activeCircle == index
                    ? "bg-blue-500 border-blue-300"
                    : "bg-white border-gray-300"
                }`}
              />
            ))}
            {details.map((item, index) => (
              <div
                key={index}
                className={`hidden lg:block absolute w-96 duration-300 ${
                  item.position
                } ${item.reverse ? "text-left" : "text-right"} ${
                  index == activeCircle ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="font-semibold text-lg uppercase border-b-[1px] border-gray-300">
                  {item.label}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden p-5">
          <h3 className="text-lg font-semibold uppercase">
            {details[activeCircle].label}
          </h3>
          <p className="text-sm">{details[activeCircle].desc}</p>
        </div>
      </section>
    </RevealOnScroll>
  );
};

const buttonPositions = [
  {
    position: " left-[46%] top-[26%] lg:left-[47.5%] lg:top-[18%] ",
  },
  {
    position: " left-[54%] top-[24%] lg:left-[53%] lg:top-[16%]",
  },
  {
    position: " left-[63%] top-[45%] lg:left-[56%] lg:top-[42%]",
  },
  {
    position: " left-[62%] top-[54.5%] lg:left-[56%] lg:top-[54.5%] ",
  },
  {
    position: " left-[38%] top-[52%] lg:left-[45%] lg:top-[49%]",
  },
  {
    position: " left-[44%] top-[62%] lg:left-[47%] lg:top-[65%]",
  },
  ,
];

const details = [
  {
    label: "VISOR",
    desc: "Designed to provide a large field of view and rotates open.",
    reverse: true,
    position: " left-[21.5%] top-[16%] ",
  },
  {
    label: "3-d printed helmet",
    desc: "The 3-D printed helmet with customized padding houses microphones for communication and valves that regulate the suit’s pressure systems.",
    reverse: false,
    position: " left-[55%] top-[14%] ",
  },
  {
    label: "outer layer",
    desc: "The space suit's outer layer is made with flame-resistant materials. Gray parts are different versions of Nomex and the white material is a Teflon fabric.",
    reverse: false,
    position: " left-[58%] top-[40%] ",
  },
  {
    label: "touchscreen compatible gloves",
    desc: "The gloves are designed for easy use when the suit is pressurized and with the ability to operate Dragon’s touchscreens.",
    reverse: false,
    position: " left-[58%] top-[52%] ",
  },
  {
    label: "ZIPPERS",
    desc: "Zippers on the wrist allow astronauts to use their bare hands on the controls when appropriate. Zippers also run inside a seam inside the legs, from one ankle to the other, which is where the crew gets into and out of the suit.",
    reverse: true,
    position: " left-[19%] top-[47%] ",
  },
  {
    label: "quick disconnect",
    desc: "A single connection point between the suit and vehicle provides the life support system for the astronauts: avionics for communications, cooling systems, and pressurization of the suit, all via an easy-to-use plug-in.",
    reverse: true,
    position: " left-[21%] top-[63%] ",
  },
];

export default Suit;

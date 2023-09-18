"use client";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Destinations = () => {
  //define scroll progress
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.5 1"],
  });

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  //iss scroll animation
  const issRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [-10, 0]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [25, 27]));

  const issImgRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [10, 0]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [-25, -27]));

  //dragon scroll animation
  const dragonRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [5, 25]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [35, 38]));

  const dragonImgRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [-5, -25]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [-35, -38]));

  //moon scroll animation
  const moonRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [45, 60]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [50, 55]));

  const moonImgRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [-45, -60]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [-50, -55]));

  //mars scroll animation
  const marsRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [73, 80]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [50, 52]));

  const marsImgRotateProgress = isDesktop
    ? useSpring(useTransform(scrollYProgress, [0, 1], [-73, -80]))
    : useSpring(useTransform(scrollYProgress, [0, 1], [-50, -52]));

  return (
    <section ref={containerRef} className="overflow-hidden mt-10">
      <h2 className="text-center text-5xl font-semibold">DESTINATIONS</h2>
      <div className="relative w-screen h-screen lg:h-[80vh] flex items-center flex-col overflow-hidden">
        <div className="absolute bottom-0 left-1/2 translate-x-[-50%]">
          <Image alt="earth" src="/Earth.svg" width={350} height={350} />
        </div>
        <div className="flex justify-center items-center bottom-[-10%] absolute">
          <motion.div
            style={{
              rotate: issRotateProgress,
            }}
            className="absolute aspect-square w-[30rem] lg:w-[40rem] rounded-full border-[2px] border-dotted border-gray-400 z-[5]"
          >
            <motion.div
              style={{ rotate: issImgRotateProgress }}
              className="absolute top-8 "
            >
              <Image
                className="opacity-60 hover:opacity-100 duration-300"
                width={150}
                height={150}
                alt="iss"
                src="/destination-iss.svg"
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              rotate: dragonRotateProgress,
            }}
            className="absolute aspect-square w-[40rem] lg:w-[48rem] rounded-full border-[2px] border-dotted border-gray-400 z-[4]"
          >
            <motion.div
              style={{ rotate: dragonImgRotateProgress }}
              className="absolute top-16"
            >
              <Image
                alt="dragon"
                className="opacity-60 hover:opacity-100 duration-300"
                src="/destination-dragon.svg"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              rotate: moonRotateProgress,
            }}
            className="absolute w-[60rem] lg:w-[65rem] aspect-square rounded-full border-[2px] border-dotted border-gray-400 z-[3]"
          >
            <motion.div
              style={{
                rotate: moonImgRotateProgress,
              }}
              className="absolute top-36"
            >
              <Image
                alt="moon"
                className="opacity-60 hover:opacity-100 duration-300"
                src="/destination-moon.svg"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              rotate: marsRotateProgress,
            }}
            className="absolute aspect-square w-[78rem] lg:w-[80rem] rounded-full z-[2]"
          >
            <motion.div
              className="absolute"
              style={{
                rotate: marsImgRotateProgress,
              }}
            >
              <Image
                alt="mars"
                className="opacity-60 hover:opacity-100 duration-300"
                src="/destination-mars.svg"
                width={350}
                height={350}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

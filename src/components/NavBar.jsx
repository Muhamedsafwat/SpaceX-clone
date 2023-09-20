"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.header
      style={{
        opacity: isHidden ? 0 : 1,
        translateY: isHidden ? -100 : 0,
      }}
      className="h-24 px-2 lg:px-16 flex items-center fixed top-0 w-screen z-10 duration-300"
    >
      <h1 className="text-2xl font-semibold tracking-widest ml-5 lg:ml-20 flex-1 lg:flex-none text-center">
        SPACEX
      </h1>
      <nav className=" gap-5 items-center mt-2 ml-28 hidden lg:flex">
        {links.map((item, index) => (
          <li
            key={index}
            className="list-none uppercase text-[13.5px] font-bold group"
          >
            <Link href="#">{item}</Link>
            <motion.div className="bg-white h-[.5px] w-0 group-hover:w-full duration-300" />
          </li>
        ))}
      </nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto mr-3 relative w-5 h-5 z-10"
      >
        <div className="relative h-3 [&>*]:w-5 [&>*]:absolute [&>*]:h-[2px] [&>*]:bg-white [&>*]:duration-200 flex flex-col gap-1">
          <div
            className={`${
              isOpen ? "rotate-[45deg] top-[50%] translate-y-[-50%]" : ""
            } top-0`}
          />
          <div
            className={`${
              isOpen ? "opacity-0" : "opacity-1"
            } top-[50%] translate-y-[-50%]`}
          />
          <div
            className={`${
              isOpen ? "rotate-[-45deg] top-[50%] translate-y-[-50%]" : ""
            } bottom-0 `}
          />
        </div>
      </button>
      <div
        onClick={() => setIsOpen(false)}
        className={`absolute top-0 left-0 w-screen h-screen duration-300 bg-black bg-opacity-50 ${
          isOpen ? "opacity-1" : "opacity-0 pointer-events-none"
        }`}
      />
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, translateX: 500 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: "tween" }}
          className="absolute top-0 right-0 w-48 lg:w-80 px-10 pt-20 h-screen bg-black"
        >
          <ul className="w-full">
            {menuLinks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.08 * (index + 1) }}
              >
                <Link href="#">
                  <li className="px-4 py-3 uppercase text-right border-b-[1px] border-b-gray-800 w-full hover:text-gray-500 duration-300">
                    {item}
                  </li>
                </Link>
              </motion.div>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

const links = [
  "falcon 9",
  "falcon heavy",
  "dragon",
  "starship",
  "juman spaceflight",
  "rideshare",
  "starshield",
  "starlink",
];

const menuLinks = ["mission", "launches", "careers", "updates", "shop"];

export default NavBar;

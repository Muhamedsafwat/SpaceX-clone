"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const History = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.3 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.13]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15px",
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div className="rounded-full w-2 h-2 bg-gray-400 duration-200 mt-2"></div>
      );
    },
  };

  return (
    <>
      <section className="pb-28 w-screen overflow-hidden">
        <motion.div
          className="relative w-full h-16 mt-16 lg:mt-0 lg:h-96"
          style={{
            opacity: scrollYProgress,
            scale: scaleProgress,
          }}
          ref={containerRef}
        >
          <Image
            src="/horizon.webp"
            fill
            className="object-cover"
            alt="horizon"
          />
        </motion.div>
        <h2 className="text-3xl lg:text-4xl mx-5 font-semibold text-center my-16">
          THE ROAD TO MAKING HUMANITY <br /> MULTIPLANETARY
        </h2>
        <Slider {...sliderSettings}>
          {gallery.map((item, index) => (
            <div key={index} className="p-1 group cursor-pointer">
              <div className="relative aspect-[5/3]">
                <Image
                  className="object-cover"
                  fill
                  src={item.img}
                  alt={item.date}
                />
                <div className="absolute w-full h-full bg-black bg-opacity-40 duration-700 group-hover:bg-opacity-60 flex flex-col justify-end p-5">
                  <h3 className="text-lg">{item.date}</h3>
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

const gallery = [
  {
    date: "2008",
    desc: "Falcon 1 becomes first privately developed liquid fueled rocket to reach orbit",
    img: "/2008.webp",
  },
  {
    date: "2010",
    desc: "Falcon 9 successfully completes its first flight",
    img: "/2010.jpg",
  },
  {
    date: "2012",
    desc: "Dragon becomes the first privately developed spacecraft to visit the space station",
    img: "/2012.webp",
  },
  {
    date: "2015",
    desc: "Falcon 9's first successful land landing",
    img: "/2015.jpg",
  },
  {
    date: "2016",
    desc: "Falcon 9's first successful droneship landing",
    img: "/2016.jpeg",
  },
  {
    date: "2017",
    desc: "First successful reflight of Falcon 9",
    img: "/2017.jpg",
  },
  {
    date: "2018",
    desc: "First launch of Falcon Heavy",
    img: "/2018.webp",
  },
  {
    date: "2020",
    desc: "SpaceX returns human spaceflight to the United States",
    img: "/2020.webp",
  },
  {
    date: "2021",
    desc: "Starship SN15 completes high-altitude flight test",
    img: "/2021.webp",
  },
  {
    date: "2022",
    desc: "Starship Super Heavy full stack",
    img: "/2022.webp",
  },
  {
    date: "2023",
    desc: "Starship Super Heavy first test flight",
    img: "/2023.jpg",
  },
];

export default History;

"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "350px",
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
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
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
    <section id="gallery" className="pb-20 w-screen overflow-hidden">
      <Slider {...sliderSettings}>
        {gallery.map((item, index) => (
          <div key={index} className="p-2">
            <div className="relative aspect-[4/5] lg:h-[100vh] lg:aspect-auto">
              <Image
                className="object-cover"
                fill
                src={item}
                alt={`project image #${index}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const gallery = [
  "/launch-crop.jpg",
  "/on-orbit.jpg",
  "/Splashdown_Photo_01.jpg",
  "/Training_01.jpg",
];

export default Gallery;

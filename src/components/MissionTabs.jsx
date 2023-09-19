"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MissionTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex-1 min-h-[55vh]">
      <nav>
        <ul className="flex gap-5 mt-10 mb-5">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setTabIndex(index)}
              className={`text-xs lg:text-sm font-semibold uppercase cursor-pointer border-b-[1px] duration-200 ${
                tabIndex == index
                  ? "text-white border-white"
                  : "border-transparent text-gray-600"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div>{taps[tabIndex]}</div>
    </div>
  );
};

const navItems = ["earth orbit", "space station", "moon", "mars"];

const EarthOrbitTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">ORBIT FREQUENCY</h3>
        <p className="font-semibold text-sm">Every 90 minutes</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">MISSION DURATION</h3>
        <p className="font-semibold text-sm">3 - 6 days</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">ALTITUDE</h3>
        <p className="font-semibold text-sm">300 - 500 km</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">SEATING</h3>
        <p className="font-semibold text-sm">2 - 4 passengers</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">CUPOLA</h3>
        <p className="font-semibold text-sm">46” diameter / 360° views</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] items-center border-gray-600 ">
        <h3 className="font-bold text-xs">CARGO / SCIENCE</h3>
        <p className="font-semibold text-end text-sm">
          Up to 192 kg cargo <br /> Power / Data / Comm available
        </p>
      </div>
      <p className="mt-6">Missions available for 2023 and 2024</p>
    </motion.div>
  );
};
const IssOrbitTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">ORBIT FREQUENCY</h3>
        <p className="font-semibold text-sm">Every 90 minutes</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">MISSION DURATION</h3>
        <p className="font-semibold text-sm">10 days</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">ALTITUDE</h3>
        <p className="font-semibold text-sm">400 km</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">SEATING</h3>
        <p className="font-semibold text-sm">4 passengers</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] items-center border-gray-600 ">
        <h3 className="font-bold text-xs">CARGO / SCIENCE</h3>
        <p className="font-semibold text-end text-sm">
          Up to 192 kg cargo
          <br /> Power / Data / Comm available
        </p>
      </div>
      <p className="mt-6">
        To inquire on mission availability, click Join a Mission below
      </p>
    </motion.div>
  );
};
const MoonOrbitTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">MISSION DURATION</h3>
        <p className="font-semibold text-sm">7 days</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">ALTITUDE</h3>
        <p className="font-semibold text-sm">384,400 km from Earth</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">SEATING</h3>
        <p className="font-semibold text-sm">
          Up to 12 passengers, with private quarters
        </p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">CUPOLA</h3>
        <p className="font-semibold text-sm">46” diameter / 360° views</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] items-center border-gray-600 ">
        <h3 className="font-bold text-xs">VOLUME</h3>
        <p className="font-semibold text-end text-sm">
          1,000 m3 <br /> Nosecone area available for entertainment,
          manufacturing, and scientific opportunities
        </p>
      </div>
      <p className="mt-6">
        Single seat and missions available to the Moon&apos;s orbit
      </p>
    </motion.div>
  );
};
const MarsOrbitTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">DAY LENGTH</h3>
        <p className="font-semibold text-sm">24 hrs 37 min</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">FORCE OF GRAVITY</h3>
        <p className="font-semibold text-sm">38% of Earth</p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-gray-600 ">
        <h3 className="font-bold text-xs">AVG DISTANCE FROM EARTH</h3>
        <p className="font-semibold text-sm">225 Mkm / 140 Mmi</p>
      </div>
      <p className="mt-6">
        To inquire on mission availability, click Join a Mission below
      </p>
    </motion.div>
  );
};

const taps = [
  <EarthOrbitTab key={1} />,
  <IssOrbitTab key={2} />,
  <MoonOrbitTab key={3} />,
  <MarsOrbitTab key={4} />,
];

export default MissionTabs;

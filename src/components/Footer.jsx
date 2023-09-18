import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center p-10 text-xs font-bold justify-center gap-5 lg:gap-10">
      <div>
        <p className="font-normal text-gray-400">SPACEX 2023</p>
      </div>
      <div className="flex gap-10">
        <p className="cursor-pointer hover:text-gray-400 duration-300">
          PRIVACY POLICY
        </p>

        <p className="cursor-pointer hover:text-gray-400 duration-300">
          SUPPLIERS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

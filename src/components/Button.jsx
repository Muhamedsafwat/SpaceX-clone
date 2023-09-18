import React from "react";

const Button = ({ text }) => {
  return (
    <button className="my-5 w-full lg:w-auto mr-auto uppercase font-medium px-8 py-3 border-2 border-white hover:bg-white hover:text-black duration-300">
      {text}
    </button>
  );
};

export default Button;

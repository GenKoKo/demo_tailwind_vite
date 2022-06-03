import React from "react";

const Footer = () => {
  return (
    <div className=" py-5 bg-stone-800 text-center text-gray-300 rounded-t-lg">
      <a href='"#hero' className="block text-xl md:text-2xl font-semibold">Ko</a>
      <a href=" mailto:" className=" text-sm md:text-md hover:text-indigo-500 ">aaabbb@gmail.com</a>
      <p className=" text-xs fonrt-regular mt-2 text-gray-500">Ko | {new Date().getFullYear()}. All rights reserved </p>
    </div>
  );
};

export default Footer;

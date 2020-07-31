import React from "react";
import logo from "../images/logo.svg";

export default () => {
  return (
    <div className="grid items-center grid-cols-1 space-y-6 font-light text-center text-white bg-black md:grid-cols-3 py-14 padding-h md:text-left">
      <div className="flex justify-center xl:justify-start">
        <img src={logo} alt="" />
      </div>

      <div className="px-10 space-y-3 uppercase md:col-span-2 xl:col-span-1 md:px-0">
        <p>Marthwaite, Sedbergh Cumbria </p>
        <p>+00 44 123 4567</p>
      </div>

      <div className="space-y-3 md:col-span-2 md:col-start-2 xl:col-span-1 xl:col-start-3">
        <h1 className="uppercase">Open Times</h1>
        <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
        <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
      </div>
    </div>
  );
};

import React from "react";
import logo from "../../images/logo.svg";

//components
import Button from "../Button";

export default () => {
  return (
    <div className="h-full text-center text-white xl:text-left pt-52 md:pt-96 lg:pt-450 xl:pt-10">
      <div className="flex flex-col items-center xl:items-start space-y-14 xl:w-3/5 xl:space-y-12 padding-h">
        <div className="xl:mb-20">
          <img src={logo} alt="" />
        </div>

        <p className="text-4xl font-light md:text-6xl lg:text-7xl xl:text-6xl md:leading-tight">
          Exquisite dining since 1989
        </p>
        <p className="text-base md:text-2xl xl:text-xl">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse
        </p>
        <Button />
      </div>
    </div>
  );
};

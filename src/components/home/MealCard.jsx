import React from "react";
import Img from "gatsby-image";

//components
import Divider from "../Divider";

export default ({ fluid, heading, text }) => {
  return (
    <div className="flex flex-col py-6 md:flex-row md:justify-">
      <div className="relative md:w-3/5">
        <Divider className="absolute hidden -right-4 top-8 md:flex" />
        <Img fluid={fluid} />
      </div>
      <div className="px-2 py-5 space-y-3 text-center md:pl-5 md:text-left">
        <h3 className="text-lg font-semibold tracking-wide">{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

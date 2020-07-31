import React from "react";
import Img from "gatsby-image";

export default ({ mobile, tablet, desktop, className }) => {
  return (
    <div className="w-full xl:w-5/6">
      <Img fluid={mobile} className={`md:hidden shadow-2xl  ${className}`} />

      <Img
        fluid={tablet}
        className={`hidden shadow-2xl md:block xl:hidden ${className}`}
      />

      <Img
        fluid={desktop}
        className={`hidden shadow-2xl xl:block ${className}`}
      />
    </div>
  );
};

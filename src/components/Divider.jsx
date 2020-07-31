import React from "react";
import divider from "../images/patterns/pattern-divide.svg";

export default ({ className }) => {
  return (
    <div className={`flex justify-center xl:justify-start ${className}`}>
      <img src={divider} alt="" />
    </div>
  );
};

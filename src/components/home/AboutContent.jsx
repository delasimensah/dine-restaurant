import React from "react";

//components
import Heading from "../Heading";
import Divider from "../Divider";

export default ({ title, children }) => {
  return (
    <div className="w-4/5 py-10 space-y-5">
      <Divider />
      <Heading className="text-ebonyClay">{title}</Heading>
      <p className="text-center xl:text-left md:text-2xl xl:text-base">
        {children}
      </p>
    </div>
  );
};

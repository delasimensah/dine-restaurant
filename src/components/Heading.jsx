import React from "react";

export default ({ children, className }) => {
  return (
    <h1
      className={`text-3xl font-bold leading-snug text-center md:text-5xl lg:text-6xl lg:leading-snug xl:text-40px xl:text-left md:leading-snug xl:leading-snug ${className}`}
    >
      {children}
    </h1>
  );
};

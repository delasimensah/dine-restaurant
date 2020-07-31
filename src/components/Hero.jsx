import React from "react";
import BackgroundImage from "gatsby-background-image";

export default ({ fluid, className, children }) => {
  return (
    <BackgroundImage
      Tag="div"
      className={className}
      style={{ backgroundPosition: "top, center" }}
      fluid={fluid}
    >
      {children}
    </BackgroundImage>
  );
};

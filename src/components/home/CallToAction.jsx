import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

//components
import Heading from "../Heading";
import Button from "../Button";

const getImage = graphql`
  query {
    base: file(relativePath: { eq: "homepage/ready-bg-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md: file(relativePath: { eq: "homepage/ready-bg-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg: file(relativePath: { eq: "homepage/ready-bg-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default () => {
  const { base, md, lg } = useStaticQuery(getImage);

  return (
    <>
      <ImageBg className=" md:hidden" fluid={base.childImageSharp.fluid}>
        <Content />
      </ImageBg>

      <ImageBg
        className="hidden md:block lg:hidden"
        fluid={md.childImageSharp.fluid}
      >
        <Content />
      </ImageBg>

      <ImageBg className="hidden lg:block" fluid={lg.childImageSharp.fluid}>
        <Content />
      </ImageBg>
    </>
  );
};

const ImageBg = ({ children, className, fluid }) => {
  return (
    <BackgroundImage
      Tag="div"
      className={`h-80 padding-h ${className} `}
      style={{ backgroundPosition: "top, center" }}
      fluid={fluid}
    >
      {children}
    </BackgroundImage>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-10 text-white xl:space-y-0 xl:flex-row xl:justify-between xl:items-center">
      <Heading>Ready to make a reservation?</Heading>
      <Button />
    </div>
  );
};

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

//images
import topRight from "../../images/patterns/pattern-curve-top-right.svg";
import topLeft from "../../images/patterns/pattern-curve-top-left.svg";
import lines from "../../images/patterns/pattern-lines.svg";

//components
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const getAboutImages = graphql`
  query {
    base: file(relativePath: { eq: "homepage/enjoyable-place-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    base2: file(
      relativePath: { eq: "homepage/locally-sourced-mobile@2x.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md: file(relativePath: { eq: "homepage/enjoyable-place-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md2: file(relativePath: { eq: "homepage/locally-sourced-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg: file(relativePath: { eq: "homepage/enjoyable-place-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg2: file(relativePath: { eq: "homepage/locally-sourced-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default () => {
  const { base, base2, md, md2, lg, lg2 } = useStaticQuery(getAboutImages);

  return (
    <div className="relative padding-h">
      <div
        className="absolute hidden xl:left-0 md:block md:-left-520 xl:top-52 md:top-56"
        style={{ zIndex: -1 }}
      >
        <img src={topRight} alt="" />
      </div>

      <div
        className="absolute bottom-0 hidden xl:right-0 md:-right-520 md:block"
        style={{ zIndex: -1 }}
      >
        <img src={topLeft} alt="" />
      </div>

      <div
        className="absolute hidden md:block md:bottom-450 md:right-5 xl:bottom-72 right-16"
        style={{ zIndex: 1000 }}
      >
        <img src={lines} alt="" />
      </div>

      <div className="mb-10 lg:mb-24 xl:flex">
        <div className="xl:w-1/2">
          <AboutImage
            mobile={base.childImageSharp.fluid}
            tablet={md.childImageSharp.fluid}
            desktop={lg.childImageSharp.fluid}
            className="-mt-8"
          />
        </div>

        <div className="flex items-center justify-center xl:justify-end xl:w-1/2">
          <AboutContent title="Enjoyable place for all the family">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </AboutContent>
        </div>
      </div>

      <div className="xl:flex xl:flex-row-reverse">
        <div className="xl:flex xl:justify-end xl:w-1/2">
          <AboutImage
            mobile={base2.childImageSharp.fluid}
            tablet={md2.childImageSharp.fluid}
            desktop={lg2.childImageSharp.fluid}
            className="xl:-mb-8"
          />
        </div>

        <div className="flex items-center justify-center xl:justify-start xl:w-1/2">
          <AboutContent title="The most locally sourced food">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </AboutContent>
        </div>
      </div>
    </div>
  );
};

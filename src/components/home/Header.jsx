import React from "react";
import { useStaticQuery, graphql } from "gatsby";

//components
import Hero from "../Hero";
import Content from "./HeroContent";

const getHeroImages = graphql`
  query {
    base: file(relativePath: { eq: "homepage/hero-bg-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md: file(relativePath: { eq: "homepage/hero-bg-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg: file(relativePath: { eq: "homepage/hero-bg-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default () => {
  const { base, md, lg } = useStaticQuery(getHeroImages);

  return (
    <>
      <Hero className="h-750 md:hidden" fluid={base.childImageSharp.fluid}>
        <Content />
      </Hero>

      <Hero
        className="hidden h-1040 lg:h-1280 md:block xl:hidden"
        fluid={md.childImageSharp.fluid}
      >
        <Content />
      </Hero>

      <Hero
        className="hidden h-screen xl:block"
        fluid={lg.childImageSharp.fluid}
      >
        <Content />
      </Hero>
    </>
  );
};

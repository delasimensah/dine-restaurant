import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

//images
import logo from "../../images/logo.svg";

//components
import Hero from "../Hero";

const getBg = graphql`
  query {
    base: file(relativePath: { eq: "booking/hero-bg-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md: file(relativePath: { eq: "booking/hero-bg-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg: file(relativePath: { eq: "booking/hero-bg-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default () => {
  const { base, md, lg } = useStaticQuery(getBg);
  return (
    <>
      <Hero fluid={base.childImageSharp.fluid} className="h-750 md:hidden">
        <Content />
      </Hero>

      <Hero
        fluid={md.childImageSharp.fluid}
        className="hidden h-750 md:block xl:hidden"
      >
        <Content />
      </Hero>

      <Hero fluid={lg.childImageSharp.fluid} className="hidden h-750 xl:block">
        <Content />
      </Hero>
    </>
  );
};

const Content = () => {
  return (
    <div className="grid h-full text-white xl:grid-cols-2 padding-h xl:gap-4">
      <div className="pt-12 space-y-10 md:space-y-28 xl:space-y-48 md:pt-20 xl:pt-36">
        <div className="flex justify-center md:justify-start">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="space-y-10 text-center xl:text-left">
          <p className="text-4xl font-light tracking-wide xl:text-5xl xl:tracking-normal">
            Reservations
          </p>

          <p className="xl:leading-7 md:px-24 xl:px-0 xl:pr-40">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>

          <div className="inline-block px-10 py-5 text-white uppercase border border-white md:hidden">
            <p>reserve place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

//images
import topRight from "../../images/patterns/pattern-curve-top-right.svg";
import lines from "../../images/patterns/pattern-lines.svg";

//components
import Heading from "../Heading";
import Button from "../Button";

const getImage = graphql`
  query {
    base: file(
      relativePath: { eq: "homepage/family-gathering-mobile@2x.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    base1: file(relativePath: { eq: "homepage/special-events-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    base2: file(relativePath: { eq: "homepage/social-events-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md: file(relativePath: { eq: "homepage/family-gathering-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md1: file(relativePath: { eq: "homepage/special-events-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    md2: file(relativePath: { eq: "homepage/social-events-tablet@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg: file(relativePath: { eq: "homepage/family-gathering-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg1: file(relativePath: { eq: "homepage/special-events-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    lg2: file(relativePath: { eq: "homepage/social-events-desktop@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default () => {
  const { base, base1, base2, md, md1, md2, lg, lg1, lg2 } = useStaticQuery(
    getImage
  );

  const [service, setService] = React.useState("family");

  let image;
  let imageMd;
  let imageLg;
  let title;
  let content;

  switch (service) {
    case "family":
      image = base.childImageSharp.fluid;
      imageMd = md.childImageSharp.fluid;
      imageLg = lg.childImageSharp.fluid;
      title = "Family Gathering";
      content = ` We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.`;
      break;

    case "special":
      image = base1.childImageSharp.fluid;
      imageMd = md1.childImageSharp.fluid;
      imageLg = lg1.childImageSharp.fluid;
      title = "Special Events";
      content = ` Whether it’s a romantic dinner or special date you’re celebrating
            with others we’ll look after you. We’ll be sure to mark your special
            date with an unforgettable meal.`;
      break;

    case "social":
      image = base2.childImageSharp.fluid;
      imageMd = md2.childImageSharp.fluid;
      imageLg = lg2.childImageSharp.fluid;
      title = "Social Events";
      content = ` Are you looking to have a larger social event? No problem! We’re
            more than happy to cater for big parties. We’ll work with you to
            make your event a hit with everyone.`;
      break;

    default:
      image = null;
  }

  const changeService = (serv) => {
    setService(serv);
  };

  return (
    <div className="relative grid-cols-2 gap-10 py-20 space-y-8 padding-h xl:grid">
      <div
        className="absolute top-0 hidden -left-96 lg:block"
        style={{ zIndex: -1 }}
      >
        <img src={topRight} alt="" />
      </div>

      <div
        className="absolute hidden left-20 top-10 lg:block"
        style={{ zIndex: 1 }}
      >
        <img src={lines} alt="" />
      </div>

      <div className="shadow-2xl">
        <Img fluid={image} className="md:hidden" />
        <Img fluid={imageMd} className="hidden md:block xl:hidden" />
        <Img fluid={imageLg} className="hidden xl:block" />
      </div>

      <div className="grid space-y-6 grid-col-1">
        <div className="flex flex-col items-center space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0 xl:flex-col xl:items-start xl:justify-center xl:space-y-3">
          <TabLink
            title="Family Gathering"
            onClick={() => changeService("family")}
            service={service}
          />

          <TabLink
            title="Special Events"
            onClick={() => changeService("special")}
            service={service}
          />

          <TabLink
            title="Social event"
            onClick={() => changeService("social")}
            service={service}
          />
        </div>

        <div className="space-y-8 text-center xl:row-start-1 xl:text-left">
          <Heading className="text-ebonyClay">{title}</Heading>
          <p className="md:px-14 xl:px-0">{content}</p>
          <Button reverse />
        </div>
      </div>
    </div>
  );
};

const TabLink = ({ title, onClick, service }) => {
  const active = title.toLowerCase().includes(service);

  return (
    <div className="relative flex flex-col xl:flex-row-reverse xl:items-center">
      <button
        className={`uppercase focus:outline-none ${
          active ? "text-ebonyClay" : "text-shuttleGray"
        }`}
        onClick={onClick}
      >
        {title}
      </button>
      {active && (
        <div className="">
          <div className="w-10 h-px mx-auto xl:absolute xl:-left-12 bg-beaver" />
        </div>
      )}
    </div>
  );
};

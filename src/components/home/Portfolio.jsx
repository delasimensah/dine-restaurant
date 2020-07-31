import React from "react";
import { useStaticQuery, graphql } from "gatsby";

//components
import Heading from "../Heading";
import Divider from "../Divider";
import MealCard from "./MealCard";

const getImages = graphql`
  query {
    base: file(relativePath: { eq: "homepage/salmon-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    base2: file(relativePath: { eq: "homepage/beef-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    base3: file(relativePath: { eq: "homepage/chocolate-mobile@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default () => {
  const { base, base2, base3 } = useStaticQuery(getImages);
  return (
    <div className="grid py-20 text-white xl:grid-cols-2 bg-codGray padding-h">
      <div className="pb-6 space-y-5 xl:pt-20 xl:px-0 xl:pr-20 md:px-20">
        <Divider />
        <Heading className="text-white">A few highlights from our menu</Heading>
        <p className="text-center xl:text-left">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>

      <div className="pt-20 divide-y divide-shuttleGray">
        <MealCard
          fluid={base.childImageSharp.fluid}
          heading="Seared Salmon Fillet"
          text="Our locally sourced salmon served with a refreshing buckwheat summer salad."
        />

        <MealCard
          fluid={base2.childImageSharp.fluid}
          heading="Rosemary Filet Mignon"
          text="Our prime beef served to your taste with a delicious choice of seasonal sides."
        />

        <MealCard
          fluid={base3.childImageSharp.fluid}
          heading="Summer Fruit Chocolate Mousse"
          text="Creamy mousse combined with summer fruits and dark chocolate shavings."
        />
      </div>
    </div>
  );
};

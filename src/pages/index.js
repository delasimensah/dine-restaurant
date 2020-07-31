import * as React from "react";

//components
import Layout from "../components/Layout";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Portfolio from "../components/home/Portfolio";
import Services from "../components/home/Services";
import CallToAction from "../components/home/CallToAction";

export default () => {
  return (
    <Layout>
      <Header />
      <About />
      <Portfolio />
      <Services />
      <CallToAction />
    </Layout>
  );
};

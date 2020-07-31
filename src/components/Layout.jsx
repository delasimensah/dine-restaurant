import React from "react";

//components
import Footer from "./Footer";

export default ({ children }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};

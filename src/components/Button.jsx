import React from "react";
import { Link } from "gatsby";

export default ({ reverse }) => {
  return (
    <div
      className={`inline-block px-5 py-3 cursor-pointer ${
        reverse ? "bg-codGray text-white" : "border border-white text-white"
      }`}
    >
      <Link to="/booking" className={`uppercase tracking-wide text-base `}>
        Book A table
      </Link>
    </div>
  );
};

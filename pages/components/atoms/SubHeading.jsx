import React from "react";

const SubHeading = ({ children, size = "2xl" }) => {
  return (
    <h4 className={`text-${size} font-bold max-md:text-center`}>{children}</h4>
  );
};

export default SubHeading;

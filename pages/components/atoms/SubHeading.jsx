import React from "react";

const SubHeading = ({ children, size = "2xl" }) => {
  console.log(size);
  return (
    <h4 className={`text-${size} font-extrabold max-md:text-center`}>
      {children}
    </h4>
  );
};

export default SubHeading;

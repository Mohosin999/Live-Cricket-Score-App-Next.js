import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto px-0 my-10 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;

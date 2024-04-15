import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  s: "text-lg font-normal",
  xl: "text-[55px] font-normal md:text-[47px] sm:text-[41px]",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

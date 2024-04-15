import React from "react";

const sizes = {
  "2xl": "text-[64px] font-semibold md:text-5xl",
  xl: "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  s: "text-xl font-bold",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-base font-semibold",
  lg: "text-[26px] font-semibold md:text-2xl sm:text-[22px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

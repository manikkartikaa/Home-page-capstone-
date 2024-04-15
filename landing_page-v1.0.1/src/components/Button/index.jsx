import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
};
const variants = {
  fill: {
    amber_A200: "bg-amber-A200 shadow-md text-black-900",
    gray_500: "bg-gray-500 text-black-900",
  },
  outline: {
    blue_gray_700: "border-blue_gray-700 border-2 border-solid shadow-xs text-blue_gray-700",
  },
};
const sizes = {
  sm: "h-[58px] px-[23px] text-[32px]",
  xs: "h-[49px] px-[35px] text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "amber_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["amber_A200", "gray_500", "blue_gray_700"]),
};

export { Button };

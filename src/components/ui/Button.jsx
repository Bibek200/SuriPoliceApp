import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, variant = "default", className = "", ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        "px-4 py-2 rounded font-medium transition-all",
        {
          "bg-[rgb(223,130,46)] text-white hover:bg-[rgba(194,120,56,0.94)] cursor-pointer": variant === "default",
          "bg-gray-200 text-black hover:bg-gray-300": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "secondary"]),
  className: PropTypes.string,
};

export default Button;

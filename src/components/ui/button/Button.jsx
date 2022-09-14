import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./button.css"

export const Button = React.forwardRef(
  (
    {
      children,
      color = "secondary1",
      size = "md",
      br = "md",
      as = "button",
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      "button",
      { "button--primary-1": color === "primary1" },
      { "button--primary-2": color === "primary2" },
      { "button--secondary-1": color === "secondary1" },
      { "button--secondary-2": color === "secondary2" },
      { "button--warning-1": color === "warning1" },
      { "button--warning-2": color === "warning2" },
      { "button--error-1": color === "error1" },
      { "button--error-2": color === "error2" },
      { "button--sm": size === "sm" },
      { "button--md": size === "md" },
      { "button--l": size === "l" },
      { "button--br-0": br === "0" },
      { "button--br-sm": br === "sm" },
      { "button--br-md": br === "md" },
      { "button--br-l": br === "l" },
      { "button--br-full": br === "full" },
      { "button--br-circle": br === "circle" }
    )
    const button = React.createElement(
      as,
      {
        ...props,
        className: `${classes} ${props.className}`,
        ref: ref,
      },
      children
    )

    return button
  }
)

Button.displayName = "Button"

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "error", "warning"]),
  size: PropTypes.oneOf(["sm", "md", "l"]),
  br: PropTypes.oneOf(["0", "sm", "md", "l", "full", "circle"]),
}

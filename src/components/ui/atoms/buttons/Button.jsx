import React from "react"
import classNames from "classnames"

import "./button.css"

export const Button = React.forwardRef(
  (
    {
      children,
      color = "primary",
      size = "md",
      br = "md",
      as = "button",
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      "button",
      { "button--primary": color === "primary" },
      { "button--secondary": color === "secondary" },
      { "button--warning": color === "warning" },
      { "button--error": color === "error" },
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
        className: `${classes} ${props.classNames}`,
        ref: ref,
      },
      children
    )

    return button
  }
)

import React from "react"
import classNames from "classnames"

import "./button.css"

export const Text = React.forwardRef(
  ({ children, color = "primary", variant = "md", ...props }, ref) => {
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
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

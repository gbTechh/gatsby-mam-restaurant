import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./button.css"

export const Button = React.forwardRef(
  (
    {
      children,
      color = "secondary1",
      textColor = "dark",
      size = "md",
      br = "md",
      ff = "base",
      fs = "base",
      as = "button",
      className = "",
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
      { "button-text-color--text-light": textColor === "light" },
      { "button-text-color--text-dark": textColor === "dark" },
      { "button--text-color-primary-1": textColor === "primary1" },
      { "button--text-color-primary-2": textColor === "primary2" },
      { "button--text-color-secondary-1": textColor === "secondary1" },
      { "button--text-color-secondary-2": textColor === "secondary2" },
      { "button--text-color-warning-1": textColor === "warning1" },
      { "button--text-color-warning-2": textColor === "warning2" },
      { "button--text-color-error-1": textColor === "error1" },
      { "button--text-color-error-2": textColor === "error2" },
      { "button--sm": size === "sm" },
      { "button--md": size === "md" },
      { "button--l": size === "l" },
      { "button--full": size === "full" },
      { "button--auto": size === "auto" },
      { "button--br-0": br === "0" },
      { "button--br-sm": br === "sm" },
      { "button--br-md": br === "md" },
      { "button--br-l": br === "l" },
      { "button--br-full": br === "full" },
      { "button--br-circle": br === "circle" },
      { "text--font-head": ff === "head" },
      { "text--font-base": ff === "base" },
      { "text--big": fs === "big" },
      { "text--h1": fs === "h1" },
      { "text--h2": fs === "h2" },
      { "text--h3": fs === "h3" },
      { "text--h4": fs === "h4" },
      { "text--base": fs === "base" },
      { "text--small": fs === "small" }
    )
    const button = React.createElement(
      as,
      {
        ...props,
        className: `${classes} ${className}`,
        ref: ref,
      },
      children
    )

    return button
  }
)

Button.displayName = "Button"

Button.propTypes = {
  color: PropTypes.oneOf([
    "primary1",
    "primary2",
    "secondary1",
    "secondary2",
    "error1",
    "error2",
    "warning1",
    "warning2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "l", "full", "auto"]),
  br: PropTypes.oneOf(["0", "sm", "md", "l", "full", "circle"]),
}

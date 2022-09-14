import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./text.css"

export const Text = React.forwardRef(
  (
    {
      children,
      color,
      size = "base",
      as = "p",
      align = "center",
      fw = "base",
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      "text",
      { "text--primary-1": color === "primary1" },
      { "text--primary-2": color === "primary2" },
      { "text--secondary-1": color === "secondary1" },
      { "text--secondary-2": color === "secondary2" },
      { "text--warning-1": color === "warning1" },
      { "text--warning-2": color === "warning2" },
      { "text--error-1": color === "error1" },
      { "text--error-2": color === "error2" },
      { "text--h1": size === "h1" },
      { "text--h2": size === "h2" },
      { "text--h3": size === "h3" },
      { "text--h4": size === "h4" },
      { "text--base": size === "base" },
      { "text--small": size === "small" },
      { "text--left": align === "left" },
      { "text--center": align === "center" },
      { "text--right": align === "right" },
      { "text--w-head": fw === "head" },
      { "text--w-strong": fw === "strong" },
      { "text--w-title": fw === "title" },
      { "text--w-bquote": fw === "bquote" },
      { "text--w-base": fw === "base" },
      { "text--w-regular": fw === "regular" },
      { "text--w-tiny": fw === "tiny" }
    )
    const text = React.createElement(
      as,
      {
        ...props,
        className: `${classes} ${props.className}`,
        ref: ref,
      },
      children
    )

    return text
  }
)

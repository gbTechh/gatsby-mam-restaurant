import React from "react"
import PropTypes from "prop-types"

import { classes } from "./classnames"
import "./spacer.css"

export const Spacer = React.forwardRef(
  ({ children, x, y, className = "", as = "div", ...props }, ref) => {
    const spacer = React.createElement(
      as,
      {
        ...props,
        className: `${classes({ x, y })} ${className}`,
        ref: ref,
      },
      children
    )

    return spacer
  }
)

Spacer.displayName = "Spacer"

Spacer.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
}

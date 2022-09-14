import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./container.css"

export const Container = React.forwardRef(
  ({ children, fluid, as = "div", pd, className = "", ...props }, ref) => {
    const classes = classNames(
      "container",
      { "container--fluid": fluid },
      { "container--pd-0": pd === "0" },
      { "container--pd-1": pd === "1" },
      { "container--pd-2": pd === "2" },
      { "container--pd-3": pd === "3" },
      { "container--pd-4": pd === "4" },
      { "container--pd-5": pd === "5" }
    )
    const container = React.createElement(
      as,
      {
        ...props,
        className: `${classes} ${className}`,
        ref: ref,
      },
      children
    )

    return container
  }
)

Container.displayName = "Container"

Container.propTypes = {
  pd: PropTypes.oneOf(["0", "1", "2", "3", "4", "5"]),
  fluid: PropTypes.bool,
}

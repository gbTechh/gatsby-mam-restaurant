import React from "react"
import PropTypes from "prop-types"

import { classes } from "./classnames"
import "./col.css"

export const Col = React.forwardRef(
  (
    {
      children,
      span,
      align = "flex-start",
      justify = "flex-start",
      wrap = "nowrap",
      gap,
      className = "",
      as = "div",
      ...props
    },
    ref
  ) => {
    const col = React.createElement(
      as,
      {
        ...props,
        className: `${classes({ gap, span })} ${className}`,
        ref: ref,
      },
      children
    )

    return col
  }
)

Col.displayName = "Col"

Col.propTypes = {
  align: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  justify: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "stretch",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  wrap: PropTypes.oneOf(["wrap", "no-wrap"]),
  gap: PropTypes.string,
}

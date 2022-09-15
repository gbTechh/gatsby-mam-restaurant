import React from "react"
import PropTypes from "prop-types"

import { classes } from "./classnames"
import "./col.css"

export const Col = React.forwardRef(
  (
    {
      children,
      align = "flex-start",
      justify = "flex-start",
      wrap = "nowrap",
      col: span,
      gap,
      offset,
      className = "",
      as = "div",
      ...props
    },
    ref
  ) => {
    const column = React.createElement(
      as,
      {
        ...props,
        className: `${classes({ gap, span, offset })} ${className}`,
        ref: ref,
      },
      children
    )

    return column
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

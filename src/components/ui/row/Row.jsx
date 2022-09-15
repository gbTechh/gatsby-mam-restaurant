import React from "react"
import PropTypes from "prop-types"

import "./row.css"
import { Col } from "../col/Col"
import { Spacer } from "../spacer/Spacer"
import { classes } from "./classnames"

export const Row = React.forwardRef(
  (
    {
      children,
      align = "flex-start",
      justify = "flex-start",
      wrap = "nowrap",
      gap = "2",
      as = "div",
      className = "",
      ...props
    },
    ref
  ) => {
    const StackChildrenTypes = [Col, Spacer]

    const row = React.createElement(
      as,
      {
        ...props,
        className: `${classes({ align, justify, wrap, gap })} ${className}`,
        ref: ref,
      },
      React.Children.map(children, (child, index) => {
        if (!StackChildrenTypes.includes(child.type)) {
          console.warn(
            "Each child in a Row component should be a Col component"
          )
        }
        return React.cloneElement(child, {
          ...child.props,
          gap: gap,
        })
      })
    )

    return row
  }
)

Row.displayName = "Row"

Row.propTypes = {
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

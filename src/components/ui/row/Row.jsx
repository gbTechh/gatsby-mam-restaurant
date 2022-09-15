import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./row.css"
import { Col } from "../col/Col"

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
    const classes = classNames(
      "row",
      { "row--align-center": align === "center" },
      { "row--align-flex-start": align === "flex-start" },
      { "row--align-flex-end": align === "flex-end" },
      { "row--align-stretch": align === "stretch" },
      { "row--align-baseline": align === "baseline" },
      { "row--align-center": align === "center" },
      { "row--justify-center": justify === "center" },
      { "row--justify-flex-start": justify === "flex-start" },
      { "row--justify-flex-end": justify === "flex-end" },
      { "row--justify-stretch": justify === "stretch" },
      { "row--justify-space-around": justify === "space-around" },
      { "row--justify-space-between": justify === "space-between" },
      { "row--justify-space-evenly": justify === "space-evenly" },
      { "row--wrap": wrap === "wrap" },
      { "row--no-wrap": wrap === "nowrap" },
      { "row--gap-0": gap === "0" },
      { "row--gap-1": gap === "1" },
      { "row--gap-2": gap === "2" },
      { "row--gap-3": gap === "3" },
      { "row--gap-4": gap === "4" },
      { "row--gap-5": gap === "5" },
      { "row--gap-6": gap === "6" },
      { "row--gap-7": gap === "7" },
      { "row--gap-8": gap === "8" },
      { "row--gap-9": gap === "9" },
      { "row--gap-10": gap === "10" }
    )

    const StackChildrenTypes = [Col]

    const row = React.createElement(
      as,
      {
        ...props,
        className: `${classes} ${className}`,
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
